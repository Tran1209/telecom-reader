// Complete Academic Dataset for Paper 2 (IEEE Communications Magazine 2016)
const PAPER_2_DATA = {
  "id": "paper2",
  "journal_header": "IEEE COMMUNICATIONS MAGAZINE • JULY 2016 • PP. 154–160",
  "code": "CoAP_IoT",
  "title": "CoAP Congestion Control for the Internet of Things",
  "title_vi": "Điều khiển tắc nghẽn CoAP trong mạng lưới Vạn vật kết nối Internet (IoT)",
  "authors": "August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells",
  "affiliations": "i2CAT Foundation, Barcelona, Spain & Department of Telematics Engineering, Universitat Politècnica de Catalunya, Barcelona, Spain",
  "venue": "IEEE Communications Magazine, Volume 54, Issue 7, July 2016, Pages 154–160",
  "doi": "https://doi.org/10.1109/MCOM.2016.7514179",
  "summary_vi": "Bài báo kinh điển trên tạp chí IEEE Communications Magazine giới thiệu toàn diện giải thuật CoCoA (CoAP Simple Congestion Control/Advanced) chuẩn hóa bởi IETF CoRE WG. Bài báo phân tích cơ chế RTO thích ứng cho IoT (kết hợp RTO mạnh và RTO yếu), hệ số thoái lui khả biến VBF, cơ chế lão hóa thông tin, đồng thời kiểm nghiệm thực nghiệm trên 2 phần cứng thực tế: mạng di động GPRS và mạng cảm biến không dây đa chặng FlockLab (IEEE 802.15.4 / ContikiMAC RDC).",
  "index_terms": "CoAP, Congestion Control, Internet of Things, RTO, RTT, Variable Backoff Factor, GPRS, IEEE 802.15.4, TelosB, FlockLab",
  "page_count": 7,
  "page_images": [
    "assets/p2_page_1.png",
    "assets/p2_page_2.png",
    "assets/p2_page_3.png",
    "assets/p2_page_4.png",
    "assets/p2_page_5.png",
    "assets/p2_page_6.png",
    "assets/p2_page_7.png"
  ],
  "sections": [
    {
      "id": "p2_sec_abstract",
      "title": "Abstract & Scope",
      "title_vi": "Tóm tắt & Phạm vi nghiên cứu",
      "badge": "Abstract",
      "is_abstract": true,
      "paragraphs": [
        {
          "id": "p2_abs_1",
          "sentences": [
            {
              "en": "The Constrained Application Protocol (CoAP) is a lightweight RESTful application layer protocol devised for the Internet of Things (IoT).",
              "vi": "Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) là một giao thức tầng ứng dụng kiến trúc RESTful siêu nhẹ được phát triển chuyên biệt cho Mạng lưới Vạn vật kết nối Internet (IoT).",
              "terms": [
                "CoAP",
                "RESTful",
                "application layer",
                "IoT"
              ]
            },
            {
              "en": "Operating on top of UDP, CoAP must handle congestion control by itself.",
              "vi": "Do hoạt động trên nền giao thức truyền vận UDP, CoAP bắt buộc phải tự đảm đương việc kiểm soát tắc nghẽn (congestion control).",
              "terms": [
                "UDP",
                "congestion control"
              ]
            },
            {
              "en": "The core CoAP specification defines a basic congestion control mechanism, which is however not capable of adapting to network conditions.",
              "vi": "Bản đặc tả CoAP gốc chỉ định nghĩa một cơ chế điều khiển tắc nghẽn cơ bản, cơ chế này hoàn toàn không có khả năng thích ứng linh hoạt với các biến động của điều kiện mạng.",
              "terms": [
                "CoAP specification",
                "congestion control",
                "adapting"
              ]
            },
            {
              "en": "In this paper we present the CoAP Simple Congestion Control/Advanced (CoCoA), an advanced congestion control mechanism for CoAP being standardized by the Internet Engineering Task Force (IETF) CoRE working group.",
              "vi": "Trong bài báo này, chúng tôi giới thiệu cơ chế CoCoA (CoAP Simple Congestion Control/Advanced) – một giải pháp điều khiển tắc nghẽn nâng cao cho CoAP hiện đang được chuẩn hóa bởi Nhóm công tác CoRE thuộc tổ chức IETF.",
              "terms": [
                "CoCoA",
                "IETF",
                "CoRE working group"
              ]
            },
            {
              "en": "CoCoA introduces novel Round Trip Time (RTT) estimation techniques, together with a Variable Backoff Factor (VBF) and aging mechanisms in order to provide dynamic and controlled Retransmission Timeout (RTO) adaptation suitable for the peculiarities of IoT communications.",
              "vi": "CoCoA đưa vào các kỹ thuật ước lượng Thời gian Truyền khứ hồi (RTT) hoàn toàn mới, kết hợp cùng Hệ số Thoái lui Khả biến (Variable Backoff Factor - VBF) và các cơ chế lão hóa (aging) nhằm mang lại khả năng điều chỉnh Thời gian Chờ truyền lại (RTO) một cách linh động và có kiểm soát, phù hợp hoàn hảo với các đặc thù của truyền thông IoT.",
              "terms": [
                "RTT",
                "VBF",
                "Variable Backoff Factor",
                "aging",
                "RTO"
              ]
            },
            {
              "en": "Results show that, in contrast with the alternative methods considered, CoCoA consistently outperforms default CoAP congestion control mechanism in all evaluated scenarios.",
              "vi": "Kết quả chỉ ra rằng, trái ngược với các phương pháp thay thế khác, CoCoA vượt trội hoàn toàn so với cơ chế kiểm soát tắc nghẽn CoAP mặc định trong toàn bộ các kịch bản được đánh giá.",
              "terms": [
                "CoCoA",
                "default CoAP",
                "congestion control"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p2_sec_intro",
      "title": "I. INTRODUCTION",
      "title_vi": "I. GIỚI THIỆU BỐI CẢNH",
      "badge": "Section I",
      "paragraphs": [
        {
          "id": "p2_intro_1",
          "sentences": [
            {
              "en": "The quantity and diversity of devices that are interconnected in the Internet of Things (IoT) are constantly increasing, leading to a large variety of new and appealing application scenarios.",
              "vi": "Số lượng và sự đa dạng của các thiết bị kết nối trong mạng lưới Internet of Things (IoT) đang không ngừng gia tăng, mở ra vô số kịch bản ứng dụng mới mẻ và đầy hấp dẫn.",
              "terms": [
                "IoT",
                "devices"
              ]
            },
            {
              "en": "Typically, constrained devices, such as low-power wireless sensor nodes, are used for IoT communications with very limited processing and memory capacities, low data rates and relatively high bit error rate (BER).",
              "vi": "Thông thường, các thiết bị bị ràng buộc như nút mạng cảm biến không dây công suất thấp được sử dụng trong IoT với năng lực xử lý và bộ nhớ rất eo hẹp, tốc độ truyền dữ liệu thấp và tỷ lệ lỗi bit (BER) tương đối cao.",
              "terms": [
                "constrained devices",
                "wireless sensor nodes",
                "BER"
              ]
            },
            {
              "en": "The core CoAP specification offers a simple congestion control mechanism based on Retransmission Timeout (RTO) with Binary Exponential Backoff (BEB), which is however insensitive to network conditions.",
              "vi": "Bản đặc tả CoAP gốc chỉ cung cấp một cơ chế điều khiển tắc nghẽn đơn giản dựa trên thời gian chờ RTO kết hợp với thuật toán Thoái lui Hàm mũ Nhị phân (BEB), vốn hoàn toàn 'mù' và vô cảm trước các biến động thực tế của điều kiện mạng.",
              "terms": [
                "RTO",
                "Binary Exponential Backoff",
                "BEB"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p2_sec_coap_details",
      "title": "II. DEFAULT COAP CONGESTION CONTROL",
      "title_vi": "II. ĐIỀU KHIỂN TẮC NGHẼN TRONG COAP MẶC ĐỊNH",
      "badge": "Section II",
      "paragraphs": [
        {
          "id": "p2_cc_1",
          "sentences": [
            {
              "en": "CoAP defines four types of messages: confirmable (CON), non-confirmable (NON), reset (RST), and acknowledgement (ACK) messages.",
              "vi": "CoAP định nghĩa 4 kiểu bản tin: cần xác nhận (CON - Confirmable), không cần xác nhận (NON - Non-confirmable), thiết lập lại (RST - Reset), và báo nhận (ACK - Acknowledgement).",
              "terms": [
                "CON",
                "NON",
                "RST",
                "ACK"
              ]
            },
            {
              "en": "A restriction of outstanding interactions per destination to 1 (NSTART = 1) is enforced by default, operating under a stop-and-wait model.",
              "vi": "Quy định giới hạn số lượng tương tác đang chờ xử lý tới mỗi đích chỉ bằng 1 (NSTART = 1) được áp dụng mặc định, vận hành theo mô hình dừng-và-chờ (stop-and-wait).",
              "terms": [
                "NSTART",
                "stop-and-wait",
                "outstanding interactions"
              ]
            },
            {
              "en": "For the first transmission of a message, a RTO value is randomly picked from the interval [2, 3] s. If timeout expires, BEB doubles the RTO for up to 4 retransmissions before declaring failure.",
              "vi": "Ở lần truyền đầu tiên, RTO được chọn ngẫu nhiên trong khoảng [2, 3] giây. Nếu hết thời gian chờ, BEB nhân đôi RTO sau mỗi lần thử, tối đa 4 lần truyền lại trước khi tuyên bố thất bại.",
              "terms": [
                "RTO",
                "BEB",
                "retransmissions"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p2_sec_cocoa_details",
      "title": "III. COCOA ARCHITECTURE & ESTIMATION",
      "title_vi": "III. KIẾN TRÚC VÀ CƠ CHẾ ƯỚC LƯỢNG COCOA",
      "badge": "Section III",
      "paragraphs": [
        {
          "id": "p2_cocoa_1",
          "sentences": [
            {
              "en": "CoCoA combines adaptive RTO calculation, Variable Backoff Factor (VBF), and RTO aging.",
              "vi": "CoCoA kết hợp ba cơ chế: tính toán RTO thích ứng, Hệ số Thoái lui Khả biến (VBF), và cơ chế Lão hóa RTO.",
              "terms": [
                "adaptive RTO",
                "Variable Backoff Factor",
                "VBF",
                "RTO aging"
              ]
            },
            {
              "en": "CoCoA defines strong RTTs (completed on first attempt) and weak RTTs (requiring at most two retransmissions).",
              "vi": "CoCoA định nghĩa RTT mạnh (từ các giao dịch thành công ngay lần đầu không truyền lại) và RTT yếu (từ các giao dịch cần tối đa 2 lần truyền lại).",
              "terms": [
                "strong RTTs",
                "weak RTTs",
                "retransmissions"
              ]
            }
          ]
        }
      ],
      "equations": [
        {
          "num": "1",
          "code": "RTO_X = SRTT_X + K_X · RTTVAR_X  (K_strong = 4, K_weak = 1)"
        },
        {
          "num": "2",
          "code": "RTO_overall = α · RTO_X + (1 - α) · RTO_overall  (α_strong = 0.5, α_weak = 0.25)"
        }
      ]
    },
    {
      "id": "p2_sec_table_features",
      "title": "IV. FEATURES OF CONGESTION CONTROL MECHANISMS",
      "title_vi": "IV. BẢNG ĐẶC TÍNH SO SÁNH CÁC CƠ CHẾ ĐIỀU KHIỂN TẮC NGHẼN",
      "badge": "Section IV",
      "paragraphs": [
        {
          "id": "p2_feat_p1",
          "sentences": [
            {
              "en": "Table I provides an overview of the key features of the evaluated congestion control mechanisms for IoT.",
              "vi": "Bảng I (Table I) cung cấp một cái nhìn tổng quan về các đặc tính cốt lõi của các cơ chế điều khiển tắc nghẽn được đánh giá trong môi trường IoT.",
              "terms": [
                "Table I",
                "congestion control mechanisms",
                "IoT"
              ]
            }
          ]
        }
      ],
      "tables": [
        {
          "id": "p2_table1",
          "title": "TABLE I: OVERVIEW OF CONGESTION CONTROL MECHANISMS",
          "subtitle": "BẢNG SO SÁNH CÁC GIẢI THUẬT ĐIỀU KHIỂN TẮC NGHẼN COAP (IEEE COMM. MAG)",
          "img_src": "assets/p2_table1.png",
          "caption": "Table I. Overview of the features of the different congestion control mechanisms evaluated in the article.",
          "html": "<table class=\"academic-html-table\" style=\"width:100%; border-collapse:collapse; font-size:0.8rem; text-align:left; margin-top:0.5rem;\">\n<thead>\n  <tr style=\"border-top:2px solid var(--text-primary); border-bottom:1.5px solid var(--text-primary);\">\n    <th style=\"padding:6px 8px;\">Mechanism</th>\n    <th style=\"padding:6px 8px;\">RTO Initialization</th>\n    <th style=\"padding:6px 8px;\">Backoff Factor</th>\n    <th style=\"padding:6px 8px;\">RTO Aging</th>\n  </tr>\n</thead>\n<tbody>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:5px 8px; font-weight:700;\">Default CoAP</td><td style=\"padding:5px 8px;\">Random [2, 3] s</td><td style=\"padding:5px 8px;\">Fixed (x2)</td><td style=\"padding:5px 8px; color:var(--text-muted);\">None</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color); background:rgba(2,132,199,0.05);\"><td style=\"padding:5px 8px; font-weight:700; color:var(--primary);\">CoCoA</td><td style=\"padding:5px 8px;\">Strong & Weak SRTT</td><td style=\"padding:5px 8px; font-weight:600;\">VBF (1.5 / 2.0 / 3.0)</td><td style=\"padding:5px 8px;\">Yes (Halving towards 2s)</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:5px 8px; font-weight:700;\">CoCoA-S</td><td style=\"padding:5px 8px;\">Strong SRTT only</td><td style=\"padding:5px 8px;\">VBF</td><td style=\"padding:5px 8px;\">Yes</td></tr>\n  <tr style=\"border-bottom:2px solid var(--text-primary);\"><td style=\"padding:5px 8px; font-weight:700;\">Basic RTO</td><td style=\"padding:5px 8px;\">RFC 6298 TCP RTO</td><td style=\"padding:5px 8px;\">Fixed (x2)</td><td style=\"padding:5px 8px; color:var(--text-muted);\">None</td></tr>\n</tbody>\n</table>"
        }
      ]
    },
    {
      "id": "p2_sec_testbeds_results",
      "title": "V-VI. TESTBEDS & EXPERIMENTAL RESULTS",
      "title_vi": "V-VI. HỆ THỐNG THỰC NGHIỆM VÀ KẾT QUẢ PHẦN CỨNG",
      "badge": "Section V-VI",
      "paragraphs": [
        {
          "id": "p2_testbed_desc",
          "sentences": [
            {
              "en": "Experiments were performed on two real testbeds: (1) GPRS cellular modem testbed (Matrix MTX-65-ULP) with 15/40 kbit/s bandwidth; (2) FlockLab testbed with 30 TelosB motes running IEEE 802.15.4 and ContikiMAC with Radio Duty Cycling (RDC).",
              "vi": "Các thực nghiệm được tiến hành trên hai testbed phần cứng thật: (1) Testbed mạng di động GPRS (modem Matrix MTX-65-ULP) băng thông 15/40 kbit/s; (2) Testbed FlockLab gồm 30 nút TelosB chạy chuẩn IEEE 802.15.4 và ContikiMAC với cơ chế Chu kỳ Làm việc Vô tuyến (RDC).",
              "terms": [
                "GPRS",
                "FlockLab",
                "TelosB",
                "IEEE 802.15.4",
                "ContikiMAC",
                "RDC"
              ]
            },
            {
              "en": "In the GPRS testbed, CoCoA achieved the highest transaction throughput across all client counts (10 to 40 clients), outperforming default CoAP which failed to adjust to modem queue latency.",
              "vi": "Trên testbed GPRS, CoCoA đạt thông lượng giao dịch cao nhất trong mọi mức quy mô client (từ 10 đến 40 client), vượt trội so với CoAP mặc định vốn không thể thích ứng với độ trễ hàng đợi của modem.",
              "terms": [
                "GPRS",
                "throughput",
                "default CoAP",
                "latency"
              ]
            }
          ]
        }
      ],
      "figures": [
        {
          "id": "p2_fig1_2",
          "title": "Fig. 1-2, Throughput and Retransmission Ratio",
          "images": [
            {
              "src": "assets/p2_fig1.png",
              "caption": "Fig. 1. Average throughput with 95% confidence intervals achieved in GPRS and FlockLab setups."
            },
            {
              "src": "assets/p2_fig2.png",
              "caption": "Fig. 2. Average percentage of CoAP retransmissions observed in GPRS and FlockLab."
            }
          ]
        },
        {
          "id": "p2_fig3_4",
          "title": "Fig. 3-4, Settling Times and Fairness Evaluation",
          "images": [
            {
              "src": "assets/p2_fig3.png",
              "caption": "Fig. 3. Average settling time required by algorithms to adapt to changing network conditions."
            },
            {
              "src": "assets/p2_fig4.png",
              "caption": "Fig. 4. Jain's Fairness Index across multiple concurrent client nodes."
            }
          ]
        }
      ]
    },
    {
      "id": "p2_sec_conclusion",
      "title": "VII. CONCLUSION & FUTURE DIRECTIONS",
      "title_vi": "VII. KẾT LUẬN VÀ ĐỊNH HƯỚNG TƯƠNG LAI",
      "badge": "Section VII",
      "paragraphs": [
        {
          "id": "p2_conc_1",
          "sentences": [
            {
              "en": "In this article, we presented the main design features of CoCoA and evaluated its performance on two real testbeds.",
              "vi": "Trong bài báo này, chúng tôi đã trình bày các đặc tính thiết kế cốt lõi của CoCoA và đánh giá hiệu năng thực nghiệm của nó trên hai hệ thống phần cứng thật.",
              "terms": [
                "CoCoA",
                "testbeds"
              ]
            },
            {
              "en": "The experimental results confirmed that CoCoA outperforms default CoAP across all evaluated network conditions and traffic loads.",
              "vi": "Các kết quả thực nghiệm xác nhận CoCoA vượt trội hoàn toàn so với CoAP mặc định trên tất cả các điều kiện mạng và tải lưu lượng khảo sát.",
              "terms": [
                "CoCoA",
                "default CoAP",
                "traffic loads"
              ]
            }
          ]
        }
      ]
    }
  ]
};
