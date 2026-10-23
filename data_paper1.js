// Complete Academic Dataset for Paper 1 (Ad Hoc Networks 2018 - 13 Pages Full Extraction)
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
  "pages": [
    {
      "page_num": 1,
      "page_image": "assets/p1_page_1.png",
      "top_content": [
        {
          "id": "paper1_p1_top_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "pCoCoA: A precise congestion control",
          "sentences": [
            {
              "id": "paper1_p1_top_b0_s0",
              "en": "pCoCoA: A precise congestion control",
              "vi": "pCoCoA: Kiểm soát tắc nghẽn chính xác"
            }
          ]
        },
        {
          "id": "paper1_p1_top_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "algorithm for CoAP",
          "sentences": [
            {
              "id": "paper1_p1_top_b1_s0",
              "en": "algorithm for CoAP",
              "vi": "thuật toán cho CoAP"
            }
          ]
        },
        {
          "id": "paper1_p1_top_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi",
          "sentences": [
            {
              "id": "paper1_p1_top_b2_s0",
              "en": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi",
              "vi": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi"
            }
          ]
        }
      ],
      "left_column": [
        {
          "id": "paper1_p1_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Abstract— The Constrained Application Protocol (CoAP) is an IETF standard application protocol for the future Internet of Things (IoT). Since IoT devices are often interconnected by networks characterized by high packet error rates and low throughput, congestion control will be crucial to ensure proper and timed communication in these networks. Therefore, CoCoA+, an advanced congestion control algorithm for CoAP, is currently being specified by the IETF. In this work, we present a critical analysis of CoCoA+ performance and highlight some of its shortcomings and pitfalls. Two different scenarios are considered: one with an increasing traffic load due to an increasing number of CoAP requests, and another with an interfering traffic concurrently transmitted in the network characterized by a bursty pattern. In the former scenario, we show how CoCoA+ may be characterized by many spurious retransmissions at some offered loads close to congestion. In the latter, we show instead how the weak estimator is not particularly effective in adapting to changing traffic loads. In order to overcome such limitations, a number of modifications to CoCoA+ are proposed. The resulting solution, named precise Congestion Control (pCoCoA), is shown to reduce the number of retransmissions, while guaranteeing throughputs and delays comparable to those of CoAP and CoCoA+.",
          "sentences": [
            {
              "id": "paper1_p1_colL_b1_s0",
              "en": "Abstract— The Constrained Application Protocol (CoAP) is an IETF standard application protocol for the future Internet of Things (IoT).",
              "vi": "Tóm tắt - Giao thức Ứng dụng Ràng buộc (CoAP) (CoAP) là giao thức ứng dụng tiêu chuẩn IETF cho Internet vạn vật (IoT) trong tương lai."
            },
            {
              "id": "paper1_p1_colL_b1_s1",
              "en": "Since IoT devices are often interconnected by networks characterized by high packet error rates and low throughput, congestion control will be crucial to ensure proper and timed communication in these networks.",
              "vi": "Do các thiết bị IoT thường được kết nối với nhau bởi các mạng có đặc điểm là tỷ lệ lỗi gói cao và thông lượng (throughput) thấp, nên việc kiểm soát tắc nghẽn sẽ rất quan trọng để đảm bảo liên lạc phù hợp và kịp thời trong các mạng này."
            },
            {
              "id": "paper1_p1_colL_b1_s2",
              "en": "Therefore, CoCoA+, an advanced congestion control algorithm for CoAP, is currently being specified by the IETF.",
              "vi": "Do đó, CoCoA+, một thuật toán kiểm soát tắc nghẽn nâng cao cho CoAP, hiện đang được IETF chỉ định."
            },
            {
              "id": "paper1_p1_colL_b1_s3",
              "en": "In this work, we present a critical analysis of CoCoA+ performance and highlight some of its shortcomings and pitfalls.",
              "vi": "Trong công việc này, chúng tôi trình bày phân tích quan trọng về hiệu suất của CoCoA+ và nêu bật một số thiếu sót cũng như cạm bẫy của nó."
            },
            {
              "id": "paper1_p1_colL_b1_s4",
              "en": "Two different scenarios are considered: one with an increasing traffic load due to an increasing number of CoAP requests, and another with an interfering traffic concurrently transmitted in the network characterized by a bursty pattern.",
              "vi": "Hai kịch bản khác nhau được xem xét: một kịch bản có lưu lượng truy cập ngày càng tăng do số lượng yêu cầu CoAP ngày càng tăng và một kịch bản khác có lưu lượng truy cập gây nhiễu được truyền đồng thời trong mạng được đặc trưng bởi mô hình bùng nổ."
            },
            {
              "id": "paper1_p1_colL_b1_s5",
              "en": "In the former scenario, we show how CoCoA+ may be characterized by many spurious retransmissions at some offered loads close to congestion.",
              "vi": "Trong kịch bản trước, chúng tôi chỉ ra CoCoA+ có thể được đặc trưng như thế nào bởi nhiều lần truyền lại giả ở một số tải được cung cấp gần với tình trạng tắc nghẽn."
            },
            {
              "id": "paper1_p1_colL_b1_s6",
              "en": "In the latter, we show instead how the weak estimator is not particularly effective in adapting to changing traffic loads.",
              "vi": "Ở phần sau, chúng tôi chỉ ra rằng công cụ ước tính yếu không đặc biệt hiệu quả trong việc thích ứng với việc thay đổi lưu lượng truy cập."
            },
            {
              "id": "paper1_p1_colL_b1_s7",
              "en": "In order to overcome such limitations, a number of modifications to CoCoA+ are proposed.",
              "vi": "Để khắc phục những hạn chế đó, một số sửa đổi đối với CoCoA+ đã được đề xuất."
            },
            {
              "id": "paper1_p1_colL_b1_s8",
              "en": "The resulting solution, named precise Congestion Control (pCoCoA), is shown to reduce the number of retransmissions, while guaranteeing throughputs and delays comparable to those of CoAP and CoCoA+.",
              "vi": "Giải pháp thu được, được đặt tên là Kiểm soát tắc nghẽn chính xác (pCoCoA), được chứng minh là giúp giảm số lần truyền lại, đồng thời đảm bảo thông lượng (throughput) và độ trễ tương đương với CoAP và CoCoA+."
            }
          ]
        },
        {
          "id": "paper1_p1_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Index Terms— CoAP, CoCoA, CoCoA+, Congestion Control",
          "sentences": [
            {
              "id": "paper1_p1_colL_b2_s0",
              "en": "Index Terms— CoAP, CoCoA, CoCoA+, Congestion Control",
              "vi": "Thuật ngữ chỉ mục - CoAP, CoCoA, CoCoA+, Kiểm soát tắc nghẽn"
            }
          ]
        },
        {
          "id": "paper1_p1_colL_b3",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "I. INTRODUCTION",
          "sentences": [
            {
              "id": "paper1_p1_colL_b3_s0",
              "en": "I.",
              "vi": "I."
            },
            {
              "id": "paper1_p1_colL_b3_s1",
              "en": "INTRODUCTION",
              "vi": "GIỚI THIỆU"
            }
          ]
        },
        {
          "id": "paper1_p1_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "THE Internet of Things (IoT) is getting momentum both in academia, as a very active research topic, and in industry, with smart objects that are meant to thoroughly affect our lives. IoT systems are built on top of IoT devices that collect data and interact with the physical environment. IoT devices are usually cheap, battery-powered devices, with limited computation capabilities. Those devices are equipped with low power transceivers that, however, allow forming Low Power and Lossy Networks (LLN), characterized by possibly large packet error rates, and low throughput. Due to these characteristics, new communication protocols tailored for constrained devices operating in lossy networks are required. To this aim, IETF defined a communication protocol stack for IoT devices. In particular, the IETF CoRE Working Group standardized the Constrained Application Protocol (CoAP) [1], which allows applications to exchange information with IoT devices.",
          "sentences": [
            {
              "id": "paper1_p1_colL_b4_s0",
              "en": "THE Internet of Things (IoT) is getting momentum both in academia, as a very active research topic, and in industry, with smart objects that are meant to thoroughly affect our lives.",
              "vi": "Internet of Things (IoT) đang có được động lực cả trong giới học thuật với tư cách là một chủ đề nghiên cứu rất tích cực và trong ngành công nghiệp với các vật thể thông minh nhằm mục đích ảnh hưởng sâu sắc đến cuộc sống của chúng ta."
            },
            {
              "id": "paper1_p1_colL_b4_s1",
              "en": "IoT systems are built on top of IoT devices that collect data and interact with the physical environment.",
              "vi": "Hệ thống IoT được xây dựng dựa trên các thiết bị IoT thu thập dữ liệu và tương tác với môi trường vật lý."
            },
            {
              "id": "paper1_p1_colL_b4_s2",
              "en": "IoT devices are usually cheap, battery-powered devices, with limited computation capabilities.",
              "vi": "Các thiết bị IoT thường là những thiết bị giá rẻ, chạy bằng pin, khả năng tính toán hạn chế."
            },
            {
              "id": "paper1_p1_colL_b4_s3",
              "en": "Those devices are equipped with low power transceivers that, however, allow forming Low Power and Lossy Networks (LLN), characterized by possibly large packet error rates, and low throughput.",
              "vi": "Tuy nhiên, những thiết bị này được trang bị bộ thu phát công suất thấp, cho phép hình thành mạng tổn hao (lossy networks) và năng lượng thấp (LLN), được đặc trưng bởi tỷ lệ lỗi gói có thể lớn và thông lượng (throughput) thấp."
            },
            {
              "id": "paper1_p1_colL_b4_s4",
              "en": "Due to these characteristics, new communication protocols tailored for constrained devices operating in lossy networks are required.",
              "vi": "Do những đặc điểm này, cần phải có các giao thức truyền thông mới được thiết kế riêng cho các thiết bị hạn chế hoạt động trong mạng bị suy hao."
            },
            {
              "id": "paper1_p1_colL_b4_s5",
              "en": "To this aim, IETF defined a communication protocol stack for IoT devices.",
              "vi": "Để đạt được mục đích này, IETF đã xác định một ngăn xếp giao thức truyền thông cho các thiết bị IoT."
            },
            {
              "id": "paper1_p1_colL_b4_s6",
              "en": "In particular, the IETF CoRE Working Group standardized the Constrained Application Protocol (CoAP) [1], which allows applications to exchange information with IoT devices.",
              "vi": "Đặc biệt, Nhóm làm việc IETF CoRE đã chuẩn hóa Giao thức Ứng dụng Ràng buộc (CoAP) (CoAP) [1], cho phép các ứng dụng trao đổi thông tin với các thiết bị IoT."
            }
          ]
        },
        {
          "id": "paper1_p1_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. Vallati, G. Tanganelli, and E. Mingozzi are with the Department of Information Engineering, University of Pisa, Largo Lucio Lazzarino, 2, 56122, Pisa Italy. (e-mail: g.tanganelli@iet.unipi.it, c.vallati@iet.unipi.it, enzo.mingozzi@unipi.it).",
          "sentences": [
            {
              "id": "paper1_p1_colL_b5_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper1_p1_colL_b5_s1",
              "en": "Vallati, G.",
              "vi": "Vallati, G."
            },
            {
              "id": "paper1_p1_colL_b5_s2",
              "en": "Tanganelli, and E.",
              "vi": "Tanganelli và E."
            },
            {
              "id": "paper1_p1_colL_b5_s3",
              "en": "Mingozzi are with the Department of Information Engineering, University of Pisa, Largo Lucio Lazzarino, 2, 56122, Pisa Italy.",
              "vi": "Mingozzi làm việc tại Khoa Kỹ thuật Thông tin, Đại học Pisa, Largo Lucio Lazzarino, 2, 56122, Pisa Italy."
            },
            {
              "id": "paper1_p1_colL_b5_s4",
              "en": "(e-mail: g.tanganelli@iet.unipi.it, c.vallati@iet.unipi.it, enzo.mingozzi@unipi.it).",
              "vi": "(e-mail: g.tanganelli@iet.unipi.it, c.vallati@iet.unipi.it, enzo.mingozzi@unipi.it)."
            }
          ]
        },
        {
          "id": "paper1_p1_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "S. Bolettieri is with Institute of Informatics and Telematics (IIT)-CNR, 56124 Pisa, Italy (e-mail: s.bolettieri@iit.cnr.it).",
          "sentences": [
            {
              "id": "paper1_p1_colL_b6_s0",
              "en": "S.",
              "vi": "S."
            },
            {
              "id": "paper1_p1_colL_b6_s1",
              "en": "Bolettieri is with Institute of Informatics and Telematics (IIT)-CNR, 56124 Pisa, Italy (e-mail: s.bolettieri@iit.cnr.it).",
              "vi": "Bolettieri làm việc tại Viện Tin học và Viễn thông (IIT)-CNR, 56124 Pisa, Ý (e-mail: s.bolettieri@iit.cnr.it)."
            }
          ]
        },
        {
          "id": "paper1_p1_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi, pCoCoA: A precise congestion control algorithm for CoAP, Ad Hoc Networks, Volume 80, 2018, Pages 116-129, ISSN 1570-8705, https://doi.org/10.1016/j.adhoc.2018.06.015.",
          "sentences": [
            {
              "id": "paper1_p1_colL_b7_s0",
              "en": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi, pCoCoA: A precise congestion control algorithm for CoAP, Ad Hoc Networks, Volume 80, 2018, Pages 116-129, ISSN 1570-8705, https://doi.org/10.1016/j.adhoc.2018.06.015.",
              "vi": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi, pCoCoA: Thuật toán kiểm soát tắc nghẽn chính xác cho CoAP, Ad Hoc Networks, Tập 80, 2018, Trang 116-129, ISSN 1570-8705, https://doi.org/10.1016/j.adhoc.2018.06.015."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p1_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Considering the limited capabilities of nodes and the limited amount of bandwidth available in LLNs, congestion control is crucial to ensure proper and timely delivery of data. In traditional networks, application data is usually transported by the Transmission Control Protocol (TCP), which includes a congestion control mechanism. In LLNs, instead, CoAP employs the User Datagram Protocol (UDP), which does not provide any congestion control mechanism. For this reason, CoAP implements optional reliable data delivery through retransmissions and regulates the amount of data transmitted through a simple congestion avoidance mechanism. The definition of the latter, however, is not trivial: the shared nature of the wireless medium results in collisions of transmissions, and the limited buffer size of IoT devices often produces buffer overflows. Both phenomena can cause frequent packet losses that lead to further message retransmissions, which eventually lead to congestion.",
          "sentences": [
            {
              "id": "paper1_p1_colR_b0_s0",
              "en": "Considering the limited capabilities of nodes and the limited amount of bandwidth available in LLNs, congestion control is crucial to ensure proper and timely delivery of data.",
              "vi": "Xem xét khả năng hạn chế của các nút và lượng băng thông có sẵn trong LLN, kiểm soát tắc nghẽn là rất quan trọng để đảm bảo phân phối dữ liệu đúng cách và kịp thời."
            },
            {
              "id": "paper1_p1_colR_b0_s1",
              "en": "In traditional networks, application data is usually transported by the Transmission Control Protocol (TCP), which includes a congestion control mechanism.",
              "vi": "Trong các mạng truyền thống, dữ liệu ứng dụng thường được vận chuyển bằng Giao thức điều khiển truyền dẫn (TCP), bao gồm cơ chế kiểm soát tắc nghẽn."
            },
            {
              "id": "paper1_p1_colR_b0_s2",
              "en": "In LLNs, instead, CoAP employs the User Datagram Protocol (UDP), which does not provide any congestion control mechanism.",
              "vi": "Thay vào đó, trong LLN, CoAP sử dụng Giao thức gói dữ liệu người dùng (UDP), không cung cấp bất kỳ cơ chế kiểm soát tắc nghẽn nào."
            },
            {
              "id": "paper1_p1_colR_b0_s3",
              "en": "For this reason, CoAP implements optional reliable data delivery through retransmissions and regulates the amount of data transmitted through a simple congestion avoidance mechanism.",
              "vi": "Vì lý do này, CoAP triển khai việc phân phối dữ liệu đáng tin cậy tùy chọn thông qua việc truyền lại và điều chỉnh lượng dữ liệu được truyền qua cơ chế tránh tắc nghẽn đơn giản."
            },
            {
              "id": "paper1_p1_colR_b0_s4",
              "en": "The definition of the latter, however, is not trivial: the shared nature of the wireless medium results in collisions of transmissions, and the limited buffer size of IoT devices often produces buffer overflows.",
              "vi": "Tuy nhiên, định nghĩa sau không phải là tầm thường: bản chất chung của môi trường không dây dẫn đến xung đột truyền tải và kích thước bộ đệm hạn chế của các thiết bị IoT thường tạo ra lỗi tràn bộ đệm (buffer overflow)."
            },
            {
              "id": "paper1_p1_colR_b0_s5",
              "en": "Both phenomena can cause frequent packet losses that lead to further message retransmissions, which eventually lead to congestion.",
              "vi": "Cả hai hiện tượng này đều có thể gây ra hiện tượng mất gói tin thường xuyên, dẫn đến việc truyền lại tin nhắn nhiều hơn, cuối cùng dẫn đến tắc nghẽn."
            }
          ]
        },
        {
          "id": "paper1_p1_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Since CoAP defines only a basic congestion control mechanism, a new advanced congestion control have been proposed recently in [2], and further extended in [3]. Such algorithm, called CoCoA, is currently under standardization within the CoRE Working Group [8]. CoCoA exploits the measured round-trip time (RTT) between the client and the server to adjust the retransmission timeout and therefore avoid too frequent retransmissions. CoCoA has been originally evaluated against CoAP in [2] and [3], showing that it can improve the performance in terms of throughput, packet delivery ratio, and average delays.",
          "sentences": [
            {
              "id": "paper1_p1_colR_b1_s0",
              "en": "Since CoAP defines only a basic congestion control mechanism, a new advanced congestion control have been proposed recently in [2], and further extended in [3].",
              "vi": "Do CoAP chỉ xác định cơ chế kiểm soát tắc nghẽn cơ bản nên kiểm soát tắc nghẽn nâng cao mới đã được đề xuất gần đây trong [2] và được mở rộng thêm trong [3]."
            },
            {
              "id": "paper1_p1_colR_b1_s1",
              "en": "Such algorithm, called CoCoA, is currently under standardization within the CoRE Working Group [8].",
              "vi": "Thuật toán như vậy, được gọi là CoCoA, hiện đang được tiêu chuẩn hóa trong Nhóm làm việc CoRE [8]."
            },
            {
              "id": "paper1_p1_colR_b1_s2",
              "en": "CoCoA exploits the measured round-trip time (RTT) between the client and the server to adjust the retransmission timeout and therefore avoid too frequent retransmissions.",
              "vi": "CoCoA khai thác thời gian truyền khứ hồi (RTT) (RTT) đo được giữa máy khách và máy chủ để điều chỉnh thời gian chờ truyền lại (RTO) và do đó tránh truyền lại quá thường xuyên."
            },
            {
              "id": "paper1_p1_colR_b1_s3",
              "en": "CoCoA has been originally evaluated against CoAP in [2] and [3], showing that it can improve the performance in terms of throughput, packet delivery ratio, and average delays.",
              "vi": "CoCoA ban đầu đã được đánh giá dựa trên CoAP trong [2] và [3], cho thấy rằng nó có thể cải thiện hiệu suất về mặt thông lượng (throughput), tỷ lệ phân phối gói và độ trễ trung bình."
            }
          ]
        },
        {
          "id": "paper1_p1_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this work, we present an exhaustive performance evaluation of the CoCoA congestion control algorithm1. First, we present an evaluation of the algorithm considering two different scenarios, the first one with only CoAP traffic, and the second one in which CoAP traffic competes with interfering greedy traffic that is transmitted without rate control. An in-depth analysis of these simulation results allows us to highlight some novel critical issues of the algorithm. Consequently, we propose a set of modifications to the original algorithm to overcome these limitations. The resulting algorithm, named pCoCoA, is evaluated against CoAP, CoCoA+ and two more recent algorithms: 4-state-strong [7] and CoCoA-E [14]. Results demonstrated that pCoCoA effectively mitigates the issues of the original algorithm, reducing the overall number of retransmissions",
          "sentences": [
            {
              "id": "paper1_p1_colR_b2_s0",
              "en": "In this work, we present an exhaustive performance evaluation of the CoCoA congestion control algorithm1.",
              "vi": "Trong công việc này, chúng tôi trình bày đánh giá hiệu suất toàn diện của thuật toán kiểm soát tắc nghẽn CoCoA1."
            },
            {
              "id": "paper1_p1_colR_b2_s1",
              "en": "First, we present an evaluation of the algorithm considering two different scenarios, the first one with only CoAP traffic, and the second one in which CoAP traffic competes with interfering greedy traffic that is transmitted without rate control.",
              "vi": "Đầu tiên, chúng tôi trình bày đánh giá thuật toán xem xét hai kịch bản khác nhau, kịch bản thứ nhất chỉ có lưu lượng CoAP và kịch bản thứ hai trong đó lưu lượng CoAP cạnh tranh với việc gây nhiễu lưu lượng truy cập tham lam được truyền mà không kiểm soát tốc độ."
            },
            {
              "id": "paper1_p1_colR_b2_s2",
              "en": "An in-depth analysis of these simulation results allows us to highlight some novel critical issues of the algorithm.",
              "vi": "Phân tích chuyên sâu về các kết quả mô phỏng này cho phép chúng tôi nêu bật một số vấn đề quan trọng mới của thuật toán."
            },
            {
              "id": "paper1_p1_colR_b2_s3",
              "en": "Consequently, we propose a set of modifications to the original algorithm to overcome these limitations.",
              "vi": "Do đó, chúng tôi đề xuất một bộ sửa đổi cho thuật toán ban đầu để khắc phục những hạn chế này."
            },
            {
              "id": "paper1_p1_colR_b2_s4",
              "en": "The resulting algorithm, named pCoCoA, is evaluated against CoAP, CoCoA+ and two more recent algorithms: 4-state-strong [7] and CoCoA-E [14].",
              "vi": "Thuật toán kết quả, được đặt tên là pCoCoA, được đánh giá dựa trên CoAP, CoCoA+ và hai thuật toán gần đây hơn: mạnh 4 trạng thái [7] và CoCoA-E [14]."
            },
            {
              "id": "paper1_p1_colR_b2_s5",
              "en": "Results demonstrated that pCoCoA effectively mitigates the issues of the original algorithm, reducing the overall number of retransmissions",
              "vi": "Kết quả đã chứng minh rằng pCoCoA giảm thiểu một cách hiệu quả các vấn đề của thuật toán ban đầu, giảm tổng số lần truyền lại"
            }
          ]
        },
        {
          "id": "paper1_p1_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "1 A preliminary performance evaluation has been presented in a conference paper [13]. In this initial contribution, we only considered a scenario with CoAP traffic with periodic rate.",
          "sentences": [
            {
              "id": "paper1_p1_colR_b3_s0",
              "en": "1 A preliminary performance evaluation has been presented in a conference paper [13].",
              "vi": "1 Đánh giá hiệu suất sơ bộ đã được trình bày trong một bài báo hội nghị [13]."
            },
            {
              "id": "paper1_p1_colR_b3_s1",
              "en": "In this initial contribution, we only considered a scenario with CoAP traffic with periodic rate.",
              "vi": "Trong đóng góp ban đầu này, chúng tôi chỉ xem xét một kịch bản có lưu lượng truy cập CoAP với tốc độ định kỳ."
            }
          ]
        }
      ]
    },
    {
      "page_num": 2,
      "page_image": "assets/p1_page_2.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p2_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "while keeping throughputs and delays comparable to those obtained with CoAP, CoCoA, CoCoA-E and 4-state-strong. Moreover, pCoCoA can correctly handle scenarios in which CoAP traffic competes with interfering bursty traffic, whereas other algorithms, such as CoCoA-E, do not. To summarize, the contributions of this work are the following:",
          "sentences": [
            {
              "id": "paper1_p2_colL_b0_s0",
              "en": "while keeping throughputs and delays comparable to those obtained with CoAP, CoCoA, CoCoA-E and 4-state-strong.",
              "vi": "đồng thời duy trì thông lượng (throughput) và độ trễ tương đương với thông lượng (throughput) thu được với CoAP, CoCoA, CoCoA-E và 4 trạng thái mạnh."
            },
            {
              "id": "paper1_p2_colL_b0_s1",
              "en": "Moreover, pCoCoA can correctly handle scenarios in which CoAP traffic competes with interfering bursty traffic, whereas other algorithms, such as CoCoA-E, do not.",
              "vi": "Hơn nữa, pCoCoA có thể xử lý chính xác các tình huống trong đó lưu lượng CoAP cạnh tranh với lưu lượng truy cập bùng nổ gây nhiễu, trong khi các thuật toán khác, chẳng hạn như CoCoA-E, thì không."
            },
            {
              "id": "paper1_p2_colL_b0_s2",
              "en": "To summarize, the contributions of this work are the following:",
              "vi": "Tóm lại, những đóng góp của công việc này là như sau:"
            }
          ]
        },
        {
          "id": "paper1_p2_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• An extended performance evaluation of CoCoA considering two different traffic scenarios: one adopting CoAP periodic traffic, and a second one with periodic traffic sources competing with interfering bursty traffic sources. The analysis of the CoCoA behavior allowed highlighting novel issues of the CoCoA algorithm. • A novel congestion control algorithm derived from CoCoA named pCoCoA, defined to overcome the limitations highlighted. The proposed congestion control algorithm is evaluated against protocols from the literature. The rest of the paper is structured as follows. In Section II a short description of CoCoA is provided. Section III highlights the related work. Section IV introduces the methodology adopted and analyzes the performance evaluation results. Section V summarizes the main issues identified by their in-depth analysis. In Section VI we present the proposed pCoCoA algorithm, while in Section VII we present the results of its performance evaluation. Finally, in Section VIII we draw the conclusions.",
          "sentences": [
            {
              "id": "paper1_p2_colL_b1_s0",
              "en": "• An extended performance evaluation of CoCoA considering two different traffic scenarios: one adopting CoAP periodic traffic, and a second one with periodic traffic sources competing with interfering bursty traffic sources.",
              "vi": "• Đánh giá hiệu suất mở rộng của CoCoA xem xét hai kịch bản lưu lượng truy cập khác nhau: một kịch bản áp dụng lưu lượng truy cập định kỳ CoAP và kịch bản thứ hai với các nguồn lưu lượng truy cập định kỳ cạnh tranh với các nguồn lưu lượng truy cập bùng nổ gây nhiễu."
            },
            {
              "id": "paper1_p2_colL_b1_s1",
              "en": "The analysis of the CoCoA behavior allowed highlighting novel issues of the CoCoA algorithm. • A novel congestion control algorithm derived from CoCoA named pCoCoA, defined to overcome the limitations highlighted.",
              "vi": "Việc phân tích hành vi CoCoA cho phép nêu bật các vấn đề mới của thuật toán CoCoA. • Một thuật toán kiểm soát tắc nghẽn mới có nguồn gốc từ CoCoA có tên pCoCoA, được xác định để khắc phục các hạn chế được nêu rõ."
            },
            {
              "id": "paper1_p2_colL_b1_s2",
              "en": "The proposed congestion control algorithm is evaluated against protocols from the literature.",
              "vi": "Thuật toán kiểm soát tắc nghẽn được đề xuất được đánh giá dựa trên các giao thức từ tài liệu."
            },
            {
              "id": "paper1_p2_colL_b1_s3",
              "en": "The rest of the paper is structured as follows.",
              "vi": "Phần còn lại của bài viết được cấu trúc như sau."
            },
            {
              "id": "paper1_p2_colL_b1_s4",
              "en": "In Section II a short description of CoCoA is provided.",
              "vi": "Phần II cung cấp mô tả ngắn gọn về CoCoA."
            },
            {
              "id": "paper1_p2_colL_b1_s5",
              "en": "Section III highlights the related work.",
              "vi": "Phần III nêu bật các công việc liên quan."
            },
            {
              "id": "paper1_p2_colL_b1_s6",
              "en": "Section IV introduces the methodology adopted and analyzes the performance evaluation results.",
              "vi": "Phần IV giới thiệu phương pháp được áp dụng và phân tích kết quả đánh giá hiệu quả hoạt động."
            },
            {
              "id": "paper1_p2_colL_b1_s7",
              "en": "Section V summarizes the main issues identified by their in-depth analysis.",
              "vi": "Phần V tóm tắt các vấn đề chính được xác định bằng phân tích chuyên sâu."
            },
            {
              "id": "paper1_p2_colL_b1_s8",
              "en": "In Section VI we present the proposed pCoCoA algorithm, while in Section VII we present the results of its performance evaluation.",
              "vi": "Trong Phần VI, chúng tôi trình bày thuật toán pCoCoA được đề xuất, trong khi ở Phần VII, chúng tôi trình bày kết quả đánh giá hiệu suất của nó."
            },
            {
              "id": "paper1_p2_colL_b1_s9",
              "en": "Finally, in Section VIII we draw the conclusions.",
              "vi": "Cuối cùng, trong Phần VIII chúng tôi rút ra kết luận."
            }
          ]
        },
        {
          "id": "paper1_p2_colL_b2",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "II. COCOA+ CONGESTION CONTROL",
          "sentences": [
            {
              "id": "paper1_p2_colL_b2_s0",
              "en": "II.",
              "vi": "II."
            },
            {
              "id": "paper1_p2_colL_b2_s1",
              "en": "COCOA+ CONGESTION CONTROL",
              "vi": "KIỂM SOÁT TUYỆT VỜI COCOA+"
            }
          ]
        },
        {
          "id": "paper1_p2_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The Simple Congestion Control/Advanced, also known as CoCoA, is an alternative congestion control algorithm for CoAP originally proposed in [2] and now currently under standardization within the activities of the CoRE Working Group [8]. Different versions of the algorithm have been proposed over time, including minor modifications that helped improving the performance. In this work we consider its last revision, CoCoA+ [3]. The algorithm is composed of the following three main functions:",
          "sentences": [
            {
              "id": "paper1_p2_colL_b3_s0",
              "en": "The Simple Congestion Control/Advanced, also known as CoCoA, is an alternative congestion control algorithm for CoAP originally proposed in [2] and now currently under standardization within the activities of the CoRE Working Group [8].",
              "vi": "Kiểm soát tắc nghẽn đơn giản/Nâng cao, còn được gọi là CoCoA, là một thuật toán kiểm soát tắc nghẽn thay thế cho CoAP ban đầu được đề xuất trong [2] và hiện đang được tiêu chuẩn hóa trong các hoạt động của Nhóm làm việc CoRE [8]."
            },
            {
              "id": "paper1_p2_colL_b3_s1",
              "en": "Different versions of the algorithm have been proposed over time, including minor modifications that helped improving the performance.",
              "vi": "Các phiên bản khác nhau của thuật toán đã được đề xuất theo thời gian, bao gồm những sửa đổi nhỏ giúp cải thiện hiệu suất."
            },
            {
              "id": "paper1_p2_colL_b3_s2",
              "en": "In this work we consider its last revision, CoCoA+ [3].",
              "vi": "Trong công việc này, chúng tôi xem xét bản sửa đổi cuối cùng của nó, CoCoA+ [3]."
            },
            {
              "id": "paper1_p2_colL_b3_s3",
              "en": "The algorithm is composed of the following three main functions:",
              "vi": "Thuật toán bao gồm ba chức năng chính sau:"
            }
          ]
        },
        {
          "id": "paper1_p2_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• a policy to calculate the retransmission timeout (RTO), • the back-off policy to set the RTO for retransmissions, and • an ageing policy for the status information. We briefly describe in the following the CoCoA+ algorithm yet with enough details to allow the reader understand the subsequent in-depth analysis. We refer to [3] for a comprehensive illustration of the algorithm and the rationale behind it.",
          "sentences": [
            {
              "id": "paper1_p2_colL_b4_s0",
              "en": "• a policy to calculate the retransmission timeout (RTO), • the back-off policy to set the RTO for retransmissions, and • an ageing policy for the status information.",
              "vi": "• chính sách tính toán thời gian chờ truyền lại (RTO) (RTO), • chính sách lùi để đặt RTO cho các lần truyền lại, và • chính sách lão hóa đối với thông tin trạng thái."
            },
            {
              "id": "paper1_p2_colL_b4_s1",
              "en": "We briefly describe in the following the CoCoA+ algorithm yet with enough details to allow the reader understand the subsequent in-depth analysis.",
              "vi": "Chúng tôi mô tả ngắn gọn thuật toán CoCoA+ sau đây với đủ chi tiết để người đọc hiểu được phân tích chuyên sâu tiếp theo."
            },
            {
              "id": "paper1_p2_colL_b4_s2",
              "en": "We refer to [3] for a comprehensive illustration of the algorithm and the rationale behind it.",
              "vi": "Chúng tôi tham khảo [3] để có minh họa toàn diện về thuật toán và lý do căn bản đằng sau nó."
            }
          ]
        },
        {
          "id": "paper1_p2_colL_b5",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. RTO calculation",
          "sentences": [
            {
              "id": "paper1_p2_colL_b5_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p2_colL_b5_s1",
              "en": "RTO calculation",
              "vi": "Tính toán RTO"
            }
          ]
        },
        {
          "id": "paper1_p2_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In order to calculate the RTO, CoCoA+ adopts the same algorithm used by TCP, which updates the RTO value based on measured Round Trip Times (RTTs). According to Karn's algorithm [9], the RTT measurements should be considered only when the message was correctly delivered without retransmissions. In the context of lossy networks, however, many transmissions are expected to experience retransmissions, thus reducing the probability of obtaining valid RTT measurements. For this reason, CoCoA+ considers also transactions that experienced retransmissions to obtain a more accurate RTT estimation. Specifically, two RTO values are calculated: a strong",
          "sentences": [
            {
              "id": "paper1_p2_colL_b6_s0",
              "en": "In order to calculate the RTO, CoCoA+ adopts the same algorithm used by TCP, which updates the RTO value based on measured Round Trip Times (RTTs).",
              "vi": "Để tính toán RTO, CoCoA+ sử dụng cùng một thuật toán được TCP sử dụng, thuật toán này cập nhật giá trị RTO dựa trên thời gian truyền khứ hồi (RTT) (RTT) đo được."
            },
            {
              "id": "paper1_p2_colL_b6_s1",
              "en": "According to Karn's algorithm [9], the RTT measurements should be considered only when the message was correctly delivered without retransmissions.",
              "vi": "Theo thuật toán của Karn [9], các phép đo RTT chỉ nên được xem xét khi tin nhắn được gửi chính xác mà không cần truyền lại."
            },
            {
              "id": "paper1_p2_colL_b6_s2",
              "en": "In the context of lossy networks, however, many transmissions are expected to experience retransmissions, thus reducing the probability of obtaining valid RTT measurements.",
              "vi": "Tuy nhiên, trong bối cảnh mạng bị tổn thất, nhiều lần truyền được dự kiến ​​sẽ gặp phải tình trạng truyền lại, do đó làm giảm xác suất thu được các phép đo RTT hợp lệ."
            },
            {
              "id": "paper1_p2_colL_b6_s3",
              "en": "For this reason, CoCoA+ considers also transactions that experienced retransmissions to obtain a more accurate RTT estimation.",
              "vi": "Vì lý do này, CoCoA+ cũng xem xét các giao dịch đã trải qua quá trình truyền lại để có được ước tính RTT chính xác hơn."
            },
            {
              "id": "paper1_p2_colL_b6_s4",
              "en": "Specifically, two RTO values are calculated: a strong",
              "vi": "Cụ thể, hai giá trị RTO được tính toán: giá trị mạnh"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p2_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "RTO, estimated using RTTs samples from transactions that did not required any retransmission, and a weak RTO, estimated using RTT values of transactions that required no more than two transmissions. Considering that it is not possible to know for an ACK to which transmission it belongs to, RTT samples are collected measuring the time between the first transmission and the arrival of the response, but only if two retransmissions at most are required.",
          "sentences": [
            {
              "id": "paper1_p2_colR_b0_s0",
              "en": "RTO, estimated using RTTs samples from transactions that did not required any retransmission, and a weak RTO, estimated using RTT values of transactions that required no more than two transmissions.",
              "vi": "RTO, được ước tính bằng cách sử dụng các mẫu RTT từ các giao dịch không yêu cầu truyền lại và RTO yếu, được ước tính bằng cách sử dụng các giá trị RTT của các giao dịch yêu cầu không quá hai lần truyền."
            },
            {
              "id": "paper1_p2_colR_b0_s1",
              "en": "Considering that it is not possible to know for an ACK to which transmission it belongs to, RTT samples are collected measuring the time between the first transmission and the arrival of the response, but only if two retransmissions at most are required.",
              "vi": "Xem xét rằng không thể biết ACK thuộc về đường truyền nào, các mẫu RTT được thu thập để đo thời gian giữa lần truyền đầu tiên và thời điểm nhận được phản hồi, nhưng chỉ khi yêu cầu tối đa hai lần truyền lại."
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "For each destination, a node maintains the following quantities:",
          "sentences": [
            {
              "id": "paper1_p2_colR_b1_s0",
              "en": "For each destination, a node maintains the following quantities:",
              "vi": "Đối với mỗi đích, một nút duy trì số lượng sau:"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• two smoothed mean RTT estimators: RTTstrong and RTTweak, • two smoothed mean variance, called RTTVARstrong and RTTVARweak, • two RTO estimators, called RTOstrong and RTOweak, derived from the strong and weak RTT estimators, respectively, and • a comprehensive RTO, called RTOoverall, which keeps track of both RTOstrong and RTOweak changes. Initially, the RTO estimators are initialized with a default value of 2s. The value of the other RTTx and RTTVARx parameters are initialized when the first corresponding RTT value R is measured as follows:",
          "sentences": [
            {
              "id": "paper1_p2_colR_b2_s0",
              "en": "• two smoothed mean RTT estimators: RTTstrong and RTTweak, • two smoothed mean variance, called RTTVARstrong and RTTVARweak, • two RTO estimators, called RTOstrong and RTOweak, derived from the strong and weak RTT estimators, respectively, and • a comprehensive RTO, called RTOoverall, which keeps track of both RTOstrong and RTOweak changes.",
              "vi": "• hai công cụ ước tính RTT trung bình được làm mịn: RTTstrong và RTTweak, • hai phương sai trung bình được làm mịn, được gọi là RTTVARstrong và RTTVARweak, • hai công cụ ước tính RTO, được gọi là RTOstrong và RTOweak, lần lượt xuất phát từ các công cụ ước tính RTT mạnh và yếu, và • một RTO toàn diện, được gọi là RTOoverall, theo dõi các thay đổi của cả RTOstrong và RTOweak."
            },
            {
              "id": "paper1_p2_colR_b2_s1",
              "en": "Initially, the RTO estimators are initialized with a default value of 2s.",
              "vi": "Ban đầu, các bộ ước tính RTO được khởi tạo với giá trị mặc định là 2 giây."
            },
            {
              "id": "paper1_p2_colR_b2_s2",
              "en": "The value of the other RTTx and RTTVARx parameters are initialized when the first corresponding RTT value R is measured as follows:",
              "vi": "Giá trị của các tham số RTTx và RTTVARx khác được khởi tạo khi giá trị RTT tương ứng đầu tiên được đo như sau:"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝑅𝑇𝑇𝑥←𝑅,       𝑅𝑇𝑇𝑉𝐴𝑅𝑥←𝑅",
          "sentences": [
            {
              "id": "paper1_p2_colR_b3_s0",
              "en": "𝑅𝑇𝑇𝑥←𝑅,       𝑅𝑇𝑇𝑉𝐴𝑅𝑥←𝑅",
              "vi": "𝑅𝑇𝑇𝑥←𝑅, 𝑅𝑇𝑇𝑉𝐴𝑅𝑥←𝑅"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "2 (1)",
          "sentences": [
            {
              "id": "paper1_p2_colR_b4_s0",
              "en": "2 (1)",
              "vi": "2 (1)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Every time a new RTT sample R is measured, the corresponding strong or weak estimators (based on the number of retransmissions) are updated as follows:",
          "sentences": [
            {
              "id": "paper1_p2_colR_b5_s0",
              "en": "Every time a new RTT sample R is measured, the corresponding strong or weak estimators (based on the number of retransmissions) are updated as follows:",
              "vi": "Mỗi lần đo mẫu RTT mới, các công cụ ước tính mạnh hoặc yếu tương ứng (dựa trên số lần truyền lại) sẽ được cập nhật như sau:"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑇𝑥= (1 −𝛼)𝑅𝑇𝑇𝑥+ 𝛼𝑅 (2)",
          "sentences": [
            {
              "id": "paper1_p2_colR_b6_s0",
              "en": "𝑅𝑇𝑇𝑥= (1 −𝛼)𝑅𝑇𝑇𝑥+ 𝛼𝑅 (2)",
              "vi": "𝑅𝑇𝑇𝑥= (1 −𝛼)𝑅𝑇𝑇𝑥+ 𝛼𝑅 (2)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑇𝑉𝐴𝑅𝑥= (1 −𝛽)𝑅𝑇𝑇𝑉𝐴𝑅𝑥+ 𝛽|𝑅𝑇𝑇𝑥−𝑅| (3)",
          "sentences": [
            {
              "id": "paper1_p2_colR_b7_s0",
              "en": "𝑅𝑇𝑇𝑉𝐴𝑅𝑥= (1 −𝛽)𝑅𝑇𝑇𝑉𝐴𝑅𝑥+ 𝛽|𝑅𝑇𝑇𝑥−𝑅| (3)",
              "vi": "𝑅𝑇𝑇𝑉𝐴𝑅𝑥= (1 −𝛽)𝑅𝑇𝑇𝑉𝐴𝑅𝑥+ 𝛽|𝑅𝑇𝑇𝑥−𝑅| (3)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂𝑥= 𝑅𝑇𝑇𝑥+ 𝐾𝑥𝑅𝑇𝑇𝑉𝐴𝑅𝑥 (4)",
          "sentences": [
            {
              "id": "paper1_p2_colR_b8_s0",
              "en": "𝑅𝑇𝑂𝑥= 𝑅𝑇𝑇𝑥+ 𝐾𝑥𝑅𝑇𝑇𝑉𝐴𝑅𝑥 (4)",
              "vi": "𝑅𝑇𝑂𝑥= 𝑅𝑇𝑇𝑥+ 𝐾𝑥𝑅𝑇𝑇𝑉𝐴𝑅𝑥 (4)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= 𝜆𝑥𝑅𝑇𝑂𝑥+ (1 −𝜆𝑥)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙 (5)",
          "sentences": [
            {
              "id": "paper1_p2_colR_b9_s0",
              "en": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= 𝜆𝑥𝑅𝑇𝑂𝑥+ (1 −𝜆𝑥)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙 (5)",
              "vi": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= 𝜆𝑥𝑅𝑇𝑂𝑥+ (1 −𝜆𝑥)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙 (5)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "where the following values are recommended: α=0.125, β=0.25, Kstrong =4,  Kweak=1, λstrong =0.5, and λweak =0.25. RTOover-",
          "sentences": [
            {
              "id": "paper1_p2_colR_b10_s0",
              "en": "where the following values are recommended: α=0.125, β=0.25, Kstrong =4,  Kweak=1, λstrong =0.5, and λweak =0.25.",
              "vi": "trong đó khuyến nghị các giá trị sau: α=0,125, β=0,25, Kstrong =4, Kweak=1, λstrong =0,5 và λweak =0,25."
            },
            {
              "id": "paper1_p2_colR_b10_s1",
              "en": "RTOover-",
              "vi": "RTOover-"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "all is used to set the initial RTO (RTOinit) for the next CON transmission. The actual value is selected using a dithering approach, i.e., RTOinit is randomly chosen from the interval [RTOoverall , 1.5∙RTOoverall].",
          "sentences": [
            {
              "id": "paper1_p2_colR_b11_s0",
              "en": "all is used to set the initial RTO (RTOinit) for the next CON transmission.",
              "vi": "tất cả được sử dụng để đặt RTO ban đầu (RTOinit) cho lần truyền CON tiếp theo."
            },
            {
              "id": "paper1_p2_colR_b11_s1",
              "en": "The actual value is selected using a dithering approach, i.e., RTOinit is randomly chosen from the interval [RTOoverall , 1.5∙RTOoverall].",
              "vi": "Giá trị thực tế được chọn bằng cách sử dụng phương pháp phối màu, tức là RTOinit được chọn ngẫu nhiên từ khoảng [RTOoverall , 1,5∙RTOoverall]."
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b12",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Backoff policy",
          "sentences": [
            {
              "id": "paper1_p2_colR_b12_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper1_p2_colR_b12_s1",
              "en": "Backoff policy",
              "vi": "Chính sách hoàn trả"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoCoA+ introduces a backoff mechanism to set the retransmission timeout. Compared to CoAP, in which the RTO is doubled, CoCoA+ computes the new RTO value for retransmissions according to a variable backoff factor (VBF) that depends on the initial RTO value RTOinit . Specifically, the new value of RTO for retransmissions RTOnew is evaluated as follows:",
          "sentences": [
            {
              "id": "paper1_p2_colR_b13_s0",
              "en": "CoCoA+ introduces a backoff mechanism to set the retransmission timeout.",
              "vi": "CoCoA+ giới thiệu cơ chế chờ để đặt thời gian chờ truyền lại (RTO)."
            },
            {
              "id": "paper1_p2_colR_b13_s1",
              "en": "Compared to CoAP, in which the RTO is doubled, CoCoA+ computes the new RTO value for retransmissions according to a variable backoff factor (VBF) that depends on the initial RTO value RTOinit .",
              "vi": "So với CoAP, trong đó RTO được nhân đôi, CoCoA+ tính toán giá trị RTO mới cho các lần truyền lại theo hệ số thoái lui (backoff factor) thay đổi (VBF) phụ thuộc vào giá trị RTO ban đầu RTOinit."
            },
            {
              "id": "paper1_p2_colR_b13_s2",
              "en": "Specifically, the new value of RTO for retransmissions RTOnew is evaluated as follows:",
              "vi": "Cụ thể, giá trị mới của RTO cho các lần truyền lại RTOnew được đánh giá như sau:"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂𝑛𝑒𝑤= 𝑅𝑇𝑂𝑝𝑟𝑒𝑣𝑖𝑜𝑢𝑠∗𝑉𝐵𝐹(𝑅𝑇𝑂𝑖𝑛𝑖𝑡) (6)",
          "sentences": [
            {
              "id": "paper1_p2_colR_b14_s0",
              "en": "𝑅𝑇𝑂𝑛𝑒𝑤= 𝑅𝑇𝑂𝑝𝑟𝑒𝑣𝑖𝑜𝑢𝑠∗𝑉𝐵𝐹(𝑅𝑇𝑂𝑖𝑛𝑖𝑡) (6)",
              "vi": "𝑅𝑇𝑂𝑛𝑒𝑤= 𝑅𝑇𝑂𝑝𝑟𝑒𝑣𝑖𝑜𝑢𝑠∗𝑉𝐵𝐹(𝑅𝑇𝑂𝑖𝑛𝑖𝑡) (6)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b15",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The VBF factor is set according to RTOinit to avoid frequent retransmissions in a short time when the RTO value is low, and to avoid long delays in retransmissions when the RTO value is large, instead.",
          "sentences": [
            {
              "id": "paper1_p2_colR_b15_s0",
              "en": "The VBF factor is set according to RTOinit to avoid frequent retransmissions in a short time when the RTO value is low, and to avoid long delays in retransmissions when the RTO value is large, instead.",
              "vi": "Hệ số VBF được đặt theo RTOinit để tránh việc truyền lại thường xuyên trong thời gian ngắn khi giá trị RTO thấp và thay vào đó, để tránh độ trễ kéo dài khi truyền lại khi giá trị RTO lớn."
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b16",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. Information aging",
          "sentences": [
            {
              "id": "paper1_p2_colR_b16_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper1_p2_colR_b16_s1",
              "en": "Information aging",
              "vi": "cơ chế làm cũ / lão hóa thông tin (information aging)"
            }
          ]
        },
        {
          "id": "paper1_p2_colR_b17",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoCoA+ introduces a mechanism to age RTO values when RTT updates are not received for a certain time. The rationale",
          "sentences": [
            {
              "id": "paper1_p2_colR_b17_s0",
              "en": "CoCoA+ introduces a mechanism to age RTO values when RTT updates are not received for a certain time.",
              "vi": "CoCoA+ giới thiệu cơ chế giảm giá trị RTO khi không nhận được bản cập nhật RTT trong một thời gian nhất định."
            },
            {
              "id": "paper1_p2_colR_b17_s1",
              "en": "The rationale",
              "vi": "Lý do căn bản"
            }
          ]
        }
      ]
    },
    {
      "page_num": 3,
      "page_image": "assets/p1_page_3.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p3_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": true,
          "table_img": "assets/p1_table1.png",
          "is_equation": false,
          "raw_text": "TABLE I CONGESTION CONTROL ALGORITHMS",
          "sentences": [
            {
              "id": "paper1_p3_colL_b0_s0",
              "en": "TABLE I CONGESTION CONTROL ALGORITHMS",
              "vi": "BẢNG I Thuật toán kiểm soát tắc nghẽn"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Name Backoff Method",
          "sentences": [
            {
              "id": "paper1_p3_colL_b1_s0",
              "en": "Name Backoff Method",
              "vi": "Phương pháp lùi tên"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "RTT Estimators",
          "sentences": [
            {
              "id": "paper1_p3_colL_b2_s0",
              "en": "RTT Estimators",
              "vi": "Công cụ ước tính RTT"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "RTO aging",
          "sentences": [
            {
              "id": "paper1_p3_colL_b3_s0",
              "en": "RTO aging",
              "vi": "RTO lão hóa"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Derived",
          "sentences": [
            {
              "id": "paper1_p3_colL_b4_s0",
              "en": "Derived",
              "vi": "bắt nguồn"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "from",
          "sentences": [
            {
              "id": "paper1_p3_colL_b5_s0",
              "en": "from",
              "vi": "từ"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP BBF None No None CoCoA VBF Strong & Weak",
          "sentences": [
            {
              "id": "paper1_p3_colL_b6_s0",
              "en": "CoAP BBF None No None CoCoA VBF Strong & Weak",
              "vi": "CoAP BBF Không Không Không CoCoA VBF Mạnh & Yếu"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Yes LinuxRTO",
          "sentences": [
            {
              "id": "paper1_p3_colL_b7_s0",
              "en": "Yes LinuxRTO",
              "vi": "Có LinuxRTO"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoCoA-S VBF Strong Yes CoCoA CoCoA-E VBF Strong & Weak",
          "sentences": [
            {
              "id": "paper1_p3_colL_b8_s0",
              "en": "CoCoA-S VBF Strong Yes CoCoA CoCoA-E VBF Strong & Weak",
              "vi": "CoCoA-S VBF Mạnh Có CoCoA CoCoA-E VBF Mạnh & Yếu"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Yes CoCoA & Eifel 4-state-strong VBF Four estimators",
          "sentences": [
            {
              "id": "paper1_p3_colL_b9_s0",
              "en": "Yes CoCoA & Eifel 4-state-strong VBF Four estimators",
              "vi": "Có CoCoA & Eifel Bốn công cụ ước tính VBF mạnh 4 trạng thái"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Yes CoCoA",
          "sentences": [
            {
              "id": "paper1_p3_colL_b10_s0",
              "en": "Yes CoCoA",
              "vi": "Có, CoCoA"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "is that the RTO estimation becomes obsolete after a certain time and should converge towards the initial value. Specifically, if RTOoverall is larger than the base RTO defined in CoAP, which is set by default to 2s, and it is not updated for more than 30s, when a new measurement is obtained the following formula is applied:",
          "sentences": [
            {
              "id": "paper1_p3_colL_b11_s0",
              "en": "is that the RTO estimation becomes obsolete after a certain time and should converge towards the initial value.",
              "vi": "là ước tính RTO trở nên lỗi thời sau một thời gian nhất định và sẽ hội tụ về giá trị ban đầu."
            },
            {
              "id": "paper1_p3_colL_b11_s1",
              "en": "Specifically, if RTOoverall is larger than the base RTO defined in CoAP, which is set by default to 2s, and it is not updated for more than 30s, when a new measurement is obtained the following formula is applied:",
              "vi": "Cụ thể, nếu RTO tổng thể lớn hơn RTO cơ sở được xác định trong CoAP, được đặt theo mặc định là 2 giây và không được cập nhật trong hơn 30 giây, thì khi thu được phép đo mới, công thức sau sẽ được áp dụng:"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "2 (7)",
          "sentences": [
            {
              "id": "paper1_p3_colL_b12_s0",
              "en": "2 (7)",
              "vi": "2 (7)"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= 2 + 𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙",
          "sentences": [
            {
              "id": "paper1_p3_colL_b13_s0",
              "en": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= 2 + 𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙",
              "vi": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= 2 + 𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "If RTOoverall is, instead, less than 1s, and it is not updated for a time that is 16 times its actual value, RTOoverall is reset to 1s.",
          "sentences": [
            {
              "id": "paper1_p3_colL_b14_s0",
              "en": "If RTOoverall is, instead, less than 1s, and it is not updated for a time that is 16 times its actual value, RTOoverall is reset to 1s.",
              "vi": "Thay vào đó, nếu RTOoverall nhỏ hơn 1 giây và không được cập nhật trong khoảng thời gian gấp 16 lần giá trị thực của nó thì RTOoverall được đặt lại thành 1 giây."
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b15",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "III. RELATED WORK",
          "sentences": [
            {
              "id": "paper1_p3_colL_b15_s0",
              "en": "III.",
              "vi": "III."
            },
            {
              "id": "paper1_p3_colL_b15_s1",
              "en": "RELATED WORK",
              "vi": "CÔNG VIỆC LIÊN QUAN"
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b16",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Many recent works focused on evaluating the performance of CoCoA per se. In [4], for instance, CoCoA is evaluated in a typical large-scale IoT scenario in which GPRS is employed to connect IoT nodes. The authors compared CoCoA against other congestion control mechanisms defined for TCP applications. Results showed that CoCoA performs equally or better than TCP-based algorithms. Similar conclusions were drawn in [5], where the authors compared CoCoA to other TCP-based congestion control mechanisms on an emulated Zigbee network. In [6], the authors evaluated CoCoA by means of simulations considering different traffic patterns. Similar to our work, the authors highlighted the poor performance of CoCoA with bursty traffic due to the improper selection of the retransmission timeout value.",
          "sentences": [
            {
              "id": "paper1_p3_colL_b16_s0",
              "en": "Many recent works focused on evaluating the performance of CoCoA per se.",
              "vi": "Nhiều công trình gần đây tập trung vào việc đánh giá hiệu suất của CoCoA."
            },
            {
              "id": "paper1_p3_colL_b16_s1",
              "en": "In [4], for instance, CoCoA is evaluated in a typical large-scale IoT scenario in which GPRS is employed to connect IoT nodes.",
              "vi": "Ví dụ, trong [4], CoCoA được đánh giá theo kịch bản IoT quy mô lớn điển hình trong đó GPRS được sử dụng để kết nối các nút IoT."
            },
            {
              "id": "paper1_p3_colL_b16_s2",
              "en": "The authors compared CoCoA against other congestion control mechanisms defined for TCP applications.",
              "vi": "Các tác giả đã so sánh CoCoA với các cơ chế kiểm soát tắc nghẽn khác được xác định cho các ứng dụng TCP."
            },
            {
              "id": "paper1_p3_colL_b16_s3",
              "en": "Results showed that CoCoA performs equally or better than TCP-based algorithms.",
              "vi": "Kết quả cho thấy CoCoA hoạt động tương đương hoặc tốt hơn các thuật toán dựa trên TCP."
            },
            {
              "id": "paper1_p3_colL_b16_s4",
              "en": "Similar conclusions were drawn in [5], where the authors compared CoCoA to other TCP-based congestion control mechanisms on an emulated Zigbee network.",
              "vi": "Các kết luận tương tự đã được rút ra trong [5], trong đó các tác giả so sánh CoCoA với các cơ chế kiểm soát tắc nghẽn dựa trên TCP khác trên mạng Zigbee mô phỏng."
            },
            {
              "id": "paper1_p3_colL_b16_s5",
              "en": "In [6], the authors evaluated CoCoA by means of simulations considering different traffic patterns.",
              "vi": "Trong [6], các tác giả đã đánh giá CoCoA bằng phương pháp mô phỏng xem xét các mẫu lưu lượng truy cập khác nhau."
            },
            {
              "id": "paper1_p3_colL_b16_s6",
              "en": "Similar to our work, the authors highlighted the poor performance of CoCoA with bursty traffic due to the improper selection of the retransmission timeout value.",
              "vi": "Tương tự như công việc của chúng tôi, các tác giả nhấn mạnh hiệu suất kém của CoCoA với lưu lượng truy cập tăng vọt do lựa chọn giá trị thời gian chờ truyền lại (RTO) không đúng."
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b17",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Recently, other works proposed modifications to CoCoA. In [7] the authors proposed ‘4-states-strong’, a modification to CoCoA that introduces a more complex RTT estimator to distinguish between wireless losses and congestion losses. Results showed an improvement of the performance in networks where the loss rate is particularly high. In [14], instead, authors proposed CoCoA-E, a modified version of CoCoA based on the Eifel retransmission timer. Simulations showed an improvement of the RTO estimation under two different RTT functions: stair-step and saw-like. Both ‘4-states-strong’ and CoCoA-E will be presented in details in Section VII.A, as they are adopted as term of comparison in the performance evaluation. Finally, in [16] the authors evaluate CoCoA-S, a version of CoCoA that uses only the strong RTO estimator. The variant is evaluated against other TCP congestion control algorithms such as the Linux RTO and the peak-hopper TCP RTO estimator. In such results, however, CoCoA is confirmed to deliver better performance compared to CoCoA-S and the other congestion control strategies, which are demonstrated to be unfit for CoAP.",
          "sentences": [
            {
              "id": "paper1_p3_colL_b17_s0",
              "en": "Recently, other works proposed modifications to CoCoA.",
              "vi": "Gần đây, các công trình khác đã đề xuất sửa đổi CoCoA."
            },
            {
              "id": "paper1_p3_colL_b17_s1",
              "en": "In [7] the authors proposed ‘4-states-strong’, a modification to CoCoA that introduces a more complex RTT estimator to distinguish between wireless losses and congestion losses.",
              "vi": "Trong [7], các tác giả đã đề xuất '4 trạng thái mạnh', một bản sửa đổi cho CoCoA nhằm giới thiệu một công cụ ước tính RTT phức tạp hơn để phân biệt giữa tổn thất không dây và tổn thất do tắc nghẽn."
            },
            {
              "id": "paper1_p3_colL_b17_s2",
              "en": "Results showed an improvement of the performance in networks where the loss rate is particularly high.",
              "vi": "Kết quả cho thấy sự cải thiện hiệu suất trong các mạng có tỷ lệ mất mát đặc biệt cao."
            },
            {
              "id": "paper1_p3_colL_b17_s3",
              "en": "In [14], instead, authors proposed CoCoA-E, a modified version of CoCoA based on the Eifel retransmission timer.",
              "vi": "Thay vào đó, trong [14], các tác giả đã đề xuất CoCoA-E, một phiên bản sửa đổi của CoCoA dựa trên bộ đếm thời gian truyền lại Eifel."
            },
            {
              "id": "paper1_p3_colL_b17_s4",
              "en": "Simulations showed an improvement of the RTO estimation under two different RTT functions: stair-step and saw-like.",
              "vi": "Các mô phỏng cho thấy sự cải thiện của ước tính RTO theo hai hàm RTT khác nhau: bậc thang và dạng cưa."
            },
            {
              "id": "paper1_p3_colL_b17_s5",
              "en": "Both ‘4-states-strong’ and CoCoA-E will be presented in details in Section VII.A, as they are adopted as term of comparison in the performance evaluation.",
              "vi": "Cả '4 trạng thái mạnh' và CoCoA-E sẽ được trình bày chi tiết trong Phần VII.A, vì chúng được sử dụng làm thuật ngữ so sánh trong đánh giá hiệu suất."
            },
            {
              "id": "paper1_p3_colL_b17_s6",
              "en": "Finally, in [16] the authors evaluate CoCoA-S, a version of CoCoA that uses only the strong RTO estimator.",
              "vi": "Cuối cùng, trong [16] các tác giả đánh giá CoCoA-S, một phiên bản của CoCoA chỉ sử dụng công cụ ước tính RTO mạnh."
            },
            {
              "id": "paper1_p3_colL_b17_s7",
              "en": "The variant is evaluated against other TCP congestion control algorithms such as the Linux RTO and the peak-hopper TCP RTO estimator.",
              "vi": "Biến thể này được đánh giá dựa trên các thuật toán kiểm soát tắc nghẽn TCP khác như Linux RTO và công cụ ước tính TCP RTO đỉnh phễu."
            },
            {
              "id": "paper1_p3_colL_b17_s8",
              "en": "In such results, however, CoCoA is confirmed to deliver better performance compared to CoCoA-S and the other congestion control strategies, which are demonstrated to be unfit for CoAP.",
              "vi": "Tuy nhiên, trong những kết quả như vậy, CoCoA được xác nhận là mang lại hiệu suất tốt hơn so với CoCoA-S và các chiến lược kiểm soát tắc nghẽn khác, được chứng minh là không phù hợp với CoAP."
            }
          ]
        },
        {
          "id": "paper1_p3_colL_b18",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "To conclude, Table I summarizes the congestion control",
          "sentences": [
            {
              "id": "paper1_p3_colL_b18_s0",
              "en": "To conclude, Table I summarizes the congestion control",
              "vi": "Để kết luận, Bảng I tóm tắt việc kiểm soát tắc nghẽn"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p3_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": "assets/p1_fig1_crop.png",
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 1,  Network topology",
          "sentences": [
            {
              "id": "paper1_p3_colR_b0_s0",
              "en": "Fig. 1,  Network topology",
              "vi": "Hình 1, Cấu trúc liên kết mạng"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "strategies recently proposed in literature, along with their main features.",
          "sentences": [
            {
              "id": "paper1_p3_colR_b1_s0",
              "en": "strategies recently proposed in literature, along with their main features.",
              "vi": "chiến lược được đề xuất gần đây trong tài liệu, cùng với những đặc điểm chính của chúng."
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b2",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "IV. PERFORMANCE EVALUATION",
          "sentences": [
            {
              "id": "paper1_p3_colR_b2_s0",
              "en": "IV.",
              "vi": "IV."
            },
            {
              "id": "paper1_p3_colR_b2_s1",
              "en": "PERFORMANCE EVALUATION",
              "vi": "ĐÁNH GIÁ HIỆU SUẤT"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this section, we analyze the results of the performance evaluation. The performance evaluation is carried out by simulation. To this aim, the Cooja platform is used, leveraging a ContikiOS implementation of CoCoA+ originally obtained from its authors, and then updated to be in line with the latest CoCoA+ specification [3]. Cooja motes are used to emulate wireless sensor devices. The relevant simulation parameters are summarized in Table II. In all scenarios, we consider a grid of 6x6 nodes, as reported in Fig. 1. In the network, one node is the RPL border router (node ID 1), one node act as a CoAP server (node ID 3), and, finally, the remaining nodes are CoAP clients. The linear distance between two nodes in a row is 10m.",
          "sentences": [
            {
              "id": "paper1_p3_colR_b3_s0",
              "en": "In this section, we analyze the results of the performance evaluation.",
              "vi": "Trong phần này, chúng tôi phân tích kết quả đánh giá hiệu suất."
            },
            {
              "id": "paper1_p3_colR_b3_s1",
              "en": "The performance evaluation is carried out by simulation.",
              "vi": "Việc đánh giá hiệu suất được thực hiện bằng mô phỏng."
            },
            {
              "id": "paper1_p3_colR_b3_s2",
              "en": "To this aim, the Cooja platform is used, leveraging a ContikiOS implementation of CoCoA+ originally obtained from its authors, and then updated to be in line with the latest CoCoA+ specification [3].",
              "vi": "Để đạt được mục đích này, nền tảng Cooja được sử dụng, tận dụng việc triển khai CoCoA+ của ContikiOS ban đầu được lấy từ các tác giả của nó và sau đó được cập nhật để phù hợp với thông số kỹ thuật CoCoA+ mới nhất [3]."
            },
            {
              "id": "paper1_p3_colR_b3_s3",
              "en": "Cooja motes are used to emulate wireless sensor devices.",
              "vi": "Cooja mote được sử dụng để mô phỏng các thiết bị cảm biến không dây."
            },
            {
              "id": "paper1_p3_colR_b3_s4",
              "en": "The relevant simulation parameters are summarized in Table II.",
              "vi": "Các thông số mô phỏng liên quan được tóm tắt trong Bảng II."
            },
            {
              "id": "paper1_p3_colR_b3_s5",
              "en": "In all scenarios, we consider a grid of 6x6 nodes, as reported in Fig. 1.",
              "vi": "Trong tất cả các kịch bản, chúng tôi xem xét một lưới gồm các nút 6x6, như được báo cáo trong Hình 1."
            },
            {
              "id": "paper1_p3_colR_b3_s6",
              "en": "In the network, one node is the RPL border router (node ID 1), one node act as a CoAP server (node ID 3), and, finally, the remaining nodes are CoAP clients.",
              "vi": "Trong mạng, một nút là bộ định tuyến viền RPL (nút ID 1), một nút hoạt động như một máy chủ CoAP (nút ID 3) và cuối cùng, các nút còn lại là máy khách CoAP."
            },
            {
              "id": "paper1_p3_colR_b3_s7",
              "en": "The linear distance between two nodes in a row is 10m.",
              "vi": "Khoảng cách tuyến tính giữa hai nút liên tiếp là 10m."
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In all scenarios, periodic CoAP traffic with CoCoA+ congestion control is considered to emulate a network of sensors that report their measurements at a fixed period. In the first evaluation scenario, only periodic traffic is transmitted. On the other hand, in the second scenario, periodic traffic is mixed with bursty CoAP traffic with default congestion control in order to evaluate CoCoA+ performance when greedy competing traffic is also present in the network.",
          "sentences": [
            {
              "id": "paper1_p3_colR_b4_s0",
              "en": "In all scenarios, periodic CoAP traffic with CoCoA+ congestion control is considered to emulate a network of sensors that report their measurements at a fixed period.",
              "vi": "Trong tất cả các trường hợp, lưu lượng truy cập CoAP định kỳ với tính năng kiểm soát tắc nghẽn CoCoA+ được coi là mô phỏng mạng lưới các cảm biến báo cáo số đo của chúng trong một khoảng thời gian cố định."
            },
            {
              "id": "paper1_p3_colR_b4_s1",
              "en": "In the first evaluation scenario, only periodic traffic is transmitted.",
              "vi": "Trong kịch bản đánh giá đầu tiên, chỉ lưu lượng định kỳ được truyền đi."
            },
            {
              "id": "paper1_p3_colR_b4_s2",
              "en": "On the other hand, in the second scenario, periodic traffic is mixed with bursty CoAP traffic with default congestion control in order to evaluate CoCoA+ performance when greedy competing traffic is also present in the network.",
              "vi": "Mặt khác, trong kịch bản thứ hai, lưu lượng truy cập định kỳ được trộn lẫn với lưu lượng CoAP bùng nổ với tính năng kiểm soát tắc nghẽn mặc định để đánh giá hiệu suất CoCoA+ khi lưu lượng truy cập cạnh tranh tham lam cũng xuất hiện trong mạng."
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": true,
          "table_img": "assets/p1_table2.png",
          "is_equation": false,
          "raw_text": "TABLE II SIMULATION PARAMETERS",
          "sentences": [
            {
              "id": "paper1_p3_colR_b5_s0",
              "en": "TABLE II SIMULATION PARAMETERS",
              "vi": "BẢNG II CÁC THÔNG SỐ MÔ PHỎNG"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Parameter Value",
          "sentences": [
            {
              "id": "paper1_p3_colR_b6_s0",
              "en": "Parameter Value",
              "vi": "Giá trị tham số"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "L2 protocol IEEE 802.15.4, 250 Kbps PHY rate Channel model Unit Disk GM, tx range = 10mt, interference range = 20mt",
          "sentences": [
            {
              "id": "paper1_p3_colR_b7_s0",
              "en": "L2 protocol IEEE 802.15.4, 250 Kbps PHY rate Channel model Unit Disk GM, tx range = 10mt, interference range = 20mt",
              "vi": "Giao thức L2 IEEE 802.15.4, tốc độ 250 Kbps PHY Mô hình kênh Đơn vị Đĩa GM, phạm vi tx = 10mt, phạm vi nhiễu = 20mt"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "MAC buffer size 8 packets MAC level max retransmissions",
          "sentences": [
            {
              "id": "paper1_p3_colR_b8_s0",
              "en": "MAC buffer size 8 packets MAC level max retransmissions",
              "vi": "Kích thước bộ đệm MAC 8 gói Số lần truyền lại tối đa ở cấp độ MAC"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "L3 protocol 6LoWPAN Routing protocol RPL CoAP base ACKTIMEOUT",
          "sentences": [
            {
              "id": "paper1_p3_colR_b10_s0",
              "en": "L3 protocol 6LoWPAN Routing protocol RPL CoAP base ACKTIMEOUT",
              "vi": "Giao thức L3 6LoWPAN Giao thức định tuyến Cơ sở RPL CoAP ACKTIMEOUT"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "3s",
          "sentences": [
            {
              "id": "paper1_p3_colR_b11_s0",
              "en": "3s",
              "vi": "3s"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP requests buffer size",
          "sentences": [
            {
              "id": "paper1_p3_colR_b12_s0",
              "en": "CoAP requests buffer size",
              "vi": "CoAP yêu cầu kích thước bộ đệm"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Periodic traffic – Request period (T) and corresponding data rate",
          "sentences": [
            {
              "id": "paper1_p3_colR_b14_s0",
              "en": "Periodic traffic – Request period (T) and corresponding data rate",
              "vi": "Lưu lượng định kỳ - Khoảng thời gian yêu cầu (T) và tốc độ dữ liệu tương ứng"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b15",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.5s (6048 B/s), 1s (3025 B/s), 2s (1513 B/s), 3s (1010 B/s), 4s (757 B/s), 6s (505 B/s), 7s (434 B/s), 8s (379 B/s), 9s (337 B/s), 10s (304 B/s), 12s (253 B/s), 14s (217 B/s), 16s (191 B/s), 32s (96 B/s), 64s (49 B/s), 70s (45 B/s) Bursty traffic – packet inter-arrival times",
          "sentences": [
            {
              "id": "paper1_p3_colR_b15_s0",
              "en": "0.5s (6048 B/s), 1s (3025 B/s), 2s (1513 B/s), 3s (1010 B/s), 4s (757 B/s), 6s (505 B/s), 7s (434 B/s), 8s (379 B/s), 9s (337 B/s), 10s (304 B/s), 12s (253 B/s), 14s (217 B/s), 16s (191 B/s), 32s (96 B/s), 64s (49 B/s), 70s (45 B/s) Bursty traffic – packet inter-arrival times",
              "vi": "0,5 giây (6048 B/s), 1 giây (3025 B/s), 2 giây (1513 B/s), 3 giây (1010 B/s), 4 giây (757 B/s), 6 giây (505 B/s), 7 giây (434 B/s), 8 giây (379 B/s), 9 giây (337 B/s), 10 giây (304 B/s), 12 giây (253 B/s), 14 giây (217 B/s), 16 giây (191 B/s), 32 giây (96 B/s), 64 giây (49 B/s), 70 giây (45 B/s) Lưu lượng bùng nổ - thời gian giữa các gói đến"
            }
          ]
        },
        {
          "id": "paper1_p3_colR_b16",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10s, 30s, 40s, 60s, 90s, 100s, 120s, 140s",
          "sentences": [
            {
              "id": "paper1_p3_colR_b16_s0",
              "en": "10s, 30s, 40s, 60s, 90s, 100s, 120s, 140s",
              "vi": "10, 30, 40, 60, 90, 100, 120, 140"
            }
          ]
        }
      ]
    },
    {
      "page_num": 4,
      "page_image": "assets/p1_page_4.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p4_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 2,  Carried load vs. offered load.",
          "sentences": [
            {
              "id": "paper1_p4_colL_b0_s0",
              "en": "Fig. 2,  Carried load vs. offered load.",
              "vi": "Hình 2, Tải được mang so với tải được cung cấp."
            }
          ]
        },
        {
          "id": "paper1_p4_colL_b1",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. Periodic traffic scenario",
          "sentences": [
            {
              "id": "paper1_p4_colL_b1_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p4_colL_b1_s1",
              "en": "Periodic traffic scenario",
              "vi": "Kịch bản giao thông định kỳ"
            }
          ]
        },
        {
          "id": "paper1_p4_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this scenario, all CoAP clients periodically send confirmable POST requests towards the server with ID 3. Each request has a size of 95B. For each successfully received request, the server replies with a response piggybacked onto a CoAP ACK message. All requests are addressed to an IPv6 global address, which forces messages to be routed through the RPL border router in order to reach the server. Before starting to transmit CoAP requests, nodes wait for 60s to let the RPL topology stabilize, and then for a further random time to avoid synchronization effects. Finally, nodes start sending requests with a common period T, ranging from 70s to 0.5s, in order to inject in the network an increasing amount of data. Each experiment has a duration of 800s. In order to obtain statistically sound results, twelve independent replicas for each scenarios are run, and metrics of interest are then estimated for each scenario along with a 95% confidence interval.",
          "sentences": [
            {
              "id": "paper1_p4_colL_b2_s0",
              "en": "In this scenario, all CoAP clients periodically send confirmable POST requests towards the server with ID 3.",
              "vi": "Trong trường hợp này, tất cả máy khách CoAP đều gửi định kỳ các yêu cầu POST có thể xác nhận tới máy chủ có ID 3."
            },
            {
              "id": "paper1_p4_colL_b2_s1",
              "en": "Each request has a size of 95B.",
              "vi": "Mỗi yêu cầu có kích thước 95B."
            },
            {
              "id": "paper1_p4_colL_b2_s2",
              "en": "For each successfully received request, the server replies with a response piggybacked onto a CoAP ACK message.",
              "vi": "Đối với mỗi yêu cầu được nhận thành công, máy chủ sẽ trả lời bằng một phản hồi kèm theo tin nhắn CoAP ACK."
            },
            {
              "id": "paper1_p4_colL_b2_s3",
              "en": "All requests are addressed to an IPv6 global address, which forces messages to be routed through the RPL border router in order to reach the server.",
              "vi": "Tất cả các yêu cầu đều được gửi đến địa chỉ toàn cầu IPv6, địa chỉ này buộc các tin nhắn phải được định tuyến qua bộ định tuyến biên giới RPL để đến được máy chủ."
            },
            {
              "id": "paper1_p4_colL_b2_s4",
              "en": "Before starting to transmit CoAP requests, nodes wait for 60s to let the RPL topology stabilize, and then for a further random time to avoid synchronization effects.",
              "vi": "Trước khi bắt đầu truyền các yêu cầu CoAP, các nút đợi trong 60 giây để cấu trúc liên kết RPL ổn định, sau đó đợi thêm một khoảng thời gian ngẫu nhiên để tránh hiệu ứng đồng bộ hóa."
            },
            {
              "id": "paper1_p4_colL_b2_s5",
              "en": "Finally, nodes start sending requests with a common period T, ranging from 70s to 0.5s, in order to inject in the network an increasing amount of data.",
              "vi": "Cuối cùng, các nút bắt đầu gửi yêu cầu với khoảng thời gian chung T, từ 70 giây đến 0,5 giây, để đưa vào mạng lượng dữ liệu ngày càng tăng."
            },
            {
              "id": "paper1_p4_colL_b2_s6",
              "en": "Each experiment has a duration of 800s.",
              "vi": "Mỗi thử nghiệm có thời lượng 800 giây."
            },
            {
              "id": "paper1_p4_colL_b2_s7",
              "en": "In order to obtain statistically sound results, twelve independent replicas for each scenarios are run, and metrics of interest are then estimated for each scenario along with a 95% confidence interval.",
              "vi": "Để có được kết quả thống kê chính xác, mười hai bản sao độc lập cho từng kịch bản sẽ được chạy và số liệu quan tâm sau đó được ước tính cho từng kịch bản cùng với khoảng tin cậy 95%."
            }
          ]
        },
        {
          "id": "paper1_p4_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 2 shows the aggregate carried load and actual offered load as a function of the nominal offered load for both CoAP and CoCoA+. The carried load is defined as the overall amount of data successfully delivered at the server. The actual offered load, instead, is defined as the overall amount of generated data that is transmitted at least once, i.e., that is not discarded at the client because of a buffer overflow at the application layer.",
          "sentences": [
            {
              "id": "paper1_p4_colL_b3_s0",
              "en": "Fig. 2 shows the aggregate carried load and actual offered load as a function of the nominal offered load for both CoAP and CoCoA+.",
              "vi": "Hình 2 cho thấy tổng tải hữu ích mang theo (carried load) và tải cung cấp (offered load) thực tế là một hàm số của tải cung cấp (offered load) danh nghĩa cho cả CoAP và CoCoA+."
            },
            {
              "id": "paper1_p4_colL_b3_s1",
              "en": "The carried load is defined as the overall amount of data successfully delivered at the server.",
              "vi": "Tải được thực hiện được định nghĩa là tổng lượng dữ liệu được phân phối thành công tại máy chủ."
            },
            {
              "id": "paper1_p4_colL_b3_s2",
              "en": "The actual offered load, instead, is defined as the overall amount of generated data that is transmitted at least once, i.e., that is not discarded at the client because of a buffer overflow at the application layer.",
              "vi": "Thay vào đó, tải được cung cấp thực tế được định nghĩa là tổng lượng dữ liệu được tạo được truyền ít nhất một lần, tức là dữ liệu đó không bị loại bỏ ở máy khách do tràn bộ đệm (buffer overflow) ở lớp ứng dụng."
            }
          ]
        },
        {
          "id": "paper1_p4_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "From Fig. 2 we can first observe that for both CoAP and CoCoA+ the respective carried and actual offered loads are very close to each other even when the carried load stops increasing linearly (at a nominal offered load of approximately 380 B/s), i.e., congestion has started in the network. This means that in both cases the server receives almost all the requests transmitted by clients, and therefore the main bottleneck that causes congestion is located at the client, and not in the network. This is expected, as only one outstanding request for each node is allowed when NSTART is set to one. When the offered load increases, the network traffic increases resulting in longer times to complete a transaction (considering that the client retransmits a request until the ACK is received), which, consequently, results in more frequent buffer overflows at the application layer. However, if we focus on the results obtained when congestion has started, we can also notice that the carried load keeps increasing, though at a much slower rate. This can be explained by considering that congestion is not evenly distributed among",
          "sentences": [
            {
              "id": "paper1_p4_colL_b4_s0",
              "en": "From Fig. 2 we can first observe that for both CoAP and CoCoA+ the respective carried and actual offered loads are very close to each other even when the carried load stops increasing linearly (at a nominal offered load of approximately 380 B/s), i.e., congestion has started in the network.",
              "vi": "Từ Hình 2, trước tiên chúng ta có thể quan sát rằng đối với cả CoAP và CoCoA+, tải được cung cấp và tải được cung cấp thực tế tương ứng rất gần nhau ngay cả khi tải được mang ngừng tăng tuyến tính (ở mức tải được cung cấp danh nghĩa khoảng 380 B/s), tức là tắc nghẽn đã bắt đầu trong mạng."
            },
            {
              "id": "paper1_p4_colL_b4_s1",
              "en": "This means that in both cases the server receives almost all the requests transmitted by clients, and therefore the main bottleneck that causes congestion is located at the client, and not in the network.",
              "vi": "Điều này có nghĩa là trong cả hai trường hợp, máy chủ nhận được hầu hết tất cả các yêu cầu do máy khách truyền đi và do đó, nút cổ chai chính gây ra tắc nghẽn nằm ở máy khách chứ không phải trong mạng."
            },
            {
              "id": "paper1_p4_colL_b4_s2",
              "en": "This is expected, as only one outstanding request for each node is allowed when NSTART is set to one.",
              "vi": "Điều này được mong đợi vì chỉ cho phép một yêu cầu chưa xử lý cho mỗi nút khi NSTART được đặt thành một."
            },
            {
              "id": "paper1_p4_colL_b4_s3",
              "en": "When the offered load increases, the network traffic increases resulting in longer times to complete a transaction (considering that the client retransmits a request until the ACK is received), which, consequently, results in more frequent buffer overflows at the application layer.",
              "vi": "Khi tải được cung cấp tăng, lưu lượng mạng tăng lên dẫn đến thời gian hoàn thành giao dịch lâu hơn (có tính đến việc máy khách truyền lại yêu cầu cho đến khi nhận được ACK), do đó, dẫn đến tình trạng tràn bộ đệm (buffer overflow) thường xuyên hơn ở lớp ứng dụng."
            },
            {
              "id": "paper1_p4_colL_b4_s4",
              "en": "However, if we focus on the results obtained when congestion has started, we can also notice that the carried load keeps increasing, though at a much slower rate.",
              "vi": "Tuy nhiên, nếu chúng ta tập trung vào kết quả thu được khi tắc nghẽn bắt đầu, chúng ta cũng có thể nhận thấy rằng tải trọng tiếp tục tăng, mặc dù với tốc độ chậm hơn nhiều."
            },
            {
              "id": "paper1_p4_colL_b4_s5",
              "en": "This can be explained by considering that congestion is not evenly distributed among",
              "vi": "Điều này có thể được giải thích bằng cách xem xét rằng tình trạng tắc nghẽn không được phân bố đồng đều giữa"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p4_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 3,  Overall in-network MAC buffer overflows.",
          "sentences": [
            {
              "id": "paper1_p4_colR_b0_s0",
              "en": "Fig. 3,  Overall in-network MAC buffer overflows.",
              "vi": "Hình 3, tràn bộ đệm (buffer overflow) MAC tổng thể trong mạng."
            }
          ]
        },
        {
          "id": "paper1_p4_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "all nodes. In particular, nodes farther from the server start discarding requests earlier, while nodes closer to the server, instead, experience shorter delays to complete a transaction, consequently they experience application layer overflows at higher offered loads. Although omitted here for the sake of brevity, this is confirmed by analyzing the carried load per node: the increase of the carried load, after congestion has started, is mainly due to the three clients closest to the server (nodes 4, 9, and 10).",
          "sentences": [
            {
              "id": "paper1_p4_colR_b1_s0",
              "en": "all nodes.",
              "vi": "tất cả các nút."
            },
            {
              "id": "paper1_p4_colR_b1_s1",
              "en": "In particular, nodes farther from the server start discarding requests earlier, while nodes closer to the server, instead, experience shorter delays to complete a transaction, consequently they experience application layer overflows at higher offered loads.",
              "vi": "Cụ thể, các nút ở xa máy chủ bắt đầu loại bỏ các yêu cầu sớm hơn, trong khi các nút ở gần máy chủ hơn, thay vào đó, gặp phải độ trễ ngắn hơn để hoàn thành giao dịch, do đó, chúng gặp phải hiện tượng tràn lớp ứng dụng ở mức tải được cung cấp cao hơn."
            },
            {
              "id": "paper1_p4_colR_b1_s2",
              "en": "Although omitted here for the sake of brevity, this is confirmed by analyzing the carried load per node: the increase of the carried load, after congestion has started, is mainly due to the three clients closest to the server (nodes 4, 9, and 10).",
              "vi": "Mặc dù được bỏ qua ở đây để cho ngắn gọn, nhưng điều này được xác nhận bằng cách phân tích tải được mang trên mỗi nút: sự gia tăng tải được mang sau khi tắc nghẽn bắt đầu, chủ yếu là do ba máy khách gần máy chủ nhất (nút 4, 9 và 10)."
            }
          ]
        },
        {
          "id": "paper1_p4_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "By comparing CoAP and CoCoA+ carried loads from Fig. 2, we can then observe that their performance differ under congestion: as expected, CoCoA+ always outperforms the CoAP simple congestion control mechanism by dynamically adapting retransmission timeouts. In order to get a better insight into this result, we consider a few additional relevant metrics as a function of the nominal offered load. In particular, Fig. 3 shows the overall MAC buffer overflows in the network, i.e., the overall amount of requests discarded at the MAC layer in the network. Fig. 4 shows instead the average number of transmissions (at the client) for each successful transaction. Finally, Fig. 5 shows the average number of ACK messages received at the client for each successful transaction (including duplicates).",
          "sentences": [
            {
              "id": "paper1_p4_colR_b2_s0",
              "en": "By comparing CoAP and CoCoA+ carried loads from Fig. 2, we can then observe that their performance differ under congestion: as expected, CoCoA+ always outperforms the CoAP simple congestion control mechanism by dynamically adapting retransmission timeouts.",
              "vi": "Bằng cách so sánh tải mang CoAP và CoCoA+ từ Hình 2, chúng ta có thể nhận thấy rằng hiệu suất của chúng khác nhau khi bị tắc nghẽn: như mong đợi, CoCoA+ luôn hoạt động tốt hơn cơ chế kiểm soát tắc nghẽn đơn giản CoAP bằng cách tự động điều chỉnh thời gian chờ truyền lại (RTO)."
            },
            {
              "id": "paper1_p4_colR_b2_s1",
              "en": "In order to get a better insight into this result, we consider a few additional relevant metrics as a function of the nominal offered load.",
              "vi": "Để hiểu rõ hơn về kết quả này, chúng tôi xem xét một số số liệu bổ sung có liên quan như một hàm của tải trọng danh nghĩa được cung cấp."
            },
            {
              "id": "paper1_p4_colR_b2_s2",
              "en": "In particular, Fig. 3 shows the overall MAC buffer overflows in the network, i.e., the overall amount of requests discarded at the MAC layer in the network. Fig. 4 shows instead the average number of transmissions (at the client) for each successful transaction.",
              "vi": "Cụ thể, Hình 3 cho thấy tổng bộ đệm MAC bị tràn trong mạng, tức là tổng số lượng yêu cầu bị loại bỏ ở lớp MAC trong mạng. Thay vào đó, Hình 4 hiển thị số lần truyền trung bình (tại máy khách) cho mỗi giao dịch thành công."
            },
            {
              "id": "paper1_p4_colR_b2_s3",
              "en": "Finally, Fig. 5 shows the average number of ACK messages received at the client for each successful transaction (including duplicates).",
              "vi": "Cuối cùng, Hình 5 hiển thị số lượng tin nhắn ACK trung bình nhận được ở máy khách cho mỗi giao dịch thành công (bao gồm cả các giao dịch trùng lặp)."
            }
          ]
        },
        {
          "id": "paper1_p4_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "These results highlight that three different offered load intervals can be identified to compare the performance of CoCoA+ and CoAP congestion control: a non-congestion interval, with offered loads up to 250 B/s, a pre-congestion interval, with offered loads ranging between 250 B/s and 380 B/s, and, finally, a congestion interval, with offered loads above 380 B/s.",
          "sentences": [
            {
              "id": "paper1_p4_colR_b3_s0",
              "en": "These results highlight that three different offered load intervals can be identified to compare the performance of CoCoA+ and CoAP congestion control: a non-congestion interval, with offered loads up to 250 B/s, a pre-congestion interval, with offered loads ranging between 250 B/s and 380 B/s, and, finally, a congestion interval, with offered loads above 380 B/s.",
              "vi": "Những kết quả này nhấn mạnh rằng có thể xác định ba khoảng thời gian tải được cung cấp khác nhau để so sánh hiệu suất của kiểm soát tắc nghẽn CoCoA+ và CoAP: khoảng thời gian không tắc nghẽn, với tải được cung cấp lên tới 250 B/s, khoảng thời gian trước khi tắc nghẽn, với tải được cung cấp trong khoảng từ 250 B/s đến 380 B/s, và cuối cùng là khoảng thời gian tắc nghẽn với tải được cung cấp trên 380 B/s."
            }
          ]
        },
        {
          "id": "paper1_p4_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In particular, in the non-congestion interval, corresponding to one request every 12s, or more, per node, the network is essentially operating out of congestion, no buffer overflow occurs and therefore the two algorithms behave in the same way. On",
          "sentences": [
            {
              "id": "paper1_p4_colR_b4_s0",
              "en": "In particular, in the non-congestion interval, corresponding to one request every 12s, or more, per node, the network is essentially operating out of congestion, no buffer overflow occurs and therefore the two algorithms behave in the same way.",
              "vi": "Đặc biệt, trong khoảng thời gian không tắc nghẽn, tương ứng với một yêu cầu cứ sau 12 giây hoặc nhiều hơn trên mỗi nút, mạng về cơ bản hoạt động không bị tắc nghẽn, không xảy ra tràn bộ đệm (buffer overflow) và do đó hai thuật toán hoạt động theo cùng một cách."
            },
            {
              "id": "paper1_p4_colR_b4_s1",
              "en": "On",
              "vi": "On"
            }
          ]
        },
        {
          "id": "paper1_p4_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 4,  Average number of transmissions per successful transaction.",
          "sentences": [
            {
              "id": "paper1_p4_colR_b5_s0",
              "en": "Fig. 4,  Average number of transmissions per successful transaction.",
              "vi": "Hình 4, Số lần truyền trung bình trên mỗi giao dịch thành công."
            }
          ]
        }
      ]
    },
    {
      "page_num": 5,
      "page_image": "assets/p1_page_5.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p5_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 5,  Average number of ACKs per successful transaction.",
          "sentences": [
            {
              "id": "paper1_p5_colL_b0_s0",
              "en": "Fig. 5,  Average number of ACKs per successful transaction.",
              "vi": "Hình 5, Số lượng ACK trung bình trên mỗi giao dịch thành công."
            }
          ]
        },
        {
          "id": "paper1_p5_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "the other hand, in the congestion interval, corresponding to one request every up to 8s per node, the network is running under substantial congestion in most of its nodes, and the actual offered load stops increasing linearly with the nominal offered load. In this case, the amount of buffer overflows rapidly increases together with packet delays. A fixed RTO value is therefore not efficient, as its value eventually becomes close or even lower than round-trip times. For this reason, the timeout expires more frequently and often unnecessarily, leading to the transmission of additional traffic that further congests the network. CoCoA+ shows instead its effectiveness in adapting to increasing RTTs by using larger RTO values and therefore reducing the amount of retransmissions per transaction (see Fig. 4). The amount of unnecessarily retransmitted requests is also drastically reduced, as shown in Fig. 5.",
          "sentences": [
            {
              "id": "paper1_p5_colL_b1_s0",
              "en": "the other hand, in the congestion interval, corresponding to one request every up to 8s per node, the network is running under substantial congestion in most of its nodes, and the actual offered load stops increasing linearly with the nominal offered load.",
              "vi": "mặt khác, trong khoảng thời gian tắc nghẽn, tương ứng với một yêu cầu cứ sau tối đa 8 giây trên mỗi nút, mạng đang hoạt động trong tình trạng tắc nghẽn đáng kể ở hầu hết các nút của nó và tải được cung cấp thực tế ngừng tăng tuyến tính với tải được cung cấp danh nghĩa."
            },
            {
              "id": "paper1_p5_colL_b1_s1",
              "en": "In this case, the amount of buffer overflows rapidly increases together with packet delays.",
              "vi": "Trong trường hợp này, lượng tràn bộ đệm (buffer overflow) tăng lên nhanh chóng cùng với độ trễ của gói."
            },
            {
              "id": "paper1_p5_colL_b1_s2",
              "en": "A fixed RTO value is therefore not efficient, as its value eventually becomes close or even lower than round-trip times.",
              "vi": "Do đó, giá trị RTO cố định không hiệu quả vì giá trị của nó cuối cùng trở nên gần bằng hoặc thậm chí thấp hơn thời gian truyền khứ hồi (RTT)."
            },
            {
              "id": "paper1_p5_colL_b1_s3",
              "en": "For this reason, the timeout expires more frequently and often unnecessarily, leading to the transmission of additional traffic that further congests the network.",
              "vi": "Vì lý do này, thời gian chờ hết hạn thường xuyên hơn và thường không cần thiết, dẫn đến việc truyền thêm lưu lượng truy cập khiến mạng càng bị tắc nghẽn."
            },
            {
              "id": "paper1_p5_colL_b1_s4",
              "en": "CoCoA+ shows instead its effectiveness in adapting to increasing RTTs by using larger RTO values and therefore reducing the amount of retransmissions per transaction (see Fig. 4).",
              "vi": "Thay vào đó, CoCoA+ cho thấy tính hiệu quả của nó trong việc thích ứng với việc tăng RTT bằng cách sử dụng các giá trị RTO lớn hơn và do đó giảm số lượng truyền lại trên mỗi giao dịch (xem Hình 4)."
            },
            {
              "id": "paper1_p5_colL_b1_s5",
              "en": "The amount of unnecessarily retransmitted requests is also drastically reduced, as shown in Fig. 5.",
              "vi": "Số lượng yêu cầu được truyền lại không cần thiết cũng giảm đáng kể, như trong Hình 5."
            }
          ]
        },
        {
          "id": "paper1_p5_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Finally, we compare the performance of CoCoA+ and CoAP in the pre-congestion interval, which corresponds to request arrival periods per node between 8s and 12s. This case is interesting since both CoAP and CoCoA+ achieve the same carried load, but they clearly behave differently. In particular, we observe from Fig. 4 that CoCoA+ triggers a number of request retransmissions that increases linearly with the offered load, while retransmissions with CoAP are still negligible. However, considering that the carried load is practically the same, such retransmitted requests with CoCoA+ are unnecessary and they only contribute to increase the traffic load in the network. In fact, either such spurious retransmissions are dropped before reaching the server, as shown by Fig. 3, or they produce duplicate ACKs that are sent back to the client, as shown by Fig. 5. In this range of offered loads CoCoA+ requires therefore more network resources than CoAP to achieve the same carried load, or, said alternatively, congestion is reached earlier than CoAP. As a matter of facts, with a request period of 8s, the carried load with CoCoA+ is even slightly lower than CoAP. Such behavior is consistently exhibited by all nodes in the network - see Fig. 6, which shows the carried load per node for both protocols.",
          "sentences": [
            {
              "id": "paper1_p5_colL_b2_s0",
              "en": "Finally, we compare the performance of CoCoA+ and CoAP in the pre-congestion interval, which corresponds to request arrival periods per node between 8s and 12s.",
              "vi": "Cuối cùng, chúng tôi so sánh hiệu suất của CoCoA+ và CoAP trong khoảng thời gian trước khi tắc nghẽn, tương ứng với khoảng thời gian đến yêu cầu trên mỗi nút trong khoảng từ 8 giây đến 12 giây."
            },
            {
              "id": "paper1_p5_colL_b2_s1",
              "en": "This case is interesting since both CoAP and CoCoA+ achieve the same carried load, but they clearly behave differently.",
              "vi": "Trường hợp này rất thú vị vì cả CoAP và CoCoA+ đều đạt được cùng tải trọng, nhưng rõ ràng chúng hoạt động khác nhau."
            },
            {
              "id": "paper1_p5_colL_b2_s2",
              "en": "In particular, we observe from Fig. 4 that CoCoA+ triggers a number of request retransmissions that increases linearly with the offered load, while retransmissions with CoAP are still negligible.",
              "vi": "Đặc biệt, chúng tôi quan sát từ Hình 4 rằng CoCoA+ kích hoạt một số lần truyền lại yêu cầu tăng tuyến tính theo tải được cung cấp, trong khi số lần truyền lại bằng CoAP vẫn không đáng kể."
            },
            {
              "id": "paper1_p5_colL_b2_s3",
              "en": "However, considering that the carried load is practically the same, such retransmitted requests with CoCoA+ are unnecessary and they only contribute to increase the traffic load in the network.",
              "vi": "Tuy nhiên, xét rằng tải được mang trên thực tế là như nhau, các yêu cầu được truyền lại bằng CoCoA+ như vậy là không cần thiết và chúng chỉ góp phần làm tăng tải lưu lượng trong mạng."
            },
            {
              "id": "paper1_p5_colL_b2_s4",
              "en": "In fact, either such spurious retransmissions are dropped before reaching the server, as shown by Fig. 3, or they produce duplicate ACKs that are sent back to the client, as shown by Fig. 5.",
              "vi": "Trên thực tế, các lần truyền lại giả như vậy sẽ bị loại bỏ trước khi đến máy chủ, như được hiển thị trong Hình 3, hoặc chúng tạo ra các ACK trùng lặp được gửi lại cho máy khách, như được hiển thị trong Hình 5."
            },
            {
              "id": "paper1_p5_colL_b2_s5",
              "en": "In this range of offered loads CoCoA+ requires therefore more network resources than CoAP to achieve the same carried load, or, said alternatively, congestion is reached earlier than CoAP.",
              "vi": "Do đó, trong phạm vi tải được cung cấp này, CoCoA+ yêu cầu nhiều tài nguyên mạng hơn CoAP để đạt được cùng tải được mang, hay nói cách khác là tình trạng tắc nghẽn xảy ra sớm hơn CoAP."
            },
            {
              "id": "paper1_p5_colL_b2_s6",
              "en": "As a matter of facts, with a request period of 8s, the carried load with CoCoA+ is even slightly lower than CoAP.",
              "vi": "Trên thực tế, với thời gian yêu cầu là 8 giây, tải trọng mang theo của CoCoA+ thậm chí còn thấp hơn CoAP một chút."
            },
            {
              "id": "paper1_p5_colL_b2_s7",
              "en": "Such behavior is consistently exhibited by all nodes in the network - see Fig. 6, which shows the carried load per node for both protocols.",
              "vi": "Hành vi như vậy được thể hiện một cách nhất quán bởi tất cả các nút trong mạng - xem Hình 6, hiển thị tải trọng được thực hiện trên mỗi nút cho cả hai giao thức."
            }
          ]
        },
        {
          "id": "paper1_p5_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 6,  CoAP vs. CoCoA+ carried load per node, T = 8s.",
          "sentences": [
            {
              "id": "paper1_p5_colL_b3_s0",
              "en": "Fig. 6,  CoAP vs. CoCoA+ carried load per node, T = 8s.",
              "vi": "Hình 6, CoAP so với CoCoA+ mang tải trên mỗi nút, T = 8 giây."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p5_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 7,  CoAP operation, node ID 10, T = 8s.",
          "sentences": [
            {
              "id": "paper1_p5_colR_b0_s0",
              "en": "Fig. 7,  CoAP operation, node ID 10, T = 8s.",
              "vi": "Hình 7, Hoạt động CoAP, nút ID 10, T = 8s."
            }
          ]
        },
        {
          "id": "paper1_p5_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In order to understand this behavior, we provide an insight into the operation of both the algorithms in a selected time interval, in the case of a request period equal to 8s. Fig. 7 and Fig. 8 show the values of all the relevant parameters controlling the transmission of requests over subsequent transactions in CoAP and CoCoA+, respectively. Specifically, in both figures values reported with blue circle marks represent the RTOinit values, while green square marks represent the measured RTTs. More precisely, in case of a retransmission, the RTT value is calculated as the delay between the first request transmission and the arrival of an ACK (this is due to the RTT ambiguity problem [5]); in this case, the measured delay between the last retransmission and the ACK reception is also reported using the yellow triangle mark. Finally, in both figures we report with blue cross marks the RTO values calculated as a result of a back-off because of a retransmission, and highlight spurious retransmissions with brown small circle marks.",
          "sentences": [
            {
              "id": "paper1_p5_colR_b1_s0",
              "en": "In order to understand this behavior, we provide an insight into the operation of both the algorithms in a selected time interval, in the case of a request period equal to 8s. Fig. 7 and Fig. 8 show the values of all the relevant parameters controlling the transmission of requests over subsequent transactions in CoAP and CoCoA+, respectively.",
              "vi": "Để hiểu hành vi này, chúng tôi cung cấp thông tin chi tiết về hoạt động của cả hai thuật toán trong khoảng thời gian đã chọn, trong trường hợp khoảng thời gian yêu cầu bằng 8 giây. Hình 7 và Hình 8 lần lượt hiển thị giá trị của tất cả các tham số liên quan kiểm soát việc truyền yêu cầu qua các giao dịch tiếp theo trong CoAP và CoCoA+."
            },
            {
              "id": "paper1_p5_colR_b1_s1",
              "en": "Specifically, in both figures values reported with blue circle marks represent the RTOinit values, while green square marks represent the measured RTTs.",
              "vi": "Cụ thể, trong cả hai hình, các giá trị được báo cáo bằng dấu tròn màu xanh biểu thị giá trị RTOinit, trong khi dấu hình vuông màu xanh lục biểu thị RTT đo được."
            },
            {
              "id": "paper1_p5_colR_b1_s2",
              "en": "More precisely, in case of a retransmission, the RTT value is calculated as the delay between the first request transmission and the arrival of an ACK (this is due to the RTT ambiguity problem [5]); in this case, the measured delay between the last retransmission and the ACK reception is also reported using the yellow triangle mark.",
              "vi": "Chính xác hơn, trong trường hợp truyền lại, giá trị RTT được tính bằng độ trễ giữa lần truyền yêu cầu đầu tiên và sự xuất hiện của ACK (điều này là do vấn đề mơ hồ RTT [5]); trong trường hợp này, độ trễ đo được giữa lần truyền lại cuối cùng và lần nhận ACK cũng được báo cáo bằng dấu tam giác màu vàng."
            },
            {
              "id": "paper1_p5_colR_b1_s3",
              "en": "Finally, in both figures we report with blue cross marks the RTO values calculated as a result of a back-off because of a retransmission, and highlight spurious retransmissions with brown small circle marks.",
              "vi": "Cuối cùng, trong cả hai hình, chúng tôi báo cáo bằng các dấu chéo màu xanh lam, các giá trị RTO được tính toán do trễ do truyền lại và đánh dấu các lần truyền lại giả mạo bằng các dấu tròn nhỏ màu nâu."
            }
          ]
        },
        {
          "id": "paper1_p5_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "From Fig. 7 we can observe that RTO values randomly chosen by CoAP in the predetermined range are large enough to cope with RTT variations, thus causing a negligible number of unnecessary fluctuations. On the other hand, from Fig. 8 we can observe that, with CoCoA+, when a series of similar RTT values is sampled, the contribution of RTTVAR to the RTO computation vanishes and, consequently RTO values eventually get very close to actual RTTs. When this occurs, small RTT variations cause spurious retransmissions, which, besides being unnecessary, potentially further exacerbate the issue, since they contribute to increase RTTs in the network, and therefore trigger additional retransmissions.",
          "sentences": [
            {
              "id": "paper1_p5_colR_b2_s0",
              "en": "From Fig. 7 we can observe that RTO values randomly chosen by CoAP in the predetermined range are large enough to cope with RTT variations, thus causing a negligible number of unnecessary fluctuations.",
              "vi": "Từ Hình 7, chúng ta có thể quan sát thấy rằng các giá trị RTO được CoAP chọn ngẫu nhiên trong phạm vi xác định trước là đủ lớn để đối phó với các biến thể RTT, do đó gây ra số lượng biến động không cần thiết không đáng kể."
            },
            {
              "id": "paper1_p5_colR_b2_s1",
              "en": "On the other hand, from Fig. 8 we can observe that, with CoCoA+, when a series of similar RTT values is sampled, the contribution of RTTVAR to the RTO computation vanishes and, consequently RTO values eventually get very close to actual RTTs.",
              "vi": "Mặt khác, từ Hình 8, chúng ta có thể quan sát thấy rằng, với CoCoA+, khi một loạt giá trị RTT tương tự được lấy mẫu, sự đóng góp của RTTVAR vào tính toán RTO sẽ biến mất và do đó, các giá trị RTO cuối cùng sẽ rất gần với RTT thực tế."
            },
            {
              "id": "paper1_p5_colR_b2_s2",
              "en": "When this occurs, small RTT variations cause spurious retransmissions, which, besides being unnecessary, potentially further exacerbate the issue, since they contribute to increase RTTs in the network, and therefore trigger additional retransmissions.",
              "vi": "Khi điều này xảy ra, các biến thể RTT nhỏ sẽ gây ra việc truyền lại giả mạo, ngoài việc không cần thiết, còn có khả năng làm trầm trọng thêm vấn đề vì chúng góp phần làm tăng RTT trong mạng và do đó kích hoạt các lần truyền lại bổ sung."
            }
          ]
        },
        {
          "id": "paper1_p5_colR_b3",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Interfering Bursty Traffic",
          "sentences": [
            {
              "id": "paper1_p5_colR_b3_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper1_p5_colR_b3_s1",
              "en": "Interfering Bursty Traffic",
              "vi": "Can thiệp giao thông bùng nổ"
            }
          ]
        },
        {
          "id": "paper1_p5_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this second scenario, we consider five nodes (with IDs 2, 8, 15, 32, and 34, respectively) that transmit bursty traffic that interferes with periodic requests sent to the server by the remaining nodes. In particular, interfering nodes send CoAP requests according to an ON-OFF pattern. The OFF period is set to 120s, while the ON period is varied ranging from 10s to 140s in the different experiments. During the ON periods, requests are sent to the server back to back using CoAP congestion control with an RTO equal to 1s max, and one retransmission at",
          "sentences": [
            {
              "id": "paper1_p5_colR_b4_s0",
              "en": "In this second scenario, we consider five nodes (with IDs 2, 8, 15, 32, and 34, respectively) that transmit bursty traffic that interferes with periodic requests sent to the server by the remaining nodes.",
              "vi": "Trong kịch bản thứ hai này, chúng tôi xem xét năm nút (có ID lần lượt là 2, 8, 15, 32 và 34) truyền lưu lượng truy cập dồn dập gây cản trở các yêu cầu định kỳ được gửi đến máy chủ bởi các nút còn lại."
            },
            {
              "id": "paper1_p5_colR_b4_s1",
              "en": "In particular, interfering nodes send CoAP requests according to an ON-OFF pattern.",
              "vi": "Cụ thể, các nút gây nhiễu gửi yêu cầu CoAP theo mẫu BẬT-TẮT."
            },
            {
              "id": "paper1_p5_colR_b4_s2",
              "en": "The OFF period is set to 120s, while the ON period is varied ranging from 10s to 140s in the different experiments.",
              "vi": "Khoảng thời gian TẮT được đặt thành 120 giây, trong khi khoảng thời gian BẬT thay đổi từ 10 giây đến 140 giây trong các thử nghiệm khác nhau."
            },
            {
              "id": "paper1_p5_colR_b4_s3",
              "en": "During the ON periods, requests are sent to the server back to back using CoAP congestion control with an RTO equal to 1s max, and one retransmission at",
              "vi": "Trong khoảng thời gian BẬT, các yêu cầu được gửi liên tục đến máy chủ bằng cách sử dụng kiểm soát tắc nghẽn CoAP với RTO tối đa là 1 giây và một lần truyền lại ở tốc độ tối đa 1 giây."
            }
          ]
        },
        {
          "id": "paper1_p5_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 8,  CoCoA+ operation, node ID 10, T = 8s.",
          "sentences": [
            {
              "id": "paper1_p5_colR_b5_s0",
              "en": "Fig. 8,  CoCoA+ operation, node ID 10, T = 8s.",
              "vi": "Hình 8, hoạt động CoCoA+, nút ID 10, T = 8s."
            }
          ]
        }
      ]
    },
    {
      "page_num": 6,
      "page_image": "assets/p1_page_6.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p6_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 9,  Carried load – periodic traffic.",
          "sentences": [
            {
              "id": "paper1_p6_colL_b0_s0",
              "en": "Fig. 9,  Carried load – periodic traffic.",
              "vi": "Hình 9, Tải trọng mang theo - lưu lượng định kỳ."
            }
          ]
        },
        {
          "id": "paper1_p6_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "most (i.e., MAX_RETRANSMIT is equal to one). Such configuration leads to interfering nodes that are very aggressive during their ON phase. Periodic requests from the other CoAP clients are sent with a constant period set to T = 14s, which ensures that the network operates far from congestion when all interfering nodes are in the OFF phase. Each experiment lasts 1000s. For each scenario twelve independent replicas are run.",
          "sentences": [
            {
              "id": "paper1_p6_colL_b1_s0",
              "en": "most (i.e., MAX_RETRANSMIT is equal to one).",
              "vi": "nhất (tức là MAX_RETRANSMIT bằng một)."
            },
            {
              "id": "paper1_p6_colL_b1_s1",
              "en": "Such configuration leads to interfering nodes that are very aggressive during their ON phase.",
              "vi": "Cấu hình như vậy dẫn đến các nút can thiệp rất mạnh trong giai đoạn BẬT của chúng."
            },
            {
              "id": "paper1_p6_colL_b1_s2",
              "en": "Periodic requests from the other CoAP clients are sent with a constant period set to T = 14s, which ensures that the network operates far from congestion when all interfering nodes are in the OFF phase.",
              "vi": "Các yêu cầu định kỳ từ các máy khách CoAP khác được gửi với khoảng thời gian không đổi được đặt thành T = 14 giây, điều này đảm bảo rằng mạng hoạt động không bị tắc nghẽn khi tất cả các nút gây nhiễu đều ở giai đoạn TẮT."
            },
            {
              "id": "paper1_p6_colL_b1_s3",
              "en": "Each experiment lasts 1000s.",
              "vi": "Mỗi thử nghiệm kéo dài 1000 giây."
            },
            {
              "id": "paper1_p6_colL_b1_s4",
              "en": "For each scenario twelve independent replicas are run.",
              "vi": "Đối với mỗi kịch bản, mười hai bản sao độc lập sẽ được chạy."
            }
          ]
        },
        {
          "id": "paper1_p6_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The goal of this scenario is to analyze the behavior of CoCoA+, as compared to CoAP, in a non-steady context when the background traffic varies back and forth between light and high loads. Fig. 9 shows the aggregate carried load for CoAP clients with constant periodic traffic as a function of the duration of the ON period. On the other hand, Fig. 10 shows the average number of transmissions at the sender per successful transaction for the same clients.",
          "sentences": [
            {
              "id": "paper1_p6_colL_b2_s0",
              "en": "The goal of this scenario is to analyze the behavior of CoCoA+, as compared to CoAP, in a non-steady context when the background traffic varies back and forth between light and high loads. Fig. 9 shows the aggregate carried load for CoAP clients with constant periodic traffic as a function of the duration of the ON period.",
              "vi": "Mục tiêu của kịch bản này là phân tích hoạt động của CoCoA+, so với CoAP, trong bối cảnh không ổn định khi lưu lượng truy cập nền thay đổi qua lại giữa tải nhẹ và tải cao. Hình 9 cho thấy tổng tải hữu ích mang theo (carried load) cho các máy khách CoAP với lưu lượng truy cập định kỳ không đổi là hàm số của khoảng thời gian BẬT."
            },
            {
              "id": "paper1_p6_colL_b2_s1",
              "en": "On the other hand, Fig. 10 shows the average number of transmissions at the sender per successful transaction for the same clients.",
              "vi": "Mặt khác, Hình 10 cho thấy số lần truyền trung bình tại người gửi trên mỗi giao dịch thành công đối với cùng một khách hàng."
            }
          ]
        },
        {
          "id": "paper1_p6_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "From Fig. 9 we can observe that CoAP slightly outperforms CoCoA+ in terms of carried load when the ON period is short (up to 60s). This seems to be in contrast with the results shown in Fig. 2, i.e., CoCoA+ performs either equal to CoAP at light loads, and better at high loads. However, this behavior can be explained by the fact that CoCoA+ fails to adapt to congestion when congestion periods (ON periods) are not long enough. In fact, for ON periods longer than 60s, the carried load with CoCoA+ starts decreasing slower than CoAP, becoming then higher than the latter.",
          "sentences": [
            {
              "id": "paper1_p6_colL_b3_s0",
              "en": "From Fig. 9 we can observe that CoAP slightly outperforms CoCoA+ in terms of carried load when the ON period is short (up to 60s).",
              "vi": "Từ Hình 9, chúng ta có thể quan sát thấy CoAP vượt trội hơn CoCoA+ một chút về tải trọng được mang khi thời gian BẬT ngắn (lên đến 60 giây)."
            },
            {
              "id": "paper1_p6_colL_b3_s1",
              "en": "This seems to be in contrast with the results shown in Fig. 2, i.e., CoCoA+ performs either equal to CoAP at light loads, and better at high loads.",
              "vi": "Điều này dường như trái ngược với kết quả được hiển thị trong Hình 2, tức là CoCoA+ hoạt động tương đương với CoAP khi tải nhẹ và tốt hơn khi tải cao."
            },
            {
              "id": "paper1_p6_colL_b3_s2",
              "en": "However, this behavior can be explained by the fact that CoCoA+ fails to adapt to congestion when congestion periods (ON periods) are not long enough.",
              "vi": "Tuy nhiên, hành vi này có thể được giải thích là do CoCoA+ không thích ứng với tình trạng tắc nghẽn khi thời gian tắc nghẽn (thời gian ON) không đủ dài."
            },
            {
              "id": "paper1_p6_colL_b3_s3",
              "en": "In fact, for ON periods longer than 60s, the carried load with CoCoA+ starts decreasing slower than CoAP, becoming then higher than the latter.",
              "vi": "Trên thực tế, trong khoảng thời gian ON dài hơn 60 giây, tải hữu ích mang theo (carried load) CoCoA+ bắt đầu giảm chậm hơn CoAP, sau đó trở nên cao hơn CoAP."
            }
          ]
        },
        {
          "id": "paper1_p6_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "However, Fig. 10 shows that in all scenarios CoCoA+ employs on average a larger number of transmissions per transaction than CoAP. Recall that in the previous scenario we observed instead (see Fig. 4) that at steady high loads CoCoA+ succeeds in reducing retransmissions with respect to CoAP by dynamically adapting to congestion. This behavior can be ex-",
          "sentences": [
            {
              "id": "paper1_p6_colL_b4_s0",
              "en": "However, Fig. 10 shows that in all scenarios CoCoA+ employs on average a larger number of transmissions per transaction than CoAP.",
              "vi": "Tuy nhiên, Hình 10 cho thấy rằng trong tất cả các kịch bản, CoCoA+ sử dụng trung bình số lượng truyền tải trên mỗi giao dịch lớn hơn CoAP."
            },
            {
              "id": "paper1_p6_colL_b4_s1",
              "en": "Recall that in the previous scenario we observed instead (see Fig. 4) that at steady high loads CoCoA+ succeeds in reducing retransmissions with respect to CoAP by dynamically adapting to congestion.",
              "vi": "Hãy nhớ lại rằng trong kịch bản trước đó, chúng tôi đã quan sát (xem Hình 4) rằng ở mức tải cao ổn định, CoCoA+ đã thành công trong việc giảm số lần truyền lại đối với CoAP bằng cách tự động thích ứng với tình trạng tắc nghẽn."
            },
            {
              "id": "paper1_p6_colL_b4_s2",
              "en": "This behavior can be ex-",
              "vi": "Hành vi này có thể là cũ"
            }
          ]
        },
        {
          "id": "paper1_p6_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 10, Transmissions per transaction – periodic traffic.",
          "sentences": [
            {
              "id": "paper1_p6_colL_b5_s0",
              "en": "Fig. 10, Transmissions per transaction – periodic traffic.",
              "vi": "Hình 10, Số lần truyền trên mỗi giao dịch - lưu lượng định kỳ."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p6_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 11, Weak estimator failing to update RTOinit.",
          "sentences": [
            {
              "id": "paper1_p6_colR_b0_s0",
              "en": "Fig. 11, Weak estimator failing to update RTOinit.",
              "vi": "Hình 11, Công cụ ước tính yếu không cập nhật RTOinit."
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "plained by considering how RTOinit is updated in case of retransmissions, i.e., when the weak estimator plays a major role. If more than two retransmissions occur, the weak estimator is not updated, and therefore RTOinit is not updated as well. In addition, if an RTT is sampled after a retransmission that is close to the previous RTOinit value, the weight associated to the weak estimator is too small to affect the next RTOinit, which therefore does not increase fast to respond to network congestion.",
          "sentences": [
            {
              "id": "paper1_p6_colR_b1_s0",
              "en": "plained by considering how RTOinit is updated in case of retransmissions, i.e., when the weak estimator plays a major role.",
              "vi": "được làm rõ bằng cách xem xét cách RTOinit được cập nhật trong trường hợp truyền lại, tức là khi bộ bộ ước lượng yếu (weak estimator) đóng vai trò chính."
            },
            {
              "id": "paper1_p6_colR_b1_s1",
              "en": "If more than two retransmissions occur, the weak estimator is not updated, and therefore RTOinit is not updated as well.",
              "vi": "Nếu xảy ra nhiều hơn hai lần truyền lại, bộ ước tính yếu sẽ không được cập nhật và do đó RTOinit cũng không được cập nhật."
            },
            {
              "id": "paper1_p6_colR_b1_s2",
              "en": "In addition, if an RTT is sampled after a retransmission that is close to the previous RTOinit value, the weight associated to the weak estimator is too small to affect the next RTOinit, which therefore does not increase fast to respond to network congestion.",
              "vi": "Ngoài ra, nếu RTT được lấy mẫu sau khi truyền lại gần với giá trị RTOinit trước đó thì trọng số liên quan đến bộ ước tính yếu sẽ quá nhỏ để ảnh hưởng đến RTOinit tiếp theo, do đó RTOinit này không tăng nhanh để đáp ứng với tắc nghẽn mạng."
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Such circumstances are both frequently observed during ON periods with CoCoA+. Two examples are provided in Fig. 11 and Fig. 12. In particular, Fig. 11 shows that, although a sequence of four transactions that required at least one retransmission occurred, RTOinit is not updated by CoCoA+, and its small value contributes to increase the number of retransmissions. On the other hand, in Fig. 12 it is shown how the RTOinit is adapted, but not enough to avoid spurious retransmissions corresponding to duplicate ACKs.",
          "sentences": [
            {
              "id": "paper1_p6_colR_b2_s0",
              "en": "Such circumstances are both frequently observed during ON periods with CoCoA+.",
              "vi": "Những trường hợp như vậy thường được quan sát thấy trong thời gian ON với CoCoA+."
            },
            {
              "id": "paper1_p6_colR_b2_s1",
              "en": "Two examples are provided in Fig. 11 and Fig. 12.",
              "vi": "Hai ví dụ được cung cấp trong Hình 11 và Hình 12."
            },
            {
              "id": "paper1_p6_colR_b2_s2",
              "en": "In particular, Fig. 11 shows that, although a sequence of four transactions that required at least one retransmission occurred, RTOinit is not updated by CoCoA+, and its small value contributes to increase the number of retransmissions.",
              "vi": "Cụ thể, Hình 11 cho thấy, mặc dù đã xảy ra chuỗi bốn giao dịch yêu cầu ít nhất một lần truyền lại nhưng RTOinit không được CoCoA+ cập nhật và giá trị nhỏ của nó góp phần làm tăng số lần truyền lại."
            },
            {
              "id": "paper1_p6_colR_b2_s3",
              "en": "On the other hand, in Fig. 12 it is shown how the RTOinit is adapted, but not enough to avoid spurious retransmissions corresponding to duplicate ACKs.",
              "vi": "Mặt khác, trong Hình 12, RTOinit được điều chỉnh như thế nào, nhưng không đủ để tránh việc truyền lại giả mạo tương ứng với các ACK trùng lặp."
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b3",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "V. COCOA+ SHORTCOMINGS",
          "sentences": [
            {
              "id": "paper1_p6_colR_b3_s0",
              "en": "V.",
              "vi": "V."
            },
            {
              "id": "paper1_p6_colR_b3_s1",
              "en": "COCOA+ SHORTCOMINGS",
              "vi": "COCOA+ NHỮNG THIẾU HẠI"
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The performance analysis presented in Sect. IV allowed us to identify some weaknesses of CoCoA+ in its current definition. We summarize our conclusions in the following, also providing additional considerations based on the gained experience.",
          "sentences": [
            {
              "id": "paper1_p6_colR_b4_s0",
              "en": "The performance analysis presented in Sect.",
              "vi": "Phân tích hiệu suất được trình bày trong Phần."
            },
            {
              "id": "paper1_p6_colR_b4_s1",
              "en": "IV allowed us to identify some weaknesses of CoCoA+ in its current definition.",
              "vi": "IV cho phép chúng tôi xác định một số điểm yếu của CoCoA+ theo định nghĩa hiện tại."
            },
            {
              "id": "paper1_p6_colR_b4_s2",
              "en": "We summarize our conclusions in the following, also providing additional considerations based on the gained experience.",
              "vi": "Chúng tôi tóm tắt kết luận của mình như sau, đồng thời đưa ra những cân nhắc bổ sung dựa trên kinh nghiệm thu được."
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b5",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. RTO too close to RTT",
          "sentences": [
            {
              "id": "paper1_p6_colR_b5_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p6_colR_b5_s1",
              "en": "RTO too close to RTT",
              "vi": "RTO quá gần RTT"
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "When a sequence of similar RTTs is sampled, the RTTVAR variable, which measures the mean variance, tends to vanish. It follows that RTO values get close to the measured RTT. The problem is exacerbated when such RTTs have a very small value, for instance because of a period in which the network is lightly loaded that leads to small RTOs. However, even when the network is stable, RTTs can fluctuate, consequently the",
          "sentences": [
            {
              "id": "paper1_p6_colR_b6_s0",
              "en": "When a sequence of similar RTTs is sampled, the RTTVAR variable, which measures the mean variance, tends to vanish.",
              "vi": "Khi một chuỗi RTT tương tự được lấy mẫu, biến RTTVAR đo phương sai trung bình có xu hướng biến mất."
            },
            {
              "id": "paper1_p6_colR_b6_s1",
              "en": "It follows that RTO values get close to the measured RTT.",
              "vi": "Theo đó, các giá trị RTO tiến gần đến RTT đo được."
            },
            {
              "id": "paper1_p6_colR_b6_s2",
              "en": "The problem is exacerbated when such RTTs have a very small value, for instance because of a period in which the network is lightly loaded that leads to small RTOs.",
              "vi": "Vấn đề trở nên trầm trọng hơn khi các RTT như vậy có giá trị rất nhỏ, chẳng hạn như do khoảng thời gian mạng tải nhẹ dẫn đến RTO nhỏ."
            },
            {
              "id": "paper1_p6_colR_b6_s3",
              "en": "However, even when the network is stable, RTTs can fluctuate, consequently the",
              "vi": "Tuy nhiên, ngay cả khi mạng ổn định, RTT có thể dao động, do đó"
            }
          ]
        },
        {
          "id": "paper1_p6_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 12, Weak estimator failing to adapt RTOinit.",
          "sentences": [
            {
              "id": "paper1_p6_colR_b7_s0",
              "en": "Fig. 12, Weak estimator failing to adapt RTOinit.",
              "vi": "Hình 12, Công cụ ước tính yếu không thể điều chỉnh RTOinit."
            }
          ]
        }
      ]
    },
    {
      "page_num": 7,
      "page_image": "assets/p1_page_7.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p7_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 13, Example of RTO increase as response to RTT decrease.",
          "sentences": [
            {
              "id": "paper1_p7_colL_b0_s0",
              "en": "Fig. 13, Example of RTO increase as response to RTT decrease.",
              "vi": "Hình 13, Ví dụ về RTO tăng khi phản ứng với RTT giảm."
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "probability of spurious retransmissions increases as RTOs get close to small RTTs. The RTTVAR component was intended to maintain information about network variability: when the traffic pattern is bursty (e.g., an alarm triggered by sporadic events), it might be worthwhile to avoid RTTVAR resets.",
          "sentences": [
            {
              "id": "paper1_p7_colL_b1_s0",
              "en": "probability of spurious retransmissions increases as RTOs get close to small RTTs.",
              "vi": "xác suất truyền lại giả tăng lên khi RTO tiến gần đến RTT nhỏ."
            },
            {
              "id": "paper1_p7_colL_b1_s1",
              "en": "The RTTVAR component was intended to maintain information about network variability: when the traffic pattern is bursty (e.g., an alarm triggered by sporadic events), it might be worthwhile to avoid RTTVAR resets.",
              "vi": "Thành phần RTTVAR nhằm mục đích duy trì thông tin về tính biến đổi của mạng: khi mô hình lưu lượng truy cập bùng nổ (ví dụ: cảnh báo được kích hoạt bởi các sự kiện lẻ tẻ), có thể cần tránh việc đặt lại RTTVAR."
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b2",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Lack of weak estimator update",
          "sentences": [
            {
              "id": "paper1_p7_colL_b2_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper1_p7_colL_b2_s1",
              "en": "Lack of weak estimator update",
              "vi": "Thiếu cập nhật công cụ ước tính yếu"
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The rule to avoid the weak estimator update when more than two retransmissions occur has been introduced in CoCoA+ to reduce the impact of the weak RTO on the final RTO. However, this countermeasure can work well only under steady conditions when the network load is constant or changes very slowly. On the other hand, if competing traffic is bursty, a more timeliness adaptation to the current network load is required.",
          "sentences": [
            {
              "id": "paper1_p7_colL_b3_s0",
              "en": "The rule to avoid the weak estimator update when more than two retransmissions occur has been introduced in CoCoA+ to reduce the impact of the weak RTO on the final RTO.",
              "vi": "Quy tắc tránh cập nhật công cụ ước tính yếu khi xảy ra nhiều hơn hai lần truyền lại đã được giới thiệu trong CoCoA+ nhằm giảm tác động của RTO yếu đến RTO cuối cùng."
            },
            {
              "id": "paper1_p7_colL_b3_s1",
              "en": "However, this countermeasure can work well only under steady conditions when the network load is constant or changes very slowly.",
              "vi": "Tuy nhiên, biện pháp đối phó này chỉ có thể hoạt động tốt trong điều kiện ổn định khi tải mạng không đổi hoặc thay đổi rất chậm."
            },
            {
              "id": "paper1_p7_colL_b3_s2",
              "en": "On the other hand, if competing traffic is bursty, a more timeliness adaptation to the current network load is required.",
              "vi": "Mặt khác, nếu lưu lượng truy cập cạnh tranh bùng nổ thì cần phải có sự thích ứng kịp thời hơn với tải mạng hiện tại."
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b4",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. Insufficient weak estimator weight",
          "sentences": [
            {
              "id": "paper1_p7_colL_b4_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper1_p7_colL_b4_s1",
              "en": "Insufficient weak estimator weight",
              "vi": "Trọng lượng bộ ước lượng yếu (weak estimator) không đủ"
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Setting Kweak to 1 also limits the impact of the weak RTO. This works well under slowly varying traffic load, but not when competing sporadic bursty traffic is transmitted in the network. Our results showed that if the sampled RTT after a retransmission is very close to the RTO, the weak estimator is not able to increase the RTO value effectively. Such event is particularly frequent when spurious retransmissions occur. In this case, even though the received response corresponds to the first transmission, the weak estimator manages the sample as if it were a response to the retransmitted request. However, its weight is smaller than the strong estimator, and therefore it does not change significantly the RTO value, and this may cause a sequence of spurious retransmissions.",
          "sentences": [
            {
              "id": "paper1_p7_colL_b5_s0",
              "en": "Setting Kweak to 1 also limits the impact of the weak RTO.",
              "vi": "Đặt Kweak thành 1 cũng hạn chế tác động của RTO yếu."
            },
            {
              "id": "paper1_p7_colL_b5_s1",
              "en": "This works well under slowly varying traffic load, but not when competing sporadic bursty traffic is transmitted in the network.",
              "vi": "Điều này hoạt động tốt trong điều kiện tải lưu lượng thay đổi chậm, nhưng không hoạt động tốt khi lưu lượng truy cập dồn dập cạnh tranh được truyền trong mạng."
            },
            {
              "id": "paper1_p7_colL_b5_s2",
              "en": "Our results showed that if the sampled RTT after a retransmission is very close to the RTO, the weak estimator is not able to increase the RTO value effectively.",
              "vi": "Kết quả của chúng tôi cho thấy rằng nếu RTT được lấy mẫu sau khi truyền lại rất gần với RTO thì bộ ước tính yếu không thể tăng giá trị RTO một cách hiệu quả."
            },
            {
              "id": "paper1_p7_colL_b5_s3",
              "en": "Such event is particularly frequent when spurious retransmissions occur.",
              "vi": "Sự kiện như vậy đặc biệt thường xuyên xảy ra khi xảy ra việc truyền lại giả mạo."
            },
            {
              "id": "paper1_p7_colL_b5_s4",
              "en": "In this case, even though the received response corresponds to the first transmission, the weak estimator manages the sample as if it were a response to the retransmitted request.",
              "vi": "Trong trường hợp này, mặc dù phản hồi nhận được tương ứng với lần truyền đầu tiên, bộ bộ ước lượng yếu (weak estimator) vẫn quản lý mẫu như thể nó là phản hồi cho yêu cầu được truyền lại."
            },
            {
              "id": "paper1_p7_colL_b5_s5",
              "en": "However, its weight is smaller than the strong estimator, and therefore it does not change significantly the RTO value, and this may cause a sequence of spurious retransmissions.",
              "vi": "Tuy nhiên, trọng số của nó nhỏ hơn bộ bộ ước lượng mạnh (strong estimator) và do đó nó không thay đổi đáng kể giá trị RTO và điều này có thể gây ra một chuỗi truyền lại giả."
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b6",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "D. RTO peaks in response to RTT decrease",
          "sentences": [
            {
              "id": "paper1_p7_colL_b6_s0",
              "en": "D.",
              "vi": "D."
            },
            {
              "id": "paper1_p7_colL_b6_s1",
              "en": "RTO peaks in response to RTT decrease",
              "vi": "Đỉnh RTO để đáp ứng với việc giảm RTT"
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The algorithm used to calculate the RTO suffers of the following issue: if the RTT rapidly decreases, the RTO, contrarily, increases. As also shown in [14], this can be explained considering that the difference between the smoothed mean RTT and",
          "sentences": [
            {
              "id": "paper1_p7_colL_b7_s0",
              "en": "The algorithm used to calculate the RTO suffers of the following issue: if the RTT rapidly decreases, the RTO, contrarily, increases.",
              "vi": "Thuật toán được sử dụng để tính toán RTO gặp phải vấn đề sau: nếu RTT giảm nhanh thì RTO sẽ tăng ngược lại."
            },
            {
              "id": "paper1_p7_colL_b7_s1",
              "en": "As also shown in [14], this can be explained considering that the difference between the smoothed mean RTT and",
              "vi": "Như được trình bày trong [14], điều này có thể được giải thích khi xem xét rằng sự khác biệt giữa RTT trung bình được làm mịn và"
            }
          ]
        },
        {
          "id": "paper1_p7_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The current CoAP and CoCoA+ implementations cannot match a specific ACK with its CON when retransmissions occur. As a result, it is impossible to distinguish between transactions completed with only one transmission and transactions that required instead multiple retransmissions. In order to overcome such limitation two solutions are proposed: i) introduce a Fig. 14, Example of RTOinit spikes.",
          "sentences": [
            {
              "id": "paper1_p7_colL_b8_s0",
              "en": "The current CoAP and CoCoA+ implementations cannot match a specific ACK with its CON when retransmissions occur.",
              "vi": "Việc triển khai CoAP và CoCoA+ hiện tại không thể khớp một ACK cụ thể với CON của nó khi xảy ra quá trình truyền lại."
            },
            {
              "id": "paper1_p7_colL_b8_s1",
              "en": "As a result, it is impossible to distinguish between transactions completed with only one transmission and transactions that required instead multiple retransmissions.",
              "vi": "Kết quả là, không thể phân biệt giữa các giao dịch được hoàn thành chỉ với một lần truyền và các giao dịch yêu cầu truyền lại nhiều lần."
            },
            {
              "id": "paper1_p7_colL_b8_s2",
              "en": "In order to overcome such limitation two solutions are proposed: i) introduce a Fig. 14, Example of RTOinit spikes.",
              "vi": "Để khắc phục hạn chế đó, hai giải pháp được đề xuất: i) giới thiệu Hình 14, Ví dụ về các đột biến RTOinit."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p7_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "the sampled RTT becomes negative while RTTVAR is updated using the absolute value of such difference, thus resulting in an artificial increase of the RTO. Fig. 13 shows an example of this behavior observed in one simulation run of our experiments.",
          "sentences": [
            {
              "id": "paper1_p7_colR_b0_s0",
              "en": "the sampled RTT becomes negative while RTTVAR is updated using the absolute value of such difference, thus resulting in an artificial increase of the RTO. Fig. 13 shows an example of this behavior observed in one simulation run of our experiments.",
              "vi": "RTT được lấy mẫu trở nên âm trong khi RTTVAR được cập nhật bằng cách sử dụng giá trị tuyệt đối của chênh lệch đó, do đó dẫn đến sự gia tăng RTO giả tạo. Hình 13 cho thấy một ví dụ về hành vi này được quan sát thấy trong một lần chạy thử nghiệm mô phỏng của chúng tôi."
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "E. Double algorithms, double histories",
          "sentences": [
            {
              "id": "paper1_p7_colR_b1_s0",
              "en": "E.",
              "vi": "E."
            },
            {
              "id": "paper1_p7_colR_b1_s1",
              "en": "Double algorithms, double histories",
              "vi": "Thuật toán kép, lịch sử kép"
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The analysis of the RTO traces has highlighted some RTOinit spikes in some experiments. Fig. 14 shows an example of such behavior: a small increase in the RTT causes a steep increment of the RTO value. The reason for this is due to the lack of an aging mechanism for the weak estimator. If the weak estimator has grown to a large value at some time in the past, it will influence the RTO whenever a retransmission occurs (even if the retransmission is spurious), irrespectively of how much time has passed since then. To avoid such behavior, the weak estimator should be aged as well, or it should be discarded in favor of an exact retransmission response estimation.",
          "sentences": [
            {
              "id": "paper1_p7_colR_b2_s0",
              "en": "The analysis of the RTO traces has highlighted some RTOinit spikes in some experiments. Fig. 14 shows an example of such behavior: a small increase in the RTT causes a steep increment of the RTO value.",
              "vi": "Việc phân tích dấu vết RTO đã làm nổi bật một số đột biến RTOinit trong một số thử nghiệm. Hình 14 cho thấy một ví dụ về hành vi như vậy: một sự gia tăng nhỏ trong RTT sẽ gây ra sự gia tăng mạnh của giá trị RTO."
            },
            {
              "id": "paper1_p7_colR_b2_s1",
              "en": "The reason for this is due to the lack of an aging mechanism for the weak estimator.",
              "vi": "Nguyên nhân của điều này là do thiếu cơ chế lão hóa cho bộ bộ ước lượng yếu (weak estimator)."
            },
            {
              "id": "paper1_p7_colR_b2_s2",
              "en": "If the weak estimator has grown to a large value at some time in the past, it will influence the RTO whenever a retransmission occurs (even if the retransmission is spurious), irrespectively of how much time has passed since then.",
              "vi": "Nếu công cụ ước tính yếu đã tăng lên giá trị lớn tại một thời điểm nào đó trong quá khứ, nó sẽ ảnh hưởng đến RTO bất cứ khi nào xảy ra truyền lại (ngay cả khi truyền lại là giả), bất kể thời gian đã trôi qua bao nhiêu kể từ đó."
            },
            {
              "id": "paper1_p7_colR_b2_s3",
              "en": "To avoid such behavior, the weak estimator should be aged as well, or it should be discarded in favor of an exact retransmission response estimation.",
              "vi": "Để tránh hành vi như vậy, bộ ước tính yếu cũng phải cũ hơn hoặc nên loại bỏ nó để ước tính phản hồi truyền lại chính xác."
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b3",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "F. Excessive RTO growth",
          "sentences": [
            {
              "id": "paper1_p7_colR_b3_s0",
              "en": "F.",
              "vi": "F."
            },
            {
              "id": "paper1_p7_colR_b3_s1",
              "en": "Excessive RTO growth",
              "vi": "Tăng trưởng RTO quá mức"
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In CoCoA+ the RTOinit value can grow very large. If retransmissions occur, the back-off further increases such values, leading to very large waiting times. In fact, only the initial RTO is limited to 60 seconds. During our experiments some transactions, although a few ones, required a waiting time in between 200 and 300 seconds.",
          "sentences": [
            {
              "id": "paper1_p7_colR_b4_s0",
              "en": "In CoCoA+ the RTOinit value can grow very large.",
              "vi": "Trong CoCoA+ giá trị RTOinit có thể tăng rất lớn."
            },
            {
              "id": "paper1_p7_colR_b4_s1",
              "en": "If retransmissions occur, the back-off further increases such values, leading to very large waiting times.",
              "vi": "Nếu việc truyền lại xảy ra, việc truyền lại sẽ tăng thêm các giá trị như vậy, dẫn đến thời gian chờ đợi rất lớn."
            },
            {
              "id": "paper1_p7_colR_b4_s2",
              "en": "In fact, only the initial RTO is limited to 60 seconds.",
              "vi": "Trên thực tế, chỉ RTO ban đầu bị giới hạn ở 60 giây."
            },
            {
              "id": "paper1_p7_colR_b4_s3",
              "en": "During our experiments some transactions, although a few ones, required a waiting time in between 200 and 300 seconds.",
              "vi": "Trong quá trình thử nghiệm của chúng tôi, một số giao dịch, mặc dù chỉ một số ít, yêu cầu thời gian chờ trong khoảng từ 200 đến 300 giây."
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b5",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "VI. COAP PRECISE CONGESTION CONTROL",
          "sentences": [
            {
              "id": "paper1_p7_colR_b5_s0",
              "en": "VI.",
              "vi": "VI."
            },
            {
              "id": "paper1_p7_colR_b5_s1",
              "en": "COAP PRECISE CONGESTION CONTROL",
              "vi": "KIỂM SOÁT TẮC TẮC CHÍNH XÁC COAP"
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The following section presents a set of modifications to the CoCoA+ algorithm that aim at overcoming the issues highlighted. The proposed solution is based on two main elements: (i) a mechanism to precisely link requests to responses even in case of retransmissions; (ii) a set of modifications to the RTO estimation algorithm. Specifically, the resulting precise Congestion Control algorithm, pCoCoA for short, differs from CoCoA+ in the following points:",
          "sentences": [
            {
              "id": "paper1_p7_colR_b6_s0",
              "en": "The following section presents a set of modifications to the CoCoA+ algorithm that aim at overcoming the issues highlighted.",
              "vi": "Phần sau đây trình bày một loạt các sửa đổi đối với thuật toán CoCoA+ nhằm khắc phục các vấn đề được nêu bật."
            },
            {
              "id": "paper1_p7_colR_b6_s1",
              "en": "The proposed solution is based on two main elements: (i) a mechanism to precisely link requests to responses even in case of retransmissions; (ii) a set of modifications to the RTO estimation algorithm.",
              "vi": "Giải pháp được đề xuất dựa trên hai yếu tố chính: (i) cơ chế liên kết chính xác các yêu cầu với phản hồi ngay cả trong trường hợp truyền lại; (ii) một tập hợp các sửa đổi đối với thuật toán ước tính RTO."
            },
            {
              "id": "paper1_p7_colR_b6_s2",
              "en": "Specifically, the resulting precise Congestion Control algorithm, pCoCoA for short, differs from CoCoA+ in the following points:",
              "vi": "Cụ thể, thuật toán Kiểm soát tắc nghẽn chính xác thu được, gọi tắt là pCoCoA, khác với CoCoA+ ở các điểm sau:"
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• It eliminates the use of the weak estimator, introducing a transmission count option to match each ACK message with the corresponding CON message even in case of retransmissions; • It introduces a different way to initialize the variable and to update RTTVAR and the only smoothed round-trip estimator, SRTT; • It employs a dynamic method to limit the minimum RTO, thus reducing spurious retransmissions. In the following, we present in detail the proposed modifications. First, we introduce two alternative solutions to implement a precise mapping between CON and ACK messages when retransmissions occur, then we present the precise Congestion Control algorithm and the RTO calculation procedure adopted.",
          "sentences": [
            {
              "id": "paper1_p7_colR_b7_s0",
              "en": "• It eliminates the use of the weak estimator, introducing a transmission count option to match each ACK message with the corresponding CON message even in case of retransmissions; • It introduces a different way to initialize the variable and to update RTTVAR and the only smoothed round-trip estimator, SRTT; • It employs a dynamic method to limit the minimum RTO, thus reducing spurious retransmissions.",
              "vi": "• Nó loại bỏ việc sử dụng công cụ ước tính yếu, đưa ra tùy chọn đếm số lần truyền để khớp từng thông báo ACK với thông báo CON tương ứng ngay cả trong trường hợp truyền lại; • Nó giới thiệu một cách khác để khởi tạo biến và cập nhật RTTVAR và công cụ ước tính khứ hồi được làm mịn duy nhất, SRTT; • Nó sử dụng một phương pháp động để hạn chế RTO tối thiểu, do đó giảm việc truyền lại giả."
            },
            {
              "id": "paper1_p7_colR_b7_s1",
              "en": "In the following, we present in detail the proposed modifications.",
              "vi": "Sau đây, chúng tôi trình bày chi tiết các sửa đổi được đề xuất."
            },
            {
              "id": "paper1_p7_colR_b7_s2",
              "en": "First, we introduce two alternative solutions to implement a precise mapping between CON and ACK messages when retransmissions occur, then we present the precise Congestion Control algorithm and the RTO calculation procedure adopted.",
              "vi": "Đầu tiên, chúng tôi giới thiệu hai giải pháp thay thế để triển khai ánh xạ chính xác giữa các thông báo CON và ACK khi xảy ra truyền lại, sau đó chúng tôi trình bày thuật toán Kiểm soát tắc nghẽn chính xác và quy trình tính toán RTO được áp dụng."
            }
          ]
        },
        {
          "id": "paper1_p7_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. CON-ACK precise mapping",
          "sentences": [
            {
              "id": "paper1_p7_colR_b8_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p7_colR_b8_s1",
              "en": "CON-ACK precise mapping",
              "vi": "Ánh xạ chính xác CON-ACK"
            }
          ]
        }
      ]
    },
    {
      "page_num": 8,
      "page_image": "assets/p1_page_8.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p8_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "function SendAndReceive(CON) 1. 𝑇𝐶= 1 2. 𝐶𝑂𝑁. 𝑇𝐶= 𝑇𝐶 3. if(𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡 not in 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡) 4. 𝑅𝑇𝑂= 𝐶𝑜𝐴𝑃_𝐷𝐸𝐹𝐴𝑈𝐿𝑇_𝑅𝑇𝑂 5. else 6. 𝑅𝑇𝑂= 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡[𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡] 7. 𝑅𝑇𝑂= 𝑅𝑇𝑂+ 𝑟𝑎𝑛𝑑()%",
          "sentences": [
            {
              "id": "paper1_p8_colL_b0_s0",
              "en": "function SendAndReceive(CON) 1. 𝑇𝐶= 1 2. 𝐶𝑂𝑁. 𝑇𝐶= 𝑇𝐶 3. if(𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡 not in 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡) 4. 𝑅𝑇𝑂= 𝐶𝑜𝐴𝑃_𝐷𝐸𝐹𝐴𝑈𝐿𝑇_𝑅𝑇𝑂 5. else 6. 𝑅𝑇𝑂= 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡[𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡] 7. 𝑅𝑇𝑂= 𝑅𝑇𝑂+ 𝑟𝑎𝑛𝑑()%",
              "vi": "hàm SendAndReceive(CON) 1. 𝑇𝐶= 1 2. 𝐶𝑂𝑁. 𝑇𝐶= 𝑇𝐶 3. if(𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡 không có trong 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡) 4. 𝑅𝑇𝑂= 𝐶𝑜𝐴𝑃_𝐷𝐸𝐹𝐴𝑈𝐿𝑇_𝑅𝑇𝑂 5. còn lại 6. 𝑅𝑇𝑂= 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡[𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡] 7. 𝑅𝑇𝑂= 𝑅𝑇𝑂+ 𝑟𝑎𝑛𝑑()%"
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝑅𝑇𝑂",
          "sentences": [
            {
              "id": "paper1_p8_colL_b1_s0",
              "en": "𝑅𝑇𝑂",
              "vi": "𝑅𝑇𝑂"
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "2 8. 𝐴𝐶𝐾= 𝑁𝑈𝐿𝐿 9. 𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[] = 𝐴𝑟𝑟𝑎𝑦(𝑀𝐴𝑋_𝐴𝑇𝑇𝐸𝑀𝑃𝑆) 10. while(𝑇𝐶< 𝑀𝐴𝑋_𝐴𝑇𝑇𝐸𝑀𝑃𝑆 and 𝐴𝐶𝐾== 𝑁𝑈𝐿𝐿) 11.     𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[𝑇𝐶] = 𝑠𝑦𝑠𝑡𝑒𝑚_𝑡𝑖𝑚𝑒() 12.     𝐴𝐶𝐾= 𝑠𝑒𝑛𝑑(𝐶𝑂𝑁) 13.     𝑡= 𝑠𝑡𝑎𝑟𝑡_𝑡𝑖𝑚𝑒𝑟(𝑅𝑇𝑂) 14.     𝑤𝑎𝑖𝑡_𝑢𝑛𝑡𝑖𝑙(𝐴𝐶𝐾 ≠𝑁𝑈𝐿𝐿 or 𝑡. 𝑒𝑥𝑝𝑖𝑟𝑒𝑑) 15.     if(𝑡. 𝑒𝑥𝑝𝑖𝑟𝑒𝑑) 16.         𝑇𝐶= 𝑇𝐶+ 1 17.         𝐶𝑂𝑁. 𝑇𝐶= 𝑇𝐶 18.         𝑅𝑇𝑂= 𝑉𝐵𝐹() 19. if(𝐴𝐶𝐾 ≠𝑁𝑈𝐿𝐿) 20.     𝑅= 𝑠𝑦𝑠𝑡𝑒𝑚_𝑡𝑖𝑚𝑒() −𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[𝐴𝐶𝐾. 𝑇𝐶] 21.     if(𝑇𝐶 ≠𝐴𝐶𝐾. 𝑇𝐶) 22.         𝐴𝐶𝐾. 𝑠𝑝𝑢𝑟𝑖𝑜𝑢𝑠= 𝑇𝑟𝑢𝑒 23. else 24.     return 25.     𝑅𝑇𝑂= 𝑅𝑇𝑂𝐶𝑜𝑚𝑝𝑢𝑡𝑎𝑡𝑖𝑜𝑛(𝑅, 𝐴𝐶𝐾. 𝑠𝑝𝑢𝑟𝑖𝑜𝑢𝑠) 26.     𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡[𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡] = 𝑅𝑇𝑂",
          "sentences": [
            {
              "id": "paper1_p8_colL_b2_s0",
              "en": "2 8. 𝐴𝐶𝐾= 𝑁𝑈𝐿𝐿 9. 𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[] = 𝐴𝑟𝑟𝑎𝑦(𝑀𝐴𝑋_𝐴𝑇𝑇𝐸𝑀𝑃𝑆) 10. while(𝑇𝐶< 𝑀𝐴𝑋_𝐴𝑇𝑇𝐸𝑀𝑃𝑆 and 𝐴𝐶𝐾== 𝑁𝑈𝐿𝐿) 11.     𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[𝑇𝐶] = 𝑠𝑦𝑠𝑡𝑒𝑚_𝑡𝑖𝑚𝑒() 12.     𝐴𝐶𝐾= 𝑠𝑒𝑛𝑑(𝐶𝑂𝑁) 13.     𝑡= 𝑠𝑡𝑎𝑟𝑡_𝑡𝑖𝑚𝑒𝑟(𝑅𝑇𝑂) 14.     𝑤𝑎𝑖𝑡_𝑢𝑛𝑡𝑖𝑙(𝐴𝐶𝐾 ≠𝑁𝑈𝐿𝐿 or 𝑡. 𝑒𝑥𝑝𝑖𝑟𝑒𝑑) 15.     if(𝑡. 𝑒𝑥𝑝𝑖𝑟𝑒𝑑) 16.         𝑇𝐶= 𝑇𝐶+ 1 17.         𝐶𝑂𝑁. 𝑇𝐶= 𝑇𝐶 18.         𝑅𝑇𝑂= 𝑉𝐵𝐹() 19. if(𝐴𝐶𝐾 ≠𝑁𝑈𝐿𝐿) 20.     𝑅= 𝑠𝑦𝑠𝑡𝑒𝑚_𝑡𝑖𝑚𝑒() −𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[𝐴𝐶𝐾. 𝑇𝐶] 21.     if(𝑇𝐶 ≠𝐴𝐶𝐾. 𝑇𝐶) 22.         𝐴𝐶𝐾. 𝑠𝑝𝑢𝑟𝑖𝑜𝑢𝑠= 𝑇𝑟𝑢𝑒 23. else 24.     return 25.     𝑅𝑇𝑂= 𝑅𝑇𝑂𝐶𝑜𝑚𝑝𝑢𝑡𝑎𝑡𝑖𝑜𝑛(𝑅, 𝐴𝐶𝐾. 𝑠𝑝𝑢𝑟𝑖𝑜𝑢𝑠) 26.     𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡[𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡] = 𝑅𝑇𝑂",
              "vi": "2 8. 𝐴𝐶𝐾= 𝑁𝑈𝐿𝐿 9. 𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[] = 𝐴𝑟𝑟𝑎𝑦(𝑀𝐴𝑋_𝐴𝑇𝑇𝐸𝑀𝑃𝑆) 10. while(𝑇𝐶< 𝑀𝐴𝑋_𝐴𝑇𝑇𝐸𝑀𝑃𝑆 và 𝐴𝐶𝐾== 𝑁𝑈𝐿𝐿) 11. 𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[𝑇𝐶] = 𝑠𝑦𝑠𝑡𝑒𝑚_𝑡𝑖𝑚𝑒() 12. 𝐴𝐶𝐾= 𝑠𝑒𝑛𝑑(𝐶𝑂𝑁) 13. 𝑡= 𝑠𝑡𝑎𝑟𝑡_𝑡𝑖𝑚𝑒𝑟(𝑅𝑇𝑂) 14. 𝑤𝑎𝑖𝑡_𝑢𝑛𝑡𝑖𝑙(𝐴𝐶𝐾 ≠𝑁𝑈𝐿𝐿 hoặc 𝑡. 𝑒𝑥𝑝𝑖𝑟𝑒𝑑) 15. if(𝑡. 𝑒𝑥𝑝𝑖𝑟𝑒𝑑) 16. 𝑇𝐶= 𝑇𝐶+ 1 17. 𝐶𝑂𝑁. 𝑇𝐶= 𝑇𝐶 18. 𝑅𝑇𝑂= 𝑉𝐵𝐹() 19. if(𝐴𝐶𝐾 ≠𝑁𝑈𝐿𝐿) 20. 𝑅= 𝑠𝑦𝑠𝑡𝑒𝑚_𝑡𝑖𝑚𝑒() −𝑡𝑖𝑚𝑒𝑠𝑡𝑎𝑚𝑝[𝐴𝐶𝐾. 𝑇𝐶] 21. if(𝑇𝐶 ≠𝐴𝐶𝐾. 𝑇𝐶) 22. 𝐴𝐶𝐾. 𝑠𝑝𝑢𝑟𝑖𝑜𝑢𝑠= 𝑇𝑟𝑢𝑒 23. khác 24. return 25. 𝑅𝑇𝑂= 𝑅𝑇𝑂𝐶𝑜𝑚𝑝𝑢𝑡𝑎𝑡𝑖𝑜𝑛(𝑅, 𝐴𝐶𝐾. 𝑠𝑝𝑢𝑟𝑖𝑜𝑢𝑠) 26. 𝑘𝑛𝑜𝑤𝑛_𝑑𝑒𝑠𝑡[𝐶𝑂𝑁. 𝑑𝑒𝑠𝑡] = 𝑅𝑇𝑂"
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Algorithm 1: pCoCoA algorithm",
          "sentences": [
            {
              "id": "paper1_p8_colL_b3_s0",
              "en": "Algorithm 1: pCoCoA algorithm",
              "vi": "Thuật toán 1: thuật toán pCoCoA"
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "specific CoAP option, or ii) modify the Message ID semantic.",
          "sentences": [
            {
              "id": "paper1_p8_colL_b4_s0",
              "en": "specific CoAP option, or ii) modify the Message ID semantic.",
              "vi": "tùy chọn CoAP cụ thể hoặc ii) sửa đổi ngữ nghĩa ID tin nhắn."
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In the first case, a new CoAP option called transmission counter (TC) is introduced. This option is used to link each ACK message to the corresponding transmitted CON message even in case of retransmissions. Specifically, the sender of a CON message sets the TC option to 1 on the first transmission, whereas for each subsequent retransmission the value is incremented. The receiver echoes the CON’s TC option in the ACK. It is worth to note that the TC option is updated on every retransmission in order to allow to identify which specific CON transmission had generated the ACK.",
          "sentences": [
            {
              "id": "paper1_p8_colL_b5_s0",
              "en": "In the first case, a new CoAP option called transmission counter (TC) is introduced.",
              "vi": "Trong trường hợp đầu tiên, một tùy chọn CoAP mới gọi là bộ đếm truyền (TC) được giới thiệu."
            },
            {
              "id": "paper1_p8_colL_b5_s1",
              "en": "This option is used to link each ACK message to the corresponding transmitted CON message even in case of retransmissions.",
              "vi": "Tùy chọn này được sử dụng để liên kết từng bản tin ACK với bản tin CON được truyền tương ứng ngay cả trong trường hợp truyền lại."
            },
            {
              "id": "paper1_p8_colL_b5_s2",
              "en": "Specifically, the sender of a CON message sets the TC option to 1 on the first transmission, whereas for each subsequent retransmission the value is incremented.",
              "vi": "Cụ thể, người gửi bản tin CON đặt tùy chọn TC thành 1 trong lần truyền đầu tiên, trong khi đó đối với mỗi lần truyền lại tiếp theo, giá trị sẽ tăng lên."
            },
            {
              "id": "paper1_p8_colL_b5_s3",
              "en": "The receiver echoes the CON’s TC option in the ACK.",
              "vi": "Máy thu phản hồi tùy chọn TC của CON trong ACK."
            },
            {
              "id": "paper1_p8_colL_b5_s4",
              "en": "It is worth to note that the TC option is updated on every retransmission in order to allow to identify which specific CON transmission had generated the ACK.",
              "vi": "Cần lưu ý rằng tùy chọn TC được cập nhật trên mỗi lần truyền lại để cho phép xác định đường truyền CON cụ thể nào đã tạo ra ACK."
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Based on the TC value in the ACK message, the sender can link the latter to the corresponding CON message. If the sender stores a timestamp for each transmission, it can estimate the round-trip time precisely. Furthermore, this mechanism allows to detect spurious retransmissions, i.e. unnecessary retransmission of CON messages that are not lost but simply delayed in the network, by comparing the TC value of the last retransmission with the TC value received in the ACK message. This allows the sender to implement specific policies to react, i.e. by using different factors in the update of the RTO by estimation. The TC option is classified as elective: in this case, when the receiver does not recognize the option, the latter can be silently ignored and an ACK without the TC option can be sent back. The communication is still guaranteed but the advanced congestion control features are disabled.",
          "sentences": [
            {
              "id": "paper1_p8_colL_b6_s0",
              "en": "Based on the TC value in the ACK message, the sender can link the latter to the corresponding CON message.",
              "vi": "Dựa trên giá trị TC trong bản tin ACK, người gửi có thể liên kết giá trị sau với bản tin CON tương ứng."
            },
            {
              "id": "paper1_p8_colL_b6_s1",
              "en": "If the sender stores a timestamp for each transmission, it can estimate the round-trip time precisely.",
              "vi": "Nếu người gửi lưu trữ dấu thời gian cho mỗi lần truyền, nó có thể ước tính chính xác thời gian truyền khứ hồi (RTT)."
            },
            {
              "id": "paper1_p8_colL_b6_s2",
              "en": "Furthermore, this mechanism allows to detect spurious retransmissions, i.e. unnecessary retransmission of CON messages that are not lost but simply delayed in the network, by comparing the TC value of the last retransmission with the TC value received in the ACK message.",
              "vi": "Hơn nữa, cơ chế này cho phép phát hiện các lần truyền lại giả, tức là việc truyền lại các bản tin CON không bị mất mà chỉ bị trễ trong mạng một cách không cần thiết, bằng cách so sánh giá trị TC của lần truyền lại cuối cùng với giá trị TC nhận được trong bản tin ACK."
            },
            {
              "id": "paper1_p8_colL_b6_s3",
              "en": "This allows the sender to implement specific policies to react, i.e. by using different factors in the update of the RTO by estimation.",
              "vi": "Điều này cho phép người gửi thực hiện các chính sách cụ thể để phản ứng, tức là bằng cách sử dụng các yếu tố khác nhau trong bản cập nhật RTO theo ước tính."
            },
            {
              "id": "paper1_p8_colL_b6_s4",
              "en": "The TC option is classified as elective: in this case, when the receiver does not recognize the option, the latter can be silently ignored and an ACK without the TC option can be sent back.",
              "vi": "Tùy chọn TC được phân loại là tùy chọn: trong trường hợp này, khi người nhận không nhận ra tùy chọn này, tùy chọn sau có thể được âm thầm bỏ qua và ACK không có tùy chọn TC có thể được gửi lại."
            },
            {
              "id": "paper1_p8_colL_b6_s5",
              "en": "The communication is still guaranteed but the advanced congestion control features are disabled.",
              "vi": "Việc liên lạc vẫn được đảm bảo nhưng tính năng kiểm soát tắc nghẽn nâng cao đã bị tắt."
            }
          ]
        },
        {
          "id": "paper1_p8_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "An alternative solution to avoid the overhead introduced by the transmission of a dedicated CoAP option is to rely on existing fields of the CoAP message, and specifically on the Message ID. The MID is a 16-bit unsigned integer used to detect message duplication and to match messages of type ACK/RST to messages of type CON/NON. To support our approach, MID could be split into a 14-bit id and a 2-bit sequence number. The",
          "sentences": [
            {
              "id": "paper1_p8_colL_b7_s0",
              "en": "An alternative solution to avoid the overhead introduced by the transmission of a dedicated CoAP option is to rely on existing fields of the CoAP message, and specifically on the Message ID.",
              "vi": "Một giải pháp thay thế để tránh chi phí phát sinh do truyền tùy chọn CoAP chuyên dụng là dựa vào các trường hiện có của tin nhắn CoAP và cụ thể là trên ID tin nhắn."
            },
            {
              "id": "paper1_p8_colL_b7_s1",
              "en": "The MID is a 16-bit unsigned integer used to detect message duplication and to match messages of type ACK/RST to messages of type CON/NON.",
              "vi": "MID là số nguyên không dấu 16 bit được sử dụng để phát hiện sự trùng lặp thông báo và so khớp các thông báo loại ACK/RST với các thông báo loại CON/NON."
            },
            {
              "id": "paper1_p8_colL_b7_s2",
              "en": "To support our approach, MID could be split into a 14-bit id and a 2-bit sequence number.",
              "vi": "Để hỗ trợ phương pháp của chúng tôi, MID có thể được chia thành id 14 bit và số thứ tự 2 bit."
            },
            {
              "id": "paper1_p8_colL_b7_s3",
              "en": "The",
              "vi": "các"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p8_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "id sub-field would retain the role of the original MID, thus being the same in all retransmitted CON messages, whereas the sequence number would be incremented at each retransmission (supporting then up to four retransmissions). Duplicate message detection is therefore preserved, and, in addition, the sender is able to match each received ACK message to its corresponding CON message among the multiple transmitted ones, in order to precisely estimate the RTO.",
          "sentences": [
            {
              "id": "paper1_p8_colR_b0_s0",
              "en": "id sub-field would retain the role of the original MID, thus being the same in all retransmitted CON messages, whereas the sequence number would be incremented at each retransmission (supporting then up to four retransmissions).",
              "vi": "Trường con id sẽ giữ lại vai trò của MID ban đầu, do đó giống nhau trong tất cả các thông báo CON được truyền lại, trong khi số thứ tự sẽ được tăng lên ở mỗi lần truyền lại (hỗ trợ tối đa bốn lần truyền lại)."
            },
            {
              "id": "paper1_p8_colR_b0_s1",
              "en": "Duplicate message detection is therefore preserved, and, in addition, the sender is able to match each received ACK message to its corresponding CON message among the multiple transmitted ones, in order to precisely estimate the RTO.",
              "vi": "Do đó, việc phát hiện tin nhắn trùng lặp được giữ nguyên và ngoài ra, người gửi có thể khớp từng tin nhắn ACK nhận được với tin nhắn CON tương ứng trong số nhiều tin nhắn được truyền đi để ước tính chính xác RTO."
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Without loss of generality, in the following we adopted the first approach.",
          "sentences": [
            {
              "id": "paper1_p8_colR_b1_s0",
              "en": "Without loss of generality, in the following we adopted the first approach.",
              "vi": "Không mất tính tổng quát, sau đây chúng ta áp dụng cách tiếp cận đầu tiên."
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b2",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Precise Congestion Control algorithm",
          "sentences": [
            {
              "id": "paper1_p8_colR_b2_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper1_p8_colR_b2_s1",
              "en": "Precise Congestion Control algorithm",
              "vi": "Thuật toán kiểm soát tắc nghẽn chính xác"
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The pseudocode of the proposed congestion control algorithm is presented in Algorithm 1. The code summarizes all the operations to be performed in sequence at each phase of a CoAP transaction: the transmission of a CON, the retransmission, and the reception of an ACK.",
          "sentences": [
            {
              "id": "paper1_p8_colR_b3_s0",
              "en": "The pseudocode of the proposed congestion control algorithm is presented in Algorithm 1.",
              "vi": "Mã giả của thuật toán điều khiển tắc nghẽn được đề xuất được trình bày trong Thuật toán 1."
            },
            {
              "id": "paper1_p8_colR_b3_s1",
              "en": "The code summarizes all the operations to be performed in sequence at each phase of a CoAP transaction: the transmission of a CON, the retransmission, and the reception of an ACK.",
              "vi": "Mã tóm tắt tất cả các hoạt động sẽ được thực hiện theo trình tự ở mỗi giai đoạn của giao dịch CoAP: truyền CON, truyền lại và nhận ACK."
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "At the beginning of each transaction, the internal state is initialized. In particular, the RTO value is initialized to the default RTO value, if the destination is unknown, (line 4) otherwise is set to the last value measured for the least transaction towards the same destination (line 6). In both cases, a dithering technique is applied (line 7) to avoid synchronization effects. After the transmission of the CON, the sender stores the timestamp and sets a retransmission timer based on the current RTO value (line 11-13). The sender waits until the retransmission timer expires or an ACK is received. If the transmission timer expires without receiving an ACK, the CON message is retransmitted. Before retransmitting, however, the sender updates the CON’s TC option (line 16) and the RTO using the Variable Back-off (VBF) formulae adopted by CoCoA+ (line 18).",
          "sentences": [
            {
              "id": "paper1_p8_colR_b4_s0",
              "en": "At the beginning of each transaction, the internal state is initialized.",
              "vi": "Khi bắt đầu mỗi giao dịch, trạng thái nội bộ được khởi tạo."
            },
            {
              "id": "paper1_p8_colR_b4_s1",
              "en": "In particular, the RTO value is initialized to the default RTO value, if the destination is unknown, (line 4) otherwise is set to the last value measured for the least transaction towards the same destination (line 6).",
              "vi": "Cụ thể, giá trị RTO được khởi tạo thành giá trị RTO mặc định, nếu không xác định đích, (dòng 4) nếu không thì được đặt thành giá trị cuối cùng được đo cho ít giao dịch nhất hướng tới cùng một đích (dòng 6)."
            },
            {
              "id": "paper1_p8_colR_b4_s2",
              "en": "In both cases, a dithering technique is applied (line 7) to avoid synchronization effects.",
              "vi": "Trong cả hai trường hợp, kỹ thuật phối màu được áp dụng (dòng 7) để tránh hiệu ứng đồng bộ hóa."
            },
            {
              "id": "paper1_p8_colR_b4_s3",
              "en": "After the transmission of the CON, the sender stores the timestamp and sets a retransmission timer based on the current RTO value (line 11-13).",
              "vi": "Sau khi truyền CON, người gửi lưu dấu thời gian và đặt bộ đếm thời gian truyền lại dựa trên giá trị RTO hiện tại (dòng 11-13)."
            },
            {
              "id": "paper1_p8_colR_b4_s4",
              "en": "The sender waits until the retransmission timer expires or an ACK is received.",
              "vi": "Người gửi đợi cho đến khi thời gian chờ truyền lại (RTO) hoặc nhận được ACK."
            },
            {
              "id": "paper1_p8_colR_b4_s5",
              "en": "If the transmission timer expires without receiving an ACK, the CON message is retransmitted.",
              "vi": "Nếu hết thời gian truyền mà không nhận được ACK, thông báo CON sẽ được truyền lại."
            },
            {
              "id": "paper1_p8_colR_b4_s6",
              "en": "Before retransmitting, however, the sender updates the CON’s TC option (line 16) and the RTO using the Variable Back-off (VBF) formulae adopted by CoCoA+ (line 18).",
              "vi": "Tuy nhiên, trước khi truyền lại, người gửi cập nhật tùy chọn TC của CON (dòng 16) và RTO bằng cách sử dụng các công thức Độ lùi có thể thay đổi (VBF) được CoCoA+ (dòng 18) áp dụng."
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Each CON message is retransmitted until an ACK is received or the maximum number of attempts, MAX_ATTEMPS, is reached (line 10). In the latter case, the CON message is discarded and the procedure ends. When an ACK is received, instead, the algorithm computes the RTT value (R) as the difference between the timestamp of the ACK and the timestamp of the corresponding CON (line 20). Subsequently, the value of the TC option received with the ACK is compared with the TC of the last sent CON (line 21). If there is a difference between these two values, a spurious transmission occurred. In order to take this into account in future computations, the spurious flag is set (line 22). Once the RTT is computed, the RTOComputation algorithm is executed to update the RTO for future transmissions to the same destination (line 25-26).",
          "sentences": [
            {
              "id": "paper1_p8_colR_b5_s0",
              "en": "Each CON message is retransmitted until an ACK is received or the maximum number of attempts, MAX_ATTEMPS, is reached (line 10).",
              "vi": "Mỗi thông báo CON được truyền lại cho đến khi nhận được ACK hoặc đạt đến số lần thử tối đa MAX_ATTTEMPS (dòng 10)."
            },
            {
              "id": "paper1_p8_colR_b5_s1",
              "en": "In the latter case, the CON message is discarded and the procedure ends.",
              "vi": "Trong trường hợp sau, thông báo CON bị loại bỏ và thủ tục kết thúc."
            },
            {
              "id": "paper1_p8_colR_b5_s2",
              "en": "When an ACK is received, instead, the algorithm computes the RTT value (R) as the difference between the timestamp of the ACK and the timestamp of the corresponding CON (line 20).",
              "vi": "Thay vào đó, khi nhận được ACK, thuật toán sẽ tính giá trị RTT (R) là chênh lệch giữa dấu thời gian của ACK và dấu thời gian của CON tương ứng (dòng 20)."
            },
            {
              "id": "paper1_p8_colR_b5_s3",
              "en": "Subsequently, the value of the TC option received with the ACK is compared with the TC of the last sent CON (line 21).",
              "vi": "Sau đó, giá trị của tùy chọn TC nhận được với ACK được so sánh với TC của CON được gửi cuối cùng (dòng 21)."
            },
            {
              "id": "paper1_p8_colR_b5_s4",
              "en": "If there is a difference between these two values, a spurious transmission occurred.",
              "vi": "Nếu có sự khác biệt giữa hai giá trị này thì việc truyền giả đã xảy ra."
            },
            {
              "id": "paper1_p8_colR_b5_s5",
              "en": "In order to take this into account in future computations, the spurious flag is set (line 22).",
              "vi": "Để tính đến điều này trong các tính toán trong tương lai, cờ giả được đặt (dòng 22)."
            },
            {
              "id": "paper1_p8_colR_b5_s6",
              "en": "Once the RTT is computed, the RTOComputation algorithm is executed to update the RTO for future transmissions to the same destination (line 25-26).",
              "vi": "Sau khi RTT được tính toán, thuật toán RTOComputation được thực thi để cập nhật RTO cho các lần truyền trong tương lai tới cùng một đích (dòng 25-26)."
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b6",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. RTO Computation algorithm",
          "sentences": [
            {
              "id": "paper1_p8_colR_b6_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper1_p8_colR_b6_s1",
              "en": "RTO Computation algorithm",
              "vi": "Thuật toán tính toán RTO"
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The proposed RTO computation mechanism is inspired by the algorithm included in the Linux TCP congestion control [10], which however cannot be directly applied here since the underlying layer is UDP.",
          "sentences": [
            {
              "id": "paper1_p8_colR_b7_s0",
              "en": "The proposed RTO computation mechanism is inspired by the algorithm included in the Linux TCP congestion control [10], which however cannot be directly applied here since the underlying layer is UDP.",
              "vi": "Cơ chế tính toán RTO được đề xuất được lấy cảm hứng từ thuật toán có trong điều khiển tắc nghẽn TCP của Linux [10], tuy nhiên thuật toán này không thể được áp dụng trực tiếp ở đây vì lớp cơ bản là UDP."
            }
          ]
        },
        {
          "id": "paper1_p8_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Specifically, the Linux TCP algorithm exploits the estimation of the maximum mean deviance of the RTO (𝑚𝑑𝑒𝑣𝑚𝑎𝑥) to avoid issues caused by sudden RTT variations. In detail, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is used to limit the RTO. To this aim, the RTO is maintained constant within a time window proportional to the",
          "sentences": [
            {
              "id": "paper1_p8_colR_b8_s0",
              "en": "Specifically, the Linux TCP algorithm exploits the estimation of the maximum mean deviance of the RTO (𝑚𝑑𝑒𝑣𝑚𝑎𝑥) to avoid issues caused by sudden RTT variations.",
              "vi": "Cụ thể, thuật toán Linux TCP khai thác ước tính độ lệch trung bình tối đa của RTO (𝑚𝑑𝑒𝑣𝑚𝑎𝑥) để tránh các sự cố do biến đổi RTT đột ngột gây ra."
            },
            {
              "id": "paper1_p8_colR_b8_s1",
              "en": "In detail, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is used to limit the RTO.",
              "vi": "Cụ thể, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 được sử dụng để giới hạn RTO."
            },
            {
              "id": "paper1_p8_colR_b8_s2",
              "en": "To this aim, the RTO is maintained constant within a time window proportional to the",
              "vi": "Để đạt được mục đích này, RTO được duy trì không đổi trong một khoảng thời gian tỷ lệ thuận với"
            }
          ]
        }
      ]
    },
    {
      "page_num": 9,
      "page_image": "assets/p1_page_9.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p9_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "function RTOCalculation(R, spurious) 1. 𝑆𝑅𝑇𝑇= (1 −𝛼)𝑆𝑅𝑇𝑇+ 𝛼𝑅 2. if(𝑅< (𝑆𝑅𝑇𝑇−𝑅𝑇𝑇𝑉𝐴𝑅)) 3.     𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛾)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛾|𝑆𝑅𝑇𝑇−𝑅| 4. else 5.     if(|𝑆𝑅𝑇𝑇−𝑅| > 𝑅𝑇𝑇𝑉𝐴𝑅) 6.         𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛽)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛽|𝑆𝑅𝑇𝑇−𝑅| 7.     else 8.         𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛼)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛼|𝑆𝑅𝑇𝑇−𝑅| 9. if(𝑅> 𝑆𝑅𝑇𝑇) 10.     if(𝑅𝑇𝑇𝑉𝐴𝑅> 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 for 3 consecutive times) 11.         𝑚𝑑𝑒𝑣𝑚𝑎𝑥= average of the last 3 𝑅𝑇𝑇𝑉𝐴𝑅 12.     else if(𝑅𝑇𝑇𝑉𝐴𝑅< 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 for 8 consecutive times) 13.         𝑚𝑑𝑒𝑣𝑚𝑎𝑥= (1 −𝛽)𝑚𝑑𝑒𝑣𝑚𝑎𝑥+ 𝛽𝑅𝑇𝑇𝑉𝐴𝑅 14. if(spurious) 15.     𝑘= 6 16. else 17.     𝑘= 4 18. 𝑆𝑅𝑇𝑂= 𝑆𝑅𝑇𝑇+ max(𝑘 𝑅𝑇𝑇𝑉𝐴𝑅, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥) 19. 𝑅𝑇𝑂𝑖𝑛𝑖𝑡= (1 −𝛿)𝑆𝑅𝑇𝑂+ 𝛿𝑅𝑇𝑂𝑖𝑛𝑖𝑡 Algorithm 2: RTOCalculation algorithm",
          "sentences": [
            {
              "id": "paper1_p9_colL_b0_s0",
              "en": "function RTOCalculation(R, spurious) 1. 𝑆𝑅𝑇𝑇= (1 −𝛼)𝑆𝑅𝑇𝑇+ 𝛼𝑅 2. if(𝑅< (𝑆𝑅𝑇𝑇−𝑅𝑇𝑇𝑉𝐴𝑅)) 3.     𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛾)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛾|𝑆𝑅𝑇𝑇−𝑅| 4. else 5.     if(|𝑆𝑅𝑇𝑇−𝑅| > 𝑅𝑇𝑇𝑉𝐴𝑅) 6.         𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛽)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛽|𝑆𝑅𝑇𝑇−𝑅| 7.     else 8.         𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛼)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛼|𝑆𝑅𝑇𝑇−𝑅| 9. if(𝑅> 𝑆𝑅𝑇𝑇) 10.     if(𝑅𝑇𝑇𝑉𝐴𝑅> 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 for 3 consecutive times) 11.         𝑚𝑑𝑒𝑣𝑚𝑎𝑥= average of the last 3 𝑅𝑇𝑇𝑉𝐴𝑅 12.     else if(𝑅𝑇𝑇𝑉𝐴𝑅< 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 for 8 consecutive times) 13.         𝑚𝑑𝑒𝑣𝑚𝑎𝑥= (1 −𝛽)𝑚𝑑𝑒𝑣𝑚𝑎𝑥+ 𝛽𝑅𝑇𝑇𝑉𝐴𝑅 14. if(spurious) 15.     𝑘= 6 16. else 17.     𝑘= 4 18. 𝑆𝑅𝑇𝑂= 𝑆𝑅𝑇𝑇+ max(𝑘 𝑅𝑇𝑇𝑉𝐴𝑅, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥) 19. 𝑅𝑇𝑂𝑖𝑛𝑖𝑡= (1 −𝛿)𝑆𝑅𝑇𝑂+ 𝛿𝑅𝑇𝑂𝑖𝑛𝑖𝑡 Algorithm 2: RTOCalculation algorithm",
              "vi": "hàm RTTOCalculation(R, giả) 1. 𝑆𝑅𝑇𝑇= (1 −𝛼)𝑆𝑅𝑇𝑇+ 𝛼𝑅 2. if(𝑅< (𝑆𝑅𝑇𝑇−𝑅𝑇𝑇𝑉𝐴𝑅)) 3. 𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛾)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛾|𝑆𝑅𝑇𝑇−𝑅| 4. khác 5. if(|𝑆𝑅𝑇𝑇−𝑅| > 𝑅𝑇𝑇𝑉𝐴𝑅) 6. 𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛽)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛽|𝑆𝑅𝑇𝑇−𝑅| 7. còn lại 8. 𝑅𝑇𝑇𝑉𝐴𝑅= (1 −𝛼)𝑅𝑇𝑇𝑉𝐴𝑅+ 𝛼|𝑆𝑅𝑇𝑇−𝑅| 9. if(𝑅> 𝑆𝑅𝑇𝑇) 10. if(𝑅𝑇𝑇𝑉𝐴𝑅> 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 trong 3 lần liên tiếp) 11. 𝑚𝑑𝑒𝑣𝑚𝑎𝑥= trung bình của 3 lần gần nhất 𝑅𝑇𝑇𝑉𝐴𝑅 12. else if(𝑅𝑇𝑇𝑉𝐴𝑅< 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 trong 8 lần liên tiếp) 13. 𝑚𝑑𝑒𝑣𝑚𝑎𝑥= (1 −𝛽)𝑚𝑑𝑒𝑣𝑚𝑎𝑥+ 𝛽𝑅𝑇𝑇𝑉𝐴𝑅 14. if(giả) 15. 𝑘= 6 16. else 17. 𝑘= 4 18. 𝑆𝑅𝑇𝑂= 𝑆𝑅𝑇𝑇+ max(𝑘 𝑅𝑇𝑇𝑉𝐴𝑅, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥) 19. 𝑅𝑇𝑂𝑖𝑛𝑖𝑡= (1 −𝛿)𝑆𝑅𝑇𝑂+ 𝛿𝑅𝑇𝑂𝑖𝑛𝑖𝑡 Thuật toán 2: Thuật toán tính toán RTO"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "number of TCP segments currently waiting for acknowledgment. Considering that by default CoAP adopts a stop-and-wait approach, as NSTART is set to 1 by default, the algorithm must be modified to deal with the fact that CoAP has at maximum only one outstanding request at a time. The resulting RTO computation algorithm is shown in Algorithm 2. When the first RTT sample R is received, the algorithm performs the initialization of the variables as follows:",
          "sentences": [
            {
              "id": "paper1_p9_colL_b1_s0",
              "en": "number of TCP segments currently waiting for acknowledgment.",
              "vi": "số phân đoạn TCP hiện đang chờ xác nhận."
            },
            {
              "id": "paper1_p9_colL_b1_s1",
              "en": "Considering that by default CoAP adopts a stop-and-wait approach, as NSTART is set to 1 by default, the algorithm must be modified to deal with the fact that CoAP has at maximum only one outstanding request at a time.",
              "vi": "Xem xét rằng theo mặc định, CoAP áp dụng phương pháp dừng và chờ, vì NSTART được đặt thành 1 theo mặc định, nên thuật toán phải được sửa đổi để giải quyết thực tế là CoAP chỉ có tối đa một yêu cầu chưa xử lý tại một thời điểm."
            },
            {
              "id": "paper1_p9_colL_b1_s2",
              "en": "The resulting RTO computation algorithm is shown in Algorithm 2.",
              "vi": "Thuật toán tính toán RTO thu được được hiển thị trong Thuật toán 2."
            },
            {
              "id": "paper1_p9_colL_b1_s3",
              "en": "When the first RTT sample R is received, the algorithm performs the initialization of the variables as follows:",
              "vi": "Khi nhận được mẫu RTT R đầu tiên, thuật toán thực hiện khởi tạo các biến như sau:"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "2 (8)",
          "sentences": [
            {
              "id": "paper1_p9_colL_b2_s0",
              "en": "2 (8)",
              "vi": "2 (8)"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝑆𝑅𝑇𝑇←𝑅,   𝑅𝑇𝑇𝑉𝐴𝑅←𝑅",
          "sentences": [
            {
              "id": "paper1_p9_colL_b3_s0",
              "en": "𝑆𝑅𝑇𝑇←𝑅,   𝑅𝑇𝑇𝑉𝐴𝑅←𝑅",
              "vi": "𝑆𝑅𝑇𝑇←𝑅, 𝑅𝑇𝑇𝑉𝐴𝑅←𝑅"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝑚𝑑𝑒𝑣𝑚𝑎𝑥←𝑚𝑎𝑥(𝑅",
          "sentences": [
            {
              "id": "paper1_p9_colL_b4_s0",
              "en": "𝑚𝑑𝑒𝑣𝑚𝑎𝑥←𝑚𝑎𝑥(𝑅",
              "vi": "𝑚𝑑𝑒𝑣𝑚𝑎𝑥←𝑚𝑎𝑥(𝑅"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "2 , 250𝑚𝑠) (9)",
          "sentences": [
            {
              "id": "paper1_p9_colL_b5_s0",
              "en": "2 , 250𝑚𝑠) (9)",
              "vi": "2 , 250𝑚𝑠) (9)"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂←𝑆𝑅𝑇𝑇+ 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 (10)",
          "sentences": [
            {
              "id": "paper1_p9_colL_b6_s0",
              "en": "𝑅𝑇𝑂←𝑆𝑅𝑇𝑇+ 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 (10)",
              "vi": "𝑅𝑇𝑂←𝑆𝑅𝑇𝑇+ 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 (10)"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The formula (10) that initializes the RTO value has been inferred from the results of a set of preliminary experiments, omitted here for the sake of brevity, which aimed at evaluating several possible initialization strategies.",
          "sentences": [
            {
              "id": "paper1_p9_colL_b7_s0",
              "en": "The formula (10) that initializes the RTO value has been inferred from the results of a set of preliminary experiments, omitted here for the sake of brevity, which aimed at evaluating several possible initialization strategies.",
              "vi": "Công thức (10) khởi tạo giá trị RTO đã được suy ra từ kết quả của một tập hợp thử nghiệm sơ bộ, được bỏ qua ở đây vì mục đích ngắn gọn, nhằm đánh giá một số chiến lược khởi tạo có thể có."
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "After the first RTT measurement, whenever a new value R is measured, the steps of the RTOCalculation function are executed. Its definition employs the following constants whose values are set according to the results available from the literature, 𝛼=",
          "sentences": [
            {
              "id": "paper1_p9_colL_b8_s0",
              "en": "After the first RTT measurement, whenever a new value R is measured, the steps of the RTOCalculation function are executed.",
              "vi": "Sau phép đo RTT đầu tiên, bất cứ khi nào giá trị R mới được đo, các bước của hàm RTOCalculation sẽ được thực thi."
            },
            {
              "id": "paper1_p9_colL_b8_s1",
              "en": "Its definition employs the following constants whose values are set according to the results available from the literature, 𝛼=",
              "vi": "Định nghĩa của nó sử dụng các hằng số sau có giá trị được đặt theo kết quả có sẵn trong tài liệu, 𝛼="
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "8 [11], 𝛽= 1",
          "sentences": [
            {
              "id": "paper1_p9_colL_b10_s0",
              "en": "8 [11], 𝛽= 1",
              "vi": "8 [11], 𝛽= 1"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "4 [11], 𝛾= 1",
          "sentences": [
            {
              "id": "paper1_p9_colL_b11_s0",
              "en": "4 [11], 𝛾= 1",
              "vi": "4 [11], 𝛾= 1"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "32 [10], 𝛿= 1",
          "sentences": [
            {
              "id": "paper1_p9_colL_b12_s0",
              "en": "32 [10], 𝛿= 1",
              "vi": "32 [10], 𝛿= 1"
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "2 [3]. The algorithm updates SRTT and RTTVAR adopting two smoothed filters. Differently from LinuxRTO, which updates RTTVAR through an additional filter, RTTVAR is updated directly considering two different policies (line 5) to slow down its decrease when significant fluctuations occur. To this aim, when the difference between SRTT and R is greater than the current RTTVAR value, RTTVAR is updated using the parameter β (line 6), otherwise it is updated using the parameter α (line 8). When α is employed, the historic RTTVAR value has a greater weight compared to the case in which β is employed, thus avoiding a fast decrease of RTTVAR.",
          "sentences": [
            {
              "id": "paper1_p9_colL_b13_s0",
              "en": "2 [3].",
              "vi": "2 [3]."
            },
            {
              "id": "paper1_p9_colL_b13_s1",
              "en": "The algorithm updates SRTT and RTTVAR adopting two smoothed filters.",
              "vi": "Thuật toán cập nhật SRTT và RTTVAR thông qua hai bộ lọc được làm mịn."
            },
            {
              "id": "paper1_p9_colL_b13_s2",
              "en": "Differently from LinuxRTO, which updates RTTVAR through an additional filter, RTTVAR is updated directly considering two different policies (line 5) to slow down its decrease when significant fluctuations occur.",
              "vi": "Khác với LinuxRTO, cập nhật RTTVAR thông qua bộ lọc bổ sung, RTTVAR được cập nhật trực tiếp xem xét hai chính sách khác nhau (dòng 5) để làm chậm tốc độ giảm khi xảy ra biến động đáng kể."
            },
            {
              "id": "paper1_p9_colL_b13_s3",
              "en": "To this aim, when the difference between SRTT and R is greater than the current RTTVAR value, RTTVAR is updated using the parameter β (line 6), otherwise it is updated using the parameter α (line 8).",
              "vi": "Để đạt được mục đích này, khi chênh lệch giữa SRTT và R lớn hơn giá trị RTTVAR hiện tại, RTTVAR được cập nhật bằng tham số β (dòng 6), nếu không thì nó được cập nhật bằng tham số α (dòng 8)."
            },
            {
              "id": "paper1_p9_colL_b13_s4",
              "en": "When α is employed, the historic RTTVAR value has a greater weight compared to the case in which β is employed, thus avoiding a fast decrease of RTTVAR.",
              "vi": "Khi α được sử dụng, giá trị RTTVAR lịch sử có trọng số lớn hơn so với trường hợp β được sử dụng, do đó tránh được việc RTTVAR giảm nhanh."
            }
          ]
        },
        {
          "id": "paper1_p9_colL_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The maximum variability that is experienced is tracked using 𝑚𝑑𝑒𝑣𝑚𝑎𝑥. Such variable, however, is updated only if RTTVAR increases due to an RTT sample greater than the smoothed RTT (line 9), caused by a sudden increase of the network delay. This",
          "sentences": [
            {
              "id": "paper1_p9_colL_b14_s0",
              "en": "The maximum variability that is experienced is tracked using 𝑚𝑑𝑒𝑣𝑚𝑎𝑥.",
              "vi": "Sự biến đổi tối đa được trải nghiệm được theo dõi bằng cách sử dụng 𝑚𝑑𝑒𝑣𝑚𝑎𝑥."
            },
            {
              "id": "paper1_p9_colL_b14_s1",
              "en": "Such variable, however, is updated only if RTTVAR increases due to an RTT sample greater than the smoothed RTT (line 9), caused by a sudden increase of the network delay.",
              "vi": "Tuy nhiên, biến đó chỉ được cập nhật nếu RTTVAR tăng do mẫu RTT lớn hơn RTT được làm mịn (dòng 9), do độ trễ mạng tăng đột ngột."
            },
            {
              "id": "paper1_p9_colL_b14_s2",
              "en": "This",
              "vi": "Cái này"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p9_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "choice is motivated by the fact that when the network delay increases, the RTO should be increased consequently. However, in order to limit the influence of sporadic peaks in the RTT estimation, a specific aging mechanism for 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is introduced. In particular, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is increased only if its value is smaller than RTTVAR for three consecutive times (line 10-11). In such case, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is updated to the average value of the last three RTTVAR samples. If 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, instead, is higher than RTTVAR for eight consecutive times, its value is updated using the usual smoothing algorithm to facilitate 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 to converge to RTTVAR (line 12-13). This policy has been designed based on a set of preliminary experiments that are not reported here for the sake of brevity. The rationale behind taking into account both 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 and RTTVAR is that they change over time differently, i.e. RTTVAR decreases rapidly when multiple similar RTT values are sampled in a short period, while 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, requires instead more time to decrease, thus limiting the decrease of the final RTO value.",
          "sentences": [
            {
              "id": "paper1_p9_colR_b0_s0",
              "en": "choice is motivated by the fact that when the network delay increases, the RTO should be increased consequently.",
              "vi": "Sự lựa chọn được thúc đẩy bởi thực tế là khi độ trễ mạng tăng thì RTO sẽ tăng theo."
            },
            {
              "id": "paper1_p9_colR_b0_s1",
              "en": "However, in order to limit the influence of sporadic peaks in the RTT estimation, a specific aging mechanism for 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is introduced.",
              "vi": "Tuy nhiên, để hạn chế ảnh hưởng của các đỉnh lẻ tẻ trong ước tính RTT, một cơ chế lão hóa cụ thể cho 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 đã được giới thiệu."
            },
            {
              "id": "paper1_p9_colR_b0_s2",
              "en": "In particular, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is increased only if its value is smaller than RTTVAR for three consecutive times (line 10-11).",
              "vi": "Cụ thể, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 chỉ được tăng nếu giá trị của nó nhỏ hơn RTTVAR trong ba lần liên tiếp (dòng 10-11)."
            },
            {
              "id": "paper1_p9_colR_b0_s3",
              "en": "In such case, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 is updated to the average value of the last three RTTVAR samples.",
              "vi": "Trong trường hợp đó, 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 được cập nhật thành giá trị trung bình của ba mẫu RTTVAR cuối cùng."
            },
            {
              "id": "paper1_p9_colR_b0_s4",
              "en": "If 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, instead, is higher than RTTVAR for eight consecutive times, its value is updated using the usual smoothing algorithm to facilitate 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 to converge to RTTVAR (line 12-13).",
              "vi": "Thay vào đó, nếu 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 cao hơn RTTVAR trong tám lần liên tiếp, giá trị của nó sẽ được cập nhật bằng thuật toán làm mịn thông thường để tạo điều kiện cho 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 hội tụ về RTTVAR (dòng 12-13)."
            },
            {
              "id": "paper1_p9_colR_b0_s5",
              "en": "This policy has been designed based on a set of preliminary experiments that are not reported here for the sake of brevity.",
              "vi": "Chính sách này được thiết kế dựa trên một loạt thử nghiệm sơ bộ không được báo cáo ở đây vì mục đích ngắn gọn."
            },
            {
              "id": "paper1_p9_colR_b0_s6",
              "en": "The rationale behind taking into account both 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 and RTTVAR is that they change over time differently, i.e. RTTVAR decreases rapidly when multiple similar RTT values are sampled in a short period, while 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, requires instead more time to decrease, thus limiting the decrease of the final RTO value.",
              "vi": "Lý do cơ bản đằng sau việc tính đến cả 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 và RTTVAR là vì chúng thay đổi khác nhau theo thời gian, tức là RTTVAR giảm nhanh khi nhiều giá trị RTT tương tự được lấy mẫu trong một khoảng thời gian ngắn, trong khi 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, thay vào đó, cần nhiều thời gian hơn để giảm, do đó hạn chế mức giảm cuối cùng Giá trị RTO."
            }
          ]
        },
        {
          "id": "paper1_p9_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Finally, the RTO value is updated following a two-step procedure as in the CoCoA+ algorithm. First, the estimator 𝑆𝑅𝑇𝑂 (line 18) is updated, then the new 𝑅𝑇𝑂𝑖𝑛𝑖𝑡 is computed through a smoothed average of the new 𝑆𝑅𝑇𝑂 and the old 𝑅𝑇𝑂𝑖𝑛𝑖𝑡 values (line 19). The computation of 𝑆𝑅𝑇𝑂 depends on the value of the spurious flag and also includes a technique to limit the minimum 𝑆𝑅𝑇𝑂 value. The latter mechanism, adopted also by the work in [12], increases the weight of RTTVAR when a spurious transmission occurs to allow the 𝑆𝑅𝑇𝑂 estimator to grow faster, thus limiting successive spurious transmissions.",
          "sentences": [
            {
              "id": "paper1_p9_colR_b1_s0",
              "en": "Finally, the RTO value is updated following a two-step procedure as in the CoCoA+ algorithm.",
              "vi": "Cuối cùng, giá trị RTO được cập nhật theo quy trình hai bước như trong thuật toán CoCoA+."
            },
            {
              "id": "paper1_p9_colR_b1_s1",
              "en": "First, the estimator 𝑆𝑅𝑇𝑂 (line 18) is updated, then the new 𝑅𝑇𝑂𝑖𝑛𝑖𝑡 is computed through a smoothed average of the new 𝑆𝑅𝑇𝑂 and the old 𝑅𝑇𝑂𝑖𝑛𝑖𝑡 values (line 19).",
              "vi": "Đầu tiên, công cụ ước tính 𝑆𝑅𝑇𝑂 (dòng 18) được cập nhật, sau đó, 𝑅𝑇𝑂𝑖𝑛𝑖𝑡 mới được tính toán thông qua mức trung bình làm mịn của 𝑆𝑅𝑇𝑂 mới và cũ Các giá trị 𝑅𝑇𝑂𝑖𝑛𝑖𝑡 (dòng 19)."
            },
            {
              "id": "paper1_p9_colR_b1_s2",
              "en": "The computation of 𝑆𝑅𝑇𝑂 depends on the value of the spurious flag and also includes a technique to limit the minimum 𝑆𝑅𝑇𝑂 value.",
              "vi": "Việc tính toán 𝑆𝑅𝑇𝑂 phụ thuộc vào giá trị của cờ giả và cũng bao gồm một kỹ thuật để giới hạn giá trị 𝑆𝑅𝑇𝑂 tối thiểu."
            },
            {
              "id": "paper1_p9_colR_b1_s3",
              "en": "The latter mechanism, adopted also by the work in [12], increases the weight of RTTVAR when a spurious transmission occurs to allow the 𝑆𝑅𝑇𝑂 estimator to grow faster, thus limiting successive spurious transmissions.",
              "vi": "Cơ chế thứ hai, cũng được công trình trong [12] áp dụng, làm tăng trọng lượng của RTTVAR khi xảy ra truyền giả để cho phép công cụ ước tính 𝑆𝑅𝑇𝑂 tăng nhanh hơn, do đó hạn chế việc truyền giả liên tiếp."
            }
          ]
        },
        {
          "id": "paper1_p9_colR_b2",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "VII. PCOCOA PERFORMANCE EVALUATION",
          "sentences": [
            {
              "id": "paper1_p9_colR_b2_s0",
              "en": "VII.",
              "vi": "VII."
            },
            {
              "id": "paper1_p9_colR_b2_s1",
              "en": "PCOCOA PERFORMANCE EVALUATION",
              "vi": "ĐÁNH GIÁ HIỆU QUẢ PCOCOA"
            }
          ]
        },
        {
          "id": "paper1_p9_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The pCoCoA algorithm has been evaluated by means of simulations adopting the same methodology presented in Section IV. Similarly, both traffic patterns, i.e. periodic traffic and interfering bursty traffic, respectively, are considered to compare the proposed algorithm against CoAP, CoCoA+ and two new recent algorithms derived from CoCoA+: 4-state-strong [7] and CoCoA-E [14], respectively. In the following, we first introduce the 4-state-strong and CoCoA-E, adopted as term of comparison in the performance evaluation, then we present the results with periodic traffic and interfering bursty traffic.",
          "sentences": [
            {
              "id": "paper1_p9_colR_b3_s0",
              "en": "The pCoCoA algorithm has been evaluated by means of simulations adopting the same methodology presented in Section IV.",
              "vi": "Thuật toán pCoCoA đã được đánh giá bằng phương pháp mô phỏng áp dụng phương pháp tương tự được trình bày trong Phần IV."
            },
            {
              "id": "paper1_p9_colR_b3_s1",
              "en": "Similarly, both traffic patterns, i.e. periodic traffic and interfering bursty traffic, respectively, are considered to compare the proposed algorithm against CoAP, CoCoA+ and two new recent algorithms derived from CoCoA+: 4-state-strong [7] and CoCoA-E [14], respectively.",
              "vi": "Tương tự, cả hai mẫu lưu lượng truy cập, tức là lưu lượng truy cập định kỳ và lưu lượng truy cập bùng nổ gây nhiễu, tương ứng, được xem xét để so sánh thuật toán đề xuất với CoAP, CoCoA+ và hai thuật toán mới gần đây có nguồn gốc từ CoCoA+: 4-state-strong [7] và CoCoA-E [14], tương ứng."
            },
            {
              "id": "paper1_p9_colR_b3_s2",
              "en": "In the following, we first introduce the 4-state-strong and CoCoA-E, adopted as term of comparison in the performance evaluation, then we present the results with periodic traffic and interfering bursty traffic.",
              "vi": "Sau đây, trước tiên chúng tôi giới thiệu 4 trạng thái mạnh và CoCoA-E, được sử dụng làm thuật ngữ so sánh trong đánh giá hiệu suất, sau đó chúng tôi trình bày kết quả với lưu lượng truy cập định kỳ và lưu lượng truy cập bùng nổ gây cản trở."
            }
          ]
        },
        {
          "id": "paper1_p9_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. 4-state-strong and CoCoA-E algorithms",
          "sentences": [
            {
              "id": "paper1_p9_colR_b4_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p9_colR_b4_s1",
              "en": "4-state-strong and CoCoA-E algorithms",
              "vi": "Thuật toán 4 trạng thái mạnh và CoCoA-E"
            }
          ]
        },
        {
          "id": "paper1_p9_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The 4-state-strong algorithm, presented in [7], exploits a 4state estimator to improve throughput even in lossy networks. Specifically, the 4-state-strong algorithm defines four states, namely 1, 2, 3, 4; each CoAP transaction is assigned one of these states depending on the number of times its message has been retransmitted. Specifically, every time a message is retransmitted, the corresponding state is increased, while if the transaction is completed within the RTO the state is decreased. Each state has a different VBF associated, thus allowing to compute the RTO according to the recent history of transactions. Differently from CoCoA+, which has two different estimators (weak and strong), the 4-state-strong has four different estimators one per each state. The rationale behind this is that if losses are intermittent, e.g. due to wireless interference, less RTT samples should be included in the RTO estimation, otherwise the RTO estimation would be highly affected by channel losses with less correlation with network congestion.  With 4-",
          "sentences": [
            {
              "id": "paper1_p9_colR_b5_s0",
              "en": "The 4-state-strong algorithm, presented in [7], exploits a 4state estimator to improve throughput even in lossy networks.",
              "vi": "Thuật toán mạnh 4 trạng thái, được trình bày trong [7], khai thác công cụ ước tính 4 trạng thái để cải thiện thông lượng (throughput) ngay cả trong các mạng bị tổn hao."
            },
            {
              "id": "paper1_p9_colR_b5_s1",
              "en": "Specifically, the 4-state-strong algorithm defines four states, namely 1, 2, 3, 4; each CoAP transaction is assigned one of these states depending on the number of times its message has been retransmitted.",
              "vi": "Cụ thể, thuật toán mạnh 4 trạng thái xác định 4 trạng thái là 1, 2, 3, 4; mỗi giao dịch CoAP được chỉ định một trong các trạng thái này tùy thuộc vào số lần tin nhắn của nó được truyền lại."
            },
            {
              "id": "paper1_p9_colR_b5_s2",
              "en": "Specifically, every time a message is retransmitted, the corresponding state is increased, while if the transaction is completed within the RTO the state is decreased.",
              "vi": "Cụ thể, mỗi khi một tin nhắn được truyền lại, trạng thái tương ứng sẽ tăng lên, trong khi nếu giao dịch được hoàn thành trong RTO thì trạng thái đó sẽ giảm."
            },
            {
              "id": "paper1_p9_colR_b5_s3",
              "en": "Each state has a different VBF associated, thus allowing to compute the RTO according to the recent history of transactions.",
              "vi": "Mỗi tiểu bang có một VBF khác nhau được liên kết, do đó cho phép tính toán RTO theo lịch sử giao dịch gần đây."
            },
            {
              "id": "paper1_p9_colR_b5_s4",
              "en": "Differently from CoCoA+, which has two different estimators (weak and strong), the 4-state-strong has four different estimators one per each state.",
              "vi": "Khác với CoCoA+, có hai công cụ ước tính khác nhau (yếu và mạnh), mạnh 4 trạng thái có bốn công cụ ước tính khác nhau, mỗi công cụ ước tính cho mỗi trạng thái."
            },
            {
              "id": "paper1_p9_colR_b5_s5",
              "en": "The rationale behind this is that if losses are intermittent, e.g. due to wireless interference, less RTT samples should be included in the RTO estimation, otherwise the RTO estimation would be highly affected by channel losses with less correlation with network congestion.",
              "vi": "Lý do đằng sau điều này là nếu tổn thất không liên tục, ví dụ: do nhiễu không dây, nên đưa ít mẫu RTT hơn vào ước tính RTO, nếu không, ước tính RTO sẽ bị ảnh hưởng nhiều do suy hao kênh và ít tương quan hơn với tắc nghẽn mạng."
            },
            {
              "id": "paper1_p9_colR_b5_s6",
              "en": "With 4-",
              "vi": "Với 4-"
            }
          ]
        }
      ]
    },
    {
      "page_num": 10,
      "page_image": "assets/p1_page_10.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p10_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 15,  CoAP vs. CoCoA+ vs. pCoCoA carried load per node, T = 8s.",
          "sentences": [
            {
              "id": "paper1_p10_colL_b0_s0",
              "en": "Fig. 15,  CoAP vs. CoCoA+ vs. pCoCoA carried load per node, T = 8s.",
              "vi": "Hình 15, CoAP so với CoCoA+ so với pCoCoA mang tải trên mỗi nút, T = 8 giây."
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "state-strong, instead, when the number of retransmissions is due to congestion  a greater percentage of the measured RTT is included in the final RTO in order to reduce the transmission rate. Specifically, the RTO is computed as follows:",
          "sentences": [
            {
              "id": "paper1_p10_colL_b1_s0",
              "en": "state-strong, instead, when the number of retransmissions is due to congestion  a greater percentage of the measured RTT is included in the final RTO in order to reduce the transmission rate.",
              "vi": "thay vào đó, mạnh ở trạng thái, khi số lần truyền lại là do tắc nghẽn thì phần trăm RTT đo được lớn hơn sẽ được đưa vào RTO cuối cùng để giảm tốc độ truyền."
            },
            {
              "id": "paper1_p10_colL_b1_s1",
              "en": "Specifically, the RTO is computed as follows:",
              "vi": "Cụ thể, RTO được tính như sau:"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙←𝑤∗𝑅𝑇𝑂𝑜𝑏𝑡𝑎𝑖𝑛𝑒𝑑+ (1 −𝑤)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙 (11)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b2_s0",
              "en": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙←𝑤∗𝑅𝑇𝑂𝑜𝑏𝑡𝑎𝑖𝑛𝑒𝑑+ (1 −𝑤)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙 (11)",
              "vi": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙←𝑤∗𝑅𝑇𝑂𝑜𝑏𝑡𝑎𝑖𝑛𝑒𝑑+ (1 −𝑤)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙 (11)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "where w is a weight which depends on the transaction state.",
          "sentences": [
            {
              "id": "paper1_p10_colL_b3_s0",
              "en": "where w is a weight which depends on the transaction state.",
              "vi": "trong đó w là trọng số phụ thuộc vào trạng thái giao dịch."
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The CoCoA-E algorithm, presented in [14], takes a different approach that involves the re-definition of the estimators weights and gains. Indeed, CoCoA+ has been designed based on the retransmission timer of TCP, which exploits three different parameters: α, β, and K. In [15] the authors concluded that the estimator gains α and β are too high and the weight K is too low for networks with high load. Specifically they cause SRTT and RTTVAR to decay too rapidly and, consequently, RTO to be set aggressively. For this reason, in CoCoA-E α and β are replaced by a single coefficient γ defined as follows:",
          "sentences": [
            {
              "id": "paper1_p10_colL_b4_s0",
              "en": "The CoCoA-E algorithm, presented in [14], takes a different approach that involves the re-definition of the estimators weights and gains.",
              "vi": "Thuật toán CoCoA-E, được trình bày trong [14], sử dụng một cách tiếp cận khác liên quan đến việc xác định lại trọng số và mức tăng của các công cụ ước tính."
            },
            {
              "id": "paper1_p10_colL_b4_s1",
              "en": "Indeed, CoCoA+ has been designed based on the retransmission timer of TCP, which exploits three different parameters: α, β, and K.",
              "vi": "Thật vậy, CoCoA+ đã được thiết kế dựa trên bộ đếm thời gian truyền lại của TCP, khai thác ba tham số khác nhau: α, β và K."
            },
            {
              "id": "paper1_p10_colL_b4_s2",
              "en": "In [15] the authors concluded that the estimator gains α and β are too high and the weight K is too low for networks with high load.",
              "vi": "Trong [15], các tác giả đã kết luận rằng độ lợi α và β của công cụ ước tính là quá cao và trọng số K quá thấp đối với các mạng có tải trọng cao."
            },
            {
              "id": "paper1_p10_colL_b4_s3",
              "en": "Specifically they cause SRTT and RTTVAR to decay too rapidly and, consequently, RTO to be set aggressively.",
              "vi": "Cụ thể là chúng khiến SRTT và RTTVAR phân rã quá nhanh và do đó, RTO được thiết lập mạnh mẽ."
            },
            {
              "id": "paper1_p10_colL_b4_s4",
              "en": "For this reason, in CoCoA-E α and β are replaced by a single coefficient γ defined as follows:",
              "vi": "Vì lý do này, trong CoCoA-E α và β được thay thế bằng một hệ số γ duy nhất được xác định như sau:"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝛾𝑡←𝑅𝑇𝑇",
          "sentences": [
            {
              "id": "paper1_p10_colL_b5_s0",
              "en": "𝛾𝑡←𝑅𝑇𝑇",
              "vi": "𝛾𝑡←𝑅𝑇𝑇"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂 (12)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b6_s0",
              "en": "𝑅𝑇𝑂 (12)",
              "vi": "𝑅𝑇𝑂 (12)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝛾←{ 𝛾𝑡            𝛾𝑡≤0.5 1 −𝛾𝑡        𝑜𝑡ℎ𝑒𝑟𝑤𝑖𝑠𝑒 (13)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b7_s0",
              "en": "𝛾←{ 𝛾𝑡            𝛾𝑡≤0.5 1 −𝛾𝑡        𝑜𝑡ℎ𝑒𝑟𝑤𝑖𝑠𝑒 (13)",
              "vi": "𝛾←{ 𝛾𝑡 𝛾𝑡≤0.5 1 −𝛾𝑡 𝑜𝑡ℎ𝑒𝑟𝑤𝑖𝑠𝑒 (13)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Eq. (13) is introduced to avoid the rapid increase of the RTO due to sporadic losses. When  is greater than 0.5, RTT is greater than ½ RTO, in this case Eq. (13) avoids a step increment of the RTO, thus avoiding to include in the RTO estimation sporadic losses. In addition, CoCoA-E exploits the strong and weak estimators adopted in CoCoA+, however, with a different strategy for the overall RTO computation. Specifically, if the last RTO value is calculated based on the weak estimator, the same formula adopted in CoCoA+ is used Eq (17) (b), otherwise, if the last RTO is calculated based on the strong estimator, the overall RTO is set equal to the strong RTO value Eq (17) (a). Summarizing:",
          "sentences": [
            {
              "id": "paper1_p10_colL_b8_s0",
              "en": "Eq. (13) is introduced to avoid the rapid increase of the RTO due to sporadic losses.",
              "vi": "phương trình. (13) được đưa ra để tránh sự gia tăng nhanh chóng của RTO do tổn thất lẻ tẻ."
            },
            {
              "id": "paper1_p10_colL_b8_s1",
              "en": "When  is greater than 0.5, RTT is greater than ½ RTO, in this case Eq. (13) avoids a step increment of the RTO, thus avoiding to include in the RTO estimation sporadic losses.",
              "vi": "Khi  lớn hơn 0,5, RTT lớn hơn ½ RTO, trong trường hợp này là phương trình. (13) tránh tăng RTO theo từng bước, do đó tránh đưa vào ước tính RTO những tổn thất lẻ tẻ."
            },
            {
              "id": "paper1_p10_colL_b8_s2",
              "en": "In addition, CoCoA-E exploits the strong and weak estimators adopted in CoCoA+, however, with a different strategy for the overall RTO computation.",
              "vi": "Ngoài ra, CoCoA-E khai thác các công cụ ước tính mạnh và yếu được áp dụng trong CoCoA+, tuy nhiên, với một chiến lược khác để tính toán RTO tổng thể."
            },
            {
              "id": "paper1_p10_colL_b8_s3",
              "en": "Specifically, if the last RTO value is calculated based on the weak estimator, the same formula adopted in CoCoA+ is used Eq (17) (b), otherwise, if the last RTO is calculated based on the strong estimator, the overall RTO is set equal to the strong RTO value Eq (17) (a).",
              "vi": "Cụ thể, nếu giá trị RTO cuối cùng được tính toán dựa trên công cụ ước tính yếu thì công thức tương tự được áp dụng trong CoCoA+ sẽ được sử dụng Phương trình (17) (b), nếu không, nếu RTO cuối cùng được tính toán dựa trên công cụ ước tính mạnh thì RTO tổng thể được đặt bằng giá trị RTO mạnh Eq (17) (a)."
            },
            {
              "id": "paper1_p10_colL_b8_s4",
              "en": "Summarizing:",
              "vi": "Tóm tắt:"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑇𝑥= (1 −𝛾)𝑅𝑇𝑇𝑥+ 𝛾𝑅 (14)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b9_s0",
              "en": "𝑅𝑇𝑇𝑥= (1 −𝛾)𝑅𝑇𝑇𝑥+ 𝛾𝑅 (14)",
              "vi": "𝑅𝑇𝑇𝑥= (1 −𝛾)𝑅𝑇𝑇𝑥+ 𝛾𝑅 (14)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑇𝑉𝐴𝑅𝑥= (1 −𝛾)𝑅𝑇𝑇𝑉𝐴𝑅𝑥+ 𝛾|𝑅𝑇𝑇𝑥−𝑅| (15)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b10_s0",
              "en": "𝑅𝑇𝑇𝑉𝐴𝑅𝑥= (1 −𝛾)𝑅𝑇𝑇𝑉𝐴𝑅𝑥+ 𝛾|𝑅𝑇𝑇𝑥−𝑅| (15)",
              "vi": "𝑅𝑇𝑇𝑉𝐴𝑅𝑥= (1 −𝛾)𝑅𝑇𝑇𝑉𝐴𝑅𝑥+ 𝛾|𝑅𝑇𝑇𝑥−𝑅| (15)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "𝑅𝑇𝑂𝑥= 𝑅𝑇𝑇𝑥+ 𝐾𝑥𝑅𝑇𝑇𝑉𝐴𝑅𝑥 (16)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b11_s0",
              "en": "𝑅𝑇𝑂𝑥= 𝑅𝑇𝑇𝑥+ 𝐾𝑥𝑅𝑇𝑇𝑉𝐴𝑅𝑥 (16)",
              "vi": "𝑅𝑇𝑂𝑥= 𝑅𝑇𝑇𝑥+ 𝐾𝑥𝑅𝑇𝑇𝑉𝐴𝑅𝑥 (16)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= { 𝑅𝑇𝑂𝑠𝑡𝑟𝑜𝑛𝑔 𝜆𝑅𝑇𝑂𝑤𝑒𝑎𝑘+ (1 −𝜆)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙",
          "sentences": [
            {
              "id": "paper1_p10_colL_b12_s0",
              "en": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= { 𝑅𝑇𝑂𝑠𝑡𝑟𝑜𝑛𝑔 𝜆𝑅𝑇𝑂𝑤𝑒𝑎𝑘+ (1 −𝜆)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙",
              "vi": "𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙= { 𝑅𝑇𝑂𝑠𝑡𝑟𝑜𝑛𝑔 𝜆𝑅𝑇𝑂𝑤𝑒𝑎𝑘+ (1 −𝜆)𝑅𝑇𝑂𝑜𝑣𝑒𝑟𝑎𝑙𝑙"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "(𝑎)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b13_s0",
              "en": "(𝑎)",
              "vi": "(𝑎)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "(𝑏) (17)",
          "sentences": [
            {
              "id": "paper1_p10_colL_b14_s0",
              "en": "(𝑏) (17)",
              "vi": "(𝑏) (17)"
            }
          ]
        },
        {
          "id": "paper1_p10_colL_b15",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "where 𝜆 = 0.5.",
          "sentences": [
            {
              "id": "paper1_p10_colL_b15_s0",
              "en": "where 𝜆 = 0.5.",
              "vi": "trong đó 𝜆 = 0,5."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p10_colR_b0",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Periodic traffic scenario",
          "sentences": [
            {
              "id": "paper1_p10_colR_b0_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper1_p10_colR_b0_s1",
              "en": "Periodic traffic scenario",
              "vi": "Kịch bản giao thông định kỳ"
            }
          ]
        },
        {
          "id": "paper1_p10_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this section, we report the results obtained with the periodic traffic pattern as described in Section IV.A. Fig. 15 shows the carried load per node when the request period is set to 8s. As can be seen, the pCoCoA and CoCoA-E algorithms perform always better than CoCoA+ and guarantee a performance close to CoAP. The 4-state-strong algorithm, instead, can be compared to CoCoA+ in terms of average performance. However, its results are influenced by a considerably high variance across different runs. Due to their similarities, both CoCoA+ and 4state-strong suffer from spurious retransmissions that affect their performance. This is confirmed by the data reported in Fig. 16, which shows the average number of retransmissions. Both the CoCoA+ and the 4-state-strong algorithms achieve a similar carried load but with a significantly different number of retransmissions. pCoCoA, instead, reduces spurious retransmissions by leveraging the 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, variable to compute the lower bound for the computation of RTO. This mechanism reduces the fast decrease of RTO that can occur when multiple similar RTT samples are obtained, thus cutting the number of spurious retransmissions. Indeed, in Fig. 16, the pCoCoA algorithm results in a number of retransmissions that is considerably lower than CoCoA+ and 4-state-strong. The CoCoA-E algorithm achieves a carried load close to pCoCoA but with less retransmissions, this is because the usage of  allows the RTO to converge to the actual RTT more faster and, under constant periodic traffic, to remain close to the effective RTT value even when retransmissions occur. This, however, does not happen when bursty traffic is considered as shown in the following.",
          "sentences": [
            {
              "id": "paper1_p10_colR_b1_s0",
              "en": "In this section, we report the results obtained with the periodic traffic pattern as described in Section IV.A. Fig. 15 shows the carried load per node when the request period is set to 8s.",
              "vi": "Trong phần này, chúng tôi báo cáo kết quả thu được với mô hình lưu lượng truy cập định kỳ như được mô tả trong Phần IV.A. Hình 15 hiển thị tải được mang trên mỗi nút khi khoảng thời gian yêu cầu được đặt thành 8 giây."
            },
            {
              "id": "paper1_p10_colR_b1_s1",
              "en": "As can be seen, the pCoCoA and CoCoA-E algorithms perform always better than CoCoA+ and guarantee a performance close to CoAP.",
              "vi": "Có thể thấy, thuật toán pCoCoA và CoCoA-E luôn hoạt động tốt hơn CoCoA+ và đảm bảo hiệu suất gần bằng CoAP."
            },
            {
              "id": "paper1_p10_colR_b1_s2",
              "en": "The 4-state-strong algorithm, instead, can be compared to CoCoA+ in terms of average performance.",
              "vi": "Thay vào đó, thuật toán mạnh 4 trạng thái có thể được so sánh với CoCoA+ về hiệu suất trung bình."
            },
            {
              "id": "paper1_p10_colR_b1_s3",
              "en": "However, its results are influenced by a considerably high variance across different runs.",
              "vi": "Tuy nhiên, kết quả của nó bị ảnh hưởng bởi sự chênh lệch cao đáng kể giữa các lần chạy khác nhau."
            },
            {
              "id": "paper1_p10_colR_b1_s4",
              "en": "Due to their similarities, both CoCoA+ and 4state-strong suffer from spurious retransmissions that affect their performance.",
              "vi": "Do những điểm tương đồng, cả CoCoA+ và 4state-strong đều gặp phải tình trạng truyền lại giả mạo, ảnh hưởng đến hiệu suất của chúng."
            },
            {
              "id": "paper1_p10_colR_b1_s5",
              "en": "This is confirmed by the data reported in Fig. 16, which shows the average number of retransmissions.",
              "vi": "Điều này được xác nhận bởi dữ liệu được báo cáo trong Hình 16, cho thấy số lần truyền lại trung bình."
            },
            {
              "id": "paper1_p10_colR_b1_s6",
              "en": "Both the CoCoA+ and the 4-state-strong algorithms achieve a similar carried load but with a significantly different number of retransmissions. pCoCoA, instead, reduces spurious retransmissions by leveraging the 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, variable to compute the lower bound for the computation of RTO.",
              "vi": "Cả thuật toán CoCoA+ và thuật toán mạnh 4 trạng thái đều đạt được tải trọng tương tự nhưng có số lần truyền lại khác nhau đáng kể. Thay vào đó, pCoCoA giảm số lần truyền lại giả bằng cách tận dụng biến 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 để tính giới hạn dưới cho việc tính toán RTO."
            },
            {
              "id": "paper1_p10_colR_b1_s7",
              "en": "This mechanism reduces the fast decrease of RTO that can occur when multiple similar RTT samples are obtained, thus cutting the number of spurious retransmissions.",
              "vi": "Cơ chế này làm giảm sự giảm nhanh RTO có thể xảy ra khi thu được nhiều mẫu RTT tương tự, do đó cắt giảm số lần truyền lại giả."
            },
            {
              "id": "paper1_p10_colR_b1_s8",
              "en": "Indeed, in Fig. 16, the pCoCoA algorithm results in a number of retransmissions that is considerably lower than CoCoA+ and 4-state-strong.",
              "vi": "Thật vậy, trong Hình 16, thuật toán pCoCoA dẫn đến số lần truyền lại thấp hơn đáng kể so với CoCoA+ và mạnh 4 trạng thái."
            },
            {
              "id": "paper1_p10_colR_b1_s9",
              "en": "The CoCoA-E algorithm achieves a carried load close to pCoCoA but with less retransmissions, this is because the usage of  allows the RTO to converge to the actual RTT more faster and, under constant periodic traffic, to remain close to the effective RTT value even when retransmissions occur.",
              "vi": "Thuật toán CoCoA-E đạt được tải được mang gần với pCoCoA nhưng với số lần truyền lại ít hơn, điều này là do việc sử dụng  cho phép RTO hội tụ về RTT thực tế nhanh hơn và, trong điều kiện lưu lượng định kỳ không đổi, vẫn ở gần giá trị RTT hiệu quả ngay cả khi xảy ra truyền lại."
            },
            {
              "id": "paper1_p10_colR_b1_s10",
              "en": "This, however, does not happen when bursty traffic is considered as shown in the following.",
              "vi": "Tuy nhiên, điều này không xảy ra khi lưu lượng truy cập bùng nổ được xem xét như sau."
            }
          ]
        },
        {
          "id": "paper1_p10_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In Fig. 17, we show a detail of the behavior over time of CoCoA+, 4-state-strong, CoCoA-E and pCoCoA algorithms. Specifically, we report on the y-axis the Node IDs and on the x-axis the time. For each retransmission performed by a node, a colored marker is shown. Different colors for the markers are adopted to distinguish adjacent markers from different nodes. Due to a different and more conservative initialization of the state variables, the pCoCoA algorithm shows a reduction of the number of retransmissions at the beginning of the simulation.",
          "sentences": [
            {
              "id": "paper1_p10_colR_b2_s0",
              "en": "In Fig. 17, we show a detail of the behavior over time of CoCoA+, 4-state-strong, CoCoA-E and pCoCoA algorithms.",
              "vi": "Trong Hình 17, chúng tôi hiển thị chi tiết về hoạt động theo thời gian của các thuật toán CoCoA+, 4 trạng thái mạnh, CoCoA-E và pCoCoA."
            },
            {
              "id": "paper1_p10_colR_b2_s1",
              "en": "Specifically, we report on the y-axis the Node IDs and on the x-axis the time.",
              "vi": "Cụ thể, chúng tôi báo cáo trên trục y các ID nút và trên trục x thời gian."
            },
            {
              "id": "paper1_p10_colR_b2_s2",
              "en": "For each retransmission performed by a node, a colored marker is shown.",
              "vi": "Đối với mỗi lần truyền lại được thực hiện bởi một nút, một điểm đánh dấu màu sẽ được hiển thị."
            },
            {
              "id": "paper1_p10_colR_b2_s3",
              "en": "Different colors for the markers are adopted to distinguish adjacent markers from different nodes.",
              "vi": "Các màu khác nhau cho điểm đánh dấu được áp dụng để phân biệt các điểm đánh dấu liền kề với các nút khác nhau."
            },
            {
              "id": "paper1_p10_colR_b2_s4",
              "en": "Due to a different and more conservative initialization of the state variables, the pCoCoA algorithm shows a reduction of the number of retransmissions at the beginning of the simulation.",
              "vi": "Do việc khởi tạo các biến trạng thái khác nhau và thận trọng hơn, thuật toán pCoCoA cho thấy số lần truyền lại giảm khi bắt đầu mô phỏng."
            }
          ]
        }
      ]
    },
    {
      "page_num": 11,
      "page_image": "assets/p1_page_11.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p11_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 16, Node average retransmissions, T = 8s.",
          "sentences": [
            {
              "id": "paper1_p11_colL_b0_s0",
              "en": "Fig. 16, Node average retransmissions, T = 8s.",
              "vi": "Hình 16, Số lần truyền lại trung bình của nút, T = 8s."
            }
          ]
        },
        {
          "id": "paper1_p11_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "On the other hand, CoCoA+ and 4-state-strong require more time to correctly estimate the RTO, thus at the beginning the latter underestimates the RTT value causing spurious retransmissions. The CoCoA-E algorithm, instead, initializes the state variables like CoCoA and thus exhibits a set of retransmissions at the beginning, but subsequently it rapidly converges to the correct RTO. Specifically, CoCoA+ uses the first RTT measurement to set its internal variables. However, if the first RTT sample is too low, several unnecessary retransmissions might be triggered due to the fact that the RTO value remains close to the RTT, as can be seen from the large set of markers around 200 seconds. Consequently, the RTO converges even more slowly because RTT samples have lower weights in the CoCoA+ RTO update algorithm when retransmissions occur.",
          "sentences": [
            {
              "id": "paper1_p11_colL_b1_s0",
              "en": "On the other hand, CoCoA+ and 4-state-strong require more time to correctly estimate the RTO, thus at the beginning the latter underestimates the RTT value causing spurious retransmissions.",
              "vi": "Mặt khác, CoCoA+ và 4 trạng thái mạnh cần nhiều thời gian hơn để ước tính chính xác RTO, do đó, lúc đầu, RTO đánh giá thấp giá trị RTT gây ra việc truyền lại giả."
            },
            {
              "id": "paper1_p11_colL_b1_s1",
              "en": "The CoCoA-E algorithm, instead, initializes the state variables like CoCoA and thus exhibits a set of retransmissions at the beginning, but subsequently it rapidly converges to the correct RTO.",
              "vi": "Thay vào đó, thuật toán CoCoA-E khởi tạo các biến trạng thái như CoCoA và do đó thể hiện một tập hợp các lần truyền lại ngay từ đầu, nhưng sau đó nó nhanh chóng hội tụ về RTO chính xác."
            },
            {
              "id": "paper1_p11_colL_b1_s2",
              "en": "Specifically, CoCoA+ uses the first RTT measurement to set its internal variables.",
              "vi": "Cụ thể, CoCoA+ sử dụng phép đo RTT đầu tiên để đặt các biến nội bộ của nó."
            },
            {
              "id": "paper1_p11_colL_b1_s3",
              "en": "However, if the first RTT sample is too low, several unnecessary retransmissions might be triggered due to the fact that the RTO value remains close to the RTT, as can be seen from the large set of markers around 200 seconds.",
              "vi": "Tuy nhiên, nếu mẫu RTT đầu tiên quá thấp, một số lần truyền lại không cần thiết có thể được kích hoạt do thực tế là giá trị RTO vẫn gần với RTT, như có thể thấy từ tập hợp lớn các điểm đánh dấu trong khoảng 200 giây."
            },
            {
              "id": "paper1_p11_colL_b1_s4",
              "en": "Consequently, the RTO converges even more slowly because RTT samples have lower weights in the CoCoA+ RTO update algorithm when retransmissions occur.",
              "vi": "Do đó, RTO thậm chí còn hội tụ chậm hơn do các mẫu RTT có trọng số thấp hơn trong thuật toán cập nhật CoCoA+ RTO khi xảy ra quá trình truyền lại."
            }
          ]
        },
        {
          "id": "paper1_p11_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "This is highlighted by Fig. 17, where CoCoA+ exhibits a first huge group of retransmissions around 200, and another one",
          "sentences": [
            {
              "id": "paper1_p11_colL_b2_s0",
              "en": "This is highlighted by Fig. 17, where CoCoA+ exhibits a first huge group of retransmissions around 200, and another one",
              "vi": "Điều này được làm nổi bật trong Hình 17, trong đó CoCoA+ thể hiện một nhóm truyền lại khổng lồ đầu tiên khoảng 200 và một nhóm khác"
            }
          ]
        },
        {
          "id": "paper1_p11_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "(a) CoCoA+ (b) 4-state-strong",
          "sentences": [
            {
              "id": "paper1_p11_colL_b3_s0",
              "en": "(a) CoCoA+ (b) 4-state-strong",
              "vi": "(a) CoCoA+ (b) 4 trạng thái mạnh"
            }
          ]
        },
        {
          "id": "paper1_p11_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "(c) CoCoA-E (d) pCoCoA Fig. 17, Retransmission dispersion.",
          "sentences": [
            {
              "id": "paper1_p11_colL_b4_s0",
              "en": "(c) CoCoA-E (d) pCoCoA Fig. 17, Retransmission dispersion.",
              "vi": "(c) CoCoA-E (d) pCoCoA Hình 17, Phân tán truyền lại."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p11_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "around 500 seconds. The latter is smaller compared to the previous one because the estimated RTO is growing, even if slowly. In our experiments, in particular, the CoCoA+ RTO converges to the correct value after 600 seconds of simulation, as can be seen by the absence of groups of retransmissions. The 4-state-strong algorithm in Fig. 17 (b) exhibits a similar behavior. Even if the 4-state-strong algorithm updates RTO based on the number of consecutive losses, at the beginning of the simulation it behaves like CoCoA+. The effects of the different estimators can be seen considering how retransmissions disperse over time. Each group of retransmissions is longer than the retransmission groups resulting from CoCoA+, this is due to the fact that the 4-state-strong algorithm is less aggressive than CoCoA+. As also reported in [7], the reason behind this behavior is that the 4-state-strong algorithm is designed mainly to handle scenarios with a high packet loss due to wireless links, thus in case of losses caused by congestions situations it requires more",
          "sentences": [
            {
              "id": "paper1_p11_colR_b0_s0",
              "en": "around 500 seconds.",
              "vi": "khoảng 500 giây."
            },
            {
              "id": "paper1_p11_colR_b0_s1",
              "en": "The latter is smaller compared to the previous one because the estimated RTO is growing, even if slowly.",
              "vi": "Cái sau nhỏ hơn so với cái trước vì RTO ước tính đang tăng lên, ngay cả khi chậm."
            },
            {
              "id": "paper1_p11_colR_b0_s2",
              "en": "In our experiments, in particular, the CoCoA+ RTO converges to the correct value after 600 seconds of simulation, as can be seen by the absence of groups of retransmissions.",
              "vi": "Cụ thể, trong các thử nghiệm của chúng tôi, CoCoA+ RTO hội tụ về giá trị chính xác sau 600 giây mô phỏng, như có thể thấy khi không có nhóm truyền lại."
            },
            {
              "id": "paper1_p11_colR_b0_s3",
              "en": "The 4-state-strong algorithm in Fig. 17 (b) exhibits a similar behavior.",
              "vi": "Thuật toán mạnh 4 trạng thái trong Hình 17 (b) thể hiện hành vi tương tự."
            },
            {
              "id": "paper1_p11_colR_b0_s4",
              "en": "Even if the 4-state-strong algorithm updates RTO based on the number of consecutive losses, at the beginning of the simulation it behaves like CoCoA+.",
              "vi": "Ngay cả khi thuật toán mạnh 4 trạng thái cập nhật RTO dựa trên số lần mất liên tiếp, thì khi bắt đầu mô phỏng, nó vẫn hoạt động giống như CoCoA+."
            },
            {
              "id": "paper1_p11_colR_b0_s5",
              "en": "The effects of the different estimators can be seen considering how retransmissions disperse over time.",
              "vi": "Có thể thấy tác động của các công cụ ước tính khác nhau khi xem xét cách thức truyền lại phân tán theo thời gian."
            },
            {
              "id": "paper1_p11_colR_b0_s6",
              "en": "Each group of retransmissions is longer than the retransmission groups resulting from CoCoA+, this is due to the fact that the 4-state-strong algorithm is less aggressive than CoCoA+.",
              "vi": "Mỗi nhóm truyền lại dài hơn các nhóm truyền lại do CoCoA+, điều này là do thuật toán mạnh 4 trạng thái ít linh hoạt hơn CoCoA+."
            },
            {
              "id": "paper1_p11_colR_b0_s7",
              "en": "As also reported in [7], the reason behind this behavior is that the 4-state-strong algorithm is designed mainly to handle scenarios with a high packet loss due to wireless links, thus in case of losses caused by congestions situations it requires more",
              "vi": "Như đã báo cáo trong [7], lý do đằng sau hành vi này là thuật toán mạnh 4 trạng thái được thiết kế chủ yếu để xử lý các tình huống có tỷ lệ mất gói cao do liên kết không dây, do đó, trong trường hợp mất gói do tắc nghẽn, nó cần nhiều hơn."
            }
          ]
        }
      ]
    },
    {
      "page_num": 12,
      "page_image": "assets/p1_page_12.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p12_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "(a) CoCoA+ (b) pCoCoA Fig. 18, Exploitation of the correct k value.",
          "sentences": [
            {
              "id": "paper1_p12_colL_b0_s0",
              "en": "(a) CoCoA+ (b) pCoCoA Fig. 18, Exploitation of the correct k value.",
              "vi": "(a) CoCoA+ (b) pCoCoA Hình 18, Khai thác giá trị k chính xác."
            }
          ]
        },
        {
          "id": "paper1_p12_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "time to converge.",
          "sentences": [
            {
              "id": "paper1_p12_colL_b1_s0",
              "en": "time to converge.",
              "vi": "thời gian để hội tụ."
            }
          ]
        },
        {
          "id": "paper1_p12_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Also CoCoA-E, as shown in Fig. 17 (c), presents a first retransmission group around 100 seconds, however, afterwards the RTO estimation converges to the correct value around 300 seconds, thanks to its RTO estimation strategy. This confirms that CoCoA-E converges to the actual RTT quickly under steady conditions, in particular the RTO value is always sufficient to avoid spurious timeout as also outlined in [15].",
          "sentences": [
            {
              "id": "paper1_p12_colL_b2_s0",
              "en": "Also CoCoA-E, as shown in Fig. 17 (c), presents a first retransmission group around 100 seconds, however, afterwards the RTO estimation converges to the correct value around 300 seconds, thanks to its RTO estimation strategy.",
              "vi": "Ngoài ra, CoCoA-E, như được hiển thị trong Hình 17 (c), trình bày nhóm truyền lại đầu tiên trong khoảng 100 giây, tuy nhiên, sau đó, ước tính RTO sẽ hội tụ về giá trị chính xác trong khoảng 300 giây, nhờ vào chiến lược ước tính RTO của nó."
            },
            {
              "id": "paper1_p12_colL_b2_s1",
              "en": "This confirms that CoCoA-E converges to the actual RTT quickly under steady conditions, in particular the RTO value is always sufficient to avoid spurious timeout as also outlined in [15].",
              "vi": "Điều này xác nhận rằng CoCoA-E hội tụ đến RTT thực tế một cách nhanh chóng trong điều kiện ổn định, đặc biệt là giá trị RTO luôn đủ để tránh thời gian chờ giả như đã nêu trong [15]."
            }
          ]
        },
        {
          "id": "paper1_p12_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "pCoCoA, instead, is reported in Fig. 17 (d) and, it exploits a more conservative variable initialization that mitigates this issue and converges to the correct RTO value approximately at 400 seconds exhibiting only a reduced set of retransmissions around 350 seconds. Specifically, pCoCoA initializes the RTO based on the measured RTT plus the 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 contribution, this mitigates the effects of a small RTT at the beginning which, in the case of CoCoA+, initialize wrongly the RTO estimator.",
          "sentences": [
            {
              "id": "paper1_p12_colL_b3_s0",
              "en": "pCoCoA, instead, is reported in Fig. 17 (d) and, it exploits a more conservative variable initialization that mitigates this issue and converges to the correct RTO value approximately at 400 seconds exhibiting only a reduced set of retransmissions around 350 seconds.",
              "vi": "Thay vào đó, pCoCoA được báo cáo trong Hình 17 (d) và nó khai thác cách khởi tạo biến thận trọng hơn để giảm thiểu vấn đề này và hội tụ về giá trị RTO chính xác khoảng 400 giây, chỉ thể hiện một tập hợp truyền lại giảm khoảng 350 giây."
            },
            {
              "id": "paper1_p12_colL_b3_s1",
              "en": "Specifically, pCoCoA initializes the RTO based on the measured RTT plus the 𝑚𝑑𝑒𝑣𝑚𝑎𝑥 contribution, this mitigates the effects of a small RTT at the beginning which, in the case of CoCoA+, initialize wrongly the RTO estimator.",
              "vi": "Cụ thể, pCoCoA khởi tạo RTO dựa trên RTT đo được cộng với đóng góp 𝑚𝑑𝑒𝑣𝑚𝑎𝑥, điều này giảm thiểu tác động của một RTT nhỏ lúc ban đầu mà trong trường hợp CoCoA+, khởi tạo sai công cụ ước tính RTO."
            }
          ]
        },
        {
          "id": "paper1_p12_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In addition, since the pCoCoA algorithm precisely matches each CON request to the corresponding ACK, it can detect spurious retransmissions and it can compute a more accurate RTT value. Consequently, a more proper value of k is selected to estimate RTO. In Fig. 18 we show that CoCoA+ does not detect spurious retransmissions and results in the adoption of the kweak value by relying on the weak estimator. The latter leads to a smaller or similar RTO value that is not sufficient for the subsequent transactions. Specifically, CoCoA+ generates a spurious retransmission for both transactions 58060 and 58100, as highlighted with brown markers. Such spurious retransmissions are due to the fact that the RTO estimation is lower than the actual RTT, when the retransmission timer is fired a retransmission occurs even if the first one is not lost. Consequently, because of retransmissions, CoCoA+ adopts the weak estimator to evaluate the RTO, which reduces the growing rate of RTO",
          "sentences": [
            {
              "id": "paper1_p12_colL_b4_s0",
              "en": "In addition, since the pCoCoA algorithm precisely matches each CON request to the corresponding ACK, it can detect spurious retransmissions and it can compute a more accurate RTT value.",
              "vi": "Ngoài ra, do thuật toán pCoCoA khớp chính xác từng yêu cầu CON với ACK tương ứng, nên nó có thể phát hiện các lần truyền lại giả và có thể tính toán giá trị RTT chính xác hơn."
            },
            {
              "id": "paper1_p12_colL_b4_s1",
              "en": "Consequently, a more proper value of k is selected to estimate RTO.",
              "vi": "Do đó, giá trị k phù hợp hơn sẽ được chọn để ước tính RTO."
            },
            {
              "id": "paper1_p12_colL_b4_s2",
              "en": "In Fig. 18 we show that CoCoA+ does not detect spurious retransmissions and results in the adoption of the kweak value by relying on the weak estimator.",
              "vi": "Trong Hình 18, chúng tôi chỉ ra rằng CoCoA+ không phát hiện các lần truyền lại giả và dẫn đến việc áp dụng giá trị kweak bằng cách dựa vào công cụ ước tính yếu."
            },
            {
              "id": "paper1_p12_colL_b4_s3",
              "en": "The latter leads to a smaller or similar RTO value that is not sufficient for the subsequent transactions.",
              "vi": "Điều này dẫn đến giá trị RTO nhỏ hơn hoặc tương tự và không đủ cho các giao dịch tiếp theo."
            },
            {
              "id": "paper1_p12_colL_b4_s4",
              "en": "Specifically, CoCoA+ generates a spurious retransmission for both transactions 58060 and 58100, as highlighted with brown markers.",
              "vi": "Cụ thể, CoCoA+ tạo ra sự truyền lại giả cho cả giao dịch 58060 và 58100, như được đánh dấu bằng điểm đánh dấu màu nâu."
            },
            {
              "id": "paper1_p12_colL_b4_s5",
              "en": "Such spurious retransmissions are due to the fact that the RTO estimation is lower than the actual RTT, when the retransmission timer is fired a retransmission occurs even if the first one is not lost.",
              "vi": "Việc truyền lại giả như vậy là do ước tính RTO thấp hơn RTT thực tế, khi bộ đếm thời gian truyền lại được kích hoạt, việc truyền lại xảy ra ngay cả khi lần truyền đầu tiên không bị mất."
            },
            {
              "id": "paper1_p12_colL_b4_s6",
              "en": "Consequently, because of retransmissions, CoCoA+ adopts the weak estimator to evaluate the RTO, which reduces the growing rate of RTO",
              "vi": "Do đó, do truyền lại, CoCoA+ sử dụng công cụ ước tính yếu để đánh giá RTO, điều này làm giảm tốc độ tăng trưởng của RTO"
            }
          ]
        },
        {
          "id": "paper1_p12_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 19, Carried load – interfering bursty traffic.",
          "sentences": [
            {
              "id": "paper1_p12_colL_b5_s0",
              "en": "Fig. 19, Carried load – interfering bursty traffic.",
              "vi": "Hình 19, Tải trọng mang theo - cản trở lưu lượng truy cập dồn dập."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p12_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "generating additional spurious retransmissions. pCoCoA instead converges rapidly to the actual RTT value by detecting spurious retransmissions, this is highlighted in Fig. 18 (b) by a steep increment in the RTO value around transaction 58100.",
          "sentences": [
            {
              "id": "paper1_p12_colR_b0_s0",
              "en": "generating additional spurious retransmissions. pCoCoA instead converges rapidly to the actual RTT value by detecting spurious retransmissions, this is highlighted in Fig. 18 (b) by a steep increment in the RTO value around transaction 58100.",
              "vi": "tạo ra các lần truyền lại giả mạo bổ sung. Thay vào đó, pCoCoA hội tụ nhanh chóng đến giá trị RTT thực tế bằng cách phát hiện các lần truyền lại giả, điều này được nêu bật trong Hình 18 (b) bằng mức tăng mạnh trong giá trị RTO xung quanh giao dịch 58100."
            }
          ]
        },
        {
          "id": "paper1_p12_colR_b1",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. Interfering Bursty Traffic",
          "sentences": [
            {
              "id": "paper1_p12_colR_b1_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper1_p12_colR_b1_s1",
              "en": "Interfering Bursty Traffic",
              "vi": "Can thiệp giao thông bùng nổ"
            }
          ]
        },
        {
          "id": "paper1_p12_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this section, we report the results obtained with the interfering bursty traffic pattern as adopted also in Section IV.B. In Fig. 19 we report the aggregate carried load obtained with CoAP, CoCoA+, 4-state-strong, CoCoA-E and pCoCoA for the CoAP clients that generate constant periodic traffic. The value is reported as a function of the duration of the ON period. As can be seen, the pCoCoA algorithm performs similarly to CoAP when the burst period is short (less than 60s), while it performs similarly to CoCoA+ when the ON period increases. This can be explained considering that pCoCoA always updates the RTO exploiting a precise mapping between requests and responses, regardless of the number of retransmissions. CoCoA+, instead, exploits the weak estimator that is not updated if more than two retransmissions are detected, thus resulting in periods in which the RTOinit is not updated. The 4-state-strong algorithm, instead, updates its estimators also when multiple retransmissions occur. However, by exploiting different weights that take into account the number of retransmissions across transactions, when the ON period increases, the algorithm behaves more aggressively than CoCoA+, thus decreasing the carried load significantly. Finally, CoCoA-E results in poor performance in this scenario. This is mainly because when RTT changes rapidly, for instance at the beginning of the ON period, the algorithm adopts the value 1 −𝛾𝑡 of Eq. 13, which limits the contribution of the measured RTT in the RTO computation. In these cases, sporadic packet losses are filtered by the RTO computation in",
          "sentences": [
            {
              "id": "paper1_p12_colR_b2_s0",
              "en": "In this section, we report the results obtained with the interfering bursty traffic pattern as adopted also in Section IV.B.",
              "vi": "Trong phần này, chúng tôi báo cáo các kết quả thu được với mô hình lưu lượng truy cập dồn dập gây nhiễu như đã được thông qua trong Phần IV.B."
            },
            {
              "id": "paper1_p12_colR_b2_s1",
              "en": "In Fig. 19 we report the aggregate carried load obtained with CoAP, CoCoA+, 4-state-strong, CoCoA-E and pCoCoA for the CoAP clients that generate constant periodic traffic.",
              "vi": "Trong Hình 19, chúng tôi báo cáo tải trọng tổng hợp thu được bằng CoAP, CoCoA+, 4 trạng thái mạnh, CoCoA-E và pCoCoA cho các máy khách CoAP tạo ra lưu lượng truy cập định kỳ không đổi."
            },
            {
              "id": "paper1_p12_colR_b2_s2",
              "en": "The value is reported as a function of the duration of the ON period.",
              "vi": "Giá trị được báo cáo là hàm của khoảng thời gian BẬT."
            },
            {
              "id": "paper1_p12_colR_b2_s3",
              "en": "As can be seen, the pCoCoA algorithm performs similarly to CoAP when the burst period is short (less than 60s), while it performs similarly to CoCoA+ when the ON period increases.",
              "vi": "Có thể thấy, thuật toán pCoCoA hoạt động tương tự như CoAP khi thời gian bùng nổ ngắn (dưới 60 giây), trong khi nó hoạt động tương tự như CoCoA+ khi thời gian BẬT tăng lên."
            },
            {
              "id": "paper1_p12_colR_b2_s4",
              "en": "This can be explained considering that pCoCoA always updates the RTO exploiting a precise mapping between requests and responses, regardless of the number of retransmissions.",
              "vi": "Điều này có thể được giải thích vì pCoCoA luôn cập nhật RTO khai thác ánh xạ chính xác giữa yêu cầu và phản hồi, bất kể số lần truyền lại."
            },
            {
              "id": "paper1_p12_colR_b2_s5",
              "en": "CoCoA+, instead, exploits the weak estimator that is not updated if more than two retransmissions are detected, thus resulting in periods in which the RTOinit is not updated.",
              "vi": "Thay vào đó, CoCoA+ khai thác công cụ ước tính yếu không được cập nhật nếu phát hiện thấy nhiều hơn hai lần truyền lại, do đó dẫn đến các khoảng thời gian RTOinit không được cập nhật."
            },
            {
              "id": "paper1_p12_colR_b2_s6",
              "en": "The 4-state-strong algorithm, instead, updates its estimators also when multiple retransmissions occur.",
              "vi": "Thay vào đó, thuật toán mạnh 4 trạng thái cũng cập nhật các ước tính của nó khi xảy ra nhiều lần truyền lại."
            },
            {
              "id": "paper1_p12_colR_b2_s7",
              "en": "However, by exploiting different weights that take into account the number of retransmissions across transactions, when the ON period increases, the algorithm behaves more aggressively than CoCoA+, thus decreasing the carried load significantly.",
              "vi": "Tuy nhiên, bằng cách khai thác các trọng số khác nhau có tính đến số lần truyền lại trong các giao dịch, khi thời gian BẬT tăng lên, thuật toán hoạt động mạnh mẽ hơn CoCoA+, do đó giảm tải đáng kể."
            },
            {
              "id": "paper1_p12_colR_b2_s8",
              "en": "Finally, CoCoA-E results in poor performance in this scenario.",
              "vi": "Cuối cùng, CoCoA-E mang lại hiệu suất kém trong trường hợp này."
            },
            {
              "id": "paper1_p12_colR_b2_s9",
              "en": "This is mainly because when RTT changes rapidly, for instance at the beginning of the ON period, the algorithm adopts the value 1 −𝛾𝑡 of Eq. 13, which limits the contribution of the measured RTT in the RTO computation.",
              "vi": "Điều này chủ yếu là do khi RTT thay đổi nhanh chóng, chẳng hạn như khi bắt đầu giai đoạn BẬT, thuật toán sẽ sử dụng giá trị 1 −𝛾𝑡 của biểu thức. 13, giới hạn sự đóng góp của RTT đo được trong tính toán RTO."
            },
            {
              "id": "paper1_p12_colR_b2_s10",
              "en": "In these cases, sporadic packet losses are filtered by the RTO computation in",
              "vi": "Trong những trường hợp này, việc mất gói lẻ tẻ được lọc bằng tính toán RTO trong"
            }
          ]
        },
        {
          "id": "paper1_p12_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 20, Transmissions per transaction – interfering bursty traffic.",
          "sentences": [
            {
              "id": "paper1_p12_colR_b3_s0",
              "en": "Fig. 20, Transmissions per transaction – interfering bursty traffic.",
              "vi": "Hình 20, Số lần truyền trên mỗi giao dịch - gây cản trở lưu lượng truy cập bùng nổ."
            }
          ]
        }
      ]
    },
    {
      "page_num": 13,
      "page_image": "assets/p1_page_13.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper1_p13_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "(a) CoCoA+ (b) pCoCoA Fig. 21, Weak estimator failing to update RTOinit .",
          "sentences": [
            {
              "id": "paper1_p13_colL_b0_s0",
              "en": "(a) CoCoA+ (b) pCoCoA Fig. 21, Weak estimator failing to update RTOinit .",
              "vi": "(a) CoCoA+ (b) pCoCoA Hình 21, Công cụ ước tính yếu không cập nhật RTOinit ."
            }
          ]
        },
        {
          "id": "paper1_p13_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoCoA-E, however, when the ON period is greater than 20 seconds, the value 1 −𝛾𝑡 is used frequently, resulting in a slow increase of the RTO that causes frequent retransmissions. Moreover, when a transaction is completed without retransmissions, the overall RTO is immediately updated to the recent RTO value using Eq. 17. However, this results in even lower RTO values during the ON period, further exacerbating the issue.",
          "sentences": [
            {
              "id": "paper1_p13_colL_b1_s0",
              "en": "CoCoA-E, however, when the ON period is greater than 20 seconds, the value 1 −𝛾𝑡 is used frequently, resulting in a slow increase of the RTO that causes frequent retransmissions.",
              "vi": "Tuy nhiên, CoCoA-E khi khoảng thời gian BẬT lớn hơn 20 giây, giá trị 1 −𝛾𝑡 được sử dụng thường xuyên, dẫn đến RTO tăng chậm gây ra việc truyền lại thường xuyên."
            },
            {
              "id": "paper1_p13_colL_b1_s1",
              "en": "Moreover, when a transaction is completed without retransmissions, the overall RTO is immediately updated to the recent RTO value using Eq. 17.",
              "vi": "Hơn nữa, khi một giao dịch được hoàn thành mà không truyền lại, RTO tổng thể sẽ được cập nhật ngay lập tức lên giá trị RTO gần đây bằng phương trình. 17."
            },
            {
              "id": "paper1_p13_colL_b1_s2",
              "en": "However, this results in even lower RTO values during the ON period, further exacerbating the issue.",
              "vi": "Tuy nhiên, điều này dẫn đến giá trị RTO thậm chí còn thấp hơn trong khoảng thời gian BẬT, khiến vấn đề càng trầm trọng hơn."
            }
          ]
        },
        {
          "id": "paper1_p13_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Even if CoCoA+ and pCoCoA achieve similar performances in terms of carried load, when long bursty periods are considered, the number of transmissions per transaction differs significantly between the two algorithms. This is reported in Fig. 20 that shows the average number of transmissions per transaction. As can be seen, CoCoA+ requires a significantly higher number of transmissions to achieve the same carried load of pCoCoA. As mentioned this can be explained with the fact that CoCoA+ exploits a weak estimator instead of a precise mapping between requests and responses.",
          "sentences": [
            {
              "id": "paper1_p13_colL_b2_s0",
              "en": "Even if CoCoA+ and pCoCoA achieve similar performances in terms of carried load, when long bursty periods are considered, the number of transmissions per transaction differs significantly between the two algorithms.",
              "vi": "Ngay cả khi CoCoA+ và pCoCoA đạt được hiệu suất tương tự về mặt tải trọng, khi xem xét thời gian bùng nổ dài, số lần truyền trên mỗi giao dịch vẫn khác nhau đáng kể giữa hai thuật toán."
            },
            {
              "id": "paper1_p13_colL_b2_s1",
              "en": "This is reported in Fig. 20 that shows the average number of transmissions per transaction.",
              "vi": "Điều này được báo cáo trong Hình 20 cho thấy số lần truyền trung bình trên mỗi giao dịch."
            },
            {
              "id": "paper1_p13_colL_b2_s2",
              "en": "As can be seen, CoCoA+ requires a significantly higher number of transmissions to achieve the same carried load of pCoCoA.",
              "vi": "Có thể thấy, CoCoA+ yêu cầu số lần truyền cao hơn đáng kể để đạt được cùng tải pCoCoA."
            },
            {
              "id": "paper1_p13_colL_b2_s3",
              "en": "As mentioned this can be explained with the fact that CoCoA+ exploits a weak estimator instead of a precise mapping between requests and responses.",
              "vi": "Như đã đề cập, điều này có thể được giải thích là do CoCoA+ khai thác công cụ ước tính yếu thay vì ánh xạ chính xác giữa các yêu cầu và phản hồi."
            }
          ]
        },
        {
          "id": "paper1_p13_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In particular, if we analyze a specific run as reported in Fig. 21, we can see that CoCoA+ – Fig. 21 (a) – does not update the RTO when the interfering traffic is ON, which starts in correspondence of the RTT peaks. On the other side, the pCoCoA algorithm – Fig. 21 (b) – can estimate the correct RTT value, thus triggering proper retransmissions, thanks to a continuous update of the RTOinit both during the ON and OFF periods of the interfering traffic.",
          "sentences": [
            {
              "id": "paper1_p13_colL_b3_s0",
              "en": "In particular, if we analyze a specific run as reported in Fig. 21, we can see that CoCoA+ – Fig. 21 (a) – does not update the RTO when the interfering traffic is ON, which starts in correspondence of the RTT peaks.",
              "vi": "Đặc biệt, nếu chúng tôi phân tích một lần chạy cụ thể như được báo cáo trong Hình 21, chúng tôi có thể thấy rằng CoCoA+ - Hình 21 (a) - không cập nhật RTO khi lưu lượng gây nhiễu BẬT, bắt đầu tương ứng với các đỉnh RTT."
            },
            {
              "id": "paper1_p13_colL_b3_s1",
              "en": "On the other side, the pCoCoA algorithm – Fig. 21 (b) – can estimate the correct RTT value, thus triggering proper retransmissions, thanks to a continuous update of the RTOinit both during the ON and OFF periods of the interfering traffic.",
              "vi": "Mặt khác, thuật toán pCoCoA - Hình 21 (b) - có thể ước tính giá trị RTT chính xác, do đó kích hoạt quá trình truyền lại thích hợp, nhờ cập nhật liên tục RTOinit cả trong khoảng thời gian BẬT và TẮT của lưu lượng gây nhiễu."
            }
          ]
        },
        {
          "id": "paper1_p13_colL_b4",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "VIII.  CONCLUSIONS",
          "sentences": [
            {
              "id": "paper1_p13_colL_b4_s0",
              "en": "VIII.",
              "vi": "VIII."
            },
            {
              "id": "paper1_p13_colL_b4_s1",
              "en": "CONCLUSIONS",
              "vi": "KẾT LUẬN"
            }
          ]
        },
        {
          "id": "paper1_p13_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this paper, we presented an in-depth analysis of the CoCoA+ advanced congestion control algorithm. Specifically, we considered two different scenarios: one with only CoAP traffic and another one in which CoAP traffic competes with interfering bursty traffic that is transmitted without rate control. The simulation results allowed us to highlight some issues of the algorithm, mostly related to the relationship between RTT estimation and RTO calculation. In particular, we have shown that in certain scenarios CoCoA+ unnecessarily triggers more retransmissions than CoAP, and it does not responsively adapt to network load variations. In order to overcome such shortcomings, a set of modifications to CoCoA+ is proposed.",
          "sentences": [
            {
              "id": "paper1_p13_colL_b5_s0",
              "en": "In this paper, we presented an in-depth analysis of the CoCoA+ advanced congestion control algorithm.",
              "vi": "Trong bài báo này, chúng tôi đã trình bày phân tích chuyên sâu về thuật toán kiểm soát tắc nghẽn nâng cao CoCoA+."
            },
            {
              "id": "paper1_p13_colL_b5_s1",
              "en": "Specifically, we considered two different scenarios: one with only CoAP traffic and another one in which CoAP traffic competes with interfering bursty traffic that is transmitted without rate control.",
              "vi": "Cụ thể, chúng tôi đã xem xét hai tình huống khác nhau: một tình huống chỉ có lưu lượng CoAP và một tình huống khác trong đó lưu lượng CoAP cạnh tranh với việc gây nhiễu lưu lượng truy cập dồn dập được truyền đi mà không có kiểm soát tốc độ."
            },
            {
              "id": "paper1_p13_colL_b5_s2",
              "en": "The simulation results allowed us to highlight some issues of the algorithm, mostly related to the relationship between RTT estimation and RTO calculation.",
              "vi": "Kết quả mô phỏng cho phép chúng tôi nêu bật một số vấn đề của thuật toán, chủ yếu liên quan đến mối quan hệ giữa ước lượng RTT và tính toán RTO."
            },
            {
              "id": "paper1_p13_colL_b5_s3",
              "en": "In particular, we have shown that in certain scenarios CoCoA+ unnecessarily triggers more retransmissions than CoAP, and it does not responsively adapt to network load variations.",
              "vi": "Đặc biệt, chúng tôi đã chỉ ra rằng trong một số trường hợp nhất định, CoCoA+ kích hoạt nhiều lượt truyền lại hơn CoAP một cách không cần thiết và nó không thích ứng nhanh với các biến thể tải mạng."
            },
            {
              "id": "paper1_p13_colL_b5_s4",
              "en": "In order to overcome such shortcomings, a set of modifications to CoCoA+ is proposed.",
              "vi": "Để khắc phục những thiếu sót đó, một loạt sửa đổi đối với CoCoA+ đã được đề xuất."
            }
          ]
        },
        {
          "id": "paper1_p13_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The resulting algorithm, named pCoCoA, is demonstrated to be effective in guaranteeing a carried load comparable with CoCoA+ in all the presented scenarios, requiring a lower number of retransmissions. Moreover, the comparison also show that, differently from other algorithms, the pCoCoA deals",
          "sentences": [
            {
              "id": "paper1_p13_colL_b6_s0",
              "en": "The resulting algorithm, named pCoCoA, is demonstrated to be effective in guaranteeing a carried load comparable with CoCoA+ in all the presented scenarios, requiring a lower number of retransmissions.",
              "vi": "Thuật toán kết quả, được đặt tên là pCoCoA, được chứng minh là có hiệu quả trong việc đảm bảo tải được mang tương đương với CoCoA+ trong tất cả các tình huống được trình bày, yêu cầu số lần truyền lại thấp hơn."
            },
            {
              "id": "paper1_p13_colL_b6_s1",
              "en": "Moreover, the comparison also show that, differently from other algorithms, the pCoCoA deals",
              "vi": "Hơn nữa, việc so sánh cũng cho thấy, khác với các thuật toán khác, pCoCoA xử lý"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper1_p13_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "well even in scenarios with interfering bursty traffic.",
          "sentences": [
            {
              "id": "paper1_p13_colR_b0_s0",
              "en": "well even in scenarios with interfering bursty traffic.",
              "vi": "tốt ngay cả trong các tình huống có lưu lượng truy cập dồn dập gây nhiễu."
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "REFERENCES",
          "sentences": [
            {
              "id": "paper1_p13_colR_b1_s0",
              "en": "REFERENCES",
              "vi": "TÀI LIỆU THAM KHẢO"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "[1] Shelby, Z., K. Hartke, and C. Bormann. \"The Constrained Application",
          "sentences": [
            {
              "id": "paper1_p13_colR_b2_s0",
              "en": "[1] Shelby, Z., K.",
              "vi": "[1] Shelby, Z., K."
            },
            {
              "id": "paper1_p13_colR_b2_s1",
              "en": "Hartke, and C.",
              "vi": "Hartke và C."
            },
            {
              "id": "paper1_p13_colR_b2_s2",
              "en": "Bormann.",
              "vi": "Bormann."
            },
            {
              "id": "paper1_p13_colR_b2_s3",
              "en": "\"The Constrained Application",
              "vi": "\"Ứng dụng bị ràng buộc"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Protocol (CoAP).\" (2014). [2] Betzler, August, et al. “Congestion control in reliable CoAP communica-",
          "sentences": [
            {
              "id": "paper1_p13_colR_b3_s0",
              "en": "Protocol (CoAP).\" (2014).",
              "vi": "Giao thức (CoAP).\" (2014)."
            },
            {
              "id": "paper1_p13_colR_b3_s1",
              "en": "[2] Betzler, August, et al. “Congestion control in reliable CoAP communica-",
              "vi": "[2] Betzler, tháng 8 và cộng sự. \"Kiểm soát tắc nghẽn trong giao tiếp CoAP đáng tin cậy-"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "tion.” Proceedings of the 16th ACM international conference on Modeling, analysis & simulation of wireless and mobile systems. ACM, 2013. [3] August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells, “Co-",
          "sentences": [
            {
              "id": "paper1_p13_colR_b4_s0",
              "en": "tion.” Proceedings of the 16th ACM international conference on Modeling, analysis & simulation of wireless and mobile systems.",
              "vi": "tion.\" Kỷ yếu của hội nghị quốc tế ACM lần thứ 16 về Mô hình hóa, phân tích và mô phỏng hệ thống không dây và di động."
            },
            {
              "id": "paper1_p13_colR_b4_s1",
              "en": "ACM, 2013.",
              "vi": "ACM, 2013."
            },
            {
              "id": "paper1_p13_colR_b4_s2",
              "en": "[3] August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells, “Co-",
              "vi": "[3] August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells, \"Co-"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoA+: An advanced congestion control mechanism for CoAP,” Ad Hoc Networks, Volume 33, 2015, Pages 126-139. [4] Betzler, August, et al. “CoAP congestion control for the internet of",
          "sentences": [
            {
              "id": "paper1_p13_colR_b5_s0",
              "en": "CoA+: An advanced congestion control mechanism for CoAP,” Ad Hoc Networks, Volume 33, 2015, Pages 126-139.",
              "vi": "CoA+: Cơ chế kiểm soát tắc nghẽn nâng cao dành cho CoAP,\" Ad Hoc Networks, Tập 33, 2015, Trang 126-139."
            },
            {
              "id": "paper1_p13_colR_b5_s1",
              "en": "[4] Betzler, August, et al. “CoAP congestion control for the internet of",
              "vi": "[4] Betzler, August, và cộng sự. \"Kiểm soát tắc nghẽn CoAP cho internet của"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "things.” IEEE Communications Magazine 54.7 (2016): 154-160. [5] Järvinen, Ilpo, Laila Daniel, and Markku Kojo. “Experimental evaluation",
          "sentences": [
            {
              "id": "paper1_p13_colR_b6_s0",
              "en": "things.” IEEE Communications Magazine 54.7 (2016): 154-160.",
              "vi": "nhiều thứ.\" Tạp chí IEEE Communications 54.7 (2016): 154-160."
            },
            {
              "id": "paper1_p13_colR_b6_s1",
              "en": "[5] Järvinen, Ilpo, Laila Daniel, and Markku Kojo. “Experimental evaluation",
              "vi": "[5] Järvinen, Ilpo, Laila Daniel và Markku Kojo. “Thực nghiệm đánh giá"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "of alternative congestion control algorithms for Constrained Application Protocol (CoAP).” Internet of Things (WF-IoT), 2015 IEEE 2nd World Forum on. IEEE, 2015. [6] E. Ancillotti and R. Bruno, \"Comparison of CoAP and CoCoA+ conges-",
          "sentences": [
            {
              "id": "paper1_p13_colR_b7_s0",
              "en": "of alternative congestion control algorithms for Constrained Application Protocol (CoAP).” Internet of Things (WF-IoT), 2015 IEEE 2nd World Forum on.",
              "vi": "thuật toán kiểm soát tắc nghẽn thay thế cho Giao thức Ứng dụng Ràng buộc (CoAP) (CoAP).\" Internet of Things (WF-IoT), Diễn đàn thế giới lần thứ 2 của IEEE năm 2015 trên."
            },
            {
              "id": "paper1_p13_colR_b7_s1",
              "en": "IEEE, 2015.",
              "vi": "IEEE, 2015."
            },
            {
              "id": "paper1_p13_colR_b7_s2",
              "en": "[6] E.",
              "vi": "[6] E."
            },
            {
              "id": "paper1_p13_colR_b7_s3",
              "en": "Ancillotti and R.",
              "vi": "Ancillotti và R."
            },
            {
              "id": "paper1_p13_colR_b7_s4",
              "en": "Bruno, \"Comparison of CoAP and CoCoA+ conges-",
              "vi": "Bruno, \"So sánh tắc nghẽn CoAP và CoCoA+-"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "tion control mechanisms for different IoT application scenarios,\" 2017 IEEE Symposium on Computers and Communications (ISCC), Heraklion, 2017, pp. 1186-1192. [7] Bhalerao, Rahul, Sridhar Srinivasa Subramanian, and Joseph Pasquale.",
          "sentences": [
            {
              "id": "paper1_p13_colR_b8_s0",
              "en": "tion control mechanisms for different IoT application scenarios,\" 2017 IEEE Symposium on Computers and Communications (ISCC), Heraklion, 2017, pp. 1186-1192.",
              "vi": "cơ chế kiểm soát cho các kịch bản ứng dụng IoT khác nhau,\" Hội nghị chuyên đề IEEE 2017 về Máy tính và Truyền thông (ISCC), Heraklion, 2017, trang 1186-1192."
            },
            {
              "id": "paper1_p13_colR_b8_s1",
              "en": "[7] Bhalerao, Rahul, Sridhar Srinivasa Subramanian, and Joseph Pasquale.",
              "vi": "[7] Bhalerao, Rahul, Sridhar Srinivasa Subramanian và Joseph Pasquale."
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "“An analysis and improvement of congestion control in the CoAP Internet-of-Things protocol.” Consumer Communications & Networking Conference (CCNC), 13th IEEE Annual. IEEE, 2016. [8] Bormann, C., Betzler, A., Gomez, C., & Demirkol, I. (2017). “CoAP sim-",
          "sentences": [
            {
              "id": "paper1_p13_colR_b9_s0",
              "en": "“An analysis and improvement of congestion control in the CoAP Internet-of-Things protocol.” Consumer Communications & Networking Conference (CCNC), 13th IEEE Annual.",
              "vi": "\"Phân tích và cải thiện khả năng kiểm soát tắc nghẽn trong giao thức CoAP Internet-of-Things.\" Hội nghị Mạng và Truyền thông Người tiêu dùng (CCNC), IEEE thường niên lần thứ 13."
            },
            {
              "id": "paper1_p13_colR_b9_s1",
              "en": "IEEE, 2016.",
              "vi": "IEEE, 2016."
            },
            {
              "id": "paper1_p13_colR_b9_s2",
              "en": "[8] Bormann, C., Betzler, A., Gomez, C., & Demirkol, I.",
              "vi": "[8] Bormann, C., Betzler, A., Gomez, C., & Demirkol, I."
            },
            {
              "id": "paper1_p13_colR_b9_s3",
              "en": "(2017). “CoAP sim-",
              "vi": "(2017). \"Sim CoAP-"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "ple congestion control/advanced.” Working Draft, IETF Secretariat, Internet-Draft draft-bormann-core-cocoa-01. [9] Paxson, V., Allman, M., Chu, J., & Sargent, M. (2011). Computing TCP's",
          "sentences": [
            {
              "id": "paper1_p13_colR_b10_s0",
              "en": "ple congestion control/advanced.” Working Draft, IETF Secretariat, Internet-Draft draft-bormann-core-cocoa-01.",
              "vi": "kiểm soát tắc nghẽn ple/nâng cao.\" Dự thảo làm việc, Ban thư ký IETF, Dự thảo Internet-bormann-core-cocoa-01."
            },
            {
              "id": "paper1_p13_colR_b10_s1",
              "en": "[9] Paxson, V., Allman, M., Chu, J., & Sargent, M.",
              "vi": "[9] Paxson, V., Allman, M., Chu, J., & Sargent, M."
            },
            {
              "id": "paper1_p13_colR_b10_s2",
              "en": "(2011).",
              "vi": "(2011)."
            },
            {
              "id": "paper1_p13_colR_b10_s3",
              "en": "Computing TCP's",
              "vi": "Tính toán TCP"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "retransmission timer (No. RFC 6298). [10] Sarolahti, Pasi, and Alexey Kuznetsov. \"Congestion Control in Linux",
          "sentences": [
            {
              "id": "paper1_p13_colR_b11_s0",
              "en": "retransmission timer (No. RFC 6298).",
              "vi": "hẹn giờ truyền lại (số RFC 6298)."
            },
            {
              "id": "paper1_p13_colR_b11_s1",
              "en": "[10] Sarolahti, Pasi, and Alexey Kuznetsov.",
              "vi": "[10] Sarolahti, Pasi và Alexey Kuznetsov."
            },
            {
              "id": "paper1_p13_colR_b11_s2",
              "en": "\"Congestion Control in Linux",
              "vi": "\"Kiểm soát tắc nghẽn trong Linux"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "TCP.\" USENIX Annual Technical Conference, FREENIX Track. 2002. [11] Jacobson, Van. \"Congestion avoidance and control.\" ACM SIGCOMM",
          "sentences": [
            {
              "id": "paper1_p13_colR_b12_s0",
              "en": "TCP.\" USENIX Annual Technical Conference, FREENIX Track.",
              "vi": "TCP.\" Hội nghị kỹ thuật thường niên USENIX, Đường đua FREENIX."
            },
            {
              "id": "paper1_p13_colR_b12_s1",
              "en": "2002.",
              "vi": "2002."
            },
            {
              "id": "paper1_p13_colR_b12_s2",
              "en": "[11] Jacobson, Van.",
              "vi": "[11] Jacobson, Vân."
            },
            {
              "id": "paper1_p13_colR_b12_s3",
              "en": "\"Congestion avoidance and control.\" ACM SIGCOMM",
              "vi": "\"Tránh tắc nghẽn và kiểm soát.\" ACM SIGCOMM"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "computer communication review. Vol. 18. No. 4. ACM, 1988. [12] A. G. A. Elrahim, H. A. Elsayed, S. E. Ramly and M. M. Ibrahim, \"Im-",
          "sentences": [
            {
              "id": "paper1_p13_colR_b13_s0",
              "en": "computer communication review. Vol. 18. No. 4.",
              "vi": "computer communication review. Tập. 18. Số 4."
            },
            {
              "id": "paper1_p13_colR_b13_s1",
              "en": "ACM, 1988.",
              "vi": "ACM, 1988."
            },
            {
              "id": "paper1_p13_colR_b13_s2",
              "en": "[12] A.",
              "vi": "[12] A."
            },
            {
              "id": "paper1_p13_colR_b13_s3",
              "en": "G.",
              "vi": "G."
            },
            {
              "id": "paper1_p13_colR_b13_s4",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p13_colR_b13_s5",
              "en": "Elrahim, H.",
              "vi": "Elrahim, H."
            },
            {
              "id": "paper1_p13_colR_b13_s6",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper1_p13_colR_b13_s7",
              "en": "Elsayed, S.",
              "vi": "Elsayed, S."
            },
            {
              "id": "paper1_p13_colR_b13_s8",
              "en": "E.",
              "vi": "E."
            },
            {
              "id": "paper1_p13_colR_b13_s9",
              "en": "Ramly and M.",
              "vi": "Ramly và M."
            },
            {
              "id": "paper1_p13_colR_b13_s10",
              "en": "M.",
              "vi": "M."
            },
            {
              "id": "paper1_p13_colR_b13_s11",
              "en": "Ibrahim, \"Im-",
              "vi": "Ibrahim, \"Tôi-"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "proving TCP congestion control for wireless sensor networks,\" 2011 4th Annual Caneus Fly by Wireless Workshop, Montreal, QC, 2011, pp. 1-6. [13] S. Bolettieri, C. Vallati, G. Tanganelli, E. Mingozzi, Highlighting Some",
          "sentences": [
            {
              "id": "paper1_p13_colR_b14_s0",
              "en": "proving TCP congestion control for wireless sensor networks,\" 2011 4th Annual Caneus Fly by Wireless Workshop, Montreal, QC, 2011, pp. 1-6.",
              "vi": "chứng minh khả năng kiểm soát tắc nghẽn TCP cho mạng cảm biến không dây,\" Hội thảo Caneus Fly by Wireless thường niên lần thứ 4 năm 2011, Montreal, QC, 2011, trang 1-6."
            },
            {
              "id": "paper1_p13_colR_b14_s1",
              "en": "[13] S.",
              "vi": "[13] S."
            },
            {
              "id": "paper1_p13_colR_b14_s2",
              "en": "Bolettieri, C.",
              "vi": "Bolettieri, C."
            },
            {
              "id": "paper1_p13_colR_b14_s3",
              "en": "Vallati, G.",
              "vi": "Vallati, G."
            },
            {
              "id": "paper1_p13_colR_b14_s4",
              "en": "Tanganelli, E.",
              "vi": "Tanganelli, E."
            },
            {
              "id": "paper1_p13_colR_b14_s5",
              "en": "Mingozzi, Highlighting Some",
              "vi": "Mingozzi, nêu bật một số"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b15",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Shortcomings of the CoCoA+ Congestion Control Algorithm, Proceedings of the 16th International Conference on Ad Hoc Networks and Wireless (ADHOC-NOW 2017), Messina, Italy, September 20-22, 2017. [14] Balandina E., Koucheryavy Y., Gurtov A. (2013) Computing the Retrans-",
          "sentences": [
            {
              "id": "paper1_p13_colR_b15_s0",
              "en": "Shortcomings of the CoCoA+ Congestion Control Algorithm, Proceedings of the 16th International Conference on Ad Hoc Networks and Wireless (ADHOC-NOW 2017), Messina, Italy, September 20-22, 2017.",
              "vi": "Những thiếu sót của thuật toán kiểm soát tắc nghẽn CoCoA+, Kỷ yếu của Hội nghị quốc tế lần thứ 16 về Mạng Ad Hoc và Không dây (ADHOC-NOW 2017), Messina, Ý, ngày 20-22 tháng 9 năm 2017."
            },
            {
              "id": "paper1_p13_colR_b15_s1",
              "en": "[14] Balandina E., Koucheryavy Y., Gurtov A.",
              "vi": "[14] Balandina E., Koucheryavy Y., Gurtov A."
            },
            {
              "id": "paper1_p13_colR_b15_s2",
              "en": "(2013) Computing the Retrans-",
              "vi": "(2013) Tính toán truyền lại-"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b16",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "mission Timeout in CoAP. In: Balandin S., Andreev S., Koucheryavy Y. (eds) Internet of Things, Smart Spaces, and Next Generation Networking. Lecture Notes in Computer Science, vol 8121. Springer, Berlin, Heidelberg. [15] R. Ludwig and K. Sklower “The Eifel Retransmission Timer”, ACM",
          "sentences": [
            {
              "id": "paper1_p13_colR_b16_s0",
              "en": "mission Timeout in CoAP.",
              "vi": "Hết thời gian chờ nhiệm vụ trong CoAP."
            },
            {
              "id": "paper1_p13_colR_b16_s1",
              "en": "In: Balandin S., Andreev S., Koucheryavy Y.",
              "vi": "Trong: Balandin S., Andreev S., Koucheryavy Y."
            },
            {
              "id": "paper1_p13_colR_b16_s2",
              "en": "(eds) Internet of Things, Smart Spaces, and Next Generation Networking.",
              "vi": "(eds) Internet vạn vật, không gian thông minh và mạng thế hệ tiếp theo."
            },
            {
              "id": "paper1_p13_colR_b16_s3",
              "en": "Lecture Notes in Computer Science, vol 8121.",
              "vi": "Ghi chú bài giảng về Khoa học máy tính, tập 8121."
            },
            {
              "id": "paper1_p13_colR_b16_s4",
              "en": "Springer, Berlin, Heidelberg.",
              "vi": "Springer, Berlin, Heidelberg."
            },
            {
              "id": "paper1_p13_colR_b16_s5",
              "en": "[15] R.",
              "vi": "[15] R."
            },
            {
              "id": "paper1_p13_colR_b16_s6",
              "en": "Ludwig and K.",
              "vi": "Ludwig và K."
            },
            {
              "id": "paper1_p13_colR_b16_s7",
              "en": "Sklower “The Eifel Retransmission Timer”, ACM",
              "vi": "Skwer \"Bộ đếm thời gian truyền lại Eifel\", ACM"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b17",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "SIGCOMM Computer Communication Review, Vol. 30, Issue 3, pp. 1727, July 2000. [16] A. Betzler, C. Gomez, I. Demirkol and J. Paradells, \"CoAP congestion",
          "sentences": [
            {
              "id": "paper1_p13_colR_b17_s0",
              "en": "SIGCOMM Computer Communication Review, Vol. 30, Issue 3, pp. 1727, July 2000.",
              "vi": "Đánh giá truyền thông máy tính SIGCOMM, Tập. 30, Số 3, trang 1727, tháng 7 năm 2000."
            },
            {
              "id": "paper1_p13_colR_b17_s1",
              "en": "[16] A.",
              "vi": "[16] A."
            },
            {
              "id": "paper1_p13_colR_b17_s2",
              "en": "Betzler, C.",
              "vi": "Betzler, C."
            },
            {
              "id": "paper1_p13_colR_b17_s3",
              "en": "Gomez, I.",
              "vi": "Gomez, tôi."
            },
            {
              "id": "paper1_p13_colR_b17_s4",
              "en": "Demirkol and J.",
              "vi": "Demirkol và J."
            },
            {
              "id": "paper1_p13_colR_b17_s5",
              "en": "Paradells, \"CoAP congestion",
              "vi": "Paradells, \"Tắc nghẽn CoAP"
            }
          ]
        },
        {
          "id": "paper1_p13_colR_b18",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "control for the internet of things,\" in IEEE Communications Magazine, vol. 54, no. 7, pp. 154-160, July 2016.",
          "sentences": [
            {
              "id": "paper1_p13_colR_b18_s0",
              "en": "control for the internet of things,\" in IEEE Communications Magazine, vol.",
              "vi": "kiểm soát internet của vạn vật,\" trên Tạp chí Truyền thông IEEE, tập."
            },
            {
              "id": "paper1_p13_colR_b18_s1",
              "en": "54, no.",
              "vi": "54, không."
            },
            {
              "id": "paper1_p13_colR_b18_s2",
              "en": "7, pp. 154-160, July 2016.",
              "vi": "7, trang 154-160, tháng 7 năm 2016."
            }
          ]
        }
      ]
    }
  ],
  "sections_toc": [
    {
      "id": "paper1_p1_colL_b3",
      "title": "I. INTRODUCTION",
      "page": 1,
      "col": "colL"
    },
    {
      "id": "paper1_p2_colL_b2",
      "title": "II. COCOA+ CONGESTION CONTROL",
      "page": 2,
      "col": "colL"
    },
    {
      "id": "paper1_p2_colL_b5",
      "title": "A. RTO calculation",
      "page": 2,
      "col": "colL"
    },
    {
      "id": "paper1_p2_colR_b12",
      "title": "B. Backoff policy",
      "page": 2,
      "col": "colR"
    },
    {
      "id": "paper1_p2_colR_b16",
      "title": "C. Information aging",
      "page": 2,
      "col": "colR"
    },
    {
      "id": "paper1_p3_colL_b15",
      "title": "III. RELATED WORK",
      "page": 3,
      "col": "colL"
    },
    {
      "id": "paper1_p3_colR_b2",
      "title": "IV. PERFORMANCE EVALUATION",
      "page": 3,
      "col": "colR"
    },
    {
      "id": "paper1_p4_colL_b1",
      "title": "A. Periodic traffic scenario",
      "page": 4,
      "col": "colL"
    },
    {
      "id": "paper1_p5_colR_b3",
      "title": "B. Interfering Bursty Traffic",
      "page": 5,
      "col": "colR"
    },
    {
      "id": "paper1_p6_colR_b3",
      "title": "V. COCOA+ SHORTCOMINGS",
      "page": 6,
      "col": "colR"
    },
    {
      "id": "paper1_p6_colR_b5",
      "title": "A. RTO too close to RTT",
      "page": 6,
      "col": "colR"
    },
    {
      "id": "paper1_p7_colL_b2",
      "title": "B. Lack of weak estimator update",
      "page": 7,
      "col": "colL"
    },
    {
      "id": "paper1_p7_colL_b4",
      "title": "C. Insufficient weak estimator weight",
      "page": 7,
      "col": "colL"
    },
    {
      "id": "paper1_p7_colL_b6",
      "title": "D. RTO peaks in response to RTT decrease",
      "page": 7,
      "col": "colL"
    },
    {
      "id": "paper1_p7_colR_b3",
      "title": "F. Excessive RTO growth",
      "page": 7,
      "col": "colR"
    },
    {
      "id": "paper1_p7_colR_b5",
      "title": "VI. COAP PRECISE CONGESTION CONTROL",
      "page": 7,
      "col": "colR"
    },
    {
      "id": "paper1_p8_colR_b2",
      "title": "B. Precise Congestion Control algorithm",
      "page": 8,
      "col": "colR"
    },
    {
      "id": "paper1_p8_colR_b6",
      "title": "C. RTO Computation algorithm",
      "page": 8,
      "col": "colR"
    },
    {
      "id": "paper1_p9_colR_b2",
      "title": "VII. PCOCOA PERFORMANCE EVALUATION",
      "page": 9,
      "col": "colR"
    },
    {
      "id": "paper1_p10_colR_b0",
      "title": "B. Periodic traffic scenario",
      "page": 10,
      "col": "colR"
    },
    {
      "id": "paper1_p12_colR_b1",
      "title": "C. Interfering Bursty Traffic",
      "page": 12,
      "col": "colR"
    },
    {
      "id": "paper1_p13_colL_b4",
      "title": "VIII.  CONCLUSIONS",
      "page": 13,
      "col": "colL"
    }
  ],
  "total_sentences": 589
};
