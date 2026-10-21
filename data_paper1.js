// Complete Academic Dataset for Paper 1 (Ad Hoc Networks 2018)
const PAPER_1_DATA = {
  "id": "paper1",
  "journal_header": "AD HOC NETWORKS • ELSEVIER • VOLUME 80, 2018, PP. 116–129",
  "code": "pCoCoA",
  "title": "pCoCoA: A precise congestion control algorithm for CoAP",
  "title_vi": "pCoCoA: Thuật toán điều khiển tắc nghẽn chính xác cho giao thức CoAP",
  "authors": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi",
  "affiliations": "Department of Information Engineering, University of Pisa, Italy & Institute of Informatics and Telematics (IIT)-CNR, Pisa, Italy",
  "venue": "Ad Hoc Networks (Elsevier), Volume 80, 2018, Pages 116–129, ISSN 1570-8705",
  "doi": "https://doi.org/10.1016/j.adhoc.2018.06.015",
  "summary_vi": "Bài báo nghiên cứu chuyên sâu về giao thức điều khiển tắc nghẽn CoCoA+ trong mạng IoT (LLN), vạch rõ các điểm yếu chí tử (RTO tiệm cận RTT, đỉnh nhọn RTO giả tạo, bộ ước lượng yếu không phản ứng kịp) và đề xuất thuật toán mới pCoCoA sử dụng tùy chọn bộ đếm Transmission Counter (TC) cùng bộ ước lượng mdev_max theo Linux TCP giúp triệt tiêu truyền lại giả tạo (spurious retransmissions).",
  "index_terms": "CoAP, CoCoA, CoCoA+, Congestion Control, IoT, Low Power and Lossy Networks (LLN), RTO estimation, Round-Trip Time",
  "page_count": 13,
  "page_images": [
    "assets/p1_page_1.png",
    "assets/p1_page_2.png",
    "assets/p1_page_3.png",
    "assets/p1_page_4.png",
    "assets/p1_page_5.png",
    "assets/p1_page_6.png",
    "assets/p1_page_7.png",
    "assets/p1_page_8.png",
    "assets/p1_page_9.png",
    "assets/p1_page_10.png",
    "assets/p1_page_11.png",
    "assets/p1_page_12.png",
    "assets/p1_page_13.png"
  ],
  "sections": [
    {
      "id": "p1_sec_abstract",
      "title": "Abstract & Index Terms",
      "title_vi": "Tóm tắt & Từ khóa chỉ mục",
      "badge": "Abstract",
      "is_abstract": true,
      "paragraphs": [
        {
          "id": "p1_abs_1",
          "sentences": [
            {
              "en": "The Constrained Application Protocol (CoAP) is an IETF standard application protocol for the future Internet of Things (IoT).",
              "vi": "Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) là một giao thức tầng ứng dụng tiêu chuẩn của IETF dành cho mạng lưới Vạn vật kết nối Internet (IoT) trong tương lai.",
              "terms": [
                "CoAP",
                "IETF",
                "IoT",
                "application protocol"
              ]
            },
            {
              "en": "Since IoT devices are often interconnected by networks characterized by high packet error rates and low throughput, congestion control will be crucial to ensure proper and timed communication in these networks.",
              "vi": "Do các thiết bị IoT thường được liên kết thông qua các mạng có đặc tính tỷ lệ lỗi gói cao (high packet error rates) và thông lượng thấp (low throughput), việc điều khiển tắc nghẽn (congestion control) là yếu tố sống còn nhằm đảm bảo việc truyền thông diễn ra chính xác và kịp thời.",
              "terms": [
                "packet error rates",
                "throughput",
                "congestion control"
              ]
            },
            {
              "en": "Therefore, CoCoA+, an advanced congestion control algorithm for CoAP, is currently being specified by the IETF.",
              "vi": "Chính vì vậy, CoCoA+ – một thuật toán điều khiển tắc nghẽn nâng cao cho CoAP – hiện đang được IETF đặc tả và chuẩn hóa.",
              "terms": [
                "CoCoA+",
                "IETF"
              ]
            },
            {
              "en": "In this work, we present a critical analysis of CoCoA+ performance and highlight some of its shortcomings and pitfalls.",
              "vi": "Trong công trình này, chúng tôi trình bày một phân tích phản biện sâu sắc về hiệu năng của CoCoA+ và vạch rõ những thiếu sót cùng các cạm bẫy kỹ thuật của nó.",
              "terms": [
                "performance",
                "shortcomings",
                "pitfalls"
              ]
            },
            {
              "en": "Two different scenarios are considered: one with an increasing traffic load due to an increasing number of CoAP requests, and another with an interfering traffic concurrently transmitted in the network characterized by a bursty pattern.",
              "vi": "Hai kịch bản khác nhau được khảo sát: một kịch bản có tải lưu lượng tăng dần do số lượng yêu cầu CoAP tăng lên, và một kịch bản khác có lưu lượng gây nhiễu được truyền đồng thời trong mạng với đặc trưng dạng bùng nổ (bursty pattern).",
              "terms": [
                "traffic load",
                "interfering traffic",
                "bursty pattern"
              ]
            },
            {
              "en": "In the former scenario, we show how CoCoA+ may be characterized by many spurious retransmissions at some offered loads close to congestion.",
              "vi": "Ở kịch bản đầu tiên, chúng tôi chứng minh CoCoA+ phát sinh rất nhiều lần truyền lại giả tạo (spurious retransmissions) tại một số mức tải cung cấp cận kề ngưỡng tắc nghẽn.",
              "terms": [
                "spurious retransmissions",
                "offered loads",
                "congestion"
              ]
            },
            {
              "en": "In the latter, we show instead how the weak estimator is not particularly effective in adapting to changing traffic loads.",
              "vi": "Ở kịch bản thứ hai, chúng tôi chỉ ra rằng bộ ước lượng yếu (weak estimator) hoàn toàn không đạt hiệu quả trong việc thích ứng với các mức tải biến đổi.",
              "terms": [
                "weak estimator",
                "traffic loads"
              ]
            },
            {
              "en": "In order to overcome such limitations, a number of modifications to CoCoA+ are proposed.",
              "vi": "Để khắc phục triệt để các hạn chế đó, một loạt sửa đổi cải tiến cho CoCoA+ đã được đề xuất.",
              "terms": [
                "modifications",
                "limitations"
              ]
            },
            {
              "en": "The resulting solution, named precise Congestion Control (pCoCoA), is shown to reduce the number of retransmissions, while guaranteeing throughputs and delays comparable to those of CoAP and CoCoA+.",
              "vi": "Giải pháp kết quả mang tên Điều khiển Tắc nghẽn Chính xác (pCoCoA) được chứng minh là làm giảm đáng kể số lần truyền lại, trong khi vẫn đảm bảo thông lượng và độ trễ tương đương với CoAP và CoCoA+.",
              "terms": [
                "pCoCoA",
                "retransmissions",
                "throughput",
                "delay"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_intro",
      "title": "I. INTRODUCTION",
      "title_vi": "I. GIỚI THIỆU TỔNG QUAN",
      "badge": "Section I",
      "paragraphs": [
        {
          "id": "p1_intro_1",
          "sentences": [
            {
              "en": "The Internet of Things (IoT) is getting momentum both in academia, as a very active research topic, and in industry, with smart objects that are meant to thoroughly affect our lives.",
              "vi": "Mạng lưới Vạn vật kết nối Internet (IoT) đang tạo được sức bật mạnh mẽ cả trong giới học thuật lẫn công nghiệp, với các vật thể thông minh được kỳ vọng sẽ thay đổi sâu sắc cuộc sống của chúng ta.",
              "terms": [
                "IoT",
                "smart objects"
              ]
            },
            {
              "en": "In this context, the IETF is specifying standard protocols to integrate IoT smart objects into the Internet, with the IPv6 over Low power Wireless Personal Area Networks (6LoWPAN) adaptation layer and the Constrained Application Protocol (CoAP).",
              "vi": "Trong bối cảnh này, IETF đang đặc tả các giao thức tiêu chuẩn để tích hợp các vật thể thông minh IoT vào mạng Internet, nổi bật là tầng thích ứng IPv6 qua Mạng cá nhân không dây công suất thấp (6LoWPAN) và Giao thức Ứng dụng Bị ràng buộc (CoAP).",
              "terms": [
                "6LoWPAN",
                "CoAP",
                "adaptation layer",
                "smart objects"
              ]
            },
            {
              "en": "Specifically, CoAP has been designed as a specialized web transfer protocol for use with constrained nodes and constrained networks.",
              "vi": "Cụ thể, CoAP được thiết kế như một giao thức truyền tải web chuyên biệt dùng cho các nút mạng bị ràng buộc tài nguyên và các mạng có dung lượng eo hẹp.",
              "terms": [
                "web transfer protocol",
                "constrained nodes",
                "constrained networks"
              ]
            }
          ]
        },
        {
          "id": "p1_intro_2",
          "sentences": [
            {
              "en": "As constrained devices typically operate using low power, low-bandwidth, and lossy communication technologies (e.g., IEEE 802.15.4), CoAP runs on top of UDP.",
              "vi": "Do các thiết bị bị ràng buộc thường hoạt động bằng các công nghệ truyền thông công suất thấp, băng thông hẹp và nhiều tổn thất (ví dụ chuẩn IEEE 802.15.4), CoAP chạy trên nền giao thức UDP.",
              "terms": [
                "lossy",
                "IEEE 802.15.4",
                "UDP"
              ]
            },
            {
              "en": "For this reason, CoAP implements optional reliable data delivery through retransmissions and regulates the amount of data transmitted through a simple congestion avoidance mechanism.",
              "vi": "Vì lý do đó, CoAP tự cài đặt khả năng phân phối dữ liệu tin cậy tùy chọn thông qua cơ chế truyền lại và điều tiết lượng dữ liệu phát đi bằng một cơ chế tránh tắc nghẽn thô sơ.",
              "terms": [
                "retransmissions",
                "congestion avoidance"
              ]
            },
            {
              "en": "The definition of the latter, however, is not trivial: the shared nature of the wireless medium results in collisions of transmissions, and the limited buffer size of IoT devices often produces buffer overflows.",
              "vi": "Tuy nhiên, việc định nghĩa cơ chế này không hề đơn giản: bản chất môi trường vô tuyến dùng chung gây ra va chạm xung đột gói (collisions), và dung lượng bộ đệm eo hẹp của thiết bị IoT thường xuyên gây ra hiện tượng tràn bộ đệm (buffer overflows).",
              "terms": [
                "wireless medium",
                "collisions",
                "buffer overflows"
              ]
            },
            {
              "en": "Both phenomena can cause frequent packet losses that lead to further message retransmissions, which eventually lead to congestion.",
              "vi": "Cả hai hiện tượng trên đều gây mất gói liên tục, kéo theo các đợt phát lại bản tin tiếp theo và rốt cuộc đẩy toàn mạng vào tình trạng tắc nghẽn nghiêm trọng.",
              "terms": [
                "packet losses",
                "retransmissions",
                "congestion"
              ]
            }
          ]
        },
        {
          "id": "p1_intro_3",
          "sentences": [
            {
              "en": "Since CoAP defines only a basic congestion control mechanism, a new advanced congestion control have been proposed recently in [2], and further extended in [3].",
              "vi": "Bởi vì CoAP gốc chỉ định nghĩa một cơ chế điều khiển tắc nghẽn cơ bản, một giải thuật nâng cao mới đã được đề xuất trong [2] và tiếp tục mở rộng trong [3].",
              "terms": [
                "congestion control",
                "CoAP"
              ]
            },
            {
              "en": "Such algorithm, called CoCoA, is currently under standardization within the CoRE Working Group [8].",
              "vi": "Thuật toán này mang tên CoCoA (CoAP Simple Congestion Control/Advanced), hiện đang trong tiến trình chuẩn hóa tại Nhóm công tác CoRE [8].",
              "terms": [
                "CoCoA",
                "CoRE Working Group"
              ]
            },
            {
              "en": "CoCoA exploits the measured round-trip time (RTT) between the client and the server to adjust the retransmission timeout and therefore avoid too frequent retransmissions.",
              "vi": "CoCoA tận dụng thời gian truyền khứ hồi (RTT) đo được giữa client và server để điều chỉnh thời gian chờ truyền lại (RTO), từ đó tránh được việc phát lại quá dày đặc.",
              "terms": [
                "RTT",
                "round-trip time",
                "RTO",
                "retransmission timeout"
              ]
            },
            {
              "en": "CoCoA has been originally evaluated against CoAP in [2] and [3], showing that it can improve the performance in terms of throughput, packet delivery ratio, and average delays.",
              "vi": "CoCoA ban đầu đã được đánh giá đối chứng với CoAP trong [2] và [3], chứng tỏ khả năng cải thiện rõ rệt về thông lượng, tỷ lệ phân phối gói tin (PDR) và độ trễ trung bình.",
              "terms": [
                "throughput",
                "packet delivery ratio",
                "delays"
              ]
            }
          ]
        },
        {
          "id": "p1_intro_4",
          "sentences": [
            {
              "en": "In this work, we present an exhaustive performance evaluation of the CoCoA congestion control algorithm.",
              "vi": "Trong công trình này, chúng tôi trình bày một đánh giá hiệu năng toàn diện và sâu sắc về thuật toán điều khiển tắc nghẽn CoCoA.",
              "terms": [
                "performance evaluation",
                "CoCoA"
              ]
            },
            {
              "en": "First, we present an evaluation of the algorithm considering two different scenarios: the first one with only CoAP traffic, and the second one in which CoAP traffic competes with interfering greedy traffic that is transmitted without rate control.",
              "vi": "Đầu tiên, chúng tôi khảo sát thuật toán trong hai kịch bản: kịch bản thứ nhất chỉ có lưu lượng CoAP, và kịch bản thứ hai lưu lượng CoAP phải cạnh tranh với lưu lượng gây nhiễu tham lam (greedy traffic) phát tự do không kiểm soát tốc độ.",
              "terms": [
                "CoAP traffic",
                "greedy traffic",
                "rate control"
              ]
            },
            {
              "en": "The resulting algorithm, named pCoCoA, is evaluated against CoAP, CoCoA+ and two more recent algorithms: 4-state-strong [7] and CoCoA-E [14].",
              "vi": "Thuật toán kết quả mang tên pCoCoA được đánh giá so sánh với CoAP, CoCoA+ và hai thuật toán gần đây: 4-state-strong [7] và CoCoA-E [14].",
              "terms": [
                "pCoCoA",
                "4-state-strong",
                "CoCoA-E"
              ]
            },
            {
              "en": "Results demonstrated that pCoCoA effectively mitigates the issues of the original algorithm, reducing the overall number of retransmissions while keeping throughputs and delays comparable to those obtained with CoAP, CoCoA, CoCoA-E and 4-state-strong.",
              "vi": "Kết quả chứng minh pCoCoA khắc phục hiệu quả các điểm yếu của thuật toán gốc, cắt giảm mạnh mẽ tổng số lần truyền lại trong khi vẫn duy trì thông lượng và độ trễ tương đương với CoAP, CoCoA, CoCoA-E và 4-state-strong.",
              "terms": [
                "retransmissions",
                "throughputs",
                "delays"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_cocoa_plus",
      "title": "II. COCOA+ CONGESTION CONTROL",
      "title_vi": "II. THUẬT TOÁN ĐIỀU KHIỂN TẮC NGHẼN COCOA+",
      "badge": "Section II",
      "paragraphs": [
        {
          "id": "p1_cocoa_p1",
          "sentences": [
            {
              "en": "The Simple Congestion Control/Advanced, also known as CoCoA, is an alternative congestion control algorithm for CoAP originally proposed in [2] and now currently under standardization within the activities of the CoRE Working Group [8].",
              "vi": "Giải thuật Điều khiển Tắc nghẽn Đơn giản/Nâng cao (CoCoA) là một thuật toán điều khiển tắc nghẽn thay thế cho CoAP, ban đầu được đề xuất trong [2] và hiện đang được IETF CoRE WG chuẩn hóa [8].",
              "terms": [
                "CoCoA",
                "CoAP",
                "CoRE Working Group"
              ]
            },
            {
              "en": "The algorithm is composed of the following three main functions: a policy to calculate the retransmission timeout (RTO), the back-off policy to set the RTO for retransmissions, and an ageing policy for the status information.",
              "vi": "Thuật toán được cấu thành từ ba cơ chế then chốt: chính sách tính toán RTO, chính sách thoái lui (back-off) cho các lần truyền lại, và chính sách lão hóa (ageing) cho thông tin trạng thái mạng.",
              "terms": [
                "CoCoA+",
                "RTO",
                "back-off policy",
                "ageing policy"
              ]
            }
          ]
        },
        {
          "id": "p1_cocoa_rto_sub",
          "title": "A. RTO calculation",
          "sentences": [
            {
              "en": "According to Karn's algorithm [9], the RTT measurements should be considered only when the message was correctly delivered without retransmissions.",
              "vi": "Theo giải thuật Karn [9], các phép đo RTT chỉ được phép chấp nhận khi bản tin được phân phối thành công ngay lần đầu mà không cần truyền lại.",
              "terms": [
                "Karn's algorithm",
                "retransmissions"
              ]
            },
            {
              "en": "In the context of lossy networks, however, many transmissions are expected to experience retransmissions, thus reducing the probability of obtaining valid RTT measurements.",
              "vi": "Tuy nhiên, trong bối cảnh mạng tổn hao (lossy networks), việc truyền lại diễn ra rất thường xuyên, do đó làm giảm xác suất thu được các mẫu đo RTT hợp lệ theo chuẩn Karn.",
              "terms": [
                "lossy networks",
                "RTT measurements"
              ]
            },
            {
              "en": "For this reason, CoCoA+ considers also transactions that experienced retransmissions to obtain a more accurate RTT estimation.",
              "vi": "Vì lý do đó, CoCoA+ chấp nhận cả những giao dịch có truyền lại để thu được ước lượng RTT đầy đủ và cập nhật hơn.",
              "terms": [
                "transactions",
                "RTT estimation"
              ]
            },
            {
              "en": "Specifically, two RTO values are calculated: a strong RTO, estimated using RTTs samples from transactions that did not required any retransmission, and a weak RTO, estimated using RTT values of transactions that required no more than two transmissions.",
              "vi": "Cụ thể, hai giá trị RTO được tính toán song song: RTO mạnh (strong RTO) – ước lượng từ các mẫu RTT của giao dịch không phải truyền lại; và RTO yếu (weak RTO) – ước lượng từ RTT của giao dịch cần tối đa hai lần truyền lại.",
              "terms": [
                "strong RTO",
                "weak RTO",
                "retransmissions"
              ]
            }
          ]
        },
        {
          "id": "p1_cocoa_backoff_aging",
          "title": "B-C. Backoff Policy & Information Aging",
          "sentences": [
            {
              "en": "CoCoA+ computes the new RTO value for retransmissions according to a Variable Backoff Factor (VBF) that depends on the initial RTO value RTOinit: RTOnew = RTOprevious * VBF(RTOinit).",
              "vi": "CoCoA+ tính toán giá trị RTO mới cho các lần truyền lại theo Hệ số Thoái lui Khả biến VBF phụ thuộc vào RTO ban đầu RTOinit: RTOnew = RTOprevious * VBF(RTOinit).",
              "terms": [
                "VBF",
                "Variable Backoff Factor",
                "RTOinit"
              ]
            },
            {
              "en": "The VBF factor is set according to RTOinit to avoid frequent retransmissions in a short time when the RTO value is low, and to avoid long delays when RTO is large.",
              "vi": "Hệ số VBF được điều chỉnh theo RTOinit nhằm tránh truyền lại quá dồn dập khi RTO nhỏ, đồng thời tránh trễ chờ đợi quá dài khi RTO lớn.",
              "terms": [
                "RTOinit",
                "VBF"
              ]
            },
            {
              "en": "Information aging is applied when RTO updates are not received for a certain time: if RTOoverall is larger than 2s and idle for > 30s, RTOoverall = (2 + RTOoverall) / 2.",
              "vi": "Cơ chế lão hóa thông tin được áp dụng khi không nhận được mẫu RTT mới sau một thời gian: nếu RTOoverall > 2s và bị 'treo' quá 30s, RTOoverall được kéo lùi dần theo công thức (2 + RTOoverall) / 2.",
              "terms": [
                "Information aging",
                "RTOoverall"
              ]
            },
            {
              "en": "If RTOoverall is less than 1s and idle for 16 times its actual value, it is reset back to 1s.",
              "vi": "Nếu RTOoverall nhỏ hơn 1s và không được cập nhật trong khoảng thời gian gấp 16 lần giá trị thực tế của nó, RTOoverall sẽ được đặt lại về 1s.",
              "terms": [
                "RTOoverall",
                "reset"
              ]
            }
          ]
        }
      ],
      "equations": [
        {
          "num": "1",
          "code": "RTT_x ← R,  RTTVAR_x ← R / 2"
        },
        {
          "num": "2",
          "code": "RTT_x = (1 - α) RTT_x + α R"
        },
        {
          "num": "3",
          "code": "RTTVAR_x = (1 - β) RTTVAR_x + β |RTT_x - R|"
        },
        {
          "num": "4",
          "code": "RTO_x = RTT_x + K_x · RTTVAR_x"
        },
        {
          "num": "5",
          "code": "RTO_overall = λ_x · RTO_x + (1 - λ_x) RTO_overall"
        },
        {
          "num": "6",
          "code": "RTO_new = RTO_previous · VBF(RTO_init)"
        },
        {
          "num": "7",
          "code": "RTO_overall = (2 + RTO_overall) / 2"
        }
      ],
      "tables": [
        {
          "id": "p1_table1",
          "title": "TABLE I: CONGESTION CONTROL ALGORITHMS",
          "subtitle": "BẢNG SO SÁNH CÁC THUẬT TOÁN ĐIỀU KHIỂN TẮC NGHẼN CHO COAP",
          "img_src": "assets/p1_table1.png",
          "caption": "Table I. Summary of congestion control algorithms proposed in literature for CoAP: CoAP, CoCoA, CoCoA-S, CoCoA-E, 4-state-strong.",
          "html": "<table class=\"academic-html-table\" style=\"width:100%; border-collapse:collapse; font-size:0.8rem; text-align:left; margin-top:0.5rem;\">\n<thead>\n  <tr style=\"border-top:2px solid var(--text-primary); border-bottom:1.5px solid var(--text-primary);\">\n    <th style=\"padding:6px 8px;\">Name</th>\n    <th style=\"padding:6px 8px;\">Backoff Method</th>\n    <th style=\"padding:6px 8px;\">RTT Estimators</th>\n    <th style=\"padding:6px 8px;\">RTO aging</th>\n    <th style=\"padding:6px 8px;\">Derived from</th>\n  </tr>\n</thead>\n<tbody>\n  <tr style=\"border-bottom:1px solid var(--border-color);\">\n    <td style=\"padding:5px 8px; font-weight:700;\">CoAP</td>\n    <td style=\"padding:5px 8px;\">BBF (BEB)</td>\n    <td style=\"padding:5px 8px; color:var(--text-muted);\">None</td>\n    <td style=\"padding:5px 8px;\">No</td>\n    <td style=\"padding:5px 8px; color:var(--text-muted);\">None</td>\n  </tr>\n  <tr style=\"border-bottom:1px solid var(--border-color); background:rgba(2,132,199,0.05);\">\n    <td style=\"padding:5px 8px; font-weight:700; color:var(--primary);\">CoCoA</td>\n    <td style=\"padding:5px 8px;\">VBF</td>\n    <td style=\"padding:5px 8px;\">Strong & Weak</td>\n    <td style=\"padding:5px 8px;\">Yes</td>\n    <td style=\"padding:5px 8px;\">LinuxRTO</td>\n  </tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\">\n    <td style=\"padding:5px 8px; font-weight:700;\">CoCoA-S</td>\n    <td style=\"padding:5px 8px;\">VBF</td>\n    <td style=\"padding:5px 8px;\">Strong</td>\n    <td style=\"padding:5px 8px;\">Yes</td>\n    <td style=\"padding:5px 8px;\">CoCoA</td>\n  </tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\">\n    <td style=\"padding:5px 8px; font-weight:700;\">CoCoA-E</td>\n    <td style=\"padding:5px 8px;\">VBF</td>\n    <td style=\"padding:5px 8px;\">Strong & Weak</td>\n    <td style=\"padding:5px 8px;\">Yes</td>\n    <td style=\"padding:5px 8px;\">CoCoA & Eifel</td>\n  </tr>\n  <tr style=\"border-bottom:2px solid var(--text-primary);\">\n    <td style=\"padding:5px 8px; font-weight:700;\">4-state-strong</td>\n    <td style=\"padding:5px 8px;\">VBF</td>\n    <td style=\"padding:5px 8px;\">Four estimators</td>\n    <td style=\"padding:5px 8px;\">Yes</td>\n    <td style=\"padding:5px 8px;\">CoCoA</td>\n  </tr>\n</tbody>\n</table>"
        }
      ]
    },
    {
      "id": "p1_sec_related_work",
      "title": "III. RELATED WORK",
      "title_vi": "III. CÁC CÔNG TRÌNH NGHIÊN CỨU LIÊN QUAN",
      "badge": "Section III",
      "paragraphs": [
        {
          "id": "p1_related_p1",
          "sentences": [
            {
              "en": "Many recent works focused on evaluating the performance of CoCoA per se.",
              "vi": "Nhiều công trình nghiên cứu gần đây đã tập trung vào việc đánh giá hiệu năng của bản thân thuật toán CoCoA.",
              "terms": [
                "evaluating",
                "performance",
                "CoCoA"
              ]
            },
            {
              "en": "In [4], for instance, CoCoA is evaluated in a typical large-scale IoT scenario in which GPRS is employed to connect IoT nodes.",
              "vi": "Chẳng hạn trong [4], CoCoA được đánh giá trong một kịch bản IoT quy mô lớn điển hình sử dụng mạng di động GPRS để kết nối các nút IoT.",
              "terms": [
                "IoT scenario",
                "GPRS",
                "IoT nodes"
              ]
            },
            {
              "en": "The authors compared CoCoA against other congestion control mechanisms defined for TCP applications.",
              "vi": "Các tác giả đã so sánh đối chứng CoCoA với các cơ chế điều khiển tắc nghẽn khác được định nghĩa cho các ứng dụng nền TCP.",
              "terms": [
                "congestion control",
                "TCP applications"
              ]
            },
            {
              "en": "Results showed that CoCoA performs equally or better than TCP-based algorithms.",
              "vi": "Kết quả chỉ ra rằng CoCoA mang lại hiệu năng tương đương hoặc vượt trội hơn so với các giải thuật dựa trên TCP.",
              "terms": [
                "TCP-based algorithms",
                "performance"
              ]
            },
            {
              "en": "Similar conclusions were drawn in [5], where the authors compared CoCoA to other TCP-based congestion control mechanisms on an emulated Zigbee network.",
              "vi": "Các kết luận tương tự cũng được rút ra trong [5], nơi các tác giả so sánh CoCoA với các cơ chế kiểm soát tắc nghẽn TCP trên một mạng Zigbee mô phỏng.",
              "terms": [
                "Zigbee network",
                "congestion control"
              ]
            },
            {
              "en": "In [6], the authors evaluated CoCoA by means of simulations considering different traffic patterns.",
              "vi": "Trong [6], các tác giả đánh giá CoCoA bằng phương pháp mô phỏng xem xét các mô hình lưu lượng truyền dẫn khác nhau.",
              "terms": [
                "simulations",
                "traffic patterns"
              ]
            },
            {
              "en": "Similar to our work, the authors highlighted the poor performance of CoCoA with bursty traffic due to the improper selection of the retransmission timeout value.",
              "vi": "Tương đồng với công trình của chúng tôi, các tác giả đã làm nổi bật hiệu năng kém cỏi của CoCoA khi gặp lưu lượng dạng bùng nổ (bursty traffic) do việc chọn giá trị thời gian chờ truyền lại (RTO) không hợp lý.",
              "terms": [
                "bursty traffic",
                "retransmission timeout",
                "RTO"
              ]
            }
          ]
        },
        {
          "id": "p1_related_p2",
          "sentences": [
            {
              "en": "Recently, other works proposed modifications to CoCoA.",
              "vi": "Gần đây, các nghiên cứu khác đã đề xuất những cải tiến sửa đổi cho CoCoA.",
              "terms": [
                "modifications",
                "CoCoA"
              ]
            },
            {
              "en": "In [7] the authors proposed '4-states-strong', a modification to CoCoA that introduces a more complex RTT estimator to distinguish between wireless losses and congestion losses.",
              "vi": "Trong [7], các tác giả đề xuất giải thuật '4-states-strong' – một biến thể của CoCoA đưa vào bộ ước lượng RTT phức tạp hơn nhằm phân biệt giữa mất gói do lỗi đường truyền vô tuyến và mất gói do nghẽn mạng.",
              "terms": [
                "4-states-strong",
                "RTT estimator",
                "wireless losses",
                "congestion losses"
              ]
            },
            {
              "en": "Results showed an improvement of the performance in networks where the loss rate is particularly high.",
              "vi": "Kết quả cho thấy sự cải thiện hiệu năng rõ rệt trong các mạng có tỷ lệ tổn hao gói tin đặc biệt cao.",
              "terms": [
                "loss rate",
                "performance"
              ]
            },
            {
              "en": "In [14], instead, authors proposed CoCoA-E, a modified version of CoCoA based on the Eifel retransmission timer.",
              "vi": "Trong khi đó, ở [14], các tác giả đề xuất CoCoA-E – một phiên bản sửa đổi của CoCoA dựa trên bộ định thời truyền lại Eifel.",
              "terms": [
                "CoCoA-E",
                "Eifel retransmission timer"
              ]
            },
            {
              "en": "Simulations showed an improvement of the RTO estimation under two different RTT functions: stair-step and saw-like.",
              "vi": "Mô phỏng cho thấy sự cải thiện của việc ước lượng RTO dưới hai hàm biến thiên RTT khác nhau: dạng bậc thang (stair-step) và dạng răng cưa (saw-like).",
              "terms": [
                "RTO estimation",
                "stair-step",
                "saw-like"
              ]
            },
            {
              "en": "Both '4-states-strong' and CoCoA-E will be presented in details in Section VII.A, as they are adopted as term of comparison in the performance evaluation.",
              "vi": "Cả hai giải thuật '4-states-strong' và CoCoA-E sẽ được trình bày chi tiết trong Mục VII.A, vì chúng được chọn làm đối tượng so sánh đối chứng trong phần đánh giá hiệu năng.",
              "terms": [
                "4-states-strong",
                "CoCoA-E",
                "comparison"
              ]
            },
            {
              "en": "Finally, in [16] the authors evaluate CoCoA-S, a version of CoCoA that uses only the strong RTO estimator.",
              "vi": "Cuối cùng, trong [16], các tác giả đánh giá CoCoA-S – một phiên bản của CoCoA chỉ dùng duy nhất bộ ước lượng RTO mạnh.",
              "terms": [
                "CoCoA-S",
                "strong RTO estimator"
              ]
            },
            {
              "en": "The variant is evaluated against other TCP congestion control algorithms such as the Linux RTO and the peak-hopper TCP RTO estimator.",
              "vi": "Biến thể này được đánh giá đối chứng với các thuật toán điều khiển tắc nghẽn TCP khác như Linux RTO và bộ ước lượng peak-hopper TCP RTO.",
              "terms": [
                "Linux RTO",
                "peak-hopper"
              ]
            },
            {
              "en": "To conclude, Table I summarizes the congestion control strategies recently proposed in literature, along with their main features.",
              "vi": "Để kết luận, Bảng I (Table I) tổng kết các chiến lược điều khiển tắc nghẽn mới nhất được đề xuất trong tài liệu khoa học, cùng với các đặc tính kỹ thuật cốt lõi của chúng.",
              "terms": [
                "Table I",
                "congestion control strategies"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_eval_section",
      "title": "IV. PERFORMANCE EVALUATION",
      "title_vi": "IV. ĐÁNH GIÁ HIỆU NĂNG MÔ PHỎNG",
      "badge": "Section IV",
      "figures_top": [
        {
          "id": "fig1",
          "title": "Fig. 1. Network topology",
          "src": "assets/p1_fig1_crop.png",
          "caption": "Fig. 1. Network topology: 6x6 grid of motes with node ID 1 as RPL border router and node ID 3 as CoAP server."
        }
      ],
      "paragraphs": [
        {
          "id": "p1_eval_p1",
          "sentences": [
            {
              "en": "In this section, we analyze the results of the performance evaluation.",
              "vi": "Trong phần này, chúng tôi tiến hành phân tích các kết quả đánh giá hiệu năng.",
              "terms": [
                "performance evaluation"
              ]
            },
            {
              "en": "The performance evaluation is carried out by simulation using the Cooja platform, leveraging a ContikiOS implementation of CoCoA+ originally obtained from its authors, and then updated to be in line with the latest CoCoA+ specification [3].",
              "vi": "Đánh giá hiệu năng được thực hiện bằng mô phỏng trên nền tảng Cooja, sử dụng bản cài đặt ContikiOS của CoCoA+ nhận được từ chính các tác giả, sau đó cập nhật theo đúng đặc tả CoCoA+ mới nhất [3].",
              "terms": [
                "Cooja",
                "ContikiOS",
                "CoCoA+ specification"
              ]
            },
            {
              "en": "Cooja motes are used to emulate wireless sensor devices. The relevant simulation parameters are summarized in Table II.",
              "vi": "Các nút Cooja motes được dùng để giả lập thiết bị cảm biến không dây. Các thông số mô phỏng quan trọng được tóm tắt trong Bảng II (Table II).",
              "terms": [
                "Cooja motes",
                "simulation parameters",
                "Table II"
              ]
            },
            {
              "en": "In all scenarios, we consider a grid of 6x6 nodes, as reported in Fig. 1.",
              "vi": "Trong tất cả các kịch bản, chúng tôi khảo sát mô hình mạng dạng lưới 6x6 nút như được biểu diễn trong Hình 1 (Fig. 1).",
              "terms": [
                "6x6 nodes",
                "Fig. 1"
              ]
            },
            {
              "en": "In the network, one node is the RPL border router (node ID 1), one node act as a CoAP server (node ID 3), and, finally, the remaining nodes are CoAP clients.",
              "vi": "Trong mạng, một nút đóng vai trò là router biên RPL (nút ID 1), một nút đóng vai trò máy chủ CoAP server (nút ID 3), và các nút còn lại là các máy khách CoAP clients.",
              "terms": [
                "RPL border router",
                "CoAP server",
                "CoAP clients"
              ]
            },
            {
              "en": "The linear distance between two nodes in a row is 10m.",
              "vi": "Khoảng cách tuyến tính giữa hai nút liền kề trong một hàng là 10 mét.",
              "terms": [
                "linear distance",
                "10m"
              ]
            }
          ]
        }
      ],
      "tables": [
        {
          "id": "p1_table2",
          "title": "TABLE II: SIMULATION PARAMETERS",
          "subtitle": "BẢNG THÔNG SỐ CẤU HÌNH MÔ PHỎNG",
          "img_src": "assets/p1_table2.png",
          "caption": "Table II. Simulation parameters for the Cooja platform on a 6x6 grid of motes.",
          "html": "<table class=\"academic-html-table\" style=\"width:100%; border-collapse:collapse; font-size:0.78rem; text-align:left; margin-top:0.5rem;\">\n<thead>\n  <tr style=\"border-top:2px solid var(--text-primary); border-bottom:1.5px solid var(--text-primary);\">\n    <th style=\"padding:5px 8px; width:45%;\">Parameter</th>\n    <th style=\"padding:5px 8px;\">Value</th>\n  </tr>\n</thead>\n<tbody>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">L2 protocol</td><td style=\"padding:4px 8px;\">IEEE 802.15.4, 250 Kbps PHY rate</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">Channel model</td><td style=\"padding:4px 8px;\">Unit Disk GM, tx range = 10m, interference = 20m</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">MAC buffer size</td><td style=\"padding:4px 8px;\">8 packets</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">MAC level max retransmissions</td><td style=\"padding:4px 8px;\">8</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">L3 protocol & Routing</td><td style=\"padding:4px 8px;\">6LoWPAN & RPL</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">CoAP base ACK-TIMEOUT</td><td style=\"padding:4px 8px;\">3s</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">CoAP requests buffer size</td><td style=\"padding:4px 8px;\">4</td></tr>\n  <tr style=\"border-bottom:1px solid var(--border-color);\"><td style=\"padding:4px 8px; font-weight:700;\">Periodic traffic (T)</td><td style=\"padding:4px 8px;\">0.5s (6048 B/s) down to 70s (45 B/s)</td></tr>\n  <tr style=\"border-bottom:2px solid var(--text-primary);\"><td style=\"padding:4px 8px; font-weight:700;\">Bursty traffic inter-arrival</td><td style=\"padding:4px 8px;\">10s, 30s, 40s, 60s, 90s, 100s, 120s, 140s</td></tr>\n</tbody>\n</table>"
        }
      ],
      "figures": [
        {
          "id": "fig2",
          "title": "Fig. 2, Carried load vs. offered load",
          "src": "assets/p1_img_p4_1.png",
          "caption": "Fig. 2. Carried load vs. nominal offered load for CoAP and CoCoA+."
        },
        {
          "id": "fig3",
          "title": "Fig. 3, Overall in-network MAC buffer overflows",
          "src": "assets/p1_img_p4_2.png",
          "caption": "Fig. 3. Overall in-network MAC buffer overflows as a function of offered load."
        },
        {
          "id": "fig4",
          "title": "Fig. 4, Average number of transmissions per successful transaction",
          "src": "assets/p1_img_p4_3.png",
          "caption": "Fig. 4. Average number of transmissions per successful transaction."
        },
        {
          "id": "fig5_6_7_8",
          "title": "Fig. 5-8, Pre-congestion analysis (T = 8s)",
          "images": [
            {
              "src": "assets/p1_img_p5_1.png",
              "caption": "Fig. 5. Average number of ACKs per transaction."
            },
            {
              "src": "assets/p1_img_p5_2.png",
              "caption": "Fig. 6. CoAP vs. CoCoA+ carried load per node, T = 8s."
            },
            {
              "src": "assets/p1_img_p5_3.png",
              "caption": "Fig. 7. CoAP operation, node ID 10, T = 8s."
            },
            {
              "src": "assets/p1_img_p5_4.png",
              "caption": "Fig. 8. CoCoA+ operation, node ID 10, T = 8s."
            }
          ]
        },
        {
          "id": "fig9_10_11_12",
          "title": "Fig. 9-12, Interfering Bursty Traffic Results",
          "images": [
            {
              "src": "assets/p1_img_p6_1.png",
              "caption": "Fig. 9. Carried load – periodic traffic."
            },
            {
              "src": "assets/p1_img_p6_2.png",
              "caption": "Fig. 10. Transmissions per transaction – periodic traffic."
            },
            {
              "src": "assets/p1_img_p6_3.png",
              "caption": "Fig. 11. Weak estimator failing to update RTOinit."
            },
            {
              "src": "assets/p1_img_p6_4.png",
              "caption": "Fig. 12. Weak estimator failing to adapt RTOinit."
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_shortcomings",
      "title": "V. COCOA+ SHORTCOMINGS",
      "title_vi": "V. CÁC THIẾU SÓT VÀ HẠN CHẾ CỦA COCOA+",
      "badge": "Section V",
      "paragraphs": [
        {
          "id": "p1_short_1",
          "sentences": [
            {
              "en": "A. RTO too close to RTT: When a sequence of similar RTTs is sampled, the RTTVAR variable tends to vanish, causing RTO to get dangerously close to measured RTT.",
              "vi": "A. RTO tiệm cận quá sát RTT: Khi một chuỗi các mẫu RTT tương tự nhau được ghi nhận, phương sai RTTVAR triệt tiêu dần về 0, khiến RTO bị kéo xuống sát nút với RTT thực tế.",
              "terms": [
                "RTTVAR",
                "RTO",
                "RTT"
              ]
            },
            {
              "en": "Even when the network is stable, RTTs fluctuate naturally, so the probability of spurious retransmissions increases dramatically as RTOs get close to small RTTs.",
              "vi": "Ngay cả khi mạng ổn định, RTT vẫn luôn có dao động tự nhiên (jitter), do đó xác suất phát sinh các lần truyền lại giả tạo (spurious retransmissions) tăng vọt khi RTO bám quá sát các giá trị RTT nhỏ.",
              "terms": [
                "fluctuate",
                "spurious retransmissions"
              ]
            }
          ]
        }
      ],
      "figures": [
        {
          "id": "fig13_14",
          "title": "Fig. 13-14, RTO Abnormalities",
          "images": [
            {
              "src": "assets/p1_img_p7_1.png",
              "caption": "Fig. 13. Example of RTO increase as response to RTT decrease."
            },
            {
              "src": "assets/p1_img_p7_2.png",
              "caption": "Fig. 14. Example of RTOinit spikes."
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_pcocoa_algo",
      "title": "VI. COAP PRECISE CONGESTION CONTROL (pCoCoA)",
      "title_vi": "VI. THUẬT TOÁN ĐIỀU KHIỂN TẮC NGHẼN CHÍNH XÁC pCoCoA",
      "badge": "Section VI",
      "paragraphs": [
        {
          "id": "p1_pcocoa_p1",
          "sentences": [
            {
              "en": "pCoCoA is based on two key pillars: (i) precise request-to-response mapping even during retransmissions via Transmission Counter (TC); (ii) enhanced RTO computation inspired by Linux TCP.",
              "vi": "pCoCoA dựa trên hai trụ cột đột phá: (i) cơ chế ánh xạ chính xác yêu cầu-phản hồi ngay cả khi có truyền lại thông qua Tùy chọn Bộ đếm Lần truyền (Transmission Counter - TC); (ii) thuật toán tính toán RTO cải tiến lấy cảm hứng từ Linux TCP.",
              "terms": [
                "Transmission Counter",
                "TC",
                "Linux TCP",
                "RTO"
              ]
            },
            {
              "en": "The elective Transmission Counter (TC) option is set to 1 initially and incremented on each retransmission. The receiver echoes the TC in the ACK, eliminating RTT ambiguity.",
              "vi": "Tùy chọn Transmission Counter (TC) được gán bằng 1 ở lần phát đầu và tăng thêm 1 sau mỗi lần truyền lại. Phía nhận sẽ sao chép và gắn lại giá trị TC này trong bản tin ACK, loại bỏ hoàn toàn vấn nạn nhập nhằng RTT.",
              "terms": [
                "TC",
                "ACK",
                "RTT ambiguity"
              ]
            }
          ]
        }
      ],
      "algorithms": [
        {
          "name": "Algorithm 1: pCoCoA algorithm",
          "code": "function SendAndReceive(CON)\n 1. TC = 1\n 2. CON.TC = TC\n 3. if(CON.dest not in known_dest)\n 4.    RTO = CoAP_DEFAULT_RTO\n 5. else\n 6.    RTO = known_dest[CON.dest]\n 7. RTO = RTO + rand() % (RTO / 2)\n 8. ACK = NULL\n 9. timestamp[] = Array(MAX_ATTEMPTS)\n10. while(TC < MAX_ATTEMPTS and ACK == NULL)\n11.    timestamp[TC] = system_time()\n12.    ACK = send(CON)\n13.    t = start_timer(RTO)\n14.    wait_until(ACK != NULL or t.expired)\n15.    if(t.expired)\n16.       TC = TC + 1\n17.       CON.TC = TC\n18.       RTO = VBF()\n19. if(ACK != NULL)\n20.    R = system_time() - timestamp[ACK.TC]\n21.    if(TC != ACK.TC)\n22.       ACK.spurious = True\n23. else\n24.    return\n25. RTO = RTOCalculation(R, ACK.spurious)\n26. known_dest[CON.dest] = RTO"
        },
        {
          "name": "Algorithm 2: RTOCalculation algorithm",
          "code": "function RTOCalculation(R, spurious)\n 1. SRTT = (1 - α)SRTT + αR\n 2. if(R < (SRTT - RTTVAR))\n 3.    RTTVAR = (1 - γ)RTTVAR + γ|SRTT - R|\n 4. else\n 5.    if(|SRTT - R| > RTTVAR)\n 6.       RTTVAR = (1 - β)RTTVAR + β|SRTT - R|\n 7.    else\n 8.       RTTVAR = (1 - α)RTTVAR + α|SRTT - R|\n 9. if(R > SRTT)\n10.    if(RTTVAR > mdev_max for 3 consecutive times)\n11.       mdev_max = average of the last 3 RTTVAR\n12.    else if(RTTVAR < mdev_max for 8 consecutive times)\n13.       mdev_max = (1 - β)mdev_max + β·RTTVAR\n14. if(spurious)\n15.    k = 6\n16. else\n17.    k = 4\n18. SRTO = SRTT + max(k·RTTVAR, mdev_max)\n19. RTO_init = (1 - δ)SRTO + δ·RTO_init"
        }
      ]
    },
    {
      "id": "p1_sec_eval_results",
      "title": "VII. pCoCoA PERFORMANCE EVALUATION",
      "title_vi": "VII. KẾT QUẢ THỰC NGHIỆM ĐỐI CHIẾU PCOCOA",
      "badge": "Section VII",
      "paragraphs": [
        {
          "id": "p1_res_desc",
          "sentences": [
            {
              "en": "pCoCoA is evaluated against CoAP, CoCoA+, 4-state-strong, and CoCoA-E across periodic and bursty traffic patterns.",
              "vi": "pCoCoA được đánh giá đối chứng với CoAP, CoCoA+, 4-state-strong và CoCoA-E qua cả hai mô hình lưu lượng định kỳ và bùng phát.",
              "terms": [
                "4-state-strong",
                "CoCoA-E"
              ]
            },
            {
              "en": "Under periodic traffic (T = 8s), pCoCoA drastically reduces spurious retransmissions by leveraging mdev_max to bound the RTO lower limit.",
              "vi": "Dưới lưu lượng định kỳ (T = 8s), pCoCoA cắt giảm ngoạn mục số lần truyền lại giả tạo nhờ dùng mdev_max chặn dưới RTO an toàn.",
              "terms": [
                "mdev_max",
                "spurious retransmissions"
              ]
            }
          ]
        }
      ],
      "figures": [
        {
          "id": "fig15_16",
          "title": "Fig. 15-16, Performance at T = 8s",
          "images": [
            {
              "src": "assets/p1_img_p10_1.png",
              "caption": "Fig. 15. CoAP vs. CoCoA+ vs. pCoCoA carried load per node, T = 8s."
            },
            {
              "src": "assets/p1_img_p11_1.png",
              "caption": "Fig. 16. Node average retransmissions, T = 8s."
            }
          ]
        },
        {
          "id": "fig17",
          "title": "Fig. 17, Retransmission Dispersion",
          "images": [
            {
              "src": "assets/p1_img_p11_2.png",
              "caption": "(a) CoCoA+"
            },
            {
              "src": "assets/p1_img_p11_3.png",
              "caption": "(b) 4-state-strong"
            },
            {
              "src": "assets/p1_img_p11_4.png",
              "caption": "(c) CoCoA-E"
            },
            {
              "src": "assets/p1_img_p11_5.png",
              "caption": "(d) pCoCoA"
            }
          ],
          "caption": "Fig. 17. Retransmission dispersion over time across all nodes."
        },
        {
          "id": "fig18_19_20_21",
          "title": "Fig. 18-21, Bursty Traffic & k Adaptation",
          "images": [
            {
              "src": "assets/p1_img_p12_1.png",
              "caption": "Fig. 18 (a) CoCoA+ without k adaptation"
            },
            {
              "src": "assets/p1_img_p12_2.png",
              "caption": "Fig. 18 (b) pCoCoA with k = 6 adaptation"
            },
            {
              "src": "assets/p1_img_p12_3.png",
              "caption": "Fig. 19. Carried load – interfering bursty traffic."
            },
            {
              "src": "assets/p1_img_p12_4.png",
              "caption": "Fig. 20. Transmissions per transaction – bursty traffic."
            },
            {
              "src": "assets/p1_img_p13_1.png",
              "caption": "Fig. 21 (a) CoCoA+ failing to update RTOinit"
            },
            {
              "src": "assets/p1_img_p13_2.png",
              "caption": "Fig. 21 (b) pCoCoA maintaining continuous RTOinit updates"
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_conc",
      "title": "VIII. CONCLUSIONS",
      "title_vi": "VIII. KẾT LUẬN TOÀN DIỆN",
      "badge": "Section VIII",
      "paragraphs": [
        {
          "id": "p1_conc_1",
          "sentences": [
            {
              "en": "In this paper, we presented an in-depth analysis of the CoCoA+ advanced congestion control algorithm and highlighted critical issues in its estimator design.",
              "vi": "Trong bài báo này, chúng tôi đã trình bày một phân tích chuyên sâu về thuật toán điều khiển tắc nghẽn nâng cao CoCoA+ và làm sáng tỏ các điểm yếu chí tử trong thiết kế bộ ước lượng của nó.",
              "terms": [
                "CoCoA+",
                "congestion control",
                "estimator"
              ]
            },
            {
              "en": "The proposed pCoCoA algorithm overcomes these shortcomings by introducing precise CON-ACK mapping via a Transmission Counter and bounding RTO with maximum mean deviance.",
              "vi": "Thuật toán pCoCoA được đề xuất đã khắc phục triệt để các hạn chế này bằng cách đưa vào cơ chế ánh xạ chính xác CON-ACK qua Bộ đếm số lần truyền (TC) và chặn dưới RTO bằng độ lệch trung bình cực đại (mdev_max).",
              "terms": [
                "pCoCoA",
                "CON-ACK mapping",
                "Transmission Counter",
                "mdev_max"
              ]
            },
            {
              "en": "Simulations confirmed that pCoCoA significantly reduces retransmissions while delivering high carried load across both steady and bursty network scenarios.",
              "vi": "Các kết quả mô phỏng khẳng định pCoCoA giảm thiểu rõ rệt số lần truyền lại trong khi vẫn đảm bảo tải hữu ích (carried load) cao trong cả điều kiện mạng ổn định lẫn khi có lưu lượng bùng nổ.",
              "terms": [
                "carried load",
                "retransmissions",
                "bursty"
              ]
            }
          ]
        }
      ]
    }
  ]
};
