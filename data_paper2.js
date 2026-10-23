// Complete Academic Dataset for Paper 2 (IEEE Communications Magazine 2016 - 7 Pages Full Extraction)
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
  "pages": [
    {
      "page_num": 1,
      "page_image": "assets/p2_page_1.png",
      "top_content": [
        {
          "id": "paper2_p1_top_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP Congestion Control",
          "sentences": [
            {
              "id": "paper2_p1_top_b0_s0",
              "en": "CoAP Congestion Control",
              "vi": "Kiểm soát tắc nghẽn CoAP"
            }
          ]
        },
        {
          "id": "paper2_p1_top_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "for the Internet of Things",
          "sentences": [
            {
              "id": "paper2_p1_top_b1_s0",
              "en": "for the Internet of Things",
              "vi": "cho Internet vạn vật"
            }
          ]
        },
        {
          "id": "paper2_p1_top_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "August Betzler∗, Carles Gomez†, Ilker Demirkol†, Josep Paradells†",
          "sentences": [
            {
              "id": "paper2_p1_top_b2_s0",
              "en": "August Betzler∗, Carles Gomez†, Ilker Demirkol†, Josep Paradells†",
              "vi": "August Betzler∗, Carles Gomez†, Ilker Demirkol†, Josep Paradells†"
            }
          ]
        },
        {
          "id": "paper2_p1_top_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "∗i2CAT Foundation, Barcelona, Spain †Department of Telematics Engineering Universitat Politecnica de Catalunya, Barcelona, Spain Email: august.betzler@i2cat.net, {carlesgo, ilker.demirkol, josep.paradells}@entel.upc.edu",
          "sentences": [
            {
              "id": "paper2_p1_top_b3_s0",
              "en": "∗i2CAT Foundation, Barcelona, Spain †Department of Telematics Engineering Universitat Politecnica de Catalunya, Barcelona, Spain Email: august.betzler@i2cat.net, {carlesgo, ilker.demirkol, josep.paradells}@entel.upc.edu",
              "vi": "∗i2CAT Foundation, Barcelona, ​​​​Tây Ban Nha †Khoa Kỹ thuật Viễn thông Đại học Politecnica de Catalunya, Barcelona, ​​​​Tây Ban Nha Email: august.betzler@i2cat.net, {carlesgo, ilker.demirkol, josep.paradells}@entel.upc.edu"
            }
          ]
        }
      ],
      "left_column": [
        {
          "id": "paper2_p1_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Abstract—The Constrained Application Protocol (CoAP) is a lightweight RESTful application layer protocol devised for the Internet of Things (IoT). Operating on top of UDP, CoAP must handle congestion control by itself. The core CoAP specification defines a basic congestion control mechanism, which is however not capable of adapting to network conditions. Yet, IoT scenarios exhibit significant resource constraints which pose new challenges on the design of congestion control mechanisms. In this paper we present the CoAP Simple Congestion Control/Advanced (CoCoA), an advanced congestion control mechanism for CoAP being standardized by the Internet Engineering Task Force (IETF) CoRE working group. CoCoA introduces novel Round Trip Time (RTT) estimation techniques, together with a Variable Backoff Factor (VBF) and aging mechanisms in order to provide dynamic and controlled Retransmission Timeout (RTO) adaptation suitable for the peculiarities of IoT communications. We conduct a comparative performance analysis of CoCoA and a variety of alternative algorithms including state-of-the-art mechanisms developed for TCP. The study is based on experiments carried out in real testbeds. Results show that, in contrast with the alternative methods considered, CoCoA consistently outperforms default CoAP congestion control mechanism in all evaluated scenarios.",
          "sentences": [
            {
              "id": "paper2_p1_colL_b0_s0",
              "en": "Abstract—The Constrained Application Protocol (CoAP) is a lightweight RESTful application layer protocol devised for the Internet of Things (IoT).",
              "vi": "Tóm tắt - Giao thức Ứng dụng Ràng buộc (CoAP) (CoAP) là giao thức lớp ứng dụng RESTful nhẹ được thiết kế cho Internet of Things (IoT)."
            },
            {
              "id": "paper2_p1_colL_b0_s1",
              "en": "Operating on top of UDP, CoAP must handle congestion control by itself.",
              "vi": "Hoạt động trên UDP, CoAP phải tự mình xử lý việc kiểm soát tắc nghẽn."
            },
            {
              "id": "paper2_p1_colL_b0_s2",
              "en": "The core CoAP specification defines a basic congestion control mechanism, which is however not capable of adapting to network conditions.",
              "vi": "Đặc tả CoAP cốt lõi xác định cơ chế kiểm soát tắc nghẽn cơ bản, tuy nhiên cơ chế này không có khả năng thích ứng với các điều kiện mạng."
            },
            {
              "id": "paper2_p1_colL_b0_s3",
              "en": "Yet, IoT scenarios exhibit significant resource constraints which pose new challenges on the design of congestion control mechanisms.",
              "vi": "Tuy nhiên, các kịch bản IoT thể hiện những hạn chế đáng kể về nguồn lực, đặt ra những thách thức mới trong việc thiết kế các cơ chế kiểm soát tắc nghẽn."
            },
            {
              "id": "paper2_p1_colL_b0_s4",
              "en": "In this paper we present the CoAP Simple Congestion Control/Advanced (CoCoA), an advanced congestion control mechanism for CoAP being standardized by the Internet Engineering Task Force (IETF) CoRE working group. CoCoA introduces novel Round Trip Time (RTT) estimation techniques, together with a Variable Backoff Factor (VBF) and aging mechanisms in order to provide dynamic and controlled Retransmission Timeout (RTO) adaptation suitable for the peculiarities of IoT communications.",
              "vi": "Trong bài viết này, chúng tôi trình bày Kiểm soát tắc nghẽn đơn giản/nâng cao CoAP (CoCoA), một cơ chế kiểm soát tắc nghẽn nâng cao dành cho CoAP đang được nhóm làm việc CoRE của Lực lượng đặc nhiệm kỹ thuật Internet (IETF) tiêu chuẩn hóa. CoCoA giới thiệu các kỹ thuật ước tính thời gian truyền khứ hồi (RTT) (RTT) mới, cùng với Hệ số dự phòng thay đổi (VBF) và các cơ chế lão hóa nhằm cung cấp khả năng thích ứng thời gian chờ truyền lại (RTO) (RTO) động và có kiểm soát, phù hợp với đặc thù của truyền thông IoT."
            },
            {
              "id": "paper2_p1_colL_b0_s5",
              "en": "We conduct a comparative performance analysis of CoCoA and a variety of alternative algorithms including state-of-the-art mechanisms developed for TCP.",
              "vi": "Chúng tôi tiến hành phân tích so sánh hiệu suất của CoCoA và nhiều thuật toán thay thế khác nhau, bao gồm các cơ chế tiên tiến được phát triển cho TCP."
            },
            {
              "id": "paper2_p1_colL_b0_s6",
              "en": "The study is based on experiments carried out in real testbeds.",
              "vi": "Nghiên cứu này dựa trên các thí nghiệm được thực hiện trên các thử nghiệm thực tế."
            },
            {
              "id": "paper2_p1_colL_b0_s7",
              "en": "Results show that, in contrast with the alternative methods considered, CoCoA consistently outperforms default CoAP congestion control mechanism in all evaluated scenarios.",
              "vi": "Kết quả cho thấy, trái ngược với các phương pháp thay thế được xem xét, CoCoA luôn hoạt động tốt hơn cơ chế kiểm soát tắc nghẽn CoAP mặc định trong tất cả các kịch bản được đánh giá."
            }
          ]
        },
        {
          "id": "paper2_p1_colL_b1",
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
              "id": "paper2_p1_colL_b1_s0",
              "en": "I.",
              "vi": "I."
            },
            {
              "id": "paper2_p1_colL_b1_s1",
              "en": "INTRODUCTION",
              "vi": "GIỚI THIỆU"
            }
          ]
        },
        {
          "id": "paper2_p1_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The quantity and diversity of devices that are interconnected in the Internet of Things (IoT) are constantly increasing, leading to a large variety of new and appealing application scenarios. More than 25 billion things are expected to be connected over the Internet by the end of 20201. A significant pillar for this development is the Constrained Application Protocol (CoAP), a lightweight RESTful protocol recently standardized by the Internet Engineering Task Force (IETF). CoAP is designed as the main application-layer protocol to be used by IoT devices for IP-based, HTTP-like interactions [1]. Typically, constrained devices, such as low-power wireless sensor nodes, are used for IoT communications. These devices offer very limited processing and memory capacities. Furthermore, the communication technologies used by these",
          "sentences": [
            {
              "id": "paper2_p1_colL_b2_s0",
              "en": "The quantity and diversity of devices that are interconnected in the Internet of Things (IoT) are constantly increasing, leading to a large variety of new and appealing application scenarios.",
              "vi": "Số lượng và sự đa dạng của các thiết bị được kết nối trong Internet of Things (IoT) không ngừng tăng lên, dẫn đến nhiều kịch bản ứng dụng mới và hấp dẫn."
            },
            {
              "id": "paper2_p1_colL_b2_s1",
              "en": "More than 25 billion things are expected to be connected over the Internet by the end of 20201.",
              "vi": "Hơn 25 tỷ thứ dự kiến ​​​​sẽ được kết nối qua Internet vào cuối năm 20201."
            },
            {
              "id": "paper2_p1_colL_b2_s2",
              "en": "A significant pillar for this development is the Constrained Application Protocol (CoAP), a lightweight RESTful protocol recently standardized by the Internet Engineering Task Force (IETF).",
              "vi": "Trụ cột quan trọng cho sự phát triển này là Giao thức Ứng dụng Ràng buộc (CoAP) (CoAP), một giao thức RESTful nhẹ được chuẩn hóa gần đây bởi Lực lượng đặc nhiệm kỹ thuật Internet (IETF)."
            },
            {
              "id": "paper2_p1_colL_b2_s3",
              "en": "CoAP is designed as the main application-layer protocol to be used by IoT devices for IP-based, HTTP-like interactions [1].",
              "vi": "CoAP được thiết kế làm giao thức lớp ứng dụng chính được các thiết bị IoT sử dụng cho các tương tác giống như HTTP, dựa trên IP [1]."
            },
            {
              "id": "paper2_p1_colL_b2_s4",
              "en": "Typically, constrained devices, such as low-power wireless sensor nodes, are used for IoT communications.",
              "vi": "Thông thường, các thiết bị hạn chế, chẳng hạn như các nút cảm biến không dây công suất thấp, được sử dụng cho truyền thông IoT."
            },
            {
              "id": "paper2_p1_colL_b2_s5",
              "en": "These devices offer very limited processing and memory capacities.",
              "vi": "Những thiết bị này cung cấp khả năng xử lý và bộ nhớ rất hạn chế."
            },
            {
              "id": "paper2_p1_colL_b2_s6",
              "en": "Furthermore, the communication technologies used by these",
              "vi": "Hơn nữa, các công nghệ truyền thông được sử dụng bởi những"
            }
          ]
        },
        {
          "id": "paper2_p1_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Author’s pre-print, accepted for publication in the IEEE Communications Magazine (2016-3-9).",
          "sentences": [
            {
              "id": "paper2_p1_colL_b3_s0",
              "en": "Author’s pre-print, accepted for publication in the IEEE Communications Magazine (2016-3-9).",
              "vi": "Bản in trước của tác giả, được chấp nhận xuất bản trên Tạp chí Truyền thông IEEE (9-3-2016)."
            }
          ]
        },
        {
          "id": "paper2_p1_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "c⃝2016 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other users, including reprinting/ republishing this material for advertising or promotional purposes, creating new collective works for resale or redistribution to servers or lists, or reuse of any copyrighted components of this work in other works.",
          "sentences": [
            {
              "id": "paper2_p1_colL_b4_s0",
              "en": "c⃝2016 IEEE.",
              "vi": "c⃝2016 IEEE."
            },
            {
              "id": "paper2_p1_colL_b4_s1",
              "en": "Personal use of this material is permitted.",
              "vi": "Việc sử dụng cá nhân tài liệu này được cho phép."
            },
            {
              "id": "paper2_p1_colL_b4_s2",
              "en": "Permission from IEEE must be obtained for all other users, including reprinting/ republishing this material for advertising or promotional purposes, creating new collective works for resale or redistribution to servers or lists, or reuse of any copyrighted components of this work in other works.",
              "vi": "Tất cả những người dùng khác phải có sự cho phép của IEEE, bao gồm việc in lại/xuất bản lại tài liệu này cho mục đích quảng cáo hoặc khuyến mãi, tạo ra các tác phẩm tập thể mới để bán lại hoặc phân phối lại cho máy chủ hoặc danh sách hoặc sử dụng lại bất kỳ thành phần có bản quyền nào của tác phẩm này trong các tác phẩm khác."
            }
          ]
        },
        {
          "id": "paper2_p1_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "1http://www.gartner.com/document/2625419?ref=QuickSearch&sthkw= G00259115",
          "sentences": [
            {
              "id": "paper2_p1_colL_b5_s0",
              "en": "1http://www.gartner.com/document/2625419?ref=QuickSearch&sthkw= G00259115",
              "vi": "1http://www.gartner.com/document/2625419?ref=QuickSearch&sthkw= G00259115"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p1_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "devices exhibit significant limitations such as low data rates and relatively high bit error rate (BER). CoAP is tailored to these extreme resource constraints.",
          "sentences": [
            {
              "id": "paper2_p1_colR_b0_s0",
              "en": "devices exhibit significant limitations such as low data rates and relatively high bit error rate (BER).",
              "vi": "các thiết bị có những hạn chế đáng kể như tốc độ dữ liệu thấp và tỷ lệ lỗi bit tương đối cao (BER)."
            },
            {
              "id": "paper2_p1_colR_b0_s1",
              "en": "CoAP is tailored to these extreme resource constraints.",
              "vi": "CoAP được điều chỉnh để phù hợp với những hạn chế về nguồn lực cực độ này."
            }
          ]
        },
        {
          "id": "paper2_p1_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "One of the main problems to be handled when designing a new end-to-end communication paradigm is network congestion. This phenomenon occurs when the traffic load offered to a network approaches the network capacity. In many traditional Internet applications, TCP provides end-to-end congestion control. However, CoAP operates over UDP to enable lightweight applications and must handle congestion by itself.",
          "sentences": [
            {
              "id": "paper2_p1_colR_b1_s0",
              "en": "One of the main problems to be handled when designing a new end-to-end communication paradigm is network congestion.",
              "vi": "Một trong những vấn đề chính cần giải quyết khi thiết kế mô hình truyền thông đầu cuối mới là tắc nghẽn mạng."
            },
            {
              "id": "paper2_p1_colR_b1_s1",
              "en": "This phenomenon occurs when the traffic load offered to a network approaches the network capacity.",
              "vi": "Hiện tượng này xảy ra khi tải lưu lượng cung cấp cho mạng đạt đến dung lượng mạng."
            },
            {
              "id": "paper2_p1_colR_b1_s2",
              "en": "In many traditional Internet applications, TCP provides end-to-end congestion control.",
              "vi": "Trong nhiều ứng dụng Internet truyền thống, TCP cung cấp khả năng kiểm soát tắc nghẽn từ đầu đến cuối."
            },
            {
              "id": "paper2_p1_colR_b1_s3",
              "en": "However, CoAP operates over UDP to enable lightweight applications and must handle congestion by itself.",
              "vi": "Tuy nhiên, CoAP hoạt động trên UDP để kích hoạt các ứng dụng nhẹ và phải tự xử lý tắc nghẽn."
            }
          ]
        },
        {
          "id": "paper2_p1_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In IoT communications, the traffic patterns are different from the ones in conventional networks. Constrained devices often communicate periodically to notify their sensor measurements. Even when individual devices create small amounts of data, the large number of communicating devices can be a cause of network congestion. Another possible reason for congestion is traffic bursts generated as a reaction to events, for example a large number of notifications sent after a sensor network equipped with accelerometers detects a seismic event. These IoT traffic patterns, together with severe node and link constraints, pose challenges for the design of a congestion control mechanism for CoAP, which should be capable of assuring a safe network operation, while using network resources efficiently.",
          "sentences": [
            {
              "id": "paper2_p1_colR_b2_s0",
              "en": "In IoT communications, the traffic patterns are different from the ones in conventional networks.",
              "vi": "Trong truyền thông IoT, các mẫu lưu lượng truy cập khác với các mẫu lưu lượng trong các mạng thông thường."
            },
            {
              "id": "paper2_p1_colR_b2_s1",
              "en": "Constrained devices often communicate periodically to notify their sensor measurements.",
              "vi": "Các thiết bị bị hạn chế thường liên lạc định kỳ để thông báo các phép đo cảm biến của chúng."
            },
            {
              "id": "paper2_p1_colR_b2_s2",
              "en": "Even when individual devices create small amounts of data, the large number of communicating devices can be a cause of network congestion.",
              "vi": "Ngay cả khi các thiết bị riêng lẻ tạo ra lượng dữ liệu nhỏ, số lượng lớn thiết bị liên lạc có thể là nguyên nhân gây tắc nghẽn mạng."
            },
            {
              "id": "paper2_p1_colR_b2_s3",
              "en": "Another possible reason for congestion is traffic bursts generated as a reaction to events, for example a large number of notifications sent after a sensor network equipped with accelerometers detects a seismic event.",
              "vi": "Một lý do khác có thể gây ra tắc nghẽn là các đợt bùng nổ giao thông được tạo ra để phản ứng với các sự kiện, ví dụ như một số lượng lớn thông báo được gửi sau khi mạng cảm biến được trang bị gia tốc kế phát hiện sự kiện địa chấn."
            },
            {
              "id": "paper2_p1_colR_b2_s4",
              "en": "These IoT traffic patterns, together with severe node and link constraints, pose challenges for the design of a congestion control mechanism for CoAP, which should be capable of assuring a safe network operation, while using network resources efficiently.",
              "vi": "Các mẫu lưu lượng IoT này, cùng với các ràng buộc nghiêm trọng về nút và liên kết, đặt ra những thách thức cho việc thiết kế cơ chế kiểm soát tắc nghẽn cho CoAP, cơ chế này có khả năng đảm bảo vận hành mạng an toàn trong khi sử dụng tài nguyên mạng một cách hiệu quả."
            }
          ]
        },
        {
          "id": "paper2_p1_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The core CoAP specification offers a simple congestion control mechanism, based on a Retransmission Timeout (RTO) with Binary Exponential Backoff (BEB), which is however insensitive to network conditions. Therefore, default CoAP congestion control may significantly underperform, often being too conservative or too aggressive, instead of adapting its behavior on the basis of network status information actually available to CoAP.",
          "sentences": [
            {
              "id": "paper2_p1_colR_b3_s0",
              "en": "The core CoAP specification offers a simple congestion control mechanism, based on a Retransmission Timeout (RTO) with Binary Exponential Backoff (BEB), which is however insensitive to network conditions.",
              "vi": "Đặc tả CoAP cốt lõi cung cấp một cơ chế kiểm soát tắc nghẽn đơn giản, dựa trên thời gian chờ truyền lại (RTO) (RTO) với Backoff lũy thừa nhị phân (BEB), tuy nhiên không nhạy cảm với các điều kiện mạng."
            },
            {
              "id": "paper2_p1_colR_b3_s1",
              "en": "Therefore, default CoAP congestion control may significantly underperform, often being too conservative or too aggressive, instead of adapting its behavior on the basis of network status information actually available to CoAP.",
              "vi": "Do đó, kiểm soát tắc nghẽn CoAP mặc định có thể hoạt động kém hiệu quả, thường quá thận trọng hoặc quá tích cực, thay vì điều chỉnh hành vi của nó trên cơ sở thông tin trạng thái mạng thực sự có sẵn cho CoAP."
            }
          ]
        },
        {
          "id": "paper2_p1_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this paper we present the CoAP Simple Congestion Control/Advanced (CoCoA) mechanism, defined in a draft specification2 being standardized by the IETF CoRE working group to improve the CoAP congestion control. CoCoA combines the use of Round-trip Time (RTT) measurements, dynamic RTO backoff calculations, and RTO aging mechanisms to obtain dynamic RTO estimations for the transmission of CoAP messages. CoCoA has been designed to deliver a congestion control that is adaptive to network dynamics and suitable for IoT characteristics. CoCoA has reached maturity",
          "sentences": [
            {
              "id": "paper2_p1_colR_b4_s0",
              "en": "In this paper we present the CoAP Simple Congestion Control/Advanced (CoCoA) mechanism, defined in a draft specification2 being standardized by the IETF CoRE working group to improve the CoAP congestion control.",
              "vi": "Trong bài viết này, chúng tôi trình bày cơ chế Kiểm soát tắc nghẽn đơn giản/Nâng cao (CoCoA) CoAP, được xác định trong thông số dự thảo2 đang được nhóm làm việc IETF CoRE tiêu chuẩn hóa để cải thiện kiểm soát tắc nghẽn CoAP."
            },
            {
              "id": "paper2_p1_colR_b4_s1",
              "en": "CoCoA combines the use of Round-trip Time (RTT) measurements, dynamic RTO backoff calculations, and RTO aging mechanisms to obtain dynamic RTO estimations for the transmission of CoAP messages.",
              "vi": "CoCoA kết hợp việc sử dụng các phép đo thời gian truyền khứ hồi (RTT) (RTT), tính toán độ trễ RTO động và cơ chế lão hóa RTO để thu được các ước tính RTO động cho việc truyền các thông báo CoAP."
            },
            {
              "id": "paper2_p1_colR_b4_s2",
              "en": "CoCoA has been designed to deliver a congestion control that is adaptive to network dynamics and suitable for IoT characteristics.",
              "vi": "CoCoA đã được thiết kế để cung cấp khả năng kiểm soát tắc nghẽn thích ứng với động lực của mạng và phù hợp với đặc điểm của IoT."
            },
            {
              "id": "paper2_p1_colR_b4_s3",
              "en": "CoCoA has reached maturity",
              "vi": "CoCoA đã đạt đến độ chín"
            }
          ]
        },
        {
          "id": "paper2_p1_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "2http://tools.ietf.org/id/draft-bormann-core-cocoa-03.txt",
          "sentences": [
            {
              "id": "paper2_p1_colR_b5_s0",
              "en": "2http://tools.ietf.org/id/draft-bormann-core-cocoa-03.txt",
              "vi": "2http://tools.ietf.org/id/draft-bormann-core-cocoa-03.txt"
            }
          ]
        }
      ]
    },
    {
      "page_num": 2,
      "page_image": "assets/p2_page_2.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper2_p2_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "in its current form, after initial design and tuning work [2]. We evaluate how default CoAP and CoCoA behave in two realistic IoT setups and traffic scenarios through physical experiments. The first set of experiments is performed on a testbed composed of nodes running the IPv6-based IoT protocol stack produced by the IETF over IEEE 802.15.4. The second set of experiments uses General Packet Radio Service (GPRS), which is a common Machine-to-machine (M2M) solution for IoT. Along with CoCoA, we assess the potential contribution that state-of-the-art algorithms used in TCP can provide over default CoAP congestion control. Results show that, in contrast with the alternative methods considered, CoCoA consistently outperforms default CoAP congestion control in all evaluated scenarios.",
          "sentences": [
            {
              "id": "paper2_p2_colL_b0_s0",
              "en": "in its current form, after initial design and tuning work [2].",
              "vi": "ở dạng hiện tại sau công việc thiết kế và điều chỉnh ban đầu [2]."
            },
            {
              "id": "paper2_p2_colL_b0_s1",
              "en": "We evaluate how default CoAP and CoCoA behave in two realistic IoT setups and traffic scenarios through physical experiments.",
              "vi": "Chúng tôi đánh giá cách hoạt động của CoAP và CoCoA mặc định trong hai tình huống thiết lập IoT và lưu lượng truy cập thực tế thông qua các thử nghiệm vật lý."
            },
            {
              "id": "paper2_p2_colL_b0_s2",
              "en": "The first set of experiments is performed on a testbed composed of nodes running the IPv6-based IoT protocol stack produced by the IETF over IEEE 802.15.4.",
              "vi": "Tập thử nghiệm đầu tiên được thực hiện trên nền thử nghiệm bao gồm các nút chạy ngăn xếp giao thức IoT dựa trên IPv6 do IETF tạo ra qua IEEE 802.15.4."
            },
            {
              "id": "paper2_p2_colL_b0_s3",
              "en": "The second set of experiments uses General Packet Radio Service (GPRS), which is a common Machine-to-machine (M2M) solution for IoT.",
              "vi": "Nhóm thử nghiệm thứ hai sử dụng Dịch vụ vô tuyến gói chung (GPRS), đây là giải pháp Máy với máy (M2M) phổ biến cho IoT."
            },
            {
              "id": "paper2_p2_colL_b0_s4",
              "en": "Along with CoCoA, we assess the potential contribution that state-of-the-art algorithms used in TCP can provide over default CoAP congestion control.",
              "vi": "Cùng với CoCoA, chúng tôi đánh giá sự đóng góp tiềm năng mà các thuật toán tiên tiến được sử dụng trong TCP có thể mang lại so với khả năng kiểm soát tắc nghẽn CoAP mặc định."
            },
            {
              "id": "paper2_p2_colL_b0_s5",
              "en": "Results show that, in contrast with the alternative methods considered, CoCoA consistently outperforms default CoAP congestion control in all evaluated scenarios.",
              "vi": "Kết quả cho thấy, trái ngược với các phương pháp thay thế được xem xét, CoCoA luôn vượt trội hơn so với kiểm soát tắc nghẽn CoAP mặc định trong tất cả các kịch bản được đánh giá."
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b1",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "II. COAP CONGESTION CONTROL",
          "sentences": [
            {
              "id": "paper2_p2_colL_b1_s0",
              "en": "II.",
              "vi": "II."
            },
            {
              "id": "paper2_p2_colL_b1_s1",
              "en": "COAP CONGESTION CONTROL",
              "vi": "KIỂM SOÁT TUYỆT VỜI COAP"
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The base CoAP specification provides congestion control by imposing conservative restrictions on the rate of outgoing messages and on the number of allowed parallel message exchanges. CoAP defines four types of messages: confirmable (CON), non-confirmable (NON), reset (RST), and acknowledgement (ACK) messages. The restrictions are applied to CON and NON messages, the first one being the limitation of outstanding interactions per destination to 1. An outstanding interaction can be a CON or a NON request for which no ACK or reply has been received yet, respectively.",
          "sentences": [
            {
              "id": "paper2_p2_colL_b2_s0",
              "en": "The base CoAP specification provides congestion control by imposing conservative restrictions on the rate of outgoing messages and on the number of allowed parallel message exchanges.",
              "vi": "Đặc tả CoAP cơ sở cung cấp khả năng kiểm soát tắc nghẽn bằng cách áp đặt các hạn chế thận trọng về tốc độ tin nhắn gửi đi và số lượng trao đổi tin nhắn song song được phép."
            },
            {
              "id": "paper2_p2_colL_b2_s1",
              "en": "CoAP defines four types of messages: confirmable (CON), non-confirmable (NON), reset (RST), and acknowledgement (ACK) messages.",
              "vi": "CoAP xác định bốn loại tin nhắn: tin nhắn có thể xác nhận (CON), không thể xác nhận (NON), tin nhắn đặt lại (RST) và tin nhắn xác nhận (ACK)."
            },
            {
              "id": "paper2_p2_colL_b2_s2",
              "en": "The restrictions are applied to CON and NON messages, the first one being the limitation of outstanding interactions per destination to 1.",
              "vi": "Các hạn chế được áp dụng cho các tin nhắn CON và NON, hạn chế đầu tiên là giới hạn số lượt tương tác còn tồn tại trên mỗi đích đến là 1."
            },
            {
              "id": "paper2_p2_colL_b2_s3",
              "en": "An outstanding interaction can be a CON or a NON request for which no ACK or reply has been received yet, respectively.",
              "vi": "Một tương tác chưa xử lý có thể là yêu cầu CON hoặc NON mà chưa nhận được ACK hoặc phản hồi tương ứng."
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In CoAP, a CON message requires an ACK from the receiver and may be retransmitted up to four times, before considering the transmission to have failed. For the first transmission of a message, a RTO value is randomly picked from the interval [2, 3] s. As in TCP, a BEB is applied to the RTO value for a retransmission, i.e., the RTO value is then doubled.",
          "sentences": [
            {
              "id": "paper2_p2_colL_b3_s0",
              "en": "In CoAP, a CON message requires an ACK from the receiver and may be retransmitted up to four times, before considering the transmission to have failed.",
              "vi": "Trong CoAP, thông báo CON yêu cầu ACK từ người nhận và có thể được truyền lại tối đa bốn lần, trước khi coi việc truyền tải không thành công."
            },
            {
              "id": "paper2_p2_colL_b3_s1",
              "en": "For the first transmission of a message, a RTO value is randomly picked from the interval [2, 3] s.",
              "vi": "Đối với lần truyền tin nhắn đầu tiên, giá trị RTO được chọn ngẫu nhiên trong khoảng [2, 3] giây."
            },
            {
              "id": "paper2_p2_colL_b3_s2",
              "en": "As in TCP, a BEB is applied to the RTO value for a retransmission, i.e., the RTO value is then doubled.",
              "vi": "Giống như trong TCP, BEB được áp dụng cho giá trị RTO để truyền lại, tức là giá trị RTO sau đó sẽ được nhân đôi."
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP congestion control is insensitive to network conditions. In fact, it does not adapt the RTO on the basis of RTT information that is actually available to CoAP. Therefore, if the RTO chosen by CoAP congestion control is below the actual RTT, CoAP will incur spurious retransmissions. On the other hand, CoAP is likely to be used in networks with losses due to BER, which can lead to unnecessarily long idle times if the RTO timer overestimates the RTT.",
          "sentences": [
            {
              "id": "paper2_p2_colL_b4_s0",
              "en": "CoAP congestion control is insensitive to network conditions.",
              "vi": "Kiểm soát tắc nghẽn CoAP không nhạy cảm với điều kiện mạng."
            },
            {
              "id": "paper2_p2_colL_b4_s1",
              "en": "In fact, it does not adapt the RTO on the basis of RTT information that is actually available to CoAP.",
              "vi": "Trên thực tế, nó không điều chỉnh RTO dựa trên thông tin RTT thực sự có sẵn cho CoAP."
            },
            {
              "id": "paper2_p2_colL_b4_s2",
              "en": "Therefore, if the RTO chosen by CoAP congestion control is below the actual RTT, CoAP will incur spurious retransmissions.",
              "vi": "Do đó, nếu RTO được điều khiển tắc nghẽn CoAP chọn thấp hơn RTT thực tế, CoAP sẽ phát sinh việc truyền lại giả."
            },
            {
              "id": "paper2_p2_colL_b4_s3",
              "en": "On the other hand, CoAP is likely to be used in networks with losses due to BER, which can lead to unnecessarily long idle times if the RTO timer overestimates the RTT.",
              "vi": "Mặt khác, CoAP có thể sẽ được sử dụng trong các mạng bị tổn thất do BER, điều này có thể dẫn đến thời gian nhàn rỗi kéo dài không cần thiết nếu bộ định thời RTO đánh giá quá cao RTT."
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Advanced congestion control mechanisms for CoAP should resolve the aforementioned issues, while assuring a safe behavior in the Internet. The proposal being standardized by the IETF CoRE working group for such advanced congestion control is made in the CoCoA draft specification.",
          "sentences": [
            {
              "id": "paper2_p2_colL_b5_s0",
              "en": "Advanced congestion control mechanisms for CoAP should resolve the aforementioned issues, while assuring a safe behavior in the Internet.",
              "vi": "Các cơ chế kiểm soát tắc nghẽn nâng cao cho CoAP sẽ giải quyết các vấn đề nói trên, đồng thời đảm bảo hoạt động an toàn trên Internet."
            },
            {
              "id": "paper2_p2_colL_b5_s1",
              "en": "The proposal being standardized by the IETF CoRE working group for such advanced congestion control is made in the CoCoA draft specification.",
              "vi": "Đề xuất đang được nhóm làm việc IETF CoRE chuẩn hóa để kiểm soát tắc nghẽn nâng cao như vậy được đưa ra trong đặc tả dự thảo CoCoA."
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b6",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "III. COCOA",
          "sentences": [
            {
              "id": "paper2_p2_colL_b6_s0",
              "en": "III.",
              "vi": "III."
            },
            {
              "id": "paper2_p2_colL_b6_s1",
              "en": "COCOA",
              "vi": "ca cao"
            }
          ]
        },
        {
          "id": "paper2_p2_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoCoA provides a flexible congestion control solution that relaxes the conservative message rate restrictions of the CoAP base specification, while guaranteeing a safe protocol operation. A fundamental requirement for the design of CoCoA has been to produce a mechanism that offers a performance that is better than, or at least similar to, that of default CoAP. CoCoA comprises three main components: adaptive RTO calculation, Variable Backoff Factor (VBF) and RTO aging.",
          "sentences": [
            {
              "id": "paper2_p2_colL_b7_s0",
              "en": "CoCoA provides a flexible congestion control solution that relaxes the conservative message rate restrictions of the CoAP base specification, while guaranteeing a safe protocol operation.",
              "vi": "CoCoA cung cấp giải pháp kiểm soát tắc nghẽn linh hoạt giúp giảm bớt các hạn chế về tốc độ tin nhắn thận trọng của đặc tả cơ sở CoAP, đồng thời đảm bảo hoạt động giao thức an toàn."
            },
            {
              "id": "paper2_p2_colL_b7_s1",
              "en": "A fundamental requirement for the design of CoCoA has been to produce a mechanism that offers a performance that is better than, or at least similar to, that of default CoAP.",
              "vi": "Yêu cầu cơ bản đối với việc thiết kế CoCoA là tạo ra một cơ chế mang lại hiệu suất tốt hơn hoặc ít nhất là tương tự như CoAP mặc định."
            },
            {
              "id": "paper2_p2_colL_b7_s2",
              "en": "CoCoA comprises three main components: adaptive RTO calculation, Variable Backoff Factor (VBF) and RTO aging.",
              "vi": "CoCoA bao gồm ba thành phần chính: tính toán RTO thích ứng, Hệ số dự phòng thay đổi (VBF) và lão hóa RTO."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p2_colR_b0",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. Adaptive RTO calculation",
          "sentences": [
            {
              "id": "paper2_p2_colR_b0_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper2_p2_colR_b0_s1",
              "en": "Adaptive RTO calculation",
              "vi": "Tính toán RTO thích ứng"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In CoCoA, RTT measurement and adapted RTO calculation follow the principles of RFC 6298 3. This RFC constitutes the basis for RTO computation in most TCP implementations, where the RTO is calculated adaptively by applying an exponentially weighted moving average of RTT and RTT-variation estimates. CoCoA adapts this algorithm for IoT communications.",
          "sentences": [
            {
              "id": "paper2_p2_colR_b1_s0",
              "en": "In CoCoA, RTT measurement and adapted RTO calculation follow the principles of RFC 6298 3.",
              "vi": "Trong CoCoA, phép đo RTT và tính toán RTO được điều chỉnh tuân theo các nguyên tắc của RFC 6298 3."
            },
            {
              "id": "paper2_p2_colR_b1_s1",
              "en": "This RFC constitutes the basis for RTO computation in most TCP implementations, where the RTO is calculated adaptively by applying an exponentially weighted moving average of RTT and RTT-variation estimates.",
              "vi": "RFC này tạo thành cơ sở cho tính toán RTO trong hầu hết các triển khai TCP, trong đó RTO được tính toán thích ứng bằng cách áp dụng trung bình động có trọng số theo cấp số nhân của các ước tính biến thiên RTT và RTT."
            },
            {
              "id": "paper2_p2_colR_b1_s2",
              "en": "CoCoA adapts this algorithm for IoT communications.",
              "vi": "CoCoA điều chỉnh thuật toán này cho truyền thông IoT."
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In TCP, a packet loss is assumed to be caused by network congestion. However, in IoT networks, a high packet loss rate is expected due to BER. The RTO estimator detailed in RFC 6298 only uses strong RTTs, i.e. RTT measurements from the packets for which an ACK is received before the sender runs into retransmissions. This estimator is referred to as strong RTO estimator. In CoCoA, also a weak RTO estimator is defined, which uses weak RTTs, i.e. RTT measurements taken from packets that have required at most two retransmissions. This increases the chances of obtaining RTT measurements in the presence of packet losses. In CoCoA, when a weak or a strong RTT is measured, the corresponding weak or strong RTO (RTOX) is updated, respectively, following the same scheme defined in RFC 6298, as",
          "sentences": [
            {
              "id": "paper2_p2_colR_b2_s0",
              "en": "In TCP, a packet loss is assumed to be caused by network congestion.",
              "vi": "Trong TCP, việc mất gói được cho là do tắc nghẽn mạng."
            },
            {
              "id": "paper2_p2_colR_b2_s1",
              "en": "However, in IoT networks, a high packet loss rate is expected due to BER.",
              "vi": "Tuy nhiên, trong các mạng IoT, tỷ lệ mất gói cao có thể xảy ra do BER."
            },
            {
              "id": "paper2_p2_colR_b2_s2",
              "en": "The RTO estimator detailed in RFC 6298 only uses strong RTTs, i.e. RTT measurements from the packets for which an ACK is received before the sender runs into retransmissions.",
              "vi": "Công cụ ước tính RTO được nêu chi tiết trong RFC 6298 chỉ sử dụng RTT mạnh, tức là các phép đo RTT từ các gói mà nhận được ACK trước khi người gửi bắt đầu truyền lại."
            },
            {
              "id": "paper2_p2_colR_b2_s3",
              "en": "This estimator is referred to as strong RTO estimator.",
              "vi": "Công cụ ước tính này được gọi là công cụ ước tính RTO mạnh."
            },
            {
              "id": "paper2_p2_colR_b2_s4",
              "en": "In CoCoA, also a weak RTO estimator is defined, which uses weak RTTs, i.e. RTT measurements taken from packets that have required at most two retransmissions.",
              "vi": "Trong CoCoA, công cụ ước tính RTO yếu cũng được xác định, sử dụng RTT yếu, tức là các phép đo RTT được lấy từ các gói yêu cầu tối đa hai lần truyền lại."
            },
            {
              "id": "paper2_p2_colR_b2_s5",
              "en": "This increases the chances of obtaining RTT measurements in the presence of packet losses.",
              "vi": "Điều này làm tăng cơ hội thu được các phép đo RTT khi có hiện tượng mất gói."
            },
            {
              "id": "paper2_p2_colR_b2_s6",
              "en": "In CoCoA, when a weak or a strong RTT is measured, the corresponding weak or strong RTO (RTOX) is updated, respectively, following the same scheme defined in RFC 6298, as",
              "vi": "Trong CoCoA, khi đo RTT yếu hoặc mạnh, RTO (RTOX) yếu hoặc mạnh tương ứng sẽ được cập nhật, theo cùng một sơ đồ được xác định trong RFC 6298, như"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "RTOX = SRTTX + KX × RTTVARX, (1)",
          "sentences": [
            {
              "id": "paper2_p2_colR_b3_s0",
              "en": "RTOX = SRTTX + KX × RTTVARX, (1)",
              "vi": "RTOX = SRTTX + KX × RTTVARX, (1)"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "where X is either weak or strong, SRTT and RTTVAR denote the well known smoothed RTT and RTT variation computed as in RFC 6298, Kstrong is 4 also as in RFC 6298, and Kweak is 1. The newly calculated RTO contributes to an overall RTO value with a weighted average:",
          "sentences": [
            {
              "id": "paper2_p2_colR_b4_s0",
              "en": "where X is either weak or strong, SRTT and RTTVAR denote the well known smoothed RTT and RTT variation computed as in RFC 6298, Kstrong is 4 also as in RFC 6298, and Kweak is 1.",
              "vi": "trong đó X yếu hoặc mạnh, SRTT và RTTVAR biểu thị biến thể RTT và RTT được làm mịn nổi tiếng được tính toán như trong RFC 6298, Kstrong cũng là 4 như trong RFC 6298 và Kweak là 1."
            },
            {
              "id": "paper2_p2_colR_b4_s1",
              "en": "The newly calculated RTO contributes to an overall RTO value with a weighted average:",
              "vi": "RTO mới được tính toán đóng góp vào giá trị RTO tổng thể với mức trung bình có trọng số:"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": true,
          "raw_text": "RTOoverall = α × RTOX + (1 −α) × RTOoverall, (2)",
          "sentences": [
            {
              "id": "paper2_p2_colR_b5_s0",
              "en": "RTOoverall = α × RTOX + (1 −α) × RTOoverall, (2)",
              "vi": "RTO tổng thể = α × RTOX + (1 −α) × RTO tổng thể, (2)"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "where α is 0.5 for the strong RTO estimator and 0.25 for the weak RTO estimator.",
          "sentences": [
            {
              "id": "paper2_p2_colR_b6_s0",
              "en": "where α is 0.5 for the strong RTO estimator and 0.25 for the weak RTO estimator.",
              "vi": "trong đó α là 0,5 đối với công cụ ước tính RTO mạnh và 0,25 đối với công cụ ước tính RTO yếu."
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "To avoid a steep RTO increase after measuring a weak RTT, and to maintain the overall RTO estimation stability, modifications were applied to the weak RTO estimator when compared to the strong RTO estimator:",
          "sentences": [
            {
              "id": "paper2_p2_colR_b7_s0",
              "en": "To avoid a steep RTO increase after measuring a weak RTT, and to maintain the overall RTO estimation stability, modifications were applied to the weak RTO estimator when compared to the strong RTO estimator:",
              "vi": "Để tránh RTO tăng mạnh sau khi đo RTT yếu và để duy trì độ ổn định ước tính RTO tổng thể, các sửa đổi đã được áp dụng cho công cụ ước tính RTO yếu khi so sánh với công cụ ước tính RTO mạnh:"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• Weak RTT measurements are only allowed for up to the second retransmission in order to avoid very large weak RTT measurements (which could overestimate the RTO) and because the probability of obtaining veridical RTT information decreases with every retransmission.",
          "sentences": [
            {
              "id": "paper2_p2_colR_b8_s0",
              "en": "• Weak RTT measurements are only allowed for up to the second retransmission in order to avoid very large weak RTT measurements (which could overestimate the RTO) and because the probability of obtaining veridical RTT information decreases with every retransmission.",
              "vi": "• Các phép đo RTT yếu chỉ được phép cho đến lần truyền lại thứ hai để tránh các phép đo RTT yếu rất lớn (có thể đánh giá quá cao RTO) và do xác suất thu được thông tin RTT thực sự giảm sau mỗi lần truyền lại."
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• The value of K that determines the impact of RTTVAR for the weak RTO estimator is changed from 4 to 1. This reduces the impact of RTTVAR on the weak RTO estimation, since RTTVAR tends to grow large, especially if more than one retransmission is used.",
          "sentences": [
            {
              "id": "paper2_p2_colR_b9_s0",
              "en": "• The value of K that determines the impact of RTTVAR for the weak RTO estimator is changed from 4 to 1.",
              "vi": "• Giá trị của K xác định tác động của RTTVAR đối với công cụ ước tính RTO yếu được thay đổi từ 4 thành 1."
            },
            {
              "id": "paper2_p2_colR_b9_s1",
              "en": "This reduces the impact of RTTVAR on the weak RTO estimation, since RTTVAR tends to grow large, especially if more than one retransmission is used.",
              "vi": "Điều này làm giảm tác động của RTTVAR đối với ước tính RTO yếu, vì RTTVAR có xu hướng phát triển lớn, đặc biệt nếu sử dụng nhiều lần truyền lại."
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "• When calculating the overall RTO, the weak RTO estimator contributes less than the strong RTO estimator by using a reduced weight (0.25) for the weak RTO value. Although considering weak RTT information is necessary, strong RTTs provide more reliable input on the expected RTTs, and deliver a more accurate RTO estimation. The parameter values chosen for RTOweak calculations were shown to reduce the fluctuations without compromising",
          "sentences": [
            {
              "id": "paper2_p2_colR_b10_s0",
              "en": "• When calculating the overall RTO, the weak RTO estimator contributes less than the strong RTO estimator by using a reduced weight (0.25) for the weak RTO value.",
              "vi": "• Khi tính toán RTO tổng thể, công cụ ước tính RTO yếu đóng góp ít hơn công cụ ước tính RTO mạnh bằng cách sử dụng trọng số giảm (0,25) cho giá trị RTO yếu."
            },
            {
              "id": "paper2_p2_colR_b10_s1",
              "en": "Although considering weak RTT information is necessary, strong RTTs provide more reliable input on the expected RTTs, and deliver a more accurate RTO estimation.",
              "vi": "Mặc dù việc xem xét thông tin RTT yếu là cần thiết nhưng RTT mạnh cung cấp đầu vào đáng tin cậy hơn về RTT dự kiến ​​và mang lại ước tính RTO chính xác hơn."
            },
            {
              "id": "paper2_p2_colR_b10_s2",
              "en": "The parameter values chosen for RTOweak calculations were shown to reduce the fluctuations without compromising",
              "vi": "Các giá trị tham số được chọn để tính toán RTOweak đã được chứng minh là làm giảm sự dao động mà không ảnh hưởng đến"
            }
          ]
        },
        {
          "id": "paper2_p2_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "3https://tools.ietf.org/html/rfc6298",
          "sentences": [
            {
              "id": "paper2_p2_colR_b11_s0",
              "en": "3https://tools.ietf.org/html/rfc6298",
              "vi": "3https://tools.ietf.org/html/rfc6298"
            }
          ]
        }
      ]
    },
    {
      "page_num": 3,
      "page_image": "assets/p2_page_3.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper2_p3_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "the stability [2]. Like in default CoAP, CoCoA dithers the initial RTO of a transaction by choosing it from the interval [RTOoverall, 1.5 × RTOoverall].",
          "sentences": [
            {
              "id": "paper2_p3_colL_b0_s0",
              "en": "the stability [2].",
              "vi": "sự ổn định [2]."
            },
            {
              "id": "paper2_p3_colL_b0_s1",
              "en": "Like in default CoAP, CoCoA dithers the initial RTO of a transaction by choosing it from the interval [RTOoverall, 1.5 × RTOoverall].",
              "vi": "Giống như trong CoAP mặc định, CoCoA điều chỉnh RTO ban đầu của giao dịch bằng cách chọn nó từ khoảng [RTOoverall, 1,5 × RTOoverall]."
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Variable Backoff Factor (VBF)",
          "sentences": [
            {
              "id": "paper2_p3_colL_b1_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper2_p3_colL_b1_s1",
              "en": "Variable Backoff Factor (VBF)",
              "vi": "Hệ số dự phòng thay đổi (VBF)"
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "For small initial RTOs, a BEB may not increase the RTO fast enough to allow the network to recover from congestion, still offering high load to the network and increasing the chance for spurious retransmissions. On the contrary, for large initial RTOs, a BEB may overestimate the RTO, leading to an unnecessary delay increase.",
          "sentences": [
            {
              "id": "paper2_p3_colL_b2_s0",
              "en": "For small initial RTOs, a BEB may not increase the RTO fast enough to allow the network to recover from congestion, still offering high load to the network and increasing the chance for spurious retransmissions.",
              "vi": "Đối với các RTO ban đầu nhỏ, BEB có thể không tăng RTO đủ nhanh để cho phép mạng phục hồi sau tắc nghẽn, vẫn cung cấp tải cao cho mạng và tăng cơ hội truyền lại giả mạo."
            },
            {
              "id": "paper2_p3_colL_b2_s1",
              "en": "On the contrary, for large initial RTOs, a BEB may overestimate the RTO, leading to an unnecessary delay increase.",
              "vi": "Ngược lại, đối với RTO ban đầu lớn, BEB có thể đánh giá RTO quá cao, dẫn đến tăng độ trễ không cần thiết."
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "To address these problems, CoCoA applies a VBF that adjusts the backoff factor depending on the initial RTO value of a transmission. If the initial RTO is very small (below 1 s), a larger backoff factor is applied to retransmissions (VBF = 3). If a transaction initiates with a large RTO value (above 3 s), a smaller backoff factor is chosen for retransmissions (VBF = 1.5). For transactions that initiate with an RTO between 1 and 3 s, the VBF is set to 2, corresponding to a BEB.",
          "sentences": [
            {
              "id": "paper2_p3_colL_b3_s0",
              "en": "To address these problems, CoCoA applies a VBF that adjusts the backoff factor depending on the initial RTO value of a transmission.",
              "vi": "Để giải quyết những vấn đề này, CoCoA áp dụng VBF để điều chỉnh hệ số thoái lui (backoff factor) tùy thuộc vào giá trị RTO ban đầu của đường truyền."
            },
            {
              "id": "paper2_p3_colL_b3_s1",
              "en": "If the initial RTO is very small (below 1 s), a larger backoff factor is applied to retransmissions (VBF = 3).",
              "vi": "Nếu RTO ban đầu rất nhỏ (dưới 1 giây), hệ số thoái lui (backoff factor) lớn hơn sẽ được áp dụng cho các lần truyền lại (VBF = 3)."
            },
            {
              "id": "paper2_p3_colL_b3_s2",
              "en": "If a transaction initiates with a large RTO value (above 3 s), a smaller backoff factor is chosen for retransmissions (VBF = 1.5).",
              "vi": "Nếu một giao dịch bắt đầu với giá trị RTO lớn (trên 3 giây), hệ số trễ nhỏ hơn sẽ được chọn để truyền lại (VBF = 1,5)."
            },
            {
              "id": "paper2_p3_colL_b3_s3",
              "en": "For transactions that initiate with an RTO between 1 and 3 s, the VBF is set to 2, corresponding to a BEB.",
              "vi": "Đối với các giao dịch bắt đầu bằng RTO trong khoảng từ 1 đến 3 giây, VBF được đặt thành 2, tương ứng với BEB."
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Several backoff factor values for the VBF have been considered and evaluated [2]. Based on the evaluation results and in consensus with the CoCoA specification authors and the IETF CoRE working group, the set of backoff factors presented above was chosen4.",
          "sentences": [
            {
              "id": "paper2_p3_colL_b4_s0",
              "en": "Several backoff factor values for the VBF have been considered and evaluated [2].",
              "vi": "Một số giá trị hệ số dự phòng cho VBF đã được xem xét và đánh giá [2]."
            },
            {
              "id": "paper2_p3_colL_b4_s1",
              "en": "Based on the evaluation results and in consensus with the CoCoA specification authors and the IETF CoRE working group, the set of backoff factors presented above was chosen4.",
              "vi": "Dựa trên kết quả đánh giá và sự đồng thuận của các tác giả đặc tả CoCoA và nhóm làm việc của IETF CoRE, tập hợp các yếu tố chờ trình bày ở trên đã được chọn4."
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b5",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. RTO aging",
          "sentences": [
            {
              "id": "paper2_p3_colL_b5_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper2_p3_colL_b5_s1",
              "en": "RTO aging",
              "vi": "RTO lão hóa"
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "If estimated RTO values are not updated for an extended period of time, the probability that they are no longer valid becomes high. In IoT networks, network conditions, and thus the RTT, can change fast. To avoid bogus RTO values due to such changes, CoCoA applies an aging mechanism to small and large RTO estimations. If a RTO estimation is small or large (below 1 s or above 3 s, respectively), and no new RTT measurement is made for 16 or 4 times the current RTO, respectively, the RTO value is modified to approach the default initial value.",
          "sentences": [
            {
              "id": "paper2_p3_colL_b6_s0",
              "en": "If estimated RTO values are not updated for an extended period of time, the probability that they are no longer valid becomes high.",
              "vi": "Nếu các giá trị RTO ước tính không được cập nhật trong một khoảng thời gian dài thì khả năng chúng không còn hợp lệ sẽ rất cao."
            },
            {
              "id": "paper2_p3_colL_b6_s1",
              "en": "In IoT networks, network conditions, and thus the RTT, can change fast.",
              "vi": "Trong mạng IoT, điều kiện mạng và do đó RTT có thể thay đổi nhanh chóng."
            },
            {
              "id": "paper2_p3_colL_b6_s2",
              "en": "To avoid bogus RTO values due to such changes, CoCoA applies an aging mechanism to small and large RTO estimations.",
              "vi": "Để tránh các giá trị RTO không có thật do những thay đổi như vậy, CoCoA áp dụng cơ chế lão hóa cho các ước tính RTO nhỏ và lớn."
            },
            {
              "id": "paper2_p3_colL_b6_s3",
              "en": "If a RTO estimation is small or large (below 1 s or above 3 s, respectively), and no new RTT measurement is made for 16 or 4 times the current RTO, respectively, the RTO value is modified to approach the default initial value.",
              "vi": "Nếu ước tính RTO nhỏ hoặc lớn (tương ứng dưới 1 giây hoặc trên 3 giây) và không thực hiện phép đo RTT mới tương ứng gấp 16 hoặc 4 lần RTO hiện tại, thì giá trị RTO sẽ được sửa đổi để đạt đến giá trị ban đầu mặc định."
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b7",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "D. Congestion Control for NON messages",
          "sentences": [
            {
              "id": "paper2_p3_colL_b7_s0",
              "en": "D.",
              "vi": "D."
            },
            {
              "id": "paper2_p3_colL_b7_s1",
              "en": "Congestion Control for NON messages",
              "vi": "Kiểm soát tắc nghẽn cho tin nhắn NON"
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP NON messages do not trigger ACKs from the receiver, therefore being used if end-to-end reliability is not required. Default CoAP does not limit the rate of outgoing NON messages towards a destination endpoint. CoCoA introduces congestion control for NON messages, limiting the rate of outgoing NON messages towards a destination endpoint to one message every RTO seconds. Since RTO estimation requires the presence of round trip type interaction, CoCoA mandates the use of a controlled fraction of CON messages among the NON messages to be transmitted. For the sake of brevity, in this paper we only focus on congestion control for CON messages. The interested reader is referred to [3] for evaluations of NON type message traffic.",
          "sentences": [
            {
              "id": "paper2_p3_colL_b8_s0",
              "en": "CoAP NON messages do not trigger ACKs from the receiver, therefore being used if end-to-end reliability is not required.",
              "vi": "Tin nhắn CoAP NON không kích hoạt ACK từ người nhận, do đó được sử dụng nếu không cần độ tin cậy từ đầu đến cuối."
            },
            {
              "id": "paper2_p3_colL_b8_s1",
              "en": "Default CoAP does not limit the rate of outgoing NON messages towards a destination endpoint.",
              "vi": "CoAP mặc định không giới hạn tỷ lệ tin nhắn NON gửi đi tới điểm cuối đích."
            },
            {
              "id": "paper2_p3_colL_b8_s2",
              "en": "CoCoA introduces congestion control for NON messages, limiting the rate of outgoing NON messages towards a destination endpoint to one message every RTO seconds.",
              "vi": "CoCoA giới thiệu tính năng kiểm soát tắc nghẽn đối với các tin nhắn NON, giới hạn tốc độ các tin nhắn NON gửi đi tới điểm cuối đích ở mức một tin nhắn mỗi giây RTO."
            },
            {
              "id": "paper2_p3_colL_b8_s3",
              "en": "Since RTO estimation requires the presence of round trip type interaction, CoCoA mandates the use of a controlled fraction of CON messages among the NON messages to be transmitted.",
              "vi": "Do ước tính RTO yêu cầu sự hiện diện của tương tác kiểu khứ hồi, CoCoA bắt buộc sử dụng một phần thông báo CON được kiểm soát trong số các thông báo NON được truyền đi."
            },
            {
              "id": "paper2_p3_colL_b8_s4",
              "en": "For the sake of brevity, in this paper we only focus on congestion control for CON messages.",
              "vi": "Để cho ngắn gọn, trong bài viết này chúng tôi chỉ tập trung vào điều khiển tắc nghẽn cho các bản tin CON."
            },
            {
              "id": "paper2_p3_colL_b8_s5",
              "en": "The interested reader is referred to [3] for evaluations of NON type message traffic.",
              "vi": "Người đọc quan tâm có thể tham khảo [3] để đánh giá lưu lượng tin nhắn loại NON."
            }
          ]
        },
        {
          "id": "paper2_p3_colL_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "4For the determination of other parameter settings of CoCoA, the same approach was followed. The investigation of the performance-complexity trade-off brought by adaptive parameter setting approaches is a future research direction for CoCoA.",
          "sentences": [
            {
              "id": "paper2_p3_colL_b9_s0",
              "en": "4For the determination of other parameter settings of CoCoA, the same approach was followed.",
              "vi": "4Để xác định các cài đặt thông số khác của CoCoA, phương pháp tương tự cũng được thực hiện."
            },
            {
              "id": "paper2_p3_colL_b9_s1",
              "en": "The investigation of the performance-complexity trade-off brought by adaptive parameter setting approaches is a future research direction for CoCoA.",
              "vi": "Việc điều tra sự đánh đổi giữa hiệu suất và độ phức tạp do các phương pháp thiết lập tham số thích ứng mang lại là hướng nghiên cứu trong tương lai của CoCoA."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p3_colR_b0",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "IV. ALTERNATIVE CONGESTION CONTROL MECHANISMS",
          "sentences": [
            {
              "id": "paper2_p3_colR_b0_s0",
              "en": "IV.",
              "vi": "IV."
            },
            {
              "id": "paper2_p3_colR_b0_s1",
              "en": "ALTERNATIVE CONGESTION CONTROL MECHANISMS",
              "vi": "CƠ CHẾ KIỂM SOÁT TẮC TẮC THAY THẾ"
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "For a wider understanding of congestion control for the IoT, besides comparing default CoAP with CoCoA, in this paper we also analyze other RTO calculation algorithms such as the Linux TCP RTO (Linux-RTO) estimator [4], the peak-hopper TCP RTO estimator (PH-RTO) [5] and also a CoCoA variant that only uses the strong RTO estimator (CoCoA-S).",
          "sentences": [
            {
              "id": "paper2_p3_colR_b1_s0",
              "en": "For a wider understanding of congestion control for the IoT, besides comparing default CoAP with CoCoA, in this paper we also analyze other RTO calculation algorithms such as the Linux TCP RTO (Linux-RTO) estimator [4], the peak-hopper TCP RTO estimator (PH-RTO) [5] and also a CoCoA variant that only uses the strong RTO estimator (CoCoA-S).",
              "vi": "Để hiểu rộng hơn về kiểm soát tắc nghẽn cho IoT, bên cạnh việc so sánh CoAP mặc định với CoCoA, trong bài viết này, chúng tôi cũng phân tích các thuật toán tính toán RTO khác như công cụ ước tính TCP RTO (Linux-RTO) của Linux [4], công cụ ước tính TCP RTO đỉnh phễu (PH-RTO) [5] và cả một biến thể CoCoA chỉ sử dụng công cụ ước tính RTO mạnh (CoCoA-S)."
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Linux-RTO adds two mechanisms to the basic TCP RTO algorithm. First, when a new RTT measurement is smaller than the previously gathered RTT information, the RTO is not increased, avoiding peaks in the RTO value when the channel seems to improve. Second, Linux-RTO avoids the RTO estimator to converge into a RTT value after repeatedly measuring constant RTT values [4], which could lead to spurious retransmissions.",
          "sentences": [
            {
              "id": "paper2_p3_colR_b2_s0",
              "en": "Linux-RTO adds two mechanisms to the basic TCP RTO algorithm.",
              "vi": "Linux-RTO bổ sung hai cơ chế vào thuật toán TCP RTO cơ bản."
            },
            {
              "id": "paper2_p3_colR_b2_s1",
              "en": "First, when a new RTT measurement is smaller than the previously gathered RTT information, the RTO is not increased, avoiding peaks in the RTO value when the channel seems to improve.",
              "vi": "Đầu tiên, khi phép đo RTT mới nhỏ hơn thông tin RTT được thu thập trước đó, RTO sẽ không tăng, tránh các đỉnh trong giá trị RTO khi kênh có vẻ được cải thiện."
            },
            {
              "id": "paper2_p3_colR_b2_s2",
              "en": "Second, Linux-RTO avoids the RTO estimator to converge into a RTT value after repeatedly measuring constant RTT values [4], which could lead to spurious retransmissions.",
              "vi": "Thứ hai, Linux-RTO tránh công cụ ước tính RTO hội tụ thành giá trị RTT sau khi đo liên tục các giá trị RTT không đổi [4], điều này có thể dẫn đến việc truyền lại giả mạo."
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "PH-RTO reacts to a sudden RTT increase with a RTO increase by using a short term RTT history, which then decays over time towards the value of a long term RTT history. PH-RTO intends to avoid spurious retransmissions by using the long term history, when the channel suffers from sudden delays. RTO dithering is not defined for the Linux and PH-RTO algorithms, which were not designed for IoT scenarios.",
          "sentences": [
            {
              "id": "paper2_p3_colR_b3_s0",
              "en": "PH-RTO reacts to a sudden RTT increase with a RTO increase by using a short term RTT history, which then decays over time towards the value of a long term RTT history.",
              "vi": "PH-RTO phản ứng với mức tăng RTT đột ngột bằng mức tăng RTO bằng cách sử dụng lịch sử RTT ngắn hạn, sau đó giảm dần theo thời gian về giá trị của lịch sử RTT dài hạn."
            },
            {
              "id": "paper2_p3_colR_b3_s1",
              "en": "PH-RTO intends to avoid spurious retransmissions by using the long term history, when the channel suffers from sudden delays.",
              "vi": "PH-RTO dự định tránh việc truyền lại giả mạo bằng cách sử dụng lịch sử dài hạn khi kênh bị trễ đột ngột."
            },
            {
              "id": "paper2_p3_colR_b3_s2",
              "en": "RTO dithering is not defined for the Linux and PH-RTO algorithms, which were not designed for IoT scenarios.",
              "vi": "Phối màu RTO không được xác định cho thuật toán Linux và PH-RTO, những thuật toán này không được thiết kế cho các kịch bản IoT."
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Above these two state-of-the-art algorithms used in TCP, we include a minimalist Basic-RTO’ (B-RTO) estimator in the evaluations as a benchmark, which always sets the initial RTO for a transmission to a random value between 1 and 1.5 times the previously measured RTT. B-RTO can use weak RTT measurements. An overview of the features of all six analyzed congestion control mechanisms is given in Table I. None of the two considered TCP-oriented congestion control mechanisms takes into account the peculiarities of IoT traffic, such as high BER, sporadic transmissions and traffic bursts. On the other hand, B-RTO provides poor RTO estimation due to its simplicity. In contrast, CoCoA introduces features like the weak RTT, the VBF, and RTO aging, designed for IoT traffic. As a result, CoCoA is expected to outperform the alternative congestion control mechanisms.",
          "sentences": [
            {
              "id": "paper2_p3_colR_b4_s0",
              "en": "Above these two state-of-the-art algorithms used in TCP, we include a minimalist Basic-RTO’ (B-RTO) estimator in the evaluations as a benchmark, which always sets the initial RTO for a transmission to a random value between 1 and 1.5 times the previously measured RTT.",
              "vi": "Bên trên hai thuật toán tiên tiến được sử dụng trong TCP này, chúng tôi đưa công cụ ước tính Basic-RTO' (B-RTO) tối giản vào đánh giá làm điểm chuẩn. Công cụ này luôn đặt RTO ban đầu cho quá trình truyền thành giá trị ngẫu nhiên trong khoảng từ 1 đến 1,5 lần RTT đo được trước đó."
            },
            {
              "id": "paper2_p3_colR_b4_s1",
              "en": "B-RTO can use weak RTT measurements.",
              "vi": "B-RTO có thể sử dụng các phép đo RTT yếu."
            },
            {
              "id": "paper2_p3_colR_b4_s2",
              "en": "An overview of the features of all six analyzed congestion control mechanisms is given in Table I.",
              "vi": "Tổng quan về các tính năng của tất cả sáu cơ chế kiểm soát tắc nghẽn được phân tích được đưa ra trong Bảng I."
            },
            {
              "id": "paper2_p3_colR_b4_s3",
              "en": "None of the two considered TCP-oriented congestion control mechanisms takes into account the peculiarities of IoT traffic, such as high BER, sporadic transmissions and traffic bursts.",
              "vi": "Không có cơ chế nào trong số hai cơ chế kiểm soát tắc nghẽn theo định hướng TCP được coi là có tính đến các đặc thù của lưu lượng IoT, chẳng hạn như BER cao, truyền dẫn lẻ tẻ và bùng nổ lưu lượng."
            },
            {
              "id": "paper2_p3_colR_b4_s4",
              "en": "On the other hand, B-RTO provides poor RTO estimation due to its simplicity.",
              "vi": "Mặt khác, B-RTO cung cấp ước tính RTO kém do tính đơn giản của nó."
            },
            {
              "id": "paper2_p3_colR_b4_s5",
              "en": "In contrast, CoCoA introduces features like the weak RTT, the VBF, and RTO aging, designed for IoT traffic.",
              "vi": "Ngược lại, CoCoA giới thiệu các tính năng như RTT yếu, VBF và RTO lão hóa, được thiết kế cho lưu lượng IoT."
            },
            {
              "id": "paper2_p3_colR_b4_s6",
              "en": "As a result, CoCoA is expected to outperform the alternative congestion control mechanisms.",
              "vi": "Do đó, CoCoA được kỳ vọng sẽ hoạt động tốt hơn các cơ chế kiểm soát tắc nghẽn thay thế."
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b5",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "V. EXPERIMENTAL SETUP AND TEST CONFIGURATION",
          "sentences": [
            {
              "id": "paper2_p3_colR_b5_s0",
              "en": "V.",
              "vi": "V."
            },
            {
              "id": "paper2_p3_colR_b5_s1",
              "en": "EXPERIMENTAL SETUP AND TEST CONFIGURATION",
              "vi": "CÀI ĐẶT THỬ NGHIỆM VÀ CẤU HÌNH KIỂM TRA"
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b6",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. Testbeds",
          "sentences": [
            {
              "id": "paper2_p3_colR_b6_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper2_p3_colR_b6_s1",
              "en": "Testbeds",
              "vi": "Giường thử nghiệm"
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "GPRS and IEEE 802.15.4 are used in this paper for evaluations in two respective experimental setups, which also use different hardware to run CoAP servers and clients.",
          "sentences": [
            {
              "id": "paper2_p3_colR_b7_s0",
              "en": "GPRS and IEEE 802.15.4 are used in this paper for evaluations in two respective experimental setups, which also use different hardware to run CoAP servers and clients.",
              "vi": "GPRS và IEEE 802.15.4 được sử dụng trong bài viết này để đánh giá trong hai thiết lập thử nghiệm tương ứng, cũng sử dụng phần cứng khác nhau để chạy máy chủ và máy khách CoAP."
            }
          ]
        },
        {
          "id": "paper2_p3_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "GPRS is a common M2M technology that allows a flexible network setup for Internet connectivity. IEEE 802.15.4 targets low-power communication and is a common interface employed by many IoT standards, including ZigBee and 6LoWPAN. GPRS and IEEE 802.15.4 are interesting for this study because they have different bit rates and delay characteristics. Moreover, GPRS involves a single wireless hop, whereas IEEE 802.15.4 networks are often deployed as multihop networks. In the first setup, a laptop running CoAP clients uses a Matrix MTX-65-ULP GPRS modem to connect to the Internet, from where packets are routed towards a PC running a CoAP server. When compared to a wired connection, much larger RTTs and a much higher RTT jitter are observed over the",
          "sentences": [
            {
              "id": "paper2_p3_colR_b8_s0",
              "en": "GPRS is a common M2M technology that allows a flexible network setup for Internet connectivity.",
              "vi": "GPRS là công nghệ M2M phổ biến cho phép thiết lập mạng linh hoạt để kết nối Internet."
            },
            {
              "id": "paper2_p3_colR_b8_s1",
              "en": "IEEE 802.15.4 targets low-power communication and is a common interface employed by many IoT standards, including ZigBee and 6LoWPAN.",
              "vi": "IEEE 802.15.4 hướng tới giao tiếp tiêu thụ điện năng thấp và là giao diện phổ biến được nhiều tiêu chuẩn IoT sử dụng, bao gồm ZigBee và 6LoWPAN."
            },
            {
              "id": "paper2_p3_colR_b8_s2",
              "en": "GPRS and IEEE 802.15.4 are interesting for this study because they have different bit rates and delay characteristics.",
              "vi": "GPRS và IEEE 802.15.4 rất thú vị cho nghiên cứu này vì chúng có tốc độ bit và đặc tính độ trễ khác nhau."
            },
            {
              "id": "paper2_p3_colR_b8_s3",
              "en": "Moreover, GPRS involves a single wireless hop, whereas IEEE 802.15.4 networks are often deployed as multihop networks.",
              "vi": "Hơn nữa, GPRS bao gồm một bước nhảy không dây duy nhất, trong khi mạng IEEE 802.15.4 thường được triển khai dưới dạng mạng nhiều bước nhảy."
            },
            {
              "id": "paper2_p3_colR_b8_s4",
              "en": "In the first setup, a laptop running CoAP clients uses a Matrix MTX-65-ULP GPRS modem to connect to the Internet, from where packets are routed towards a PC running a CoAP server.",
              "vi": "Trong thiết lập đầu tiên, máy tính xách tay chạy máy khách CoAP sử dụng modem Matrix MTX-65-ULP GPRS để kết nối với Internet, từ đó các gói được định tuyến tới PC chạy máy chủ CoAP."
            },
            {
              "id": "paper2_p3_colR_b8_s5",
              "en": "When compared to a wired connection, much larger RTTs and a much higher RTT jitter are observed over the",
              "vi": "Khi so sánh với kết nối có dây, RTT lớn hơn nhiều và độ biến động RTT cao hơn nhiều được quan sát thấy trên"
            }
          ]
        }
      ]
    },
    {
      "page_num": 4,
      "page_image": "assets/p2_page_4.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper2_p4_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": true,
          "table_img": "assets/p2_table1.png",
          "is_equation": false,
          "raw_text": "TABLE I: Overview of the Features of the Different Congestion Control Mechanisms",
          "sentences": [
            {
              "id": "paper2_p4_colL_b0_s0",
              "en": "TABLE I: Overview of the Features of the Different Congestion Control Mechanisms",
              "vi": "BẢNG I: Tổng quan về các tính năng của các cơ chế kiểm soát tắc nghẽn khác nhau"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Strong",
          "sentences": [
            {
              "id": "paper2_p4_colL_b1_s0",
              "en": "Strong",
              "vi": "Mạnh"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Weak RTTs Dithering Backoff",
          "sentences": [
            {
              "id": "paper2_p4_colL_b2_s0",
              "en": "Weak RTTs Dithering Backoff",
              "vi": "Backoff phối màu RTT yếu"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b3",
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
              "id": "paper2_p4_colL_b3_s0",
              "en": "RTO aging",
              "vi": "RTO lão hóa"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "RTTs",
          "sentences": [
            {
              "id": "paper2_p4_colL_b4_s0",
              "en": "RTTs",
              "vi": "RTT"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "method",
          "sentences": [
            {
              "id": "paper2_p4_colL_b5_s0",
              "en": "method",
              "vi": "phương pháp"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Default CoAP No No Yes BEB No No 2 Bytes IoT Traffic CoCoA Yes Yes Yes VBF Yes No 29 Bytes IoT Traffic (adaptive) CoCoA-S Yes No Yes VBF Yes No 19 Bytes IoT Traffic (adaptive) Basic RTO Yes Yes Yes BEB No Yes 2 Bytes Minimalist RTO Solution Linux RTO Yes No No BEB No Yes 21 Bytes TCP RTO Enhancement PH-RTO Yes No No BEB No Yes 43 Bytes TCP RTO Enhancement",
          "sentences": [
            {
              "id": "paper2_p4_colL_b6_s0",
              "en": "Default CoAP No No Yes BEB No No 2 Bytes IoT Traffic CoCoA Yes Yes Yes VBF Yes No 29 Bytes IoT Traffic (adaptive) CoCoA-S Yes No Yes VBF Yes No 19 Bytes IoT Traffic (adaptive) Basic RTO Yes Yes Yes BEB No Yes 2 Bytes Minimalist RTO Solution Linux RTO Yes No No BEB No Yes 21 Bytes TCP RTO Enhancement PH-RTO Yes No No BEB No Yes 43 Bytes TCP RTO Enhancement",
              "vi": "CoAP mặc định Không Không Có BEB Không Không 2 byte Lưu lượng IoT CoCoA Có Có Có VBF Có Không 29 byte Lưu lượng IoT (thích ứng) CoCoA-S Có Không Có VBF Có Không 19 byte Lưu lượng IoT (thích ứng) RTO cơ bản Có Có Có BEB Không Có 2 byte Giải pháp RTO tối giản Linux RTO Có Không Không BEB Không Có 21 byte TCP RTO Cải tiến PH-RTO Có Không Không BEB Không Có 43 Tăng cường byte TCP RTO"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "GPRS link, as well as a higher chance for packet losses. In our testbed we observe uplink/downlink data rates of approximately 15/40 kbit/s.",
          "sentences": [
            {
              "id": "paper2_p4_colL_b7_s0",
              "en": "GPRS link, as well as a higher chance for packet losses.",
              "vi": "Liên kết GPRS cũng như nguy cơ mất gói cao hơn."
            },
            {
              "id": "paper2_p4_colL_b7_s1",
              "en": "In our testbed we observe uplink/downlink data rates of approximately 15/40 kbit/s.",
              "vi": "Trong thử nghiệm của chúng tôi, chúng tôi quan sát thấy tốc độ dữ liệu đường lên/đường xuống khoảng 15/40 kbit/s."
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In this setup, both the CoAP clients and server run the Java Californium (Cf) CoAP [6] implementation. The alternative congestion control mechanisms considered in this paper are implemented and publicly available in Cf5. For a fair comparative evaluation, while the PH-RTO and Linux algorithms were designed for TCP, we have implemented these algorithms for CoAP (over UDP). Other TCP features are not present in our evaluation.",
          "sentences": [
            {
              "id": "paper2_p4_colL_b8_s0",
              "en": "In this setup, both the CoAP clients and server run the Java Californium (Cf) CoAP [6] implementation.",
              "vi": "Trong thiết lập này, cả máy khách và máy chủ CoAP đều chạy triển khai Java Californium (Cf) CoAP [6]."
            },
            {
              "id": "paper2_p4_colL_b8_s1",
              "en": "The alternative congestion control mechanisms considered in this paper are implemented and publicly available in Cf5.",
              "vi": "Các cơ chế kiểm soát tắc nghẽn thay thế được xem xét trong bài viết này được triển khai và công khai trong Cf5."
            },
            {
              "id": "paper2_p4_colL_b8_s2",
              "en": "For a fair comparative evaluation, while the PH-RTO and Linux algorithms were designed for TCP, we have implemented these algorithms for CoAP (over UDP).",
              "vi": "Để đánh giá so sánh công bằng, trong khi thuật toán PH-RTO và Linux được thiết kế cho TCP, chúng tôi đã triển khai các thuật toán này cho CoAP (qua UDP)."
            },
            {
              "id": "paper2_p4_colL_b8_s3",
              "en": "Other TCP features are not present in our evaluation.",
              "vi": "Các tính năng TCP khác không có trong đánh giá của chúng tôi."
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In the second setup, the interaction between a cloud service and a multihop, low-power wireless network is analyzed. CoAP clients running in the cloud service are connected via Ethernet to an IEEE 802.15.4 testbed where all motes run CoAP servers. FlockLab, a publicly available IEEE 802.15.4 indoor/outdoor testbed composed of 30 TelosB motes [7], is chosen for this setup, a publicly available IEEE 802.15.4 indoor/outdoor testbed composed of 30 TelosB motes [7]. The FlockLab motes run ContikiMAC [8] with radio duty cycling (RDC) enabled, which is required to save energy in real deployments. On the client side, Cf is used as CoAP implementation, while the server motes in FlockLab run the full IPv6-based ContikiOS stack for constrained devices, including the Erbium (Er) CoAP implementation [9].",
          "sentences": [
            {
              "id": "paper2_p4_colL_b9_s0",
              "en": "In the second setup, the interaction between a cloud service and a multihop, low-power wireless network is analyzed.",
              "vi": "Trong thiết lập thứ hai, sự tương tác giữa dịch vụ đám mây và mạng không dây công suất thấp, nhiều chặng sẽ được phân tích."
            },
            {
              "id": "paper2_p4_colL_b9_s1",
              "en": "CoAP clients running in the cloud service are connected via Ethernet to an IEEE 802.15.4 testbed where all motes run CoAP servers.",
              "vi": "Máy khách CoAP chạy trong dịch vụ đám mây được kết nối qua Ethernet với nền tảng thử nghiệm IEEE 802.15.4, nơi tất cả các máy điều khiển từ xa đều chạy máy chủ CoAP."
            },
            {
              "id": "paper2_p4_colL_b9_s2",
              "en": "FlockLab, a publicly available IEEE 802.15.4 indoor/outdoor testbed composed of 30 TelosB motes [7], is chosen for this setup, a publicly available IEEE 802.15.4 indoor/outdoor testbed composed of 30 TelosB motes [7].",
              "vi": "FlockLab, một thử nghiệm trong nhà/ngoài trời IEEE 802.15.4 có sẵn công khai bao gồm 30 mote TelosB [7], được chọn cho thiết lập này, một thử nghiệm trong nhà/ngoài trời IEEE 802.15.4 có sẵn công khai bao gồm 30 mote TelosB [7]."
            },
            {
              "id": "paper2_p4_colL_b9_s3",
              "en": "The FlockLab motes run ContikiMAC [8] with radio duty cycling (RDC) enabled, which is required to save energy in real deployments.",
              "vi": "Các điều khiển từ xa FlockLab chạy ContikiMAC [8] có bật chu kỳ nhiệm vụ vô tuyến (RDC), điều này cần thiết để tiết kiệm năng lượng khi triển khai thực tế."
            },
            {
              "id": "paper2_p4_colL_b9_s4",
              "en": "On the client side, Cf is used as CoAP implementation, while the server motes in FlockLab run the full IPv6-based ContikiOS stack for constrained devices, including the Erbium (Er) CoAP implementation [9].",
              "vi": "Về phía máy khách, Cf được sử dụng làm triển khai CoAP, trong khi các máy chủ trong FlockLab chạy toàn bộ ngăn xếp ContikiOS dựa trên IPv6 cho các thiết bị bị hạn chế, bao gồm cả triển khai Erbium (Er) CoAP [9]."
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "When compared to the GPRS setup, FlockLab imposes additional challenges for the congestion control mechanisms, such as a considerable packet loss rate and RTT variance due to different route lengths and RDC [9]. Packet losses in this setup mostly emerge from lossy links and from packet drops due to full buffers in the border router and relay nodes close to it. The border router is the FlockLab node that provides Internet connectivity to the Flocklab motes.",
          "sentences": [
            {
              "id": "paper2_p4_colL_b10_s0",
              "en": "When compared to the GPRS setup, FlockLab imposes additional challenges for the congestion control mechanisms, such as a considerable packet loss rate and RTT variance due to different route lengths and RDC [9].",
              "vi": "Khi so sánh với thiết lập GPRS, FlockLab đặt ra những thách thức bổ sung cho các cơ chế kiểm soát tắc nghẽn, chẳng hạn như tỷ lệ mất gói đáng kể và phương sai RTT do độ dài tuyến đường và RDC khác nhau [9]."
            },
            {
              "id": "paper2_p4_colL_b10_s1",
              "en": "Packet losses in this setup mostly emerge from lossy links and from packet drops due to full buffers in the border router and relay nodes close to it.",
              "vi": "Mất gói trong thiết lập này chủ yếu xuất phát từ các liên kết bị mất và do rớt gói do bộ đệm đầy trong bộ định tuyến biên và các nút chuyển tiếp gần nó."
            },
            {
              "id": "paper2_p4_colL_b10_s2",
              "en": "The border router is the FlockLab node that provides Internet connectivity to the Flocklab motes.",
              "vi": "Bộ định tuyến viền là nút FlockLab cung cấp kết nối Internet cho các vi mạch Flocklab."
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b11",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Traffic Scenarios",
          "sentences": [
            {
              "id": "paper2_p4_colL_b11_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper2_p4_colL_b11_s1",
              "en": "Traffic Scenarios",
              "vi": "Kịch bản giao thông"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "For both testbeds (GPRS and FlockLab), two traffic scenarios are defined to explore the effect of different congestion control mechanisms on the performance of CoAP communications:",
          "sentences": [
            {
              "id": "paper2_p4_colL_b12_s0",
              "en": "For both testbeds (GPRS and FlockLab), two traffic scenarios are defined to explore the effect of different congestion control mechanisms on the performance of CoAP communications:",
              "vi": "Đối với cả hai nền tảng thử nghiệm (GPRS và FlockLab), hai kịch bản lưu lượng được xác định để khám phá tác động của các cơ chế kiểm soát tắc nghẽn khác nhau đối với hiệu suất của truyền thông CoAP:"
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "1) Continuous Traffic: In this scenario, CoAP clients send CON requests to a CoAP server. When a client receives a reply from the server, the client immediately sends another CON request. Sending messages back-to-back by many clients simultaneously can create congestion. The number of clients is varied from 10 to 40 (in steps of 10) in order to achieve different degrees of",
          "sentences": [
            {
              "id": "paper2_p4_colL_b13_s0",
              "en": "1) Continuous Traffic: In this scenario, CoAP clients send CON requests to a CoAP server.",
              "vi": "1) Lưu lượng truy cập liên tục: Trong trường hợp này, máy khách CoAP gửi yêu cầu CON đến máy chủ CoAP."
            },
            {
              "id": "paper2_p4_colL_b13_s1",
              "en": "When a client receives a reply from the server, the client immediately sends another CON request.",
              "vi": "Khi máy khách nhận được phản hồi từ máy chủ, máy khách sẽ ngay lập tức gửi một yêu cầu CON khác."
            },
            {
              "id": "paper2_p4_colL_b13_s2",
              "en": "Sending messages back-to-back by many clients simultaneously can create congestion.",
              "vi": "Việc gửi tin nhắn liên tục bởi nhiều khách hàng cùng một lúc có thể tạo ra tắc nghẽn."
            },
            {
              "id": "paper2_p4_colL_b13_s3",
              "en": "The number of clients is varied from 10 to 40 (in steps of 10) in order to achieve different degrees of",
              "vi": "Số lượng khách hàng thay đổi từ 10 đến 40 (theo bước 10) để đạt được các mức độ khác nhau."
            }
          ]
        },
        {
          "id": "paper2_p4_colL_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "5https://github.com/eclipse/californium/tree/congestion-control",
          "sentences": [
            {
              "id": "paper2_p4_colL_b14_s0",
              "en": "5https://github.com/eclipse/californium/tree/congestion-control",
              "vi": "5https://github.com/eclipse/californium/tree/congestion-control"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p4_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Use backed-off RTO after no RTT update",
          "sentences": [
            {
              "id": "paper2_p4_colR_b0_s0",
              "en": "Use backed-off RTO after no RTT update",
              "vi": "Sử dụng RTO được sao lưu sau khi không cập nhật RTT"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "RAM usage",
          "sentences": [
            {
              "id": "paper2_p4_colR_b1_s0",
              "en": "RAM usage",
              "vi": "mức sử dụng RAM"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "per client Main Goal",
          "sentences": [
            {
              "id": "paper2_p4_colR_b2_s0",
              "en": "per client Main Goal",
              "vi": "mỗi khách hàng Mục tiêu chính"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "congestion. In the GPRS setup, one server is running on the destination device. In FlockLab, one client is assigned to each CoAP server mote in the testbed. A continuous traffic test lasts 180 s. 2) Burst Traffic: This scenario starts with a low congestion level, where 10 clients (GPRS) or 5 clients (FlockLab) generate continuous traffic of back-to-back CON requests. Then, a burst of traffic is generated by a new group of clients that send 50 (GPRS) or 25 (FlockLab) back-to-back CON requests to the servers. Such traffic patterns can correspond to a local event (such as alerts about presence, temperature, etc.). The burst of messages causes a congestion peak. For the GPRS setup, we vary the number of clients that generate burst traffic. In FlockLab, for each mote that is not a destination of continuous traffic, we create a client that generates burst traffic. Tests are repeated 15 times for each specific configuration.",
          "sentences": [
            {
              "id": "paper2_p4_colR_b3_s0",
              "en": "congestion.",
              "vi": "sự tắc nghẽn."
            },
            {
              "id": "paper2_p4_colR_b3_s1",
              "en": "In the GPRS setup, one server is running on the destination device.",
              "vi": "Trong thiết lập GPRS, một máy chủ đang chạy trên thiết bị đích."
            },
            {
              "id": "paper2_p4_colR_b3_s2",
              "en": "In FlockLab, one client is assigned to each CoAP server mote in the testbed.",
              "vi": "Trong FlockLab, một máy khách được chỉ định cho mỗi mote máy chủ CoAP trong môi trường thử nghiệm."
            },
            {
              "id": "paper2_p4_colR_b3_s3",
              "en": "A continuous traffic test lasts 180 s.",
              "vi": "Một bài kiểm tra lưu lượng truy cập liên tục kéo dài 180 giây."
            },
            {
              "id": "paper2_p4_colR_b3_s4",
              "en": "2) Burst Traffic: This scenario starts with a low congestion level, where 10 clients (GPRS) or 5 clients (FlockLab) generate continuous traffic of back-to-back CON requests.",
              "vi": "2) Lưu lượng truy cập bùng nổ: Kịch bản này bắt đầu với mức độ tắc nghẽn thấp, trong đó 10 khách hàng (GPRS) hoặc 5 khách hàng (FlockLab) tạo ra lưu lượng truy cập liên tục của các yêu cầu CON liên tục."
            },
            {
              "id": "paper2_p4_colR_b3_s5",
              "en": "Then, a burst of traffic is generated by a new group of clients that send 50 (GPRS) or 25 (FlockLab) back-to-back CON requests to the servers.",
              "vi": "Sau đó, một loạt lưu lượng truy cập được tạo ra bởi một nhóm khách hàng mới gửi 50 (GPRS) hoặc 25 (FlockLab) yêu cầu CON liên tiếp tới máy chủ."
            },
            {
              "id": "paper2_p4_colR_b3_s6",
              "en": "Such traffic patterns can correspond to a local event (such as alerts about presence, temperature, etc.).",
              "vi": "Các kiểu lưu lượng truy cập như vậy có thể tương ứng với một sự kiện cục bộ (chẳng hạn như cảnh báo về sự hiện diện, nhiệt độ, v.v.)."
            },
            {
              "id": "paper2_p4_colR_b3_s7",
              "en": "The burst of messages causes a congestion peak.",
              "vi": "Sự bùng nổ của các tin nhắn gây ra tình trạng tắc nghẽn cao điểm."
            },
            {
              "id": "paper2_p4_colR_b3_s8",
              "en": "For the GPRS setup, we vary the number of clients that generate burst traffic.",
              "vi": "Để thiết lập GPRS, chúng tôi thay đổi số lượng máy khách tạo ra lưu lượng truy cập bùng nổ."
            },
            {
              "id": "paper2_p4_colR_b3_s9",
              "en": "In FlockLab, for each mote that is not a destination of continuous traffic, we create a client that generates burst traffic.",
              "vi": "Trong FlockLab, đối với mỗi mote không phải là đích đến của lưu lượng truy cập liên tục, chúng tôi tạo một ứng dụng khách tạo ra lưu lượng truy cập bùng nổ."
            },
            {
              "id": "paper2_p4_colR_b3_s10",
              "en": "Tests are repeated 15 times for each specific configuration.",
              "vi": "Các thử nghiệm được lặp lại 15 lần cho từng cấu hình cụ thể."
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b4",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "VI. CONGESTION CONTROL EVALUATION RESULTS",
          "sentences": [
            {
              "id": "paper2_p4_colR_b4_s0",
              "en": "VI.",
              "vi": "VI."
            },
            {
              "id": "paper2_p4_colR_b4_s1",
              "en": "CONGESTION CONTROL EVALUATION RESULTS",
              "vi": "KẾT QUẢ ĐÁNH GIÁ KIỂM SOÁT TUYỆT VỜI"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b5",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "A. Performance Metrics",
          "sentences": [
            {
              "id": "paper2_p4_colR_b5_s0",
              "en": "A.",
              "vi": "A."
            },
            {
              "id": "paper2_p4_colR_b5_s1",
              "en": "Performance Metrics",
              "vi": "Số liệu hiệu suất"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In the continuous traffic scenario, the overall throughput as successfully finished transactions per second is chosen as performance metric, merging delay and packet delivery ratio into one single value.",
          "sentences": [
            {
              "id": "paper2_p4_colR_b6_s0",
              "en": "In the continuous traffic scenario, the overall throughput as successfully finished transactions per second is chosen as performance metric, merging delay and packet delivery ratio into one single value.",
              "vi": "Trong kịch bản lưu lượng truy cập liên tục, thông lượng (throughput) tổng thể khi các giao dịch được hoàn thành thành công mỗi giây được chọn làm thước đo hiệu suất, độ trễ hợp nhất và tỷ lệ phân phối gói thành một giá trị duy nhất."
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In the burst traffic scenario, we analyze the Settling Time of the different congestion control approaches. We define the Settling Time as the time it takes for the clients to finish at least 80% of the burst traffic transactions. This is an important metric, since traffic bursts are expected when CoAP transactions are event-based or transmissions from various senders are synchronized.",
          "sentences": [
            {
              "id": "paper2_p4_colR_b7_s0",
              "en": "In the burst traffic scenario, we analyze the Settling Time of the different congestion control approaches.",
              "vi": "Trong kịch bản lưu lượng truy cập bùng nổ, chúng tôi phân tích Thời gian giải quyết của các phương pháp kiểm soát tắc nghẽn khác nhau."
            },
            {
              "id": "paper2_p4_colR_b7_s1",
              "en": "We define the Settling Time as the time it takes for the clients to finish at least 80% of the burst traffic transactions.",
              "vi": "Chúng tôi xác định Thời gian giải quyết là thời gian để khách hàng hoàn thành ít nhất 80% giao dịch lưu lượng truy cập bùng nổ."
            },
            {
              "id": "paper2_p4_colR_b7_s2",
              "en": "This is an important metric, since traffic bursts are expected when CoAP transactions are event-based or transmissions from various senders are synchronized.",
              "vi": "Đây là một số liệu quan trọng vì dự kiến ​​sẽ có sự bùng nổ lưu lượng khi giao dịch CoAP dựa trên sự kiện hoặc quá trình truyền từ nhiều người gửi khác nhau được đồng bộ hóa."
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Furthermore, the congestion control mechanisms behavior is analyzed regarding their fairness in FlockLab, which is challenging given the different path lengths and the tree-like topology of the scenario. Jain’s Fairness Index (FI) 6 is used as the fairness metric, which ranges between 0 and 1, and a higher FI indicates a higher fairness level.",
          "sentences": [
            {
              "id": "paper2_p4_colR_b8_s0",
              "en": "Furthermore, the congestion control mechanisms behavior is analyzed regarding their fairness in FlockLab, which is challenging given the different path lengths and the tree-like topology of the scenario.",
              "vi": "Hơn nữa, hành vi của cơ chế kiểm soát tắc nghẽn được phân tích về tính công bằng của chúng trong FlockLab, đây là thách thức do các độ dài đường dẫn khác nhau và cấu trúc liên kết dạng cây của kịch bản."
            },
            {
              "id": "paper2_p4_colR_b8_s1",
              "en": "Jain’s Fairness Index (FI) 6 is used as the fairness metric, which ranges between 0 and 1, and a higher FI indicates a higher fairness level.",
              "vi": "Chỉ số Công bằng của Jain (FI) 6 được sử dụng làm thước đo công bằng, nằm trong khoảng từ 0 đến 1 và FI cao hơn cho thấy mức độ công bằng cao hơn."
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b9",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "B. Throughput Results",
          "sentences": [
            {
              "id": "paper2_p4_colR_b9_s0",
              "en": "B.",
              "vi": "B."
            },
            {
              "id": "paper2_p4_colR_b9_s1",
              "en": "Throughput Results",
              "vi": "Kết quả thông lượng (throughput)"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Nearly all RTT-sensitive mechanisms outperform default CoAP independently from the network setup in terms of throughput in the continuous traffic scenario (Fig. 1).",
          "sentences": [
            {
              "id": "paper2_p4_colR_b10_s0",
              "en": "Nearly all RTT-sensitive mechanisms outperform default CoAP independently from the network setup in terms of throughput in the continuous traffic scenario (Fig. 1).",
              "vi": "Gần như tất cả các cơ chế nhạy cảm với RTT đều hoạt động tốt hơn CoAP mặc định một cách độc lập với thiết lập mạng về mặt thông lượng (throughput) trong kịch bản lưu lượng truy cập liên tục (Hình 1)."
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In the GPRS setup, since the packet loss rate is low, the performance mainly depends on how the RTO algorithms adapt to the RTT. In this setup, RTT increases with the amount",
          "sentences": [
            {
              "id": "paper2_p4_colR_b11_s0",
              "en": "In the GPRS setup, since the packet loss rate is low, the performance mainly depends on how the RTO algorithms adapt to the RTT.",
              "vi": "Trong thiết lập GPRS, do tốc độ mất gói thấp nên hiệu suất chủ yếu phụ thuộc vào cách các thuật toán RTO thích ứng với RTT."
            },
            {
              "id": "paper2_p4_colR_b11_s1",
              "en": "In this setup, RTT increases with the amount",
              "vi": "Trong thiết lập này, RTT tăng theo số lượng"
            }
          ]
        },
        {
          "id": "paper2_p4_colR_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "6http://www.rfc-base.org/rfc-5166.html",
          "sentences": [
            {
              "id": "paper2_p4_colR_b12_s0",
              "en": "6http://www.rfc-base.org/rfc-5166.html",
              "vi": "6http://www.rfc-base.org/rfc-5166.html"
            }
          ]
        }
      ]
    },
    {
      "page_num": 5,
      "page_image": "assets/p2_page_5.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper2_p5_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": true,
          "table_img": null,
          "is_equation": false,
          "raw_text": "TABLE II: Comparison of the Average RTT and Initial RTO Values in Milliseconds for Different Numbers of Clients in the GPRS Setup and the FlockLab Setup",
          "sentences": [
            {
              "id": "paper2_p5_colL_b0_s0",
              "en": "TABLE II: Comparison of the Average RTT and Initial RTO Values in Milliseconds for Different Numbers of Clients in the GPRS Setup and the FlockLab Setup",
              "vi": "BẢNG II: So sánh giá trị RTT trung bình và RTO ban đầu tính bằng mili giây cho số lượng khách hàng khác nhau trong Thiết lập GPRS và Thiết lập FlockLab"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10 GPRS clients 20 GPRS clients 30 GPRS clients 40 GPRS clients FlockLab RTT RTO RTT RTO RTT RTO RTT RTO RTT RTO Default CoAP - 2497 - 2499 - 2499 - 2506 - 2505 CoCoA 661 1505 1437 3379 1936 4119 2796 5431 1507 3710 CoCoA-S 625 1428 1275 2903 1880 4122 2795 4928 656 3227 B-RTO 1025 1152 1962 2198 2983 3272 4733 4441 3172 3266 Linux RTO 682 1325 1550 2801 1863 3345 2931 5797 598 4424 PH-RTO 746 1797 1835 3703 1827 4112 3194 6213 625 4796",
          "sentences": [
            {
              "id": "paper2_p5_colL_b1_s0",
              "en": "10 GPRS clients 20 GPRS clients 30 GPRS clients 40 GPRS clients FlockLab RTT RTO RTT RTO RTT RTO RTT RTO RTT RTO Default CoAP - 2497 - 2499 - 2499 - 2506 - 2505 CoCoA 661 1505 1437 3379 1936 4119 2796 5431 1507 3710 CoCoA-S 625 1428 1275 2903 1880 4122 2795 4928 656 3227 B-RTO 1025 1152 1962 2198 2983 3272 4733 4441 3172 3266 Linux RTO 682 1325 1550 2801 1863 3345 2931 5797 598 4424 PH-RTO 746 1797 1835 3703 1827 4112 3194 6213 625 4796",
              "vi": "10 máy khách GPRS 20 máy khách GPRS 30 máy khách GPRS 40 máy khách GPRS 40 máy khách GPRS FlockLab RTT RTO RTT RTO RTT RTO RTT RTO RTT RTO CoAP mặc định - 2497 - 2499 - 2499 - 2506 - 2505 CoCoA 661 1505 1437 3379 1936 4119 2796 5431 1507 3710 CoCoA-S 625 1428 1275 2903 1880 4122 2795 4928 656 3227 B-RTO 1025 1152 1962 2198 2983 3272 4733 4441 3172 3266 Linux RTO 682 1325 1550 2801 1863 3345 2931 5797 598 4424 PH-RTO 746 1797 1835 3703 1827 4112 3194 6213 625 4796"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Default CoCoA CoCoA−S Basic Linux PH",
          "sentences": [
            {
              "id": "paper2_p5_colL_b2_s0",
              "en": "Default CoCoA CoCoA−S Basic Linux PH",
              "vi": "Mặc định CoCoA CoCoA−S Linux cơ bản PH"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "25",
          "sentences": [
            {
              "id": "paper2_p5_colL_b3_s0",
              "en": "25",
              "vi": "25"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Finished Transactions per Second (FlockLab)",
          "sentences": [
            {
              "id": "paper2_p5_colL_b5_s0",
              "en": "Finished Transactions per Second (FlockLab)",
              "vi": "Số giao dịch đã hoàn thành mỗi giây (FlockLab)"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Finished Transactions per Second (GPRS)",
          "sentences": [
            {
              "id": "paper2_p5_colL_b6_s0",
              "en": "Finished Transactions per Second (GPRS)",
              "vi": "Số giao dịch đã hoàn thành mỗi giây (GPRS)"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "4.5",
          "sentences": [
            {
              "id": "paper2_p5_colL_b7_s0",
              "en": "4.5",
              "vi": "4.5"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "20",
          "sentences": [
            {
              "id": "paper2_p5_colL_b8_s0",
              "en": "20",
              "vi": "20"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "3.5",
          "sentences": [
            {
              "id": "paper2_p5_colL_b10_s0",
              "en": "3.5",
              "vi": "3.5"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "15",
          "sentences": [
            {
              "id": "paper2_p5_colL_b11_s0",
              "en": "15",
              "vi": "15"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "2.5",
          "sentences": [
            {
              "id": "paper2_p5_colL_b13_s0",
              "en": "2.5",
              "vi": "2.5"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10",
          "sentences": [
            {
              "id": "paper2_p5_colL_b14_s0",
              "en": "10",
              "vi": "10"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b16",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "1.5",
          "sentences": [
            {
              "id": "paper2_p5_colL_b16_s0",
              "en": "1.5",
              "vi": "1.5"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b19",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.5",
          "sentences": [
            {
              "id": "paper2_p5_colL_b19_s0",
              "en": "0.5",
              "vi": "0.5"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b20",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10 Clients 20 Clients 30 Clients 40 Clients FlockLab 0",
          "sentences": [
            {
              "id": "paper2_p5_colL_b20_s0",
              "en": "10 Clients 20 Clients 30 Clients 40 Clients FlockLab 0",
              "vi": "10 Khách hàng 20 Khách hàng 30 Khách hàng 40 Khách hàng FlockLab 0"
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b22",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": "assets/p2_fig1.png",
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 1: Average throughput with 95% confidence intervals achieved by the evaluated congestion control mechanisms in the GPRS and FlockLab setups.",
          "sentences": [
            {
              "id": "paper2_p5_colL_b22_s0",
              "en": "Fig. 1: Average throughput with 95% confidence intervals achieved by the evaluated congestion control mechanisms in the GPRS and FlockLab setups.",
              "vi": "Hình 1: thông lượng (throughput) trung bình với khoảng tin cậy 95% đạt được nhờ các cơ chế kiểm soát tắc nghẽn được đánh giá trong thiết lập GPRS và FlockLab."
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b23",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "of active clients due to the delay introduced by the queuing of packets in the GPRS modem, which occurs since the overall generated data rate exceeds the uplink capacity. With the average RTT increase, the RTT-sensitive RTO algorithms increase their initial RTO values (Table II). In FlockLab, the average RTT is small, yet the average initial RTO for RTT-sensitive algorithms is larger than in the GPRS setup. This can be ascribed to a greater amount of weak RTTs that increase the RTO value and backed-off RTO values due to packet drops as a consequence of overflowing buffers near the border router, where traffic mostly concentrates.",
          "sentences": [
            {
              "id": "paper2_p5_colL_b23_s0",
              "en": "of active clients due to the delay introduced by the queuing of packets in the GPRS modem, which occurs since the overall generated data rate exceeds the uplink capacity.",
              "vi": "của các máy khách đang hoạt động do độ trễ do việc xếp hàng các gói trong modem GPRS, xảy ra do tốc độ dữ liệu tổng thể được tạo ra vượt quá dung lượng đường lên."
            },
            {
              "id": "paper2_p5_colL_b23_s1",
              "en": "With the average RTT increase, the RTT-sensitive RTO algorithms increase their initial RTO values (Table II).",
              "vi": "Với mức tăng RTT trung bình, thuật toán RTO nhạy cảm với RTT sẽ tăng giá trị RTO ban đầu của chúng (Bảng II)."
            },
            {
              "id": "paper2_p5_colL_b23_s2",
              "en": "In FlockLab, the average RTT is small, yet the average initial RTO for RTT-sensitive algorithms is larger than in the GPRS setup. This can be ascribed to a greater amount of weak RTTs that increase the RTO value and backed-off RTO values due to packet drops as a consequence of overflowing buffers near the border router, where traffic mostly concentrates.",
              "vi": "Trong FlockLab, RTT trung bình là nhỏ, tuy nhiên RTO ban đầu trung bình cho các thuật toán nhạy cảm với RTT lại lớn hơn trong thiết lập GPRS. Điều này có thể được quy cho số lượng RTT yếu lớn hơn làm tăng giá trị RTO và giá trị RTO dự phòng do mất gói do hậu quả của việc tràn bộ đệm (buffer overflow) gần bộ định tuyến biên, nơi lưu lượng truy cập chủ yếu tập trung."
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b24",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Default CoAP underperforms independently from the setup (except in the GPRS setup with B-RTO) since it uses a fixed range of initial RTO values and does not adapt to the current RTT. If the real RTT is noticeably below the default RTO range, CoAP reacts slowly to losses. If the RTT lies in the RTO range or even exceeds it, spurious retransmissions are likely to happen, as indicated by the increasing percentage of retransmissions with the number of clients in GPRS (Fig. 2).",
          "sentences": [
            {
              "id": "paper2_p5_colL_b24_s0",
              "en": "Default CoAP underperforms independently from the setup (except in the GPRS setup with B-RTO) since it uses a fixed range of initial RTO values and does not adapt to the current RTT.",
              "vi": "CoAP mặc định hoạt động kém hơn so với thiết lập (ngoại trừ trong thiết lập GPRS với B-RTO) vì nó sử dụng một phạm vi giá trị RTO ban đầu cố định và không thích ứng với RTT hiện tại."
            },
            {
              "id": "paper2_p5_colL_b24_s1",
              "en": "If the real RTT is noticeably below the default RTO range, CoAP reacts slowly to losses.",
              "vi": "Nếu RTT thực thấp hơn đáng kể so với phạm vi RTO mặc định, CoAP sẽ phản ứng chậm với tổn thất."
            },
            {
              "id": "paper2_p5_colL_b24_s2",
              "en": "If the RTT lies in the RTO range or even exceeds it, spurious retransmissions are likely to happen, as indicated by the increasing percentage of retransmissions with the number of clients in GPRS (Fig. 2).",
              "vi": "Nếu RTT nằm trong phạm vi RTO hoặc thậm chí vượt quá phạm vi đó thì việc truyền lại giả có thể xảy ra, được biểu thị bằng tỷ lệ phần trăm truyền lại ngày càng tăng với số lượng khách hàng trong GPRS (Hình 2)."
            }
          ]
        },
        {
          "id": "paper2_p5_colL_b25",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoCoA achieves the highest throughput in the GPRS setup. In the same setup, CoCoA-S does not perform as well as CoCoA since it only allows strong RTT measurements, generally resulting in slightly lower RTO values and thus increasing the probability of spurious retransmissions (see Fig. 2). In FlockLab, CoCoA and CoCoA-S perform very similarly. Their features allow to benefit especially from links with good connections and small RTTs, but they also adapt",
          "sentences": [
            {
              "id": "paper2_p5_colL_b25_s0",
              "en": "CoCoA achieves the highest throughput in the GPRS setup. In the same setup, CoCoA-S does not perform as well as CoCoA since it only allows strong RTT measurements, generally resulting in slightly lower RTO values and thus increasing the probability of spurious retransmissions (see Fig. 2).",
              "vi": "CoCoA đạt được thông lượng (throughput) cao nhất trong thiết lập GPRS. Trong cùng một thiết lập, CoCoA-S không hoạt động tốt như CoCoA vì nó chỉ cho phép đo RTT mạnh, thường dẫn đến giá trị RTO thấp hơn một chút và do đó làm tăng xác suất truyền lại giả (xem Hình 2)."
            },
            {
              "id": "paper2_p5_colL_b25_s1",
              "en": "In FlockLab, CoCoA and CoCoA-S perform very similarly.",
              "vi": "Trong FlockLab, CoCoA và CoCoA-S hoạt động rất giống nhau."
            },
            {
              "id": "paper2_p5_colL_b25_s2",
              "en": "Their features allow to benefit especially from links with good connections and small RTTs, but they also adapt",
              "vi": "Các tính năng của chúng cho phép hưởng lợi đặc biệt từ các liên kết có kết nối tốt và RTT nhỏ, nhưng chúng cũng thích ứng"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p5_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Default CoCoA CoCoA−S Basic Linux PH",
          "sentences": [
            {
              "id": "paper2_p5_colR_b0_s0",
              "en": "Default CoCoA CoCoA−S Basic Linux PH",
              "vi": "Mặc định CoCoA CoCoA−S Linux cơ bản PH"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "55%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b1_s0",
              "en": "55%",
              "vi": "55%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "50%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b2_s0",
              "en": "50%",
              "vi": "50%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "45%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b3_s0",
              "en": "45%",
              "vi": "45%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "40%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b4_s0",
              "en": "40%",
              "vi": "40%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Retransmission Ratio",
          "sentences": [
            {
              "id": "paper2_p5_colR_b5_s0",
              "en": "Retransmission Ratio",
              "vi": "Tỷ lệ truyền lại"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "35%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b6_s0",
              "en": "35%",
              "vi": "35%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "30%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b7_s0",
              "en": "30%",
              "vi": "30%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "25%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b8_s0",
              "en": "25%",
              "vi": "25%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "20%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b9_s0",
              "en": "20%",
              "vi": "20%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "15%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b10_s0",
              "en": "15%",
              "vi": "15%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10%",
          "sentences": [
            {
              "id": "paper2_p5_colR_b11_s0",
              "en": "10%",
              "vi": "10%"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b12",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "5 %",
          "sentences": [
            {
              "id": "paper2_p5_colR_b12_s0",
              "en": "5 %",
              "vi": "5 %"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10 GPRS Cl. 20 GPRS Cl. 30 GPRS Cl. 40 GPRS Cl. FlockLab 0 %",
          "sentences": [
            {
              "id": "paper2_p5_colR_b13_s0",
              "en": "10 GPRS Cl.",
              "vi": "10 GPRSCl."
            },
            {
              "id": "paper2_p5_colR_b13_s1",
              "en": "20 GPRS Cl.",
              "vi": "20 GPRSCl."
            },
            {
              "id": "paper2_p5_colR_b13_s2",
              "en": "30 GPRS Cl.",
              "vi": "30 GPRSCl."
            },
            {
              "id": "paper2_p5_colR_b13_s3",
              "en": "40 GPRS Cl.",
              "vi": "40 GPRSCl."
            },
            {
              "id": "paper2_p5_colR_b13_s4",
              "en": "FlockLab 0 %",
              "vi": "FlockLab 0 %"
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": "assets/p2_fig2.png",
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 2: Average percentage of CoAP retransmissions over all CoAP transmissions observed for the evaluated congestion control mechanisms in the GPRS and FlockLab setups.",
          "sentences": [
            {
              "id": "paper2_p5_colR_b14_s0",
              "en": "Fig. 2: Average percentage of CoAP retransmissions over all CoAP transmissions observed for the evaluated congestion control mechanisms in the GPRS and FlockLab setups.",
              "vi": "Hình 2: Tỷ lệ phần trăm trung bình của số lần truyền lại CoAP trên tất cả các lần truyền CoAP được quan sát đối với các cơ chế kiểm soát tắc nghẽn được đánh giá trong thiết lập GPRS và FlockLab."
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b15",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "the RTO and avoid bogus values even in a lossy network: the VBF and the aging mechanisms effectively limit the growth of RTO values when retransmissions are necessary. Without these features, CoCoA would tend to calculate very large RTO values for retransmissions using the BEB, whereas the overall RTO would not be shifted towards the default value of 2 s in absence of further RTO updates.",
          "sentences": [
            {
              "id": "paper2_p5_colR_b15_s0",
              "en": "the RTO and avoid bogus values even in a lossy network: the VBF and the aging mechanisms effectively limit the growth of RTO values when retransmissions are necessary.",
              "vi": "RTO và tránh các giá trị giả ngay cả trong mạng bị tổn hao: VBF và các cơ chế lão hóa hạn chế một cách hiệu quả sự tăng trưởng của các giá trị RTO khi cần truyền lại."
            },
            {
              "id": "paper2_p5_colR_b15_s1",
              "en": "Without these features, CoCoA would tend to calculate very large RTO values for retransmissions using the BEB, whereas the overall RTO would not be shifted towards the default value of 2 s in absence of further RTO updates.",
              "vi": "Nếu không có các tính năng này, CoCoA sẽ có xu hướng tính toán các giá trị RTO rất lớn cho các lần truyền lại bằng BEB, trong khi RTO tổng thể sẽ không được chuyển về giá trị mặc định là 2 giây nếu không có các bản cập nhật RTO tiếp theo."
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b16",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "The throughput obtained with B-RTO suffers noticeably due to its simplicity. If after measuring a small RTT the following transaction RTT is larger, which is likely given the RTT fluctuations in both network setups, the RTO timer will fire ahead of time with a high probability. In fact, B-RTO exhibits the highest retransmit ratio of all tested algorithms in all settings (Fig. 2). On the other hand, when a large RTT is measured, the next RTO used by B-RTO can grow very large due to the random multiplier, potentially leading to low throughput.",
          "sentences": [
            {
              "id": "paper2_p5_colR_b16_s0",
              "en": "The throughput obtained with B-RTO suffers noticeably due to its simplicity.",
              "vi": "thông lượng (throughput) thu được với B-RTO bị giảm đáng kể do tính đơn giản của nó."
            },
            {
              "id": "paper2_p5_colR_b16_s1",
              "en": "If after measuring a small RTT the following transaction RTT is larger, which is likely given the RTT fluctuations in both network setups, the RTO timer will fire ahead of time with a high probability.",
              "vi": "Nếu sau khi đo RTT nhỏ thì RTT của giao dịch tiếp theo lớn hơn, điều này có thể do RTT biến động trong cả hai thiết lập mạng, bộ hẹn giờ RTO sẽ kích hoạt trước thời hạn với xác suất cao."
            },
            {
              "id": "paper2_p5_colR_b16_s2",
              "en": "In fact, B-RTO exhibits the highest retransmit ratio of all tested algorithms in all settings (Fig. 2).",
              "vi": "Trên thực tế, B-RTO thể hiện tỷ lệ truyền lại cao nhất trong tất cả các thuật toán được thử nghiệm trong tất cả cài đặt (Hình 2)."
            },
            {
              "id": "paper2_p5_colR_b16_s3",
              "en": "On the other hand, when a large RTT is measured, the next RTO used by B-RTO can grow very large due to the random multiplier, potentially leading to low throughput.",
              "vi": "Mặt khác, khi đo RTT lớn, RTO tiếp theo được B-RTO sử dụng có thể tăng rất lớn do hệ số nhân ngẫu nhiên, có khả năng dẫn đến thông lượng (throughput) thấp."
            }
          ]
        },
        {
          "id": "paper2_p5_colR_b17",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "While Linux and PH-RTO perform better than default CoAP, they are not able to outperform CoCoA. Linux often calculates smaller RTO values, causing a higher amount of spurious retransmissions (Fig. 2), since contrarily to CoCoA it does not increase the RTO when the RTT decreases. The PH-RTO reacts to a sudden RTT increase with a peak in the RTO that then slowly decays in the following transactions. However, given the continuous RTT jittering that is characteristic for both network setups, a sudden RTO increase may not",
          "sentences": [
            {
              "id": "paper2_p5_colR_b17_s0",
              "en": "While Linux and PH-RTO perform better than default CoAP, they are not able to outperform CoCoA.",
              "vi": "Mặc dù Linux và PH-RTO hoạt động tốt hơn CoAP mặc định nhưng chúng không thể hoạt động tốt hơn CoCoA."
            },
            {
              "id": "paper2_p5_colR_b17_s1",
              "en": "Linux often calculates smaller RTO values, causing a higher amount of spurious retransmissions (Fig. 2), since contrarily to CoCoA it does not increase the RTO when the RTT decreases.",
              "vi": "Linux thường tính toán các giá trị RTO nhỏ hơn, gây ra số lượng truyền lại giả cao hơn (Hình 2), vì trái ngược với CoCoA, nó không tăng RTO khi RTT giảm."
            },
            {
              "id": "paper2_p5_colR_b17_s2",
              "en": "The PH-RTO reacts to a sudden RTT increase with a peak in the RTO that then slowly decays in the following transactions.",
              "vi": "PH-RTO phản ứng với sự gia tăng RTT đột ngột bằng cách RTO đạt đỉnh, sau đó giảm dần trong các giao dịch tiếp theo."
            },
            {
              "id": "paper2_p5_colR_b17_s3",
              "en": "However, given the continuous RTT jittering that is characteristic for both network setups, a sudden RTO increase may not",
              "vi": "Tuy nhiên, do hiện tượng rung lắc RTT liên tục là đặc trưng của cả hai thiết lập mạng nên việc tăng RTO đột ngột có thể không"
            }
          ]
        }
      ]
    },
    {
      "page_num": 6,
      "page_image": "assets/p2_page_6.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper2_p6_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Default CoCoA CoCoA−S Basic Linux PH",
          "sentences": [
            {
              "id": "paper2_p6_colL_b0_s0",
              "en": "Default CoCoA CoCoA−S Basic Linux PH",
              "vi": "Mặc định CoCoA CoCoA−S Linux cơ bản PH"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "200",
          "sentences": [
            {
              "id": "paper2_p6_colL_b1_s0",
              "en": "200",
              "vi": "200"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Settling Time (s)",
          "sentences": [
            {
              "id": "paper2_p6_colL_b2_s0",
              "en": "Settling Time (s)",
              "vi": "Thời gian giải quyết (s)"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "150",
          "sentences": [
            {
              "id": "paper2_p6_colL_b3_s0",
              "en": "150",
              "vi": "150"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "100",
          "sentences": [
            {
              "id": "paper2_p6_colL_b4_s0",
              "en": "100",
              "vi": "100"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "50",
          "sentences": [
            {
              "id": "paper2_p6_colL_b5_s0",
              "en": "50",
              "vi": "50"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "10 GPRS Cl. 20 GPRS Cl. 30 GPRS Cl. FlockLab 0",
          "sentences": [
            {
              "id": "paper2_p6_colL_b6_s0",
              "en": "10 GPRS Cl.",
              "vi": "10 GPRSCl."
            },
            {
              "id": "paper2_p6_colL_b6_s1",
              "en": "20 GPRS Cl.",
              "vi": "20 GPRSCl."
            },
            {
              "id": "paper2_p6_colL_b6_s2",
              "en": "30 GPRS Cl.",
              "vi": "30 GPRSCl."
            },
            {
              "id": "paper2_p6_colL_b6_s3",
              "en": "FlockLab 0",
              "vi": "Đàn Lab 0"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": "assets/p2_fig3.png",
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 3: Average Settling Times with 95% confidence intervals achieved by the different RTO mechanisms in the burst traffic scenario. For the GPRS experiment results, Settling Times larger than 180 s are valuated as 180 s.",
          "sentences": [
            {
              "id": "paper2_p6_colL_b7_s0",
              "en": "Fig. 3: Average Settling Times with 95% confidence intervals achieved by the different RTO mechanisms in the burst traffic scenario.",
              "vi": "Hình 3: Thời gian ổn định trung bình với khoảng tin cậy 95% đạt được nhờ các cơ chế RTO khác nhau trong kịch bản lưu lượng truy cập bùng nổ."
            },
            {
              "id": "paper2_p6_colL_b7_s1",
              "en": "For the GPRS experiment results, Settling Times larger than 180 s are valuated as 180 s.",
              "vi": "Đối với kết quả thử nghiệm GPRS, Thời gian giải quyết lớn hơn 180 giây được định giá là 180 giây."
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "be necessary and can lead to larger idle times if subsequent packets are lost. A disadvantage of both Linux and PH-RTO is their limitation to using only strong RTTs, while weak RTT measurements could provide additional RTO estimator updates. Instead, the old RTO is maintained and backed-off, i.e., large RTO values are reused for new transactions. The reuse of backed-off RTO values by these two algorithms happens frequently in FlockLab due to packet losses, leading to long idle times that reduce throughput.",
          "sentences": [
            {
              "id": "paper2_p6_colL_b8_s0",
              "en": "be necessary and can lead to larger idle times if subsequent packets are lost.",
              "vi": "là cần thiết và có thể dẫn đến thời gian nhàn rỗi lớn hơn nếu các gói tiếp theo bị mất."
            },
            {
              "id": "paper2_p6_colL_b8_s1",
              "en": "A disadvantage of both Linux and PH-RTO is their limitation to using only strong RTTs, while weak RTT measurements could provide additional RTO estimator updates.",
              "vi": "Một nhược điểm của cả Linux và PH-RTO là hạn chế của chúng là chỉ sử dụng RTT mạnh, trong khi các phép đo RTT yếu có thể cung cấp các cập nhật bổ sung cho công cụ ước tính RTO."
            },
            {
              "id": "paper2_p6_colL_b8_s2",
              "en": "Instead, the old RTO is maintained and backed-off, i.e., large RTO values are reused for new transactions.",
              "vi": "Thay vào đó, RTO cũ được duy trì và dự phòng, tức là các giá trị RTO lớn được sử dụng lại cho các giao dịch mới."
            },
            {
              "id": "paper2_p6_colL_b8_s3",
              "en": "The reuse of backed-off RTO values by these two algorithms happens frequently in FlockLab due to packet losses, leading to long idle times that reduce throughput.",
              "vi": "Việc sử dụng lại các giá trị RTO được sao lưu bằng hai thuật toán này xảy ra thường xuyên trong FlockLab do mất gói, dẫn đến thời gian nhàn rỗi kéo dài làm giảm thông lượng (throughput)."
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b9",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "C. Settling Time Results",
          "sentences": [
            {
              "id": "paper2_p6_colL_b9_s0",
              "en": "C.",
              "vi": "C."
            },
            {
              "id": "paper2_p6_colL_b9_s1",
              "en": "Settling Time Results",
              "vi": "Kết quả thời gian giải quyết"
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": "assets/p2_fig3.png",
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 3 shows the average Settling Times obtained by the congestion control mechanisms in the burst traffic scenario. In the GPRS setup, results reveal that all RTT-sensitive mechanisms, except B-RTO, are able to improve the performance of default CoAP when there is congestion. For 10 burst clients (i.e., low congestion), the different congestion control approaches perform similarly, except for B-RTO since it tends to produce spurious retransmissions. When the amount of burst clients increases to 20 and 30, the RTT-sensitive mechanisms adjust their RTOs to higher RTT values. CoCoA does this most efficiently, followed by Linux-RTO, PH-RTO, and CoCoA-S, which perform slightly worse. While CoCoA-S tends to be too aggressive during the burst, Linux-RTO and PH-RTO need slightly longer time to adjust their RTO timers during congestion, since they do not exploit weak RTT information. The VBF and the aging mechanisms used in CoCoA reduce the chances for spurious retrans- missions or long idle times, effectively increasing performance. With few clients and short RTTs, B-RTO deteriorates performance, being too aggressive. However, it gets more conservative with more clients and larger RTTs, eventually increasing performance when compared to default CoAP, which does not adapt the RTO timers at all.",
          "sentences": [
            {
              "id": "paper2_p6_colL_b10_s0",
              "en": "Fig. 3 shows the average Settling Times obtained by the congestion control mechanisms in the burst traffic scenario.",
              "vi": "Hình 3 cho thấy Thời gian giải quyết trung bình thu được từ các cơ chế kiểm soát tắc nghẽn trong kịch bản lưu lượng truy cập bùng nổ."
            },
            {
              "id": "paper2_p6_colL_b10_s1",
              "en": "In the GPRS setup, results reveal that all RTT-sensitive mechanisms, except B-RTO, are able to improve the performance of default CoAP when there is congestion.",
              "vi": "Trong thiết lập GPRS, kết quả cho thấy tất cả các cơ chế nhạy cảm với RTT, ngoại trừ B-RTO, đều có thể cải thiện hiệu suất của CoAP mặc định khi có tắc nghẽn."
            },
            {
              "id": "paper2_p6_colL_b10_s2",
              "en": "For 10 burst clients (i.e., low congestion), the different congestion control approaches perform similarly, except for B-RTO since it tends to produce spurious retransmissions.",
              "vi": "Đối với 10 máy khách cụm (tức là mức tắc nghẽn thấp), các phương pháp kiểm soát tắc nghẽn khác nhau thực hiện tương tự, ngoại trừ B-RTO vì nó có xu hướng tạo ra các lần truyền lại giả."
            },
            {
              "id": "paper2_p6_colL_b10_s3",
              "en": "When the amount of burst clients increases to 20 and 30, the RTT-sensitive mechanisms adjust their RTOs to higher RTT values.",
              "vi": "Khi số lượng máy khách bùng nổ tăng lên 20 và 30, cơ chế nhạy cảm với RTT sẽ điều chỉnh RTO của chúng thành giá trị RTT cao hơn."
            },
            {
              "id": "paper2_p6_colL_b10_s4",
              "en": "CoCoA does this most efficiently, followed by Linux-RTO, PH-RTO, and CoCoA-S, which perform slightly worse.",
              "vi": "CoCoA thực hiện điều này một cách hiệu quả nhất, tiếp theo là Linux-RTO, PH-RTO và CoCoA-S, hoạt động kém hơn một chút."
            },
            {
              "id": "paper2_p6_colL_b10_s5",
              "en": "While CoCoA-S tends to be too aggressive during the burst, Linux-RTO and PH-RTO need slightly longer time to adjust their RTO timers during congestion, since they do not exploit weak RTT information.",
              "vi": "Trong khi CoCoA-S có xu hướng hoạt động quá mạnh trong thời gian bùng nổ, Linux-RTO và PH-RTO cần thời gian lâu hơn một chút để điều chỉnh bộ tính giờ RTO của chúng trong thời gian tắc nghẽn vì chúng không khai thác thông tin RTT yếu."
            },
            {
              "id": "paper2_p6_colL_b10_s6",
              "en": "The VBF and the aging mechanisms used in CoCoA reduce the chances for spurious retrans- missions or long idle times, effectively increasing performance.",
              "vi": "VBF và các cơ chế lão hóa được sử dụng trong CoCoA giúp giảm nguy cơ truyền lại giả mạo hoặc thời gian nhàn rỗi kéo dài, giúp tăng hiệu suất một cách hiệu quả."
            },
            {
              "id": "paper2_p6_colL_b10_s7",
              "en": "With few clients and short RTTs, B-RTO deteriorates performance, being too aggressive.",
              "vi": "Với ít khách hàng và RTT ngắn, B-RTO làm giảm hiệu suất và trở nên quá hung hãn."
            },
            {
              "id": "paper2_p6_colL_b10_s8",
              "en": "However, it gets more conservative with more clients and larger RTTs, eventually increasing performance when compared to default CoAP, which does not adapt the RTO timers at all.",
              "vi": "Tuy nhiên, nó trở nên thận trọng hơn với nhiều máy khách hơn và RTT lớn hơn, cuối cùng sẽ tăng hiệu suất khi so sánh với CoAP mặc định, vốn không điều chỉnh bộ tính giờ RTO chút nào."
            }
          ]
        },
        {
          "id": "paper2_p6_colL_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In FlockLab, CoCoA yields an improvement over default",
          "sentences": [
            {
              "id": "paper2_p6_colL_b11_s0",
              "en": "In FlockLab, CoCoA yields an improvement over default",
              "vi": "Trong FlockLab, CoCoA mang lại sự cải thiện so với mặc định"
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p6_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Default CoAP   (FI = 0.75) CoCoA             (FI = 0.74) CoCoA−S         (FI = 0.74) B−RTO             (FI = 0.51) Linux                (FI = 0.55) PH−RTO          (FI = 0.58)",
          "sentences": [
            {
              "id": "paper2_p6_colR_b0_s0",
              "en": "Default CoAP   (FI = 0.75) CoCoA             (FI = 0.74) CoCoA−S         (FI = 0.74) B−RTO             (FI = 0.51) Linux                (FI = 0.55) PH−RTO          (FI = 0.58)",
              "vi": "CoAP mặc định (FI = 0,75) CoCoA (FI = 0,74) CoCoA−S (FI = 0,74) B−RTO (FI = 0,51) Linux (FI = 0,55) PH−RTO (FI = 0,58)"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.03",
          "sentences": [
            {
              "id": "paper2_p6_colR_b1_s0",
              "en": "0.03",
              "vi": "0.03"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.025",
          "sentences": [
            {
              "id": "paper2_p6_colR_b2_s0",
              "en": "0.025",
              "vi": "0.025"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.02",
          "sentences": [
            {
              "id": "paper2_p6_colR_b3_s0",
              "en": "0.02",
              "vi": "0.02"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Probability",
          "sentences": [
            {
              "id": "paper2_p6_colR_b4_s0",
              "en": "Probability",
              "vi": "Xác suất"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.015",
          "sentences": [
            {
              "id": "paper2_p6_colR_b5_s0",
              "en": "0.015",
              "vi": "0.015"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.01",
          "sentences": [
            {
              "id": "paper2_p6_colR_b6_s0",
              "en": "0.01",
              "vi": "0.01"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0.005",
          "sentences": [
            {
              "id": "paper2_p6_colR_b7_s0",
              "en": "0.005",
              "vi": "0.005"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "0 10 20 30 40 50 60 70 80 90 100 0",
          "sentences": [
            {
              "id": "paper2_p6_colR_b8_s0",
              "en": "0 10 20 30 40 50 60 70 80 90 100 0",
              "vi": "0 10 20 30 40 50 60 70 80 90 100 0"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "# of successful transactions per node",
          "sentences": [
            {
              "id": "paper2_p6_colR_b9_s0",
              "en": "# of successful transactions per node",
              "vi": "Số giao dịch thành công trên mỗi nút"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": true,
          "figure_img": "assets/p2_fig4.png",
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Fig. 4: Probability Mass Function for the number of finished transactions per node and the Fairness Index (FI) achieved by each of the analyzed algorithms. For illustration purposes, more than 100 finished transactions per node are valuated as 100 finished transactions per node.",
          "sentences": [
            {
              "id": "paper2_p6_colR_b10_s0",
              "en": "Fig. 4: Probability Mass Function for the number of finished transactions per node and the Fairness Index (FI) achieved by each of the analyzed algorithms.",
              "vi": "Hình 4: Hàm khối xác suất cho số lượng giao dịch đã hoàn thành trên mỗi nút và Chỉ số công bằng (FI) đạt được bởi mỗi thuật toán được phân tích."
            },
            {
              "id": "paper2_p6_colR_b10_s1",
              "en": "For illustration purposes, more than 100 finished transactions per node are valuated as 100 finished transactions per node.",
              "vi": "Để minh họa, hơn 100 giao dịch đã hoàn thành trên mỗi nút được định giá là 100 giao dịch đã hoàn thành trên mỗi nút."
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP in terms of Settling Time and it shows the most stable behavior with the narrowest confidence intervals. Over the course of the tests, CoCoA adapts client RTOs efficiently, so the continuous and burst traffic can be processed in parallel. CoCoA-S behaves similarly, also leading to a minor Settling Time improvement. In contrast, B-RTO, Linux-RTO, and PH-RTO lead to larger Settling Times in average. For these algorithms we observe a prevalent behavior of the continuous background traffic that hampers the sudden burst from being processed quickly and abates slowly since few RTT measurements can be made because of packet losses.",
          "sentences": [
            {
              "id": "paper2_p6_colR_b11_s0",
              "en": "CoAP in terms of Settling Time and it shows the most stable behavior with the narrowest confidence intervals.",
              "vi": "CoAP về Thời gian giải quyết và nó cho thấy hoạt động ổn định nhất với khoảng tin cậy hẹp nhất."
            },
            {
              "id": "paper2_p6_colR_b11_s1",
              "en": "Over the course of the tests, CoCoA adapts client RTOs efficiently, so the continuous and burst traffic can be processed in parallel.",
              "vi": "Trong quá trình thử nghiệm, CoCoA điều chỉnh RTO của máy khách một cách hiệu quả, do đó, lưu lượng liên tục và lưu lượng bùng phát có thể được xử lý song song."
            },
            {
              "id": "paper2_p6_colR_b11_s2",
              "en": "CoCoA-S behaves similarly, also leading to a minor Settling Time improvement.",
              "vi": "CoCoA-S hoạt động tương tự, cũng dẫn đến cải thiện nhỏ về Thời gian giải quyết."
            },
            {
              "id": "paper2_p6_colR_b11_s3",
              "en": "In contrast, B-RTO, Linux-RTO, and PH-RTO lead to larger Settling Times in average.",
              "vi": "Ngược lại, B-RTO, Linux-RTO và PH-RTO trung bình dẫn đến Thời gian giải quyết lớn hơn."
            },
            {
              "id": "paper2_p6_colR_b11_s4",
              "en": "For these algorithms we observe a prevalent behavior of the continuous background traffic that hampers the sudden burst from being processed quickly and abates slowly since few RTT measurements can be made because of packet losses.",
              "vi": "Đối với các thuật toán này, chúng tôi quan sát thấy một hành vi phổ biến của lưu lượng truy cập nền liên tục cản trở việc xử lý cụm đột ngột một cách nhanh chóng và giảm bớt chậm do có thể thực hiện một số phép đo RTT do mất gói."
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b12",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "D. Fairness Evaluations",
          "sentences": [
            {
              "id": "paper2_p6_colR_b12_s0",
              "en": "D.",
              "vi": "D."
            },
            {
              "id": "paper2_p6_colR_b12_s1",
              "en": "Fairness Evaluations",
              "vi": "Đánh giá công bằng"
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b13",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In terms of fairness, important differences are observed between the different congestion control algorithms in FlockLab. Fig. 4 shows the Probability Mass Function (PMF) for the number of finished transactions per destination node for each congestion control algorithm, measured during the continuous traffic experiments along with the FI.",
          "sentences": [
            {
              "id": "paper2_p6_colR_b13_s0",
              "en": "In terms of fairness, important differences are observed between the different congestion control algorithms in FlockLab. Fig. 4 shows the Probability Mass Function (PMF) for the number of finished transactions per destination node for each congestion control algorithm, measured during the continuous traffic experiments along with the FI.",
              "vi": "Về mặt công bằng, có thể nhận thấy sự khác biệt quan trọng giữa các thuật toán kiểm soát tắc nghẽn khác nhau trong FlockLab. Hình 4 cho thấy Hàm khối xác suất (PMF) cho số lượng giao dịch đã hoàn thành trên mỗi nút đích cho mỗi thuật toán kiểm soát tắc nghẽn, được đo trong các thử nghiệm lưu lượng truy cập liên tục cùng với FI."
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b14",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "As seen in the figure, with Linux-RTO, PH-RTO and B-RTO, a small group of nodes are served with a very high number of transactions (e.g. more than 80), whereas a large number of nodes obtain a very low number of finished transactions (e.g. below 10). This results in much lower FI values compared to those of CoAP, CoCoA and CoCoA-S. The former methods exploit connections with small hop counts and small RTTs, setting their RTO to small values, behaving aggressively in case of message losses and increasing throughput. However, connections with multiple hops and larger RTTs do not achieve the same data rates, since larger RTO values and consecutive backoffs to these RTO values are applied, reducing throughput.",
          "sentences": [
            {
              "id": "paper2_p6_colR_b14_s0",
              "en": "As seen in the figure, with Linux-RTO, PH-RTO and B-RTO, a small group of nodes are served with a very high number of transactions (e.g. more than 80), whereas a large number of nodes obtain a very low number of finished transactions (e.g. below 10).",
              "vi": "Như đã thấy trong hình, với Linux-RTO, PH-RTO và B-RTO, một nhóm nhỏ các nút được cung cấp với số lượng giao dịch rất cao (ví dụ: hơn 80), trong khi một số lượng lớn các nút có số lượng giao dịch đã hoàn thành rất thấp (ví dụ: dưới 10)."
            },
            {
              "id": "paper2_p6_colR_b14_s1",
              "en": "This results in much lower FI values compared to those of CoAP, CoCoA and CoCoA-S.",
              "vi": "Điều này dẫn đến giá trị FI thấp hơn nhiều so với giá trị của CoAP, CoCoA và CoCoA-S."
            },
            {
              "id": "paper2_p6_colR_b14_s2",
              "en": "The former methods exploit connections with small hop counts and small RTTs, setting their RTO to small values, behaving aggressively in case of message losses and increasing throughput.",
              "vi": "Các phương pháp trước đây khai thác các kết nối có số bước nhảy nhỏ và RTT nhỏ, đặt RTO của chúng thành các giá trị nhỏ, hoạt động tích cực trong trường hợp mất tin nhắn và tăng thông lượng (throughput)."
            },
            {
              "id": "paper2_p6_colR_b14_s3",
              "en": "However, connections with multiple hops and larger RTTs do not achieve the same data rates, since larger RTO values and consecutive backoffs to these RTO values are applied, reducing throughput.",
              "vi": "Tuy nhiên, các kết nối có nhiều bước nhảy và RTT lớn hơn không đạt được cùng tốc độ dữ liệu, vì các giá trị RTO lớn hơn và các khoảng lùi liên tiếp cho các giá trị RTO này được áp dụng, làm giảm thông lượng (throughput)."
            }
          ]
        },
        {
          "id": "paper2_p6_colR_b15",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "While CoCoA and CoCoA-S adapt their RTO values as",
          "sentences": [
            {
              "id": "paper2_p6_colR_b15_s0",
              "en": "While CoCoA and CoCoA-S adapt their RTO values as",
              "vi": "Trong khi CoCoA và CoCoA-S điều chỉnh các giá trị RTO của chúng theo"
            }
          ]
        }
      ]
    },
    {
      "page_num": 7,
      "page_image": "assets/p2_page_7.png",
      "top_content": [],
      "left_column": [
        {
          "id": "paper2_p7_colL_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "well, the VBF prevents fast retransmissions for good connections with small RTTs and slow retransmissions for bad connections with large RTTs. Moreover, the use of backed-off values when initiating new transmissions is avoided and the aging mechanism prevents from maintaining very small or very large RTO values in idle periods. Thus, CoCoA(-S) does not sacrifice from fairness when compared to default CoAP Fig. 4, while achieving the performance improvements previously presented. Default CoAP behaves neutrally in terms of fairness, since its RTO computation algorithm is independent of the characteristics of a specific path.",
          "sentences": [
            {
              "id": "paper2_p7_colL_b0_s0",
              "en": "well, the VBF prevents fast retransmissions for good connections with small RTTs and slow retransmissions for bad connections with large RTTs.",
              "vi": "tốt, VBF ngăn chặn việc truyền lại nhanh đối với các kết nối tốt với RTT nhỏ và truyền lại chậm đối với các kết nối kém với RTT lớn."
            },
            {
              "id": "paper2_p7_colL_b0_s1",
              "en": "Moreover, the use of backed-off values when initiating new transmissions is avoided and the aging mechanism prevents from maintaining very small or very large RTO values in idle periods.",
              "vi": "Hơn nữa, tránh sử dụng các giá trị dự phòng khi bắt đầu truyền mới và cơ chế lão hóa ngăn cản việc duy trì các giá trị RTO rất nhỏ hoặc rất lớn trong thời gian nhàn rỗi."
            },
            {
              "id": "paper2_p7_colL_b0_s2",
              "en": "Thus, CoCoA(-S) does not sacrifice from fairness when compared to default CoAP Fig. 4, while achieving the performance improvements previously presented.",
              "vi": "Do đó, CoCoA(-S) không hy sinh tính công bằng khi so sánh với CoAP mặc định (Hình 4), đồng thời đạt được những cải tiến hiệu suất đã trình bày trước đó."
            },
            {
              "id": "paper2_p7_colL_b0_s3",
              "en": "Default CoAP behaves neutrally in terms of fairness, since its RTO computation algorithm is independent of the characteristics of a specific path.",
              "vi": "CoAP mặc định hoạt động trung lập về mặt công bằng, vì thuật toán tính toán RTO của nó độc lập với các đặc điểm của một đường dẫn cụ thể."
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b1",
          "is_heading": true,
          "heading_level": 2,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "E. Memory footprint considerations",
          "sentences": [
            {
              "id": "paper2_p7_colL_b1_s0",
              "en": "E.",
              "vi": "E."
            },
            {
              "id": "paper2_p7_colL_b1_s1",
              "en": "Memory footprint considerations",
              "vi": "Cân nhắc về dấu chân bộ nhớ"
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "There exists a trade-off between performance and memory footprint of the congestion control mechanisms. Improving the behavior of default CoAP congestion control requires one order of magnitude more memory consumption per CoAP client (Table I). However, and despite the limitations of many IoT devices, the additional state required is negligible compared with the state needed for other components in a CoAP implementation such as security support. In fact, Datagram Transport Layer Security (DTLS) is mandatory as per the CoAP specification, and it consumes around 2 kB of RAM [10].",
          "sentences": [
            {
              "id": "paper2_p7_colL_b2_s0",
              "en": "There exists a trade-off between performance and memory footprint of the congestion control mechanisms.",
              "vi": "Tồn tại sự cân bằng giữa hiệu suất và dung lượng bộ nhớ của các cơ chế kiểm soát tắc nghẽn."
            },
            {
              "id": "paper2_p7_colL_b2_s1",
              "en": "Improving the behavior of default CoAP congestion control requires one order of magnitude more memory consumption per CoAP client (Table I).",
              "vi": "Việc cải thiện hoạt động kiểm soát tắc nghẽn CoAP mặc định yêu cầu mức tiêu thụ bộ nhớ nhiều hơn một bậc trên mỗi máy khách CoAP (Bảng I)."
            },
            {
              "id": "paper2_p7_colL_b2_s2",
              "en": "However, and despite the limitations of many IoT devices, the additional state required is negligible compared with the state needed for other components in a CoAP implementation such as security support.",
              "vi": "Tuy nhiên, bất chấp những hạn chế của nhiều thiết bị IoT, trạng thái bổ sung cần thiết là không đáng kể so với trạng thái cần thiết cho các thành phần khác trong quá trình triển khai CoAP, chẳng hạn như hỗ trợ bảo mật."
            },
            {
              "id": "paper2_p7_colL_b2_s3",
              "en": "In fact, Datagram Transport Layer Security (DTLS) is mandatory as per the CoAP specification, and it consumes around 2 kB of RAM [10].",
              "vi": "Trên thực tế, Bảo mật lớp vận chuyển gói dữ liệu (DTLS) là bắt buộc theo đặc tả CoAP và nó tiêu thụ khoảng 2 kB RAM [10]."
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b3",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "VII. CONCLUSIONS",
          "sentences": [
            {
              "id": "paper2_p7_colL_b3_s0",
              "en": "VII.",
              "vi": "VII."
            },
            {
              "id": "paper2_p7_colL_b3_s1",
              "en": "CONCLUSIONS",
              "vi": "KẾT LUẬN"
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "CoAP specifies a conservative and non-adaptive congestion control mechanism. CoCoA, an advanced congestion control mechanism for CoAP, provides a flexible and adaptive solution by combining an adaptive RTO calculation, the use of weak RTTs, a VBF, and an aging mechanism to optimize performance.",
          "sentences": [
            {
              "id": "paper2_p7_colL_b4_s0",
              "en": "CoAP specifies a conservative and non-adaptive congestion control mechanism.",
              "vi": "CoAP chỉ định cơ chế kiểm soát tắc nghẽn thận trọng và không thích ứng."
            },
            {
              "id": "paper2_p7_colL_b4_s1",
              "en": "CoCoA, an advanced congestion control mechanism for CoAP, provides a flexible and adaptive solution by combining an adaptive RTO calculation, the use of weak RTTs, a VBF, and an aging mechanism to optimize performance.",
              "vi": "CoCoA, một cơ chế kiểm soát tắc nghẽn tiên tiến cho CoAP, cung cấp giải pháp linh hoạt và thích ứng bằng cách kết hợp tính toán RTO thích ứng, sử dụng RTT yếu, VBF và cơ chế lão hóa để tối ưu hóa hiệu suất."
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "In comparison with default CoAP, CoCoA increases throughput and reduces the time it takes for a network to process traffic bursts, while not sacrificing fairness. CoCoA consistently delivers a performance that is better than, or at least similar to, that of default CoAP. In contrast, other approaches may be too simple (B-RTO) or do not adapt well to IoT communications (Linux-RTO, PH-RTO), underperforming default CoAP under certain conditions, and therefore not being recommendable as congestion control mechanisms for CoAP.",
          "sentences": [
            {
              "id": "paper2_p7_colL_b5_s0",
              "en": "In comparison with default CoAP, CoCoA increases throughput and reduces the time it takes for a network to process traffic bursts, while not sacrificing fairness.",
              "vi": "So với CoAP mặc định, CoCoA tăng thông lượng (throughput) và giảm thời gian để mạng xử lý các đợt lưu lượng truy cập mà không làm mất đi tính công bằng."
            },
            {
              "id": "paper2_p7_colL_b5_s1",
              "en": "CoCoA consistently delivers a performance that is better than, or at least similar to, that of default CoAP.",
              "vi": "CoCoA luôn mang lại hiệu suất tốt hơn hoặc ít nhất là tương tự như CoAP mặc định."
            },
            {
              "id": "paper2_p7_colL_b5_s2",
              "en": "In contrast, other approaches may be too simple (B-RTO) or do not adapt well to IoT communications (Linux-RTO, PH-RTO), underperforming default CoAP under certain conditions, and therefore not being recommendable as congestion control mechanisms for CoAP.",
              "vi": "Ngược lại, các phương pháp khác có thể quá đơn giản (B-RTO) hoặc không thích ứng tốt với truyền thông IoT (Linux-RTO, PH-RTO), hoạt động kém hơn CoAP mặc định trong một số điều kiện nhất định và do đó không được khuyến nghị làm cơ chế kiểm soát tắc nghẽn cho CoAP."
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b6",
          "is_heading": true,
          "heading_level": 1,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "VIII. ACKNOWLEDGEMENTS",
          "sentences": [
            {
              "id": "paper2_p7_colL_b6_s0",
              "en": "VIII.",
              "vi": "VIII."
            },
            {
              "id": "paper2_p7_colL_b6_s1",
              "en": "ACKNOWLEDGEMENTS",
              "vi": "LỜI CẢM ƠN"
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "This work was supported in part by the Spanish Government’s Ministerio de Econom´ıa y Competitividad under grant number RYC-2013-13029, through project TEC2012-32531, and FEDER. The authors would like to thank Dr. Carsten Bormann for his major contribution to advanced congestion control for CoAP, and the IETF CoRE WG for providing feedback on CoCoA.",
          "sentences": [
            {
              "id": "paper2_p7_colL_b7_s0",
              "en": "This work was supported in part by the Spanish Government’s Ministerio de Econom´ıa y Competitividad under grant number RYC-2013-13029, through project TEC2012-32531, and FEDER.",
              "vi": "Công việc này được hỗ trợ một phần bởi Bộ trưởng Bộ Kinh tế Tây Ban Nha theo số tài trợ RYC-2013-13029, thông qua dự án TEC2012-32531 và FEDER."
            },
            {
              "id": "paper2_p7_colL_b7_s1",
              "en": "The authors would like to thank Dr. Carsten Bormann for his major contribution to advanced congestion control for CoAP, and the IETF CoRE WG for providing feedback on CoCoA.",
              "vi": "Các tác giả xin cảm ơn Tiến sĩ Carsten Bormann vì đóng góp to lớn của ông trong việc kiểm soát tắc nghẽn nâng cao cho CoAP và IETF CoRE WG đã cung cấp phản hồi về CoCoA."
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b8",
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
              "id": "paper2_p7_colL_b8_s0",
              "en": "REFERENCES",
              "vi": "TÀI LIỆU THAM KHẢO"
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b9",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "[1] C. Bormann, A. P. Castellani, and Z. Shelby, “CoAP: An Application",
          "sentences": [
            {
              "id": "paper2_p7_colL_b9_s0",
              "en": "[1] C.",
              "vi": "[1] C."
            },
            {
              "id": "paper2_p7_colL_b9_s1",
              "en": "Bormann, A.",
              "vi": "Bormann, A."
            },
            {
              "id": "paper2_p7_colL_b9_s2",
              "en": "P.",
              "vi": "P."
            },
            {
              "id": "paper2_p7_colL_b9_s3",
              "en": "Castellani, and Z.",
              "vi": "Castellani và Z."
            },
            {
              "id": "paper2_p7_colL_b9_s4",
              "en": "Shelby, “CoAP: An Application",
              "vi": "Shelby, \"CoAP: Một ứng dụng"
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b10",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Protocol for Billions of Tiny Internet Nodes,” IEEE Internet Computing, vol. 16, no. 2, pp. 62–67, Mar. 2012. [2] A. Betzler, C. Gomez, I. Demirkol, and J. Paradells, “CoCoA+: An",
          "sentences": [
            {
              "id": "paper2_p7_colL_b10_s0",
              "en": "Protocol for Billions of Tiny Internet Nodes,” IEEE Internet Computing, vol.",
              "vi": "Giao thức cho hàng tỷ nút Internet nhỏ,\" Máy tính Internet IEEE, tập."
            },
            {
              "id": "paper2_p7_colL_b10_s1",
              "en": "16, no.",
              "vi": "16, không."
            },
            {
              "id": "paper2_p7_colL_b10_s2",
              "en": "2, pp. 62–67, Mar.",
              "vi": "2, trang 62 - 67, tháng 3."
            },
            {
              "id": "paper2_p7_colL_b10_s3",
              "en": "2012.",
              "vi": "2012."
            },
            {
              "id": "paper2_p7_colL_b10_s4",
              "en": "[2] A.",
              "vi": "[2] A."
            },
            {
              "id": "paper2_p7_colL_b10_s5",
              "en": "Betzler, C.",
              "vi": "Betzler, C."
            },
            {
              "id": "paper2_p7_colL_b10_s6",
              "en": "Gomez, I.",
              "vi": "Gomez, tôi."
            },
            {
              "id": "paper2_p7_colL_b10_s7",
              "en": "Demirkol, and J.",
              "vi": "Demirkol và J."
            },
            {
              "id": "paper2_p7_colL_b10_s8",
              "en": "Paradells, “CoCoA+: An",
              "vi": "Paradells, \"CoCoA+: Một"
            }
          ]
        },
        {
          "id": "paper2_p7_colL_b11",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "advanced congestion control mechanism for CoAP,” Ad Hoc Networks, vol. 33, pp. 126 – 139, 2015.",
          "sentences": [
            {
              "id": "paper2_p7_colL_b11_s0",
              "en": "advanced congestion control mechanism for CoAP,” Ad Hoc Networks, vol.",
              "vi": "cơ chế kiểm soát tắc nghẽn nâng cao cho CoAP,\" Ad Hoc Networks, tập."
            },
            {
              "id": "paper2_p7_colL_b11_s1",
              "en": "33, pp. 126 – 139, 2015.",
              "vi": "33, trang 126 - 139, 2015."
            }
          ]
        }
      ],
      "right_column": [
        {
          "id": "paper2_p7_colR_b0",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "[3] A. Betzler, C. Gomez, and I. Demirkol, “Evaluation of Advanced Con-",
          "sentences": [
            {
              "id": "paper2_p7_colR_b0_s0",
              "en": "[3] A.",
              "vi": "[3] A."
            },
            {
              "id": "paper2_p7_colR_b0_s1",
              "en": "Betzler, C.",
              "vi": "Betzler, C."
            },
            {
              "id": "paper2_p7_colR_b0_s2",
              "en": "Gomez, and I.",
              "vi": "Gomez và tôi."
            },
            {
              "id": "paper2_p7_colR_b0_s3",
              "en": "Demirkol, “Evaluation of Advanced Con-",
              "vi": "Demirkol, \"Đánh giá nâng cao Con-"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b1",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "gestion Control Mechanisms for Unreliable CoAP Communications,” in Proceedings of the 12th ACM Symposium on Performance Evaluation of Wireless Ad Hoc, Sensor, & Ubiquitous Networks, PE-WASUN 2015, Cancun, Mexico, November 2-6, 2015, 2015, pp. 63–70. [4] P. Sarolahti and A. Kuznetsov, “Congestion Control in Linux TCP,” in",
          "sentences": [
            {
              "id": "paper2_p7_colR_b1_s0",
              "en": "gestion Control Mechanisms for Unreliable CoAP Communications,” in Proceedings of the 12th ACM Symposium on Performance Evaluation of Wireless Ad Hoc, Sensor, & Ubiquitous Networks, PE-WASUN 2015, Cancun, Mexico, November 2-6, 2015, 2015, pp. 63–70.",
              "vi": "Cơ chế kiểm soát cử chỉ cho truyền thông CoAP không đáng tin cậy,\" trong Kỷ yếu của Hội nghị chuyên đề ACM lần thứ 12 về Đánh giá hiệu suất của Mạng Ad Hoc, Cảm biến và Mạng Ubiquitous không dây, PE-WASUN 2015, Cancun, Mexico, ngày 2-6 tháng 11 năm 2015, 2015, trang 63 - 70."
            },
            {
              "id": "paper2_p7_colR_b1_s1",
              "en": "[4] P.",
              "vi": "[4] P."
            },
            {
              "id": "paper2_p7_colR_b1_s2",
              "en": "Sarolahti and A.",
              "vi": "Sarolahti và A."
            },
            {
              "id": "paper2_p7_colR_b1_s3",
              "en": "Kuznetsov, “Congestion Control in Linux TCP,” in",
              "vi": "Kuznetsov, \"Kiểm soát tắc nghẽn trong Linux TCP,\" trong"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b2",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Proceedings of the FREENIX Track: 2002 USENIX Annual Technical Conference. Berkeley, CA, USA: USENIX Association, 2002, pp. 49–62. [5] H. Ekstrom and R. Ludwig, “The peak-hopper: a new end-to-end",
          "sentences": [
            {
              "id": "paper2_p7_colR_b2_s0",
              "en": "Proceedings of the FREENIX Track: 2002 USENIX Annual Technical Conference.",
              "vi": "Kỷ yếu của Đường đua FREENIX: Hội nghị kỹ thuật thường niên USENIX 2002."
            },
            {
              "id": "paper2_p7_colR_b2_s1",
              "en": "Berkeley, CA, USA: USENIX Association, 2002, pp. 49–62.",
              "vi": "Berkeley, CA, USA: Hiệp hội USENIX, 2002, trang 49 - 62."
            },
            {
              "id": "paper2_p7_colR_b2_s2",
              "en": "[5] H.",
              "vi": "[5] H."
            },
            {
              "id": "paper2_p7_colR_b2_s3",
              "en": "Ekstrom and R.",
              "vi": "Ekstrom và R."
            },
            {
              "id": "paper2_p7_colR_b2_s4",
              "en": "Ludwig, “The peak-hopper: a new end-to-end",
              "vi": "Ludwig, \"Phễu đỉnh: một giải pháp đầu cuối mới"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b3",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "retransmission timer for reliable unicast transport,” in INFOCOM 2004. Twenty-third AnnualJoint Conference of the IEEE Computer and Communications Societies, vol. 4, March 2004, pp. 2502–2513 vol.4. [6] M. Kovatsch, M. Lanter, and Z. Shelby, “Californium: Scalable cloud",
          "sentences": [
            {
              "id": "paper2_p7_colR_b3_s0",
              "en": "retransmission timer for reliable unicast transport,” in INFOCOM 2004.",
              "vi": "bộ đếm thời gian truyền lại để vận chuyển unicast đáng tin cậy,\" trong INFOCOM 2004."
            },
            {
              "id": "paper2_p7_colR_b3_s1",
              "en": "Twenty-third AnnualJoint Conference of the IEEE Computer and Communications Societies, vol.",
              "vi": "Hội nghị chung thường niên lần thứ 23 của Hiệp hội Máy tính và Truyền thông IEEE, tập."
            },
            {
              "id": "paper2_p7_colR_b3_s2",
              "en": "4, March 2004, pp. 2502–2513 vol.4.",
              "vi": "Ngày 4 tháng 3 năm 2004, trang 2502 - 2513 tập 4."
            },
            {
              "id": "paper2_p7_colR_b3_s3",
              "en": "[6] M.",
              "vi": "[6] M."
            },
            {
              "id": "paper2_p7_colR_b3_s4",
              "en": "Kovatsch, M.",
              "vi": "Kovatsch, M."
            },
            {
              "id": "paper2_p7_colR_b3_s5",
              "en": "Lanter, and Z.",
              "vi": "Lanter và Z."
            },
            {
              "id": "paper2_p7_colR_b3_s6",
              "en": "Shelby, “Californium: Scalable cloud",
              "vi": "Shelby, \"Californi: Đám mây có thể mở rộng"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b4",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "services for the internet of things with coap,” in Internet of Things (IOT), 2014 International Conference on the, Oct 2014, pp. 1–6. [7] R. Lim, F. Ferrari, M. Zimmerling, C. Walser, P. Sommer, and J. Beutel,",
          "sentences": [
            {
              "id": "paper2_p7_colR_b4_s0",
              "en": "services for the internet of things with coap,” in Internet of Things (IOT), 2014 International Conference on the, Oct 2014, pp. 1–6.",
              "vi": "dịch vụ cho Internet vạn vật với coap,” trong Internet of Things (IOT), Hội nghị quốc tế năm 2014, tháng 10 năm 2014, trang 1 - 6."
            },
            {
              "id": "paper2_p7_colR_b4_s1",
              "en": "[7] R.",
              "vi": "[7] R."
            },
            {
              "id": "paper2_p7_colR_b4_s2",
              "en": "Lim, F.",
              "vi": "Lim, F."
            },
            {
              "id": "paper2_p7_colR_b4_s3",
              "en": "Ferrari, M.",
              "vi": "Ferrari, M."
            },
            {
              "id": "paper2_p7_colR_b4_s4",
              "en": "Zimmerling, C.",
              "vi": "Zimmerling, C."
            },
            {
              "id": "paper2_p7_colR_b4_s5",
              "en": "Walser, P.",
              "vi": "Walser, P."
            },
            {
              "id": "paper2_p7_colR_b4_s6",
              "en": "Sommer, and J.",
              "vi": "Sommer và J."
            },
            {
              "id": "paper2_p7_colR_b4_s7",
              "en": "Beutel,",
              "vi": "Beutel,"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b5",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "“Flocklab: A testbed for distributed, synchronized tracing and profiling of wireless embedded systems,” in Information Processing in Sensor Networks (IPSN), 2013 ACM/IEEE International Conference on, April 2013, pp. 153–165. [8] A. Dunkels, “The ContikiMAC Radio Duty Cycling Protocol,” Swedish",
          "sentences": [
            {
              "id": "paper2_p7_colR_b5_s0",
              "en": "“Flocklab: A testbed for distributed, synchronized tracing and profiling of wireless embedded systems,” in Information Processing in Sensor Networks (IPSN), 2013 ACM/IEEE International Conference on, April 2013, pp. 153–165.",
              "vi": "\"Flocklab: Nền tảng thử nghiệm để theo dõi và lập hồ sơ phân tán, đồng bộ hóa của các hệ thống nhúng không dây,\" trong Xử lý thông tin trong Mạng cảm biến (IPSN), Hội nghị quốc tế ACM/IEEE 2013 vào tháng 4 năm 2013, trang 153 - 165."
            },
            {
              "id": "paper2_p7_colR_b5_s1",
              "en": "[8] A.",
              "vi": "[8] A."
            },
            {
              "id": "paper2_p7_colR_b5_s2",
              "en": "Dunkels, “The ContikiMAC Radio Duty Cycling Protocol,” Swedish",
              "vi": "Dunkels, \"Giao thức đi xe đạp làm nhiệm vụ vô tuyến ContikiMAC,\" tiếng Thụy Điển"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b6",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Institute of Computer Science, Tech. Rep. T2011:13, 2011. [9] M. Kovatsch, S. Duquennoy, and A. Dunkels, “A Low-Power CoAP for",
          "sentences": [
            {
              "id": "paper2_p7_colR_b6_s0",
              "en": "Institute of Computer Science, Tech.",
              "vi": "Viện Khoa học Máy tính, Công nghệ."
            },
            {
              "id": "paper2_p7_colR_b6_s1",
              "en": "Rep. T2011:13, 2011.",
              "vi": "Dân biểu T2011:13, 2011."
            },
            {
              "id": "paper2_p7_colR_b6_s2",
              "en": "[9] M.",
              "vi": "[9] M."
            },
            {
              "id": "paper2_p7_colR_b6_s3",
              "en": "Kovatsch, S.",
              "vi": "Kovatsch, S."
            },
            {
              "id": "paper2_p7_colR_b6_s4",
              "en": "Duquennoy, and A.",
              "vi": "Duquennoy và A."
            },
            {
              "id": "paper2_p7_colR_b6_s5",
              "en": "Dunkels, “A Low-Power CoAP for",
              "vi": "Dunkels, \"CoAP năng lượng thấp dành cho"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b7",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "Contiki,” in Mobile Adhoc and Sensor Systems (MASS), 2011 IEEE 8th International Conference on, Oct 2011, pp. 855–860. [10] A. Sehgal, V. Perelman, S. Kuryla, and J. Schonwalder, “Management of",
          "sentences": [
            {
              "id": "paper2_p7_colR_b7_s0",
              "en": "Contiki,” in Mobile Adhoc and Sensor Systems (MASS), 2011 IEEE 8th International Conference on, Oct 2011, pp. 855–860.",
              "vi": "Contiki,\" trong Hệ thống cảm biến và Adhoc di động (MASS), 2011 Hội nghị quốc tế lần thứ 8 của IEEE vào tháng 10 năm 2011, trang 855 - 860."
            },
            {
              "id": "paper2_p7_colR_b7_s1",
              "en": "[10] A.",
              "vi": "[10] A."
            },
            {
              "id": "paper2_p7_colR_b7_s2",
              "en": "Sehgal, V.",
              "vi": "Sehgal, V."
            },
            {
              "id": "paper2_p7_colR_b7_s3",
              "en": "Perelman, S.",
              "vi": "Perelman, S."
            },
            {
              "id": "paper2_p7_colR_b7_s4",
              "en": "Kuryla, and J.",
              "vi": "Kurila và J."
            },
            {
              "id": "paper2_p7_colR_b7_s5",
              "en": "Schonwalder, “Management of",
              "vi": "Schonwalder, “Quản lý"
            }
          ]
        },
        {
          "id": "paper2_p7_colR_b8",
          "is_heading": false,
          "heading_level": 0,
          "is_figure": false,
          "figure_img": null,
          "is_table": false,
          "table_img": null,
          "is_equation": false,
          "raw_text": "resource constrained devices in the Internet of Things,” Communications Magazine, IEEE, vol. 50, no. 12, pp. 144–149, December 2012.",
          "sentences": [
            {
              "id": "paper2_p7_colR_b8_s0",
              "en": "resource constrained devices in the Internet of Things,” Communications Magazine, IEEE, vol.",
              "vi": "các thiết bị hạn chế tài nguyên trong Internet of Things\", Tạp chí Truyền thông, IEEE, tập."
            },
            {
              "id": "paper2_p7_colR_b8_s1",
              "en": "50, no.",
              "vi": "50, không."
            },
            {
              "id": "paper2_p7_colR_b8_s2",
              "en": "12, pp. 144–149, December 2012.",
              "vi": "12, trang 144 - 149, tháng 12 năm 2012."
            }
          ]
        }
      ]
    }
  ],
  "sections_toc": [
    {
      "id": "paper2_p1_colL_b1",
      "title": "I. INTRODUCTION",
      "page": 1,
      "col": "colL"
    },
    {
      "id": "paper2_p2_colL_b1",
      "title": "II. COAP CONGESTION CONTROL",
      "page": 2,
      "col": "colL"
    },
    {
      "id": "paper2_p2_colL_b6",
      "title": "III. COCOA",
      "page": 2,
      "col": "colL"
    },
    {
      "id": "paper2_p2_colR_b0",
      "title": "A. Adaptive RTO calculation",
      "page": 2,
      "col": "colR"
    },
    {
      "id": "paper2_p3_colL_b5",
      "title": "C. RTO aging",
      "page": 3,
      "col": "colL"
    },
    {
      "id": "paper2_p3_colL_b7",
      "title": "D. Congestion Control for NON messages",
      "page": 3,
      "col": "colL"
    },
    {
      "id": "paper2_p3_colR_b0",
      "title": "IV. ALTERNATIVE CONGESTION CONTROL MECHANISMS",
      "page": 3,
      "col": "colR"
    },
    {
      "id": "paper2_p3_colR_b5",
      "title": "V. EXPERIMENTAL SETUP AND TEST CONFIGURATION",
      "page": 3,
      "col": "colR"
    },
    {
      "id": "paper2_p3_colR_b6",
      "title": "A. Testbeds",
      "page": 3,
      "col": "colR"
    },
    {
      "id": "paper2_p4_colL_b11",
      "title": "B. Traffic Scenarios",
      "page": 4,
      "col": "colL"
    },
    {
      "id": "paper2_p4_colR_b4",
      "title": "VI. CONGESTION CONTROL EVALUATION RESULTS",
      "page": 4,
      "col": "colR"
    },
    {
      "id": "paper2_p4_colR_b5",
      "title": "A. Performance Metrics",
      "page": 4,
      "col": "colR"
    },
    {
      "id": "paper2_p4_colR_b9",
      "title": "B. Throughput Results",
      "page": 4,
      "col": "colR"
    },
    {
      "id": "paper2_p6_colL_b9",
      "title": "C. Settling Time Results",
      "page": 6,
      "col": "colL"
    },
    {
      "id": "paper2_p6_colR_b12",
      "title": "D. Fairness Evaluations",
      "page": 6,
      "col": "colR"
    },
    {
      "id": "paper2_p7_colL_b1",
      "title": "E. Memory footprint considerations",
      "page": 7,
      "col": "colL"
    },
    {
      "id": "paper2_p7_colL_b3",
      "title": "VII. CONCLUSIONS",
      "page": 7,
      "col": "colL"
    },
    {
      "id": "paper2_p7_colL_b6",
      "title": "VIII. ACKNOWLEDGEMENTS",
      "page": 7,
      "col": "colL"
    }
  ],
  "total_sentences": 400
};
