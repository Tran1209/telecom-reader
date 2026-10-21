/**
 * TELECOM READER - Application Logic
 * Interactive Reading, Hover Sentence Reveal, Word-level Inspector,
 * Audio Pronunciation & Telecommunications Glossary.
 */

// Application State
let currentPaperId = 'paper1';
let currentMode = 'hover'; // 'hover', 'dual', 'inline'
let currentTheme = localStorage.getItem('telecom_theme') || 'light';
let fontScale = 1; // 1 = 100%
let activeSentenceData = null;
let activeWordData = null;
let savedWords = JSON.parse(localStorage.getItem('telecom_saved_words') || '[]');

// DOM Elements
const mainContainer = document.getElementById('mainContainer');
const paperContentArea = document.getElementById('paperContentArea');
const tocContainer = document.getElementById('tocContainer');
const sentencePopover = document.getElementById('sentencePopover');
const popoverEnText = document.getElementById('popoverEnText');
const popoverViText = document.getElementById('popoverViText');
const sentenceDock = document.getElementById('sentenceDock');
const dockViText = document.getElementById('dockViText');
const dockEnText = document.getElementById('dockEnText');
const savedWordsCount = document.getElementById('savedWordsCount');

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  updateSavedWordsCount();
  switchPaper('paper1');
  setupGlobalEvents();
});

// Switch between Paper 1, Paper 2
function switchPaper(paperId) {
  currentPaperId = paperId;
  
  // Update Tab buttons
  document.getElementById('tabPaper1').classList.toggle('active', paperId === 'paper1');
  document.getElementById('tabPaper2').classList.toggle('active', paperId === 'paper2');
  document.getElementById('tabGlossary').classList.remove('active');
  document.getElementById('tabComparison').classList.remove('active');

  const paperData = paperId === 'paper1' ? PAPER_1_DATA : PAPER_2_DATA;
  
  renderTableOfContents(paperData);
  renderPaperContent(paperData);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set Translation Mode
function setTranslationMode(mode) {
  currentMode = mode;
  document.getElementById('modeHover').classList.toggle('active', mode === 'hover');
  document.getElementById('modeDual').classList.toggle('active', mode === 'dual');
  document.getElementById('modeInline').classList.toggle('active', mode === 'inline');

  if (mode === 'dual') {
    mainContainer.classList.add('side-by-side');
  } else {
    mainContainer.classList.remove('side-by-side');
  }

  const paperData = currentPaperId === 'paper1' ? PAPER_1_DATA : PAPER_2_DATA;
  renderPaperContent(paperData);
}

// Render Table of Contents
function renderTableOfContents(paper) {
  tocContainer.innerHTML = '';
  document.getElementById('sectionCountBadge').innerText = `${paper.sections.length} mục`;

  paper.sections.forEach((sec, idx) => {
    const li = document.createElement('li');
    li.className = 'toc-item' + (idx === 0 ? ' active' : '');
    li.innerHTML = `
      <a href="#${sec.id}" onclick="smoothScrollTo('${sec.id}', event)">
        ${sec.title}
      </a>
    `;
    tocContainer.appendChild(li);
  });
}

function smoothScrollTo(elementId, e) {
  if (e) e.preventDefault();
  const el = document.getElementById(elementId);
  if (el) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Update active toc class
    document.querySelectorAll('.toc-item').forEach(item => item.classList.remove('active'));
    if (e && e.currentTarget && e.currentTarget.parentElement) {
      e.currentTarget.parentElement.classList.add('active');
    }
  }
}

// Render Main Paper Content
function renderPaperContent(paper) {
  if (currentMode === 'dual') {
    renderDualColumn(paper);
    return;
  }

  let html = `
    <!-- Paper Hero Header -->
    <header class="paper-hero">
      <div class="paper-badge-row">
        <span class="category-badge">Kỹ Thuật Truyền Thông</span>
        <span class="category-badge" style="background-color: var(--accent-teal-light); color: var(--accent-teal);">Mạng IoT / LLN</span>
        <span class="venue-badge">📌 ${paper.venue}</span>
      </div>
      <h1 class="paper-title-en">${paper.title}</h1>
      <h2 class="paper-title-vi">🇻🇳 ${paper.title_vi}</h2>
      
      <div class="paper-meta-details">
        <div class="paper-authors">👤 <strong>Tác giả:</strong> ${paper.authors}</div>
        <div>🏛️ <strong>Cơ quan:</strong> ${paper.affiliations}</div>
        <div>🔗 <strong>DOI:</strong> <a href="${paper.doi}" target="_blank" style="color: var(--primary); text-decoration: none;">${paper.doi}</a></div>
      </div>

      <div class="paper-summary-card">
        <strong>💡 Tóm tắt chuyên ngành:</strong> ${paper.summary_vi}
      </div>
    </header>
  `;

  // Render each section
  paper.sections.forEach(sec => {
    html += `
      <section class="paper-section" id="${sec.id}">
        <div class="section-header">
          <div style="display: flex; align-items: baseline; flex-wrap: wrap;">
            <h3 class="section-title-en">${sec.title}</h3>
            <span class="section-title-vi">${sec.title_vi}</span>
          </div>
          ${sec.badge ? `<span class="badge-tag">${sec.badge}</span>` : ''}
        </div>
    `;

    sec.paragraphs.forEach(para => {
      html += `<p class="paper-paragraph" id="${para.id}">`;
      
      para.sentences.forEach((sObj, sIdx) => {
        const sentenceId = `${para.id}_s${sIdx}`;
        const tokenizedEn = tokenizeSentenceWords(sObj.en, sentenceId);
        
        html += `
          <span class="sentence-token" id="${sentenceId}"
                data-para-id="${para.id}"
                data-sentence-idx="${sIdx}"
                onmouseenter="handleSentenceHover('${sentenceId}', event)"
                onmouseleave="handleSentenceLeave('${sentenceId}')"
                onclick="handleSentenceClick('${sentenceId}', event)">
            ${tokenizedEn}
          </span>
        `;

        if (currentMode === 'inline') {
          html += `
            <span class="inline-vi-translation">
              🇻🇳 <strong>Dịch nghĩa:</strong> ${sObj.vi}
            </span>
          `;
        }
      });

      html += `</p>`;
    });

    html += `</section>`;
  });

  paperContentArea.innerHTML = html;
}

// Render Dual Column Mode (English on Left, Vietnamese on Right)
function renderDualColumn(paper) {
  let leftHtml = `
    <header class="paper-hero">
      <div class="category-badge" style="margin-bottom: 0.5rem;">English Original</div>
      <h1 class="paper-title-en" style="font-size: 1.4rem;">${paper.title}</h1>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">${paper.authors}</div>
    </header>
  `;

  let rightHtml = `
    <header class="paper-hero">
      <div class="category-badge" style="margin-bottom: 0.5rem; background: var(--accent-teal-light); color: var(--accent-teal);">Bản Dịch Tiếng Việt (Kỹ Thuật Truyền Thông)</div>
      <h1 class="paper-title-vi" style="font-size: 1.4rem; color: var(--primary);">${paper.title_vi}</h1>
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">${paper.summary_vi}</div>
    </header>
  `;

  paper.sections.forEach(sec => {
    leftHtml += `
      <section class="paper-section" id="${sec.id}_en">
        <div class="section-header">
          <h3 class="section-title-en">${sec.title}</h3>
        </div>
    `;

    rightHtml += `
      <section class="paper-section" id="${sec.id}_vi">
        <div class="section-header">
          <h3 class="section-title-en" style="color: var(--primary);">${sec.title_vi}</h3>
        </div>
    `;

    sec.paragraphs.forEach(para => {
      leftHtml += `<p class="paper-paragraph">`;
      rightHtml += `<p class="paper-paragraph">`;

      para.sentences.forEach((sObj, sIdx) => {
        const sentenceId = `${para.id}_s${sIdx}`;
        const tokenizedEn = tokenizeSentenceWords(sObj.en, sentenceId);

        leftHtml += `
          <span class="sentence-token" id="dual_en_${sentenceId}"
                onmouseenter="syncDualHover('${sentenceId}', true)"
                onmouseleave="syncDualHover('${sentenceId}', false)"
                onclick="handleSentenceClick('${sentenceId}', event)">
            ${tokenizedEn}
          </span>
        `;

        rightHtml += `
          <span class="sentence-token" id="dual_vi_${sentenceId}"
                style="color: var(--text-primary); font-weight: 500;"
                onmouseenter="syncDualHover('${sentenceId}', true)"
                onmouseleave="syncDualHover('${sentenceId}', false)">
            ${sObj.vi}&nbsp;
          </span>
        `;
      });

      leftHtml += `</p>`;
      rightHtml += `</p>`;
    });

    leftHtml += `</section>`;
    rightHtml += `</section>`;
  });

  paperContentArea.innerHTML = `
    <div class="dual-container">
      <div class="dual-column">${leftHtml}</div>
      <div class="dual-column" style="background: var(--bg-hover);">${rightHtml}</div>
    </div>
  `;
}

function syncDualHover(sentenceId, isHover) {
  const elEn = document.getElementById(`dual_en_${sentenceId}`);
  const elVi = document.getElementById(`dual_vi_${sentenceId}`);
  
  if (elEn) elEn.classList.toggle('active-hover', isHover);
  if (elVi) {
    elVi.classList.toggle('active-hover', isHover);
    if (isHover) {
      elVi.style.backgroundColor = 'var(--primary-light)';
      elVi.style.color = 'var(--primary)';
    } else {
      elVi.style.backgroundColor = '';
      elVi.style.color = 'var(--text-primary)';
    }
  }

  if (isHover) {
    const sData = findSentenceDataById(sentenceId);
    if (sData) {
      updateSentenceInspector(sData.en, sData.vi);
      updateSentenceDock(sData.en, sData.vi);
    }
  }
}

// Tokenize sentence into clickable words
function tokenizeSentenceWords(sentenceText, sentenceId) {
  // Regex matches words and preserved delimiters
  const tokens = sentenceText.split(/([a-zA-Z0-9_\-\+]+)/);
  
  return tokens.map(token => {
    // If it's a word
    if (/^[a-zA-Z0-9_\-\+]+$/.test(token)) {
      const cleanLower = token.toLowerCase();
      const isTerm = !!TELECOM_DICTIONARY[cleanLower];
      const termClass = isTerm ? 'word-token is-term' : 'word-token';
      
      return `<span class="${termClass}" data-word="${escapeHtml(token)}" onclick="handleWordClick('${escapeHtml(token)}', '${sentenceId}', event)">${escapeHtml(token)}</span>`;
    }
    // Delimiters (spaces, commas, punctuation)
    return escapeHtml(token);
  }).join('');
}

// Find Sentence Object by ID
function findSentenceDataById(sentenceId) {
  const paper = currentPaperId === 'paper1' ? PAPER_1_DATA : PAPER_2_DATA;
  for (const sec of paper.sections) {
    for (const para of sec.paragraphs) {
      for (let sIdx = 0; sIdx < para.sentences.length; sIdx++) {
        if (`${para.id}_s${sIdx}` === sentenceId) {
          return para.sentences[sIdx];
        }
      }
    }
  }
  return null;
}

// Handle Sentence Hover ("chạm vào mới hiện văn nghĩa")
function handleSentenceHover(sentenceId, event) {
  if (currentMode === 'inline') return;

  const sData = findSentenceDataById(sentenceId);
  if (!sData) return;

  activeSentenceData = sData;

  // Highlight active sentence element
  const el = document.getElementById(sentenceId);
  if (el) el.classList.add('active-hover');

  // Update Popover content
  popoverEnText.innerText = `"${sData.en}"`;
  popoverViText.innerText = sData.vi;

  // Position Popover near cursor
  positionPopover(event);
  sentencePopover.classList.add('visible');

  // Also update Right Sidebar & Bottom Dock
  updateSentenceInspector(sData.en, sData.vi);
  updateSentenceDock(sData.en, sData.vi);
}

function handleSentenceLeave(sentenceId) {
  const el = document.getElementById(sentenceId);
  if (el) el.classList.remove('active-hover');
  sentencePopover.classList.remove('visible');
}

function handleSentenceClick(sentenceId, event) {
  // If target was a word, word handler handled it
  if (event && event.target && event.target.classList.contains('word-token')) {
    return;
  }
  const sData = findSentenceDataById(sentenceId);
  if (sData) {
    updateSentenceInspector(sData.en, sData.vi);
    updateSentenceDock(sData.en, sData.vi);
    sentenceDock.classList.add('dock-open');
  }
}

// Position Floating Sentence Popover
function positionPopover(event) {
  const margin = 15;
  const popoverWidth = Math.min(480, window.innerWidth - 30);
  let x = event.clientX + 10;
  let y = event.clientY + 20;

  if (x + popoverWidth > window.innerWidth) {
    x = window.innerWidth - popoverWidth - margin;
  }
  if (x < margin) x = margin;

  if (y + 180 > window.innerHeight) {
    y = event.clientY - 160;
  }

  sentencePopover.style.left = `${x}px`;
  sentencePopover.style.top = `${y}px`;
  sentencePopover.style.maxWidth = `${popoverWidth}px`;
}

// Handle Word Click ("ấn 1 từ thì nó hiện nghĩa của 1 từ")
function handleWordClick(word, sentenceId, event) {
  if (event) {
    event.stopPropagation(); // Don't trigger sentence click
  }

  // Remove previous word active class
  document.querySelectorAll('.word-token.word-selected').forEach(el => el.classList.remove('word-selected'));
  if (event && event.target) {
    event.target.classList.add('word-selected');
  }

  const lookupResult = lookupDictionary(word);
  activeWordData = lookupResult;

  // Get sentence context if available
  const sData = findSentenceDataById(sentenceId);
  if (sData) {
    lookupResult.contextEn = sData.en;
    lookupResult.contextVi = sData.vi;
  }

  renderWordInspector(lookupResult);

  // Play audio automatically or indicate in inspector
  const inspectorCard = document.getElementById('wordInspectorCard');
  inspectorCard.classList.add('active-state');
  setTimeout(() => inspectorCard.classList.remove('active-state'), 600);
}

// Lemmatization and Dictionary Lookup
function lookupDictionary(rawWord) {
  const clean = rawWord.toLowerCase().trim().replace(/[^a-z0-9_\-\+]/g, '');
  
  // 1. Direct match
  if (TELECOM_DICTIONARY[clean]) {
    return TELECOM_DICTIONARY[clean];
  }

  // 2. Lemmatization candidates
  const candidates = [];
  
  // Plural -s, -es, -ies
  if (clean.endsWith('ies')) candidates.push(clean.slice(0, -3) + 'y');
  if (clean.endsWith('es')) candidates.push(clean.slice(0, -2));
  if (clean.endsWith('s')) candidates.push(clean.slice(0, -1));
  
  // Verb past -ed, -d
  if (clean.endsWith('ed')) {
    candidates.push(clean.slice(0, -2));
    candidates.push(clean.slice(0, -1)); // e.g. evaluated -> evaluate
  }

  // Gerund -ing
  if (clean.endsWith('ing')) {
    candidates.push(clean.slice(0, -3));
    candidates.push(clean.slice(0, -3) + 'e'); // e.g. pacing -> pace
  }

  // Adverb -ly
  if (clean.endsWith('ly')) candidates.push(clean.slice(0, -2));

  // Noun -tion, -tions, -ment
  if (clean.endsWith('tions')) candidates.push(clean.slice(0, -1));

  for (const cand of candidates) {
    if (TELECOM_DICTIONARY[cand]) {
      const match = TELECOM_DICTIONARY[cand];
      return {
        ...match,
        word: `${rawWord} (gốc từ: ${match.word})`
      };
    }
  }

  // Fallback dynamic entry for any arbitrary English word
  return {
    word: rawWord,
    ipa: `/${clean}/`,
    pos: "Từ vựng tiếng Anh học thuật",
    telecom_def: `Thuật ngữ trong ngữ cảnh bài báo Kỹ Thuật Truyền Thông: Được sử dụng để mô tả tiến trình truyền nhận và xử lý tín hiệu/gói tin.`,
    general_def: `Nghĩa tổng quát: Từ vựng chuyên môn dùng trong tài liệu khoa học và kỹ thuật.`,
    example: `Appears in context: "...${rawWord}..."`
  };
}

// Render Word in Inspector
function renderWordInspector(data) {
  document.getElementById('inspectWordName').innerText = data.word;
  document.getElementById('inspectWordIpa').innerText = data.ipa || '';
  document.getElementById('inspectWordPos').innerText = data.pos || 'Term';
  document.getElementById('inspectTelecomDef').innerText = data.telecom_def;
  document.getElementById('inspectGeneralDef').innerText = data.general_def;
  
  const exampleBox = document.getElementById('inspectExample');
  if (data.contextEn) {
    exampleBox.innerHTML = `<strong>Ngữ cảnh trong bài:</strong><br>"${escapeHtml(data.contextEn)}"<br><span style="color: var(--primary);">🇻🇳 ${escapeHtml(data.contextVi)}</span>`;
  } else {
    exampleBox.innerText = data.example || '';
  }
}

// Update Sentence Inspector & Dock
function updateSentenceInspector(en, vi) {
  document.getElementById('sidebarSentenceEn').innerText = `"${en}"`;
  document.getElementById('sidebarSentenceVi').innerText = vi;
}

function updateSentenceDock(en, vi) {
  dockViText.innerText = vi;
  dockEnText.innerText = en;
}

function closeDock() {
  sentenceDock.classList.remove('dock-open');
}

// Text-to-Speech audio pronunciation
function speakCurrentWord() {
  if (!activeWordData) return;
  const wordToSpeak = activeWordData.word.split(' ')[0].replace(/[^a-zA-Z]/g, '');
  if (!wordToSpeak) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(wordToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // clear academic speed
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt không hỗ trợ Web Speech API.");
  }
}

// Copy word to clipboard
function copyCurrentWord() {
  if (!activeWordData) return;
  const text = `${activeWordData.word} ${activeWordData.ipa || ''}\n- Kỹ thuật truyền thông: ${activeWordData.telecom_def}\n- Nghĩa chung: ${activeWordData.general_def}`;
  navigator.clipboard.writeText(text).then(() => {
    alert(`Đã copy từ "${activeWordData.word}" vào bộ nhớ tạm!`);
  });
}

// Save Word to Vocabulary List
function saveCurrentWord() {
  if (!activeWordData) return;
  const exists = savedWords.some(w => w.word.toLowerCase() === activeWordData.word.toLowerCase());
  if (exists) {
    alert(`Từ "${activeWordData.word}" đã có trong sổ tay từ vựng của bạn!`);
    return;
  }

  savedWords.push(activeWordData);
  localStorage.setItem('telecom_saved_words', JSON.stringify(savedWords));
  updateSavedWordsCount();
  alert(`Đã lưu "${activeWordData.word}" vào sổ tay từ vựng Kỹ Thuật Truyền Thông! ⭐`);
}

function updateSavedWordsCount() {
  savedWordsCount.innerText = savedWords.length;
}

// Saved Words Modal
function openSavedWordsModal() {
  const container = document.getElementById('savedWordsListContainer');
  if (savedWords.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">Chưa có từ vựng nào được lưu. Bấm vào bất kỳ từ tiếng Anh nào trong bài báo và chọn <strong>⭐ Lưu từ vựng</strong>!</div>`;
  } else {
    container.innerHTML = savedWords.map((item, idx) => `
      <div style="background: var(--bg-hover); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem;">
        <div style="flex: 1;">
          <div style="font-weight: 700; color: var(--text-primary); font-size: 1rem;">
            ${escapeHtml(item.word)} <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${item.ipa || ''}</span>
          </div>
          <div style="font-size: 0.825rem; color: var(--primary); font-weight: 600; margin-top: 0.25rem;">
            ⚡ ${escapeHtml(item.telecom_def)}
          </div>
          <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.15rem;">
            📚 ${escapeHtml(item.general_def)}
          </div>
        </div>
        <button class="control-btn" onclick="removeSavedWord(${idx})" title="Xóa từ này" style="color: var(--accent-rose);">🗑️</button>
      </div>
    `).join('');
  }

  document.getElementById('savedWordsModal').classList.add('modal-open');
}

function closeSavedWordsModal() {
  document.getElementById('savedWordsModal').classList.remove('modal-open');
}

function removeSavedWord(idx) {
  savedWords.splice(idx, 1);
  localStorage.setItem('telecom_saved_words', JSON.stringify(savedWords));
  updateSavedWordsCount();
  openSavedWordsModal();
}

function clearAllSavedWords() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ từ vựng đã lưu?")) {
    savedWords = [];
    localStorage.removeItem('telecom_saved_words');
    updateSavedWordsCount();
    openSavedWordsModal();
  }
}

// Quick Search across sections
function handleQuickSearch(query) {
  const q = query.trim().toLowerCase();
  const allSentences = document.querySelectorAll('.sentence-token');

  allSentences.forEach(el => {
    if (!q) {
      el.style.backgroundColor = '';
      return;
    }
    const text = el.innerText.toLowerCase();
    if (text.includes(q)) {
      el.style.backgroundColor = 'var(--word-highlight-bg)';
      el.style.color = '#000000';
    } else {
      el.style.backgroundColor = '';
      el.style.color = '';
    }
  });
}

// Show Glossary View (A-Z Terms)
function showGlossaryView() {
  document.getElementById('tabPaper1').classList.remove('active');
  document.getElementById('tabPaper2').classList.remove('active');
  document.getElementById('tabComparison').classList.remove('active');
  document.getElementById('tabGlossary').classList.add('active');

  const termsList = Object.keys(TELECOM_DICTIONARY).sort();

  let html = `
    <header class="paper-hero">
      <div class="category-badge">Bộ Thuật Ngữ Chuẩn</div>
      <h1 class="paper-title-en" style="font-size: 1.6rem;">A-Z Telecommunications & IoT Congestion Glossary</h1>
      <h2 class="paper-title-vi">Từ điển Thuật ngữ Kỹ Thuật Truyền Thông & Điều Khiển Tắc Nghẽn CoAP</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem;">
        Tổng hợp hơn 100 thuật ngữ chuyên sâu xuất hiện trong 2 bài báo pCoCoA (Ad Hoc Networks 2018) và CoCoA (IEEE Comms Mag 2016).
      </p>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem;">
  `;

  termsList.forEach(key => {
    const item = TELECOM_DICTIONARY[key];
    html += `
      <div class="sidebar-card" style="display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${item.word}</h4>
          <span class="badge-tag">${item.pos || 'Term'}</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${item.ipa || ''}</div>
        <div class="def-box telecom" style="padding: 0.5rem; font-size: 0.825rem;">
          <div class="def-label">⚡ Kỹ Thuật Truyền Thông:</div>
          <div>${item.telecom_def}</div>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary);">
          <strong>📚 Nghĩa chung:</strong> ${item.general_def}
        </div>
        <div class="example-box" style="font-size: 0.775rem;">
          "${item.example || ''}"
        </div>
      </div>
    `;
  });

  html += `</div>`;
  paperContentArea.innerHTML = html;
}

// Show Algorithm Comparison View
function showComparisonView() {
  document.getElementById('tabPaper1').classList.remove('active');
  document.getElementById('tabPaper2').classList.remove('active');
  document.getElementById('tabGlossary').classList.remove('active');
  document.getElementById('tabComparison').classList.add('active');
  if (document.getElementById('tabSimulator')) document.getElementById('tabSimulator').classList.remove('active');

  const html = `
    <header class="paper-hero">
      <div class="category-badge">Bảng So Sánh Kỹ Thuật</div>
      <h1 class="paper-title-en" style="font-size: 1.6rem;">Comparative Analysis of CoAP Congestion Control Protocols</h1>
      <h2 class="paper-title-vi">Bảng Đối Chiếu Các Giải Thuật Điều Khiển Tắc Nghẽn trong Mạng IoT</h2>
    </header>

    <div style="overflow-x: auto; margin-bottom: 2rem;">
      <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left;">
        <thead>
          <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
            <th style="padding: 0.75rem;">Giải thuật</th>
            <th style="padding: 0.75rem;">Phương pháp Thoái lui (Backoff)</th>
            <th style="padding: 0.75rem;">Bộ ước lượng RTT</th>
            <th style="padding: 0.75rem;">Lão hóa RTO</th>
            <th style="padding: 0.75rem;">Bộ nhớ RAM/Client</th>
            <th style="padding: 0.75rem;">Ưu điểm</th>
            <th style="padding: 0.75rem;">Nhược điểm chí tử</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 0.75rem; font-weight: 700; color: var(--primary);">CoAP mặc định (RFC 7252)</td>
            <td style="padding: 0.75rem;">BEB (x2 liên tục)</td>
            <td style="padding: 0.75rem;">Không đo RTT (Cố định [2, 3]s)</td>
            <td style="padding: 0.75rem;">Không</td>
            <td style="padding: 0.75rem;">2 Bytes</td>
            <td style="padding: 0.75rem;">Cực kỳ đơn giản, siêu nhẹ</td>
            <td style="padding: 0.75rem; color: var(--accent-rose);">Vô cảm với mạng; timeout non gây truyền lại giả tạo</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color); background: var(--bg-hover);">
            <td style="padding: 0.75rem; font-weight: 700; color: var(--primary);">CoCoA (IEEE Comms 2016)</td>
            <td style="padding: 0.75rem;">VBF (1.5x / 2x / 3x)</td>
            <td style="padding: 0.75rem;">RTO mạnh (K=4) & RTO yếu (K=1)</td>
            <td style="padding: 0.75rem;">Có (về 2s)</td>
            <td style="padding: 0.75rem;">29 Bytes</td>
            <td style="padding: 0.75rem;">Thông lượng cao, công bằng Jain tốt</td>
            <td style="padding: 0.75rem; color: var(--accent-rose);">RTO tiệm cận RTT; đóng băng weak estimator khi có bùng nổ</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-teal);">pCoCoA (Ad Hoc Networks 2018)</td>
            <td style="padding: 0.75rem;">VBF + Dithering</td>
            <td style="padding: 0.75rem;">Transmission Counter (TC) + mdev_max (Linux TCP)</td>
            <td style="padding: 0.75rem;">Có</td>
            <td style="padding: 0.75rem;">32 Bytes</td>
            <td style="padding: 0.75rem; color: var(--accent-teal); font-weight: 700;">Ánh xạ chính xác CON-ACK; triệt tiêu 100% truyền lại giả tạo; k=6 khi có spurious</td>
            <td style="padding: 0.75rem;">Cần bổ sung tùy chọn CoAP TC hoặc tách Message ID</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color); background: var(--bg-hover);">
            <td style="padding: 0.75rem; font-weight: 700;">CoCoA-E (Balandina 2013)</td>
            <td style="padding: 0.75rem;">VBF</td>
            <td style="padding: 0.75rem;">Eifel Timer (thay α, β bằng γ)</td>
            <td style="padding: 0.75rem;">Có</td>
            <td style="padding: 0.75rem;">29 Bytes</td>
            <td style="padding: 0.75rem;">Hội tụ nhanh trong điều kiện tĩnh</td>
            <td style="padding: 0.75rem; color: var(--accent-rose);">Bộ lọc gamma quá mức làm tê liệt phản ứng khi có lưu lượng bùng phát</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 0.75rem; font-weight: 700;">4-state-strong (Bhalerao 2016)</td>
            <td style="padding: 0.75rem;">VBF theo trạng thái</td>
            <td style="padding: 0.75rem;">4 bộ ước lượng riêng cho 4 mức phát lại</td>
            <td style="padding: 0.75rem;">Có</td>
            <td style="padding: 0.75rem;">36 Bytes</td>
            <td style="padding: 0.75rem;">Phân biệt mất gói vô tuyến và mất gói do tắc nghẽn</td>
            <td style="padding: 0.75rem; color: var(--accent-rose);">Độ biến thiên lớn giữa các lần chạy, phản ứng quá trễ khi tắc nghẽn</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="paper-summary-card">
      <strong>📌 Kết luận của môn Kỹ Thuật Truyền Thông:</strong> Trong môi trường mạng cảm biến vô tuyến tổn hao (LLN), việc ước lượng RTO không chỉ đơn thuần là theo dõi RTT mà phải giải quyết triệt để <em>vấn đề nhập nhằng RTT (RTT ambiguity)</em>. Thuật toán <strong>pCoCoA</strong> giải quyết điều này bằng cách sử dụng Tùy chọn Bộ đếm số lần truyền (Transmission Counter - TC), cho phép hệ thống phân biệt chính xác giữa gói tin đến muộn và gói tin bị thất lạc, qua đó loại bỏ các lần truyền lại giả tạo làm lãng phí năng lượng của các thiết bị IoT.
    </div>
  `;

  paperContentArea.innerHTML = html;
}

// Show Interactive RTO & Congestion Simulator
function showSimulatorView() {
  document.getElementById('tabPaper1').classList.remove('active');
  document.getElementById('tabPaper2').classList.remove('active');
  document.getElementById('tabGlossary').classList.remove('active');
  document.getElementById('tabComparison').classList.remove('active');
  document.getElementById('tabSimulator').classList.add('active');

  const html = `
    <header class="paper-hero">
      <div class="category-badge" style="background: var(--accent-teal-light); color: var(--accent-teal);">Bộ Công Cụ Tính Toán Thực Hành</div>
      <h1 class="paper-title-en" style="font-size: 1.6rem;">Interactive RTO & Congestion Control Simulator</h1>
      <h2 class="paper-title-vi">Mô Phỏng Tính Toán RTO & Hệ Số Thoái Lui (CoAP vs CoCoA+ vs pCoCoA)</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
        Thử nghiệm các giá trị RTT thực tế để hiểu rõ cách thức hoạt động của các bộ ước lượng (SRTT, RTTVAR, VBF, mdev_max) theo đúng công thức chuẩn trong bài báo.
      </p>
    </header>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
      
      <!-- Input Controls -->
      <div class="sidebar-card">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          ⚙️ Tham số đầu vào (Inputs)
        </h4>

        <div style="display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.85rem;">
          <div>
            <label style="display: block; font-weight: 600; margin-bottom: 0.25rem;">Mẫu đo RTT mới (R - Round Trip Time):</label>
            <input type="number" id="simR" value="600" step="10" min="50" max="10000" 
                   style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: var(--font-mono);"
                   oninput="runSimulation()">
            <span style="font-size: 0.75rem; color: var(--text-muted);">Đơn vị: mili-giây (ms)</span>
          </div>

          <div>
            <label style="display: block; font-weight: 600; margin-bottom: 0.25rem;">SRTT hiện tại (Smoothed RTT):</label>
            <input type="number" id="simSRTT" value="500" step="10" min="50" max="10000" 
                   style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: var(--font-mono);"
                   oninput="runSimulation()">
            <span style="font-size: 0.75rem; color: var(--text-muted);">Đơn vị: ms (khởi tạo RTT0)</span>
          </div>

          <div>
            <label style="display: block; font-weight: 600; margin-bottom: 0.25rem;">RTTVAR hiện tại (RTT Variance):</label>
            <input type="number" id="simRTTVAR" value="100" step="5" min="0" max="5000" 
                   style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: var(--font-mono);"
                   oninput="runSimulation()">
            <span style="font-size: 0.75rem; color: var(--text-muted);">Đơn vị: ms (khởi tạo RTTVAR0 = R/2)</span>
          </div>

          <div style="background: var(--bg-hover); padding: 0.75rem; border-radius: var(--radius-sm);">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-weight: 600;">
              <input type="checkbox" id="simSpurious" onchange="runSimulation()">
              <span>Phát hiện truyền lại giả tạo (Spurious Flag = True)</span>
            </label>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
              Trong pCoCoA: nếu TC nhận trong ACK &lt; TC lần phát hiện tại thì spurious = True.
            </div>
          </div>
        </div>
      </div>

      <!-- Simulation Results Comparison -->
      <div class="sidebar-card">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-teal); margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          📊 Kết quả tính toán so sánh
        </h4>

        <div id="simResultsOutput" style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.85rem;">
          <!-- Dynamically filled -->
        </div>
      </div>

    </div>
  `;

  paperContentArea.innerHTML = html;
  runSimulation();
}

function runSimulation() {
  const R = parseFloat(document.getElementById('simR')?.value) || 600;
  const prevSRTT = parseFloat(document.getElementById('simSRTT')?.value) || 500;
  const prevRTTVAR = parseFloat(document.getElementById('simRTTVAR')?.value) || 100;
  const isSpurious = document.getElementById('simSpurious')?.checked || false;

  // Parameters
  const alpha = 0.125; // 1/8
  const beta = 0.25;   // 1/4

  // 1. CoCoA+ update
  const newSRTT = (1 - alpha) * prevSRTT + alpha * R;
  const newRTTVAR = (1 - beta) * prevRTTVAR + beta * Math.abs(prevSRTT - R);
  const rtoStrong = newSRTT + 4 * newRTTVAR;
  const rtoWeak = newSRTT + 1 * newRTTVAR;
  
  // VBF
  const rtoInitSec = rtoStrong / 1000;
  let vbfFactor = 2;
  let vbfDesc = "2.0 (tương đương chuẩn BEB)";
  if (rtoInitSec < 1.0) {
    vbfFactor = 3;
    vbfDesc = "3.0 (RTO < 1s: dập tắt tắc nghẽn gấp)";
  } else if (rtoInitSec > 3.0) {
    vbfFactor = 1.5;
    vbfDesc = "1.5 (RTO > 3s: tránh trễ chờ đợi quá dài)";
  }

  // 2. pCoCoA update
  const mdev_max = Math.max(R / 2, 250);
  const k = isSpurious ? 6 : 4;
  const pSRTO = newSRTT + Math.max(k * newRTTVAR, mdev_max);

  const out = document.getElementById('simResultsOutput');
  if (!out) return;

  out.innerHTML = `
    <div style="background: var(--bg-hover); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--text-muted);">
      <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">1. CoAP Mặc định (RFC 7252):</div>
      <div>• RTO ban đầu: <strong>2000 ms - 3000 ms</strong> (chọn ngẫu nhiên không đo RTT)</div>
      <div>• Sau lần truyền lỗi 1 (BEB): <strong>${(2500 * 2).toFixed(0)} ms</strong> (nhân đôi cố định)</div>
    </div>

    <div style="background: var(--bg-hover); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">
      <div style="font-weight: 700; color: var(--primary); margin-bottom: 0.35rem;">2. CoCoA+ (Ad Hoc Networks):</div>
      <div>• SRTT mới = <code>${newSRTT.toFixed(1)} ms</code> | RTTVAR mới = <code>${newRTTVAR.toFixed(1)} ms</code></div>
      <div>• RTO mạnh (K=4) = <strong>${rtoStrong.toFixed(1)} ms</strong></div>
      <div>• RTO yếu (K=1) = <strong>${rtoWeak.toFixed(1)} ms</strong></div>
      <div>• Hệ số VBF = <strong>${vbfFactor}</strong> (${vbfDesc})</div>
      <div>• RTO sau thoái lui = <strong>${(rtoStrong * vbfFactor).toFixed(1)} ms</strong></div>
    </div>

    <div style="background: linear-gradient(135deg, rgba(13, 148, 136, 0.08), rgba(20, 184, 166, 0.04)); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-teal);">
      <div style="font-weight: 700; color: var(--accent-teal); margin-bottom: 0.35rem;">3. pCoCoA (Thuật toán chính xác đề xuất):</div>
      <div>• Chặn dưới mdev_max = <code>${mdev_max.toFixed(1)} ms</code> (theo Linux TCP)</div>
      <div>• Hệ số k = <strong>${k}</strong> ${isSpurious ? '<span class="badge-tag" style="background: var(--accent-rose-light); color: var(--accent-rose);">Spurious Detected! k=6</span>' : '(bình thường k=4)'}</div>
      <div>• <strong>pCoCoA SRTO = ${pSRTO.toFixed(1)} ms</strong></div>
      <div style="margin-top: 0.4rem; font-size: 0.78rem; color: var(--text-secondary);">
        ${pSRTO > rtoStrong ? '✨ <strong>Đánh giá:</strong> pCoCoA đã tự động mở rộng khoảng an toàn của RTO lớn hơn CoCoA+ (' + (pSRTO - rtoStrong).toFixed(1) + ' ms), giúp loại bỏ triệt để các đợt timeout non và truyền lại giả tạo.' : '✨ <strong>Đánh giá:</strong> pCoCoA bám sát RTT mạng nhưng vẫn được chặn dưới bởi mdev_max, bảo vệ mạng an toàn.'}
      </div>
    </div>
  `;
}


// Adjust Reading Font Size
function adjustFontSize(delta) {
  fontScale = Math.max(0.85, Math.min(1.35, fontScale + delta * 0.05));
  paperContentArea.style.fontSize = `${fontScale * 1.025}rem`;
}

// Toggle Theme: Light -> Dark -> Sepia
function toggleTheme() {
  const themes = ['light', 'dark', 'sepia'];
  const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
  currentTheme = themes[nextIdx];
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('telecom_theme', theme);
  const icon = theme === 'dark' ? '🌙' : (theme === 'sepia' ? '📜' : '☀️');
  document.getElementById('themeIcon').innerText = icon;
}

// Global Event Listeners
function setupGlobalEvents() {
  // Close Popover when scrolling
  window.addEventListener('scroll', () => {
    sentencePopover.classList.remove('visible');
  }, { passive: true });

  // Escape key closes modals and docks
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSavedWordsModal();
      closeDock();
      sentencePopover.classList.remove('visible');
    }
  });

  // Default inspection on load
  const firstTerm = TELECOM_DICTIONARY['congestion'];
  if (firstTerm) {
    activeWordData = firstTerm;
    renderWordInspector(firstTerm);
  }
}

// Utility: Escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}
