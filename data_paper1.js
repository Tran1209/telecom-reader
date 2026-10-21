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
              "en": "IoT systems are built on top of IoT devices that collect data and interact with the physical environment.",
              "vi": "Hệ thống IoT được xây dựng dựa trên các thiết bị IoT có chức năng thu thập dữ liệu và tương tác trực tiếp với môi trường vật lý.",
              "terms": [
                "IoT devices"
              ]
            },
            {
              "en": "IoT devices are usually cheap, battery-powered devices, with limited computation capabilities.",
              "vi": "Các thiết bị IoT thường là những thiết bị giá rẻ, hoạt động bằng pin và có năng lực xử lý tính toán rất hạn chế.",
              "terms": [
                "battery-powered",
                "computation capabilities"
              ]
            },
            {
              "en": "Those devices are equipped with low power transceivers that, however, allow forming Low Power and Lossy Networks (LLN), characterized by possibly large packet error rates, and low throughput.",
              "vi": "Những thiết bị này được trang bị các bộ thu phát công suất thấp tạo nên Mạng năng lượng thấp và tổn thất cao (Low Power and Lossy Networks - LLN), có đặc tính tỷ lệ lỗi gói cao và thông lượng thấp.",
              "terms": [
                "transceivers",
                "LLN",
                "packet error rates",
                "throughput"
              ]
            },
            {
              "en": "Due to these characteristics, new communication protocols tailored for constrained devices operating in lossy networks are required.",
              "vi": "Do các đặc tính này, cần phải có các giao thức truyền thông mới được thiết kế riêng cho các thiết bị hạn chế tài nguyên hoạt động trong mạng tổn hao.",
              "terms": [
                "communication protocols",
                "constrained devices",
                "lossy networks"
              ]
            },
            {
              "en": "To this aim, IETF defined a communication protocol stack for IoT devices.",
              "vi": "Nhằm mục tiêu này, IETF đã định nghĩa một ngăn xếp giao thức truyền thông chuyên dụng cho thiết bị IoT.",
              "terms": [
                "IETF",
                "protocol stack"
              ]
            },
            {
              "en": "In particular, the IETF CoRE Working Group standardized the Constrained Application Protocol (CoAP) [1], which allows applications to exchange information with IoT devices.",
              "vi": "Cụ thể, Nhóm công tác CoRE của IETF đã chuẩn hóa Giao thức Ứng dụng Bị ràng buộc (CoAP) [RFC 7252], cho phép các ứng dụng trao đổi thông tin với thiết bị IoT theo phương thức RESTful gọn nhẹ.",
              "terms": [
                "CoRE Working Group",
                "CoAP"
              ]
            }
          ]
        },
        {
          "id": "p1_intro_2",
          "sentences": [
            {
              "en": "Considering the limited capabilities of nodes and the limited amount of bandwidth available in LLNs, congestion control is crucial to ensure proper and timely delivery of data.",
              "vi": "Xét đến năng lực hạn chế của các nút mạng và lượng băng thông eo hẹp trong các mạng LLN, việc điều khiển tắc nghẽn là tối quan trọng nhằm bảo đảm phân phối dữ liệu chính xác và đúng thời hạn.",
              "terms": [
                "bandwidth",
                "LLN",
                "congestion control"
              ]
            },
            {
              "en": "In traditional networks, application data is usually transported by the Transmission Control Protocol (TCP), which includes a congestion control mechanism.",
              "vi": "Trong các mạng truyền thống, dữ liệu ứng dụng thường được truyền tải bằng Giao thức Điều khiển Truyền vận (TCP) vốn đã tích hợp sẵn cơ chế kiểm soát tắc nghẽn.",
              "terms": [
                "TCP",
                "congestion control mechanism"
              ]
            },
            {
              "en": "In LLNs, instead, CoAP employs the User Datagram Protocol (UDP), which does not provide any congestion control mechanism.",
              "vi": "Trái lại, trong mạng LLN, CoAP sử dụng Giao thức Datagram Người dùng (UDP) – một giao thức không hề có cơ chế điều khiển tắc nghẽn nào.",
              "terms": [
                "LLNs",
                "CoAP",
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
      ]
    },
    {
      "id": "p1_sec_eval_section",
      "title": "IV. PERFORMANCE EVALUATION",
      "title_vi": "IV. ĐÁNH GIÁ HIỆU NĂNG MÔ PHỎNG",
      "badge": "Section IV",
      "paragraphs": [
        {
          "id": "p1_eval_desc",
          "sentences": [
            {
              "en": "The performance evaluation is carried out by simulation using the Cooja platform, leveraging a ContikiOS implementation of CoCoA+ on a 6x6 grid of motes.",
              "vi": "Đánh giá hiệu năng được tiến hành bằng mô phỏng trên nền tảng Cooja, sử dụng bản cài đặt ContikiOS của CoCoA+ trên mô hình lưới 6x6 nút cảm biến.",
              "terms": [
                "Cooja",
                "ContikiOS",
                "6x6 grid"
              ]
            },
            {
              "en": "In all scenarios, periodic CoAP traffic is considered with varying request periods T from 70s down to 0.5s to inject increasing data loads.",
              "vi": "Trong mọi kịch bản, lưu lượng CoAP định kỳ được xem xét với chu kỳ yêu cầu T biến đổi từ 70s xuống 0.5s để bơm tải dữ liệu tăng dần vào mạng.",
              "terms": [
                "periodic",
                "request periods"
              ]
            }
          ]
        }
      ],
      "figures": [
        {
          "id": "fig1",
          "title": "Fig. 1, Network topology",
          "src": "assets/p1_img_p3_1.png",
          "caption": "Fig. 1. Network topology: 6x6 grid of nodes with node ID 1 as RPL border router and node ID 3 as CoAP server."
        },
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
