# 📡 Telecom Bilingual Reader - Kỹ Thuật Truyền Thông

Ứng dụng web đọc và dịch song ngữ chuyên ngành **Kỹ Thuật Truyền Thông** (Telecommunications & Computer Networks), hỗ trợ đọc tương tác 2 bài báo khoa học quốc tế về điều khiển tắc nghẽn giao thức CoAP cho mạng Internet of Things (IoT).

---

## 🎯 Tính năng tương tác chính

1. **Hiển thị bản gốc tiếng Anh chuẩn học thuật:**
   - Định dạng typography chuẩn Elsevier & IEEE Communications Magazine.
   - Hiển thị đầy đủ tiêu đề, tác giả, tóm tắt, các chương mục lý thuyết và kết quả thực nghiệm.

2. **Chạm / Rê chuột hiện văn nghĩa câu (Hover Sentence Reveal):**
   - **Yêu cầu người dùng:** *"chạm vào mới hiện văn nghĩa"*
   - Khi rê chuột (hoặc chạm trên màn hình cảm ứng) vào bất kỳ câu tiếng Anh nào, câu đó sẽ tự động sáng lên và một thẻ popover nổi bật (floating popover) lập tức xuất hiện mang đến **bản dịch tiếng Việt sát nghĩa Kỹ Thuật Truyền Thông**.
   - Hỗ trợ thêm 3 chế độ đọc linh hoạt:
     - 🎯 **Chạm / Rê chuột hiện nghĩa (Hover Popover)**
     - 📜 **Xem song ngữ song song (Side-by-Side Dual View)** với tính năng cuộn và tô sáng đồng bộ.
     - 📖 **Hiện nghĩa dưới dòng (Interlinear Inline)**

3. **Ấn 1 từ thì hiện nghĩa chuyên ngành của 1 từ (Click Word Inspector):**
   - **Yêu cầu người dùng:** *"ấn 1 từ thì nó hiện nghĩa của 1 từ"*
   - Bấm vào bất kỳ từ tiếng Anh nào trong văn bản:
     - Bảng điều khiển từ điển chuyên sâu ở thanh bên phải (Right Inspector) sẽ lập tức hiển thị.
     - **Phiên âm quốc tế chuẩn IPA** (ví dụ: `/kənˈdʒes.tʃən/`, `/ˈspjʊə.ri.əs/`).
     - **Nút phát âm giọng đọc tiếng Anh bản xứ 🔊** (sử dụng Web Speech API).
     - **Định nghĩa chuyên ngành Kỹ Thuật Truyền Thông ⚡** (giải thích bản chất vật lý / tầng giao thức).
     - **Nghĩa tiếng Anh thông dụng 📚**.
     - **Ngữ cảnh câu chứa từ trong bài báo & bản dịch song ngữ**.
     - **Nút ⭐ Lưu từ vựng** vào sổ tay ôn tập (lưu trữ cục bộ LocalStorage) & **Nút Copy 📋**.
     - Tích hợp **thuật toán tách gốc từ (Lemmatization/Stemmer)** tự động nhận diện dạng số nhiều (`-s`, `-es`), thì quá khứ (`-ed`), danh từ hóa (`-tion`, `-ment`), trạng từ (`-ly`).

4. **Nội dung 2 bài báo khoa học quốc tế được dịch toàn diện:**
   - **Bài 1:** *pCoCoA: A precise congestion control algorithm for CoAP* (Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi - **Ad Hoc Networks**, Elsevier, 2018).
   - **Bài 2:** *CoAP Congestion Control for the Internet of Things* (August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells - **IEEE Communications Magazine**, 2016).

5. **Các công cụ độc quyền dành cho sinh viên Kỹ Thuật Truyền Thông:**
   - 📖 **Từ điển Thuật ngữ A-Z:** Tra cứu nhanh hơn 100 thuật ngữ cốt lõi (CoAP, RTO, RTT, BEB, VBF, LLN, Karn's algorithm, Spurious retransmission, Carried load, Offered load, Bursty traffic, Greedy traffic, Radio Duty Cycling - RDC, Settling time, Jain's Fairness Index...).
   - ⚖️ **Bảng đối chiếu 5 giải thuật:** So sánh CoAP mặc định, CoCoA, pCoCoA, CoCoA-E, 4-state-strong.
   - 🧮 **Bộ mô phỏng tính toán RTO thực hành:** Nhập giá trị RTT mẫu để quan sát trực tiếp công thức tính $SRTT$, $RTTVAR$, hệ số $VBF$, chặn dưới $mdev_{max}$ của pCoCoA.
   - 🌓 **Chuyển đổi giao diện Sáng / Tối / Sepia** & Tăng giảm cỡ chữ `A-` / `A+`.

---

## 🚀 Cách mở và sử dụng

### Cách 1: Mở trực tiếp (Nhanh nhất)
- Nhấp đúp chuột vào file **`open_reader.bat`** hoặc mở trực tiếp file **`index.html`** bằng trình duyệt bất kỳ (Chrome, Edge, Firefox, Cốc Cốc...).
- Đường dẫn file:
  ```
  C:\Users\nam\.gemini\antigravity\scratch\telecom-reader\index.html
  ```

### Cách 2: Chạy Server Python cục bộ
Mở cửa sổ PowerShell hoặc Terminal tại thư mục này và gõ:
```powershell
python start_server.py
```
Trình duyệt sẽ tự động mở địa chỉ: `http://localhost:8080/index.html`.

---

## 📂 Cấu trúc thư mục mã nguồn

```
telecom-reader/
│
├── index.html            # Giao diện chính của ứng dụng
├── style.css             # Thiết kế giao diện hiện đại, chế độ sáng/tối/sepia, responsive
├── app.js                # Logic tương tác: hover câu, tra từ, phát âm, tính toán simulator
├── data_paper1.js        # Dữ liệu nội dung & bản dịch chuyên ngành Bài báo 1 (pCoCoA)
├── data_paper2.js        # Dữ liệu nội dung & bản dịch chuyên ngành Bài báo 2 (CoCoA IoT)
├── dictionary.js         # Từ điển chuyên ngành Viễn thông & bộ giải mã hình thái từ vựng
├── start_server.py       # Script khởi chạy web server cục bộ
├── open_reader.bat       # Phím tắt nhấp đúp mở ngay ứng dụng
└── README.md             # Tài liệu hướng dẫn sử dụng
```
