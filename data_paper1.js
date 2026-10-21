// Paper 1 Dataset: pCoCoA - Simone Bolettieri et al. (Ad Hoc Networks 2018)
const PAPER_1_DATA = {
  "id": "paper1",
  "code": "pCoCoA",
  "title": "pCoCoA: A precise congestion control algorithm for CoAP",
  "title_vi": "pCoCoA: Thuật toán điều khiển tắc nghẽn chính xác cho giao thức CoAP",
  "authors": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi",
  "affiliations": "Department of Information Engineering, University of Pisa, Italy & IIT-CNR, Pisa, Italy",
  "venue": "Ad Hoc Networks (Elsevier), Volume 80, 2018, Pages 116–129",
  "doi": "https://doi.org/10.1016/j.adhoc.2018.06.015",
  "course": "Kỹ thuật Truyền thông (Telecommunications & Computer Networks)",
  "summary_vi": "Bài báo nghiên cứu chuyên sâu về giao thức điều khiển tắc nghẽn CoCoA+ trong mạng IoT (LLN), vạch rõ các điểm yếu chí tử (RTO tiệm cận RTT, đỉnh nhọn RTO giả tạo, bộ ước lượng yếu không phản ứng kịp) và đề xuất thuật toán mới pCoCoA sử dụng tùy chọn bộ đếm Transmission Counter (TC) cùng bộ ước lượng mdev_max theo Linux TCP giúp triệt tiêu truyền lại giả tạo (spurious retransmissions).",
  "sections": [
    {
      "id": "p1_sec_abstract",
      "title": "Abstract",
      "title_vi": "Tóm tắt bài báo",
      "badge": "Tổng quan",
      "paragraphs": [
        {
          "id": "p1_abs_1",
          "sentences": [
            {
              "en": "The Constrained Application Protocol (CoAP) is an IETF standard application protocol for the future Internet of Things (IoT).",
              "vi": "Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) là giao thức tầng ứng dụng tiêu chuẩn do IETF ban hành dành cho Mạng lưới Vạn vật kết nối Internet (IoT) trong tương lai.",
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
      "badge": "Cơ sở lý thuyết",
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
              "en": "An in-depth analysis of these simulation results allows us to highlight some novel critical issues of the algorithm.",
              "vi": "Phân tích chuyên sâu từ các kết quả mô phỏng cho phép chúng tôi vạch ra những vấn đề nghiêm trọng mới phát sinh của thuật toán.",
              "terms": [
                "simulation results",
                "critical issues"
              ]
            },
            {
              "en": "Consequently, we propose a set of modifications to the original algorithm to overcome these limitations.",
              "vi": "Từ đó, chúng tôi đề xuất một tập các cải tiến cho thuật toán ban đầu để vượt qua những giới hạn này.",
              "terms": [
                "modifications",
                "limitations"
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
            },
            {
              "en": "Moreover, pCoCoA can correctly handle scenarios in which CoAP traffic competes with interfering bursty traffic, whereas other algorithms, such as CoCoA-E, do not.",
              "vi": "Đặc biệt, pCoCoA xử lý rất chuẩn xác trong các tình huống lưu lượng CoAP cạnh tranh với lưu lượng bùng nổ gây nhiễu, điều mà các thuật toán khác như CoCoA-E không làm được.",
              "terms": [
                "bursty traffic",
                "CoCoA-E"
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
      "badge": "Chi tiết giải thuật",
      "paragraphs": [
        {
          "id": "p1_cocoa_intro",
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
              "en": "In this work we consider its last revision, CoCoA+ [3]. The algorithm is composed of the following three main functions: a policy to calculate the retransmission timeout (RTO), the back-off policy to set the RTO for retransmissions, and an ageing policy for the status information.",
              "vi": "Trong công trình này chúng tôi xem xét phiên bản mới nhất là CoCoA+ [3]. Thuật toán được cấu thành từ ba cơ chế then chốt: chính sách tính toán RTO, chính sách thoái lui (back-off) cho các lần truyền lại, và chính sách lão hóa (ageing) cho thông tin trạng thái mạng.",
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
          "id": "p1_cocoa_rto",
          "sentences": [
            {
              "en": "A. RTO calculation: In order to calculate the RTO, CoCoA+ adopts the same algorithm used by TCP, which updates the RTO value based on measured Round Trip Times (RTTs).",
              "vi": "A. Tính toán RTO: Để tính RTO, CoCoA+ áp dụng thuật toán tương tự như của TCP, cập nhật RTO dựa trên các giá trị thời gian truyền khứ hồi (RTT) đo được.",
              "terms": [
                "RTO calculation",
                "TCP",
                "RTT"
              ]
            },
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
            },
            {
              "en": "Considering that it is not possible to know for an ACK to which transmission it belongs to, RTT samples are collected measuring the time between the first transmission and the arrival of the response, but only if two retransmissions at most are required.",
              "vi": "Do không thể biết chắc một gói ACK nhận về tương ứng với lần phát nào (vấn nạn 'nhập nhằng RTT'), mẫu RTT được đo bằng khoảng thời gian từ lần phát đầu tiên đến lúc nhận được ACK, nhưng chỉ áp dụng khi số lần truyền lại không quá 2.",
              "terms": [
                "ACK",
                "RTT samples",
                "retransmissions"
              ]
            }
          ]
        },
        {
          "id": "p1_cocoa_math",
          "sentences": [
            {
              "en": "For each destination, a node maintains: two smoothed mean RTT estimators (RTTstrong and RTTweak), two smoothed mean variance (RTTVARstrong and RTTVARweak), two RTO estimators (RTOstrong and RTOweak), and a comprehensive RTO (RTOoverall).",
              "vi": "Với mỗi đích đến, nút mạng duy trì: hai bộ ước lượng RTT trung bình trượt làm mịn (RTTstrong và RTTweak), hai phương sai làm mịn (RTTVARstrong và RTTVARweak), hai bộ ước lượng RTO (RTOstrong và RTOweak), cùng giá trị RTO tổng hợp (RTOoverall).",
              "terms": [
                "RTTstrong",
                "RTTweak",
                "RTTVAR",
                "RTOoverall"
              ]
            },
            {
              "en": "The estimators are updated via Equations: RTTx = (1 - alpha)*RTTx + alpha*R; RTTVARx = (1 - beta)*RTTVARx + beta*|RTTx - R|; RTOx = RTTx + Kx*RTTVARx; RTOoverall = lambda_x*RTOx + (1 - lambda_x)*RTOoverall.",
              "vi": "Các bộ ước lượng được cập nhật theo hệ công thức: RTTx = (1 - α)RTTx + αR; RTTVARx = (1 - β)RTTVARx + β|RTTx - R|; RTOx = RTTx + Kx·RTTVARx; RTOoverall = λx·RTOx + (1 - λx)RTOoverall.",
              "terms": [
                "alpha",
                "beta",
                "Kx",
                "lambda_x"
              ]
            },
            {
              "en": "Recommended parameter values: alpha = 0.125, beta = 0.25, Kstrong = 4, Kweak = 1, lambda_strong = 0.5, and lambda_weak = 0.25. RTOinit is chosen with dithering from [RTOoverall, 1.5 * RTOoverall].",
              "vi": "Các giá trị tham số khuyến nghị: α = 0.125, β = 0.25, Kstrong = 4, Kweak = 1, λstrong = 0.5, và λweak = 0.25. Giá trị RTOinit được chọn ngẫu nhiên với kỹ thuật rung dithering trong khoảng [RTOoverall, 1.5 · RTOoverall].",
              "terms": [
                "parameters",
                "dithering",
                "RTOinit"
              ]
            }
          ]
        },
        {
          "id": "p1_cocoa_backoff",
          "sentences": [
            {
              "en": "B. Backoff policy: CoCoA+ introduces a variable backoff factor (VBF) to set the RTO for retransmissions: RTOnew = RTOprevious * VBF(RTOinit).",
              "vi": "B. Chính sách thoái lui: CoCoA+ đưa ra hệ số thoái lui khả biến VBF (Variable Backoff Factor) để tính RTO cho các lần phát lại: RTOnew = RTOprevious · VBF(RTOinit).",
              "terms": [
                "backoff policy",
                "VBF",
                "RTO"
              ]
            },
            {
              "en": "The VBF factor is set according to RTOinit: VBF = 3 if RTOinit < 1s; VBF = 1.5 if RTOinit > 3s; VBF = 2 if 1s <= RTOinit <= 3s.",
              "vi": "Hệ số VBF được thiết lập dựa theo RTOinit: VBF = 3 nếu RTOinit < 1s (tránh phát lại dồn dập); VBF = 1.5 nếu RTOinit > 3s (tránh chờ quá lâu); VBF = 2 nếu RTOinit trong khoảng [1s, 3s] (tương đương BEB chuẩn).",
              "terms": [
                "VBF",
                "BEB"
              ]
            },
            {
              "en": "C. Information aging: CoCoA+ introduces a mechanism to age RTO values when RTT updates are not received for a certain time, smoothly resetting RTOoverall toward default values.",
              "vi": "C. Lão hóa thông tin: CoCoA+ đưa vào cơ chế làm lão hóa giá trị RTO khi không nhận được mẫu RTT mới trong một thời gian nhất định, kéo RTOoverall dần về mức mặc định để tránh lưu giữ trạng thái mạng lỗi thời.",
              "terms": [
                "information aging",
                "RTOoverall"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_shortcomings",
      "title": "V. COCOA+ SHORTCOMINGS",
      "title_vi": "V. CÁC THIẾU SÓT VÀ NGUYÊN NHÂN CỐT LÕI CỦA COCOA+",
      "badge": "Phân tích phản biện",
      "paragraphs": [
        {
          "id": "p1_short_a",
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
        },
        {
          "id": "p1_short_b_c",
          "sentences": [
            {
              "en": "B. Lack of weak estimator update: The rule to avoid weak estimator update after more than two retransmissions leaves RTOinit frozen during heavy bursty periods, failing to respond to congestion.",
              "vi": "B. Thiếu cập nhật bộ ước lượng yếu: Quy tắc ngừng cập nhật bộ ước lượng yếu khi có trên 2 lần truyền lại khiến RTOinit bị đóng băng trong các đợt lưu lượng bùng phát nặng nề, hoàn toàn mất khả năng phản ứng với tắc nghẽn.",
              "terms": [
                "weak estimator",
                "retransmissions",
                "congestion"
              ]
            },
            {
              "en": "C. Insufficient weak estimator weight: Setting Kweak to 1 severely limits the impact of weak RTO, preventing timely adaptation during sudden load changes.",
              "vi": "C. Trọng số bộ ước lượng yếu quá nhỏ: Việc đặt Kweak = 1 làm suy yếu nghiêm trọng tác động của RTO yếu, ngăn cản sự thích ứng kịp thời khi tải mạng thay đổi đột ngột.",
              "terms": [
                "Kweak",
                "weak RTO",
                "adaptation"
              ]
            }
          ]
        },
        {
          "id": "p1_short_d_e_f",
          "sentences": [
            {
              "en": "D. RTO peaks in response to RTT decrease: If RTT rapidly decreases, RTTVAR updates using |SRTT - R| which spikes, artificially causing RTO to surge upward precisely when the network improves.",
              "vi": "D. RTO tăng vọt nghịch lý khi RTT giảm: Khi RTT sụt giảm nhanh, RTTVAR lấy giá trị tuyệt đối |SRTT - R| khiến phương sai bị đội lên đột ngột, làm RTO tăng vọt giả tạo đúng vào lúc mạng đang thông thoáng.",
              "terms": [
                "RTO peaks",
                "RTT decrease",
                "RTTVAR"
              ]
            },
            {
              "en": "E. Double algorithms, double histories: Lack of aging for the weak estimator creates obsolete history spikes.",
              "vi": "E. Tồn tại song song hai thuật toán và hai lịch sử: Việc thiếu cơ chế lão hóa cho bộ ước lượng yếu gây ra các đột biến RTOinit do vết tích lịch sử đã quá cũ.",
              "terms": [
                "weak estimator",
                "aging"
              ]
            },
            {
              "en": "F. Excessive RTO growth: Cumulative back-off without upper capping can cause RTO to escalate to 200–300 seconds, causing unreasonable delays.",
              "vi": "F. RTO phình to quá mức: Việc thoái lui dồn dập mà thiếu trần chặn trên trong các lần phát lại có thể khiến RTO bị thổi phồng lên 200–300 giây, gây độ trễ vô lý và tê liệt kết nối.",
              "terms": [
                "RTO growth",
                "back-off",
                "delays"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_pcocoa_algo",
      "title": "VI. COAP PRECISE CONGESTION CONTROL (pCoCoA)",
      "title_vi": "VI. THUẬT TOÁN ĐIỀU KHIỂN TẮC NGHẼN CHÍNH XÁC pCoCoA",
      "badge": "Đề xuất mới",
      "paragraphs": [
        {
          "id": "p1_pcocoa_pillars",
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
              "en": "The elective Transmission Counter (TC) option is set to 1 initially and incremented on each retransmission. The receiver echoes the TC in the ACK, eliminating RTT ambiguity and enabling instant detection of spurious retransmissions.",
              "vi": "Tùy chọn Transmission Counter (TC) được gán bằng 1 ở lần phát đầu và tăng thêm 1 sau mỗi lần truyền lại. Phía nhận sẽ sao chép và gắn lại giá trị TC này trong bản tin ACK, loại bỏ hoàn toàn vấn nạn nhập nhằng RTT và cho phép phát hiện tức thì các lần truyền lại giả tạo.",
              "terms": [
                "TC",
                "ACK",
                "RTT ambiguity",
                "spurious retransmissions"
              ]
            }
          ]
        },
        {
          "id": "p1_pcocoa_algo2_detail",
          "sentences": [
            {
              "en": "Algorithm 2 computes RTO using maximum mean deviance (mdev_max): SRTO = SRTT + max(k * RTTVAR, mdev_max).",
              "vi": "Giải thuật 2 tính toán RTO sử dụng độ lệch trung bình cực đại (mdev_max): SRTO = SRTT + max(k · RTTVAR, mdev_max).",
              "terms": [
                "Algorithm 2",
                "mdev_max",
                "SRTO",
                "SRTT",
                "RTTVAR"
              ]
            },
            {
              "en": "If a spurious retransmission is detected, k is raised to 6 (otherwise k = 4), which accelerates RTO growth to quickly prevent further unnecessary retransmissions.",
              "vi": "Nếu phát hiện có truyền lại giả tạo, hệ số k được nâng lên 6 (bình thường k = 4), thúc đẩy RTO tăng nhanh hơn để lập tức ngăn chặn các lần phát lại thừa thãi kế tiếp.",
              "terms": [
                "spurious retransmission",
                "k"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_eval",
      "title": "VII. PERFORMANCE EVALUATION",
      "title_vi": "VII. ĐÁNH GIÁ HIỆU NĂNG VÀ THỰC NGHIỆM",
      "badge": "Kết quả thực nghiệm",
      "paragraphs": [
        {
          "id": "p1_eval_1",
          "sentences": [
            {
              "en": "The evaluations were conducted using Cooja simulator and ContikiOS on a 6x6 grid topology with IEEE 802.15.4 and 6LoWPAN.",
              "vi": "Các thử nghiệm được thực hiện trên môi trường mô phỏng Cooja với hệ điều hành ContikiOS, trên mô hình mạng lưới ma trận 6x6 nút sử dụng chuẩn IEEE 802.15.4 và 6LoWPAN.",
              "terms": [
                "Cooja",
                "ContikiOS",
                "IEEE 802.15.4",
                "6LoWPAN"
              ]
            },
            {
              "en": "Under periodic traffic with 8s period, pCoCoA achieves an average retransmission count drastically lower than CoCoA+ and 4-state-strong, while matching their high throughput.",
              "vi": "Dưới lưu lượng định kỳ với chu kỳ 8s, pCoCoA đạt số lần truyền lại trung bình thấp hơn vượt trội so với CoCoA+ và 4-state-strong, trong khi vẫn bảo toàn mức thông lượng cao tương đương.",
              "terms": [
                "periodic traffic",
                "retransmission count",
                "throughput"
              ]
            },
            {
              "en": "In bursty interfering traffic scenarios, CoCoA-E collapses due to improper gamma dampening, and CoCoA+ suffers from frozen RTOinit, while pCoCoA maintains flawless convergence and superior carried load.",
              "vi": "Trong kịch bản lưu lượng bùng nổ gây nhiễu, CoCoA-E bị suy sụp do hệ số suy giảm gamma bất cập, CoCoA+ bị đóng băng RTOinit, trong khi pCoCoA duy trì sự hội tụ hoàn hảo và đạt tải thực truyền tải (carried load) vượt trội.",
              "terms": [
                "bursty traffic",
                "CoCoA-E",
                "carried load"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "p1_sec_conc",
      "title": "VIII. CONCLUSIONS",
      "title_vi": "VIII. KẾT LUẬN",
      "badge": "Tổng kết",
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
