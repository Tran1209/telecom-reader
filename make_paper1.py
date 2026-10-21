# -*- coding: utf-8 -*-
import json
import os

paper1_data = {
    "id": "paper1",
    "title": "pCoCoA: A precise congestion control algorithm for CoAP",
    "title_vi": "pCoCoA: Thuật toán điều khiển tắc nghẽn chính xác cho giao thức CoAP",
    "authors": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi",
    "venue": "Ad Hoc Networks, Volume 80, 2018, Pages 116-129, ISSN 1570-8705",
    "doi": "https://doi.org/10.1016/j.adhoc.2018.06.015",
    "sections": [
        {
            "id": "sec_p1_abstract",
            "title": "Abstract",
            "title_vi": "Tóm tắt nội dung",
            "paragraphs": [
                {
                    "id": "p1_abs_1",
                    "sentences": [
                        {
                            "en": "The Constrained Application Protocol (CoAP) is an IETF standard application protocol for the future Internet of Things (IoT).",
                            "vi": "Giao thức ứng dụng cho thiết bị hạn chế tài nguyên (CoAP) là một giao thức tầng ứng dụng tiêu chuẩn của IETF dành cho mạng lưới Vạn vật kết nối Internet (IoT) trong tương lai.",
                            "terms": ["CoAP", "IETF", "IoT"]
                        },
                        {
                            "en": "Since IoT devices are often interconnected by networks characterized by high packet error rates and low throughput, congestion control will be crucial to ensure proper and timed communication in these networks.",
                            "vi": "Do các thiết bị IoT thường được liên kết với nhau qua các mạng có đặc trưng là tỷ lệ lỗi gói cao (high packet error rates) và thông lượng thấp (low throughput), việc điều khiển tắc nghẽn (congestion control) sẽ đóng vai trò quyết định nhằm bảo đảm truyền thông chính xác và đúng hạn trong các mạng này.",
                            "terms": ["packet error rate", "throughput", "congestion control"]
                        },
                        {
                            "en": "Therefore, CoCoA+, an advanced congestion control algorithm for CoAP, is currently being specified by the IETF.",
                            "vi": "Chính vì vậy, CoCoA+ – một thuật toán điều khiển tắc nghẽn nâng cao dành cho CoAP – hiện đang được IETF đặc tả và chuẩn hóa.",
                            "terms": ["CoCoA+", "congestion control", "IETF"]
                        },
                        {
                            "en": "In this work, we present a critical analysis of CoCoA+ performance and highlight some of its shortcomings and pitfalls.",
                            "vi": "Trong công trình này, chúng tôi trình bày một phân tích phản biện sâu sắc về hiệu năng của CoCoA+ và chỉ ra một số thiếu sót cùng những cạm bẫy tiềm ẩn của nó.",
                            "terms": ["performance", "shortcomings"]
                        },
                        {
                            "en": "Two different scenarios are considered: one with an increasing traffic load due to an increasing number of CoAP requests, and another with an interfering traffic concurrently transmitted in the network characterized by a bursty pattern.",
                            "vi": "Hai kịch bản khác nhau được xem xét: một kịch bản với tải lưu lượng (traffic load) gia tăng do số lượng yêu cầu CoAP tăng dần, và một kịch bản khác có lưu lượng gây nhiễu (interfering traffic) được truyền đồng thời trong mạng với đặc trưng dạng bùng phát (bursty pattern).",
                            "terms": ["traffic load", "interfering traffic", "bursty pattern"]
                        },
                        {
                            "en": "In the former scenario, we show how CoCoA+ may be characterized by many spurious retransmissions at some offered loads close to congestion.",
                            "vi": "Ở kịch bản đầu tiên, chúng tôi chỉ ra rằng CoCoA+ có thể phát sinh nhiều lần truyền lại giả tạo / không cần thiết (spurious retransmissions) tại một số mức tải cung cấp (offered loads) cận kề ngưỡng tắc nghẽn.",
                            "terms": ["spurious retransmissions", "offered loads", "congestion"]
                        },
                        {
                            "en": "In the latter, we show instead how the weak estimator is not particularly effective in adapting to changing traffic loads.",
                            "vi": "Ở kịch bản thứ hai, chúng tôi chỉ ra rằng bộ ước lượng yếu (weak estimator) không thực sự hiệu quả trong việc thích ứng với các mức tải lưu lượng biến đổi.",
                            "terms": ["weak estimator", "traffic loads"]
                        },
                        {
                            "en": "In order to overcome such limitations, a number of modifications to CoCoA+ are proposed.",
                            "vi": "Để khắc phục những hạn chế đó, một loạt các cải tiến đối với CoCoA+ được đề xuất.",
                            "terms": ["modifications"]
                        },
                        {
                            "en": "The resulting solution, named precise Congestion Control (pCoCoA), is shown to reduce the number of retransmissions, while guaranteeing throughputs and delays comparable to those of CoAP and CoCoA+.",
                            "vi": "Giải pháp kết quả, có tên gọi là Điều khiển Tắc nghẽn Chính xác (precise Congestion Control - pCoCoA), được chứng minh là giảm đáng kể số lần truyền lại, trong khi vẫn bảo đảm mức thông lượng và độ trễ tương đương với CoAP mặc định và CoCoA+.",
                            "terms": ["pCoCoA", "retransmissions", "throughput", "delay"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "sec_p1_intro",
            "title": "I. INTRODUCTION",
            "title_vi": "I. GIỚI THIỆU",
            "paragraphs": [
                {
                    "id": "p1_intro_1",
                    "sentences": [
                        {
                            "en": "The Internet of Things (IoT) is getting momentum both in academia, as a very active research topic, and in industry, with smart objects that are meant to thoroughly affect our lives.",
                            "vi": "Mạng lưới Vạn vật kết nối Internet (IoT) đang tạo được đà phát triển mạnh mẽ cả trong giới học thuật, như một đề tài nghiên cứu rất sôi nổi, lẫn trong công nghiệp, với các vật thể thông minh được kỳ vọng sẽ làm thay đổi căn bản cuộc sống của chúng ta.",
                            "terms": ["IoT"]
                        },
                        {
                            "en": "IoT systems are built on top of IoT devices that collect data and interact with the physical environment.",
                            "vi": "Các hệ thống IoT được xây dựng dựa trên các thiết bị IoT có nhiệm vụ thu thập dữ liệu và tương tác với môi trường vật lý.",
                            "terms": ["IoT devices"]
                        },
                        {
                            "en": "IoT devices are usually cheap, battery-powered devices, with limited computation capabilities.",
                            "vi": "Các thiết bị IoT thường là những thiết bị giá rẻ, hoạt động bằng pin và có năng lực tính toán rất hạn chế.",
                            "terms": ["computation capabilities"]
                        },
                        {
                            "en": "Those devices are equipped with low power transceivers that, however, allow forming Low Power and Lossy Networks (LLN), characterized by possibly large packet error rates, and low throughput.",
                            "vi": "Những thiết bị này được trang bị các bộ thu phát vô tuyến công suất thấp, cho phép hình thành nên Mạng năng lượng thấp và tổn thất cao (Low Power and Lossy Networks - LLN), vốn có đặc trưng là tỷ lệ lỗi gói tin có thể rất lớn và thông lượng thấp.",
                            "terms": ["transceivers", "LLN", "packet error rates", "throughput"]
                        },
                        {
                            "en": "Due to these characteristics, new communication protocols tailored for constrained devices operating in lossy networks are required.",
                            "vi": "Do các đặc tính này, cần phải có các giao thức truyền thông mới được thiết kế riêng cho các thiết bị hạn chế tài nguyên hoạt động trong môi trường mạng tổn hao.",
                            "terms": ["communication protocols", "constrained devices", "lossy networks"]
                        },
                        {
                            "en": "To this aim, IETF defined a communication protocol stack for IoT devices.",
                            "vi": "Nhằm mục đích này, tổ chức IETF đã định nghĩa một ngăn xếp giao thức truyền thông (protocol stack) dành riêng cho các thiết bị IoT.",
                            "terms": ["IETF", "protocol stack"]
                        },
                        {
                            "en": "In particular, the IETF CoRE Working Group standardized the Constrained Application Protocol (CoAP) [1], which allows applications to exchange information with IoT devices.",
                            "vi": "Đặc biệt, Nhóm công tác CoRE của IETF đã chuẩn hóa Giao thức Ứng dụng cho thiết bị hạn chế (CoAP) [1], cho phép các ứng dụng trao đổi thông tin với các thiết bị IoT theo mô hình gọn nhẹ kiểu HTTP/RESTful.",
                            "terms": ["CoRE Working Group", "CoAP"]
                        }
                    ]
                },
                {
                    "id": "p1_intro_2",
                    "sentences": [
                        {
                            "en": "Considering the limited capabilities of nodes and the limited amount of bandwidth available in LLNs, congestion control is crucial to ensure proper and timely delivery of data.",
                            "vi": "Xét đến năng lực hạn chế của các nút mạng và lượng băng thông eo hẹp trong các mạng LLN, việc điều khiển tắc nghẽn là tối quan trọng nhằm bảo đảm việc phân phối dữ liệu chính xác và đúng thời hạn.",
                            "terms": ["bandwidth", "LLN", "congestion control"]
                        },
                        {
                            "en": "In traditional networks, application data is usually transported by the Transmission Control Protocol (TCP), which includes a congestion control mechanism.",
                            "vi": "Trong các mạng truyền thống, dữ liệu ứng dụng thường được vận chuyển bởi Giao thức Điều khiển Truyền vận (TCP), giao thức này đã tích hợp sẵn cơ chế điều khiển tắc nghẽn.",
                            "terms": ["TCP", "congestion control mechanism"]
                        },
                        {
                            "en": "In LLNs, instead, CoAP employs the User Datagram Protocol (UDP), which does not provide any congestion control mechanism.",
                            "vi": "Trái lại, trong mạng LLN, CoAP lại sử dụng Giao thức Gói tin Người dùng (UDP) – một giao thức không hề cung cấp bất kỳ cơ chế điều khiển tắc nghẽn nào.",
                            "terms": ["LLNs", "CoAP", "UDP"]
                        },
                        {
                            "en": "For this reason, CoAP implements optional reliable data delivery through retransmissions and regulates the amount of data transmitted through a simple congestion avoidance mechanism.",
                            "vi": "Vì lý do đó, CoAP tự cài đặt khả năng phân phối dữ liệu tin cậy tùy chọn thông qua cơ chế truyền lại (retransmissions) và điều tiết lượng dữ liệu phát đi bằng một cơ chế tránh tắc nghẽn (congestion avoidance) đơn giản.",
                            "terms": ["retransmissions", "congestion avoidance"]
                        },
                        {
                            "en": "The definition of the latter, however, is not trivial: the shared nature of the wireless medium results in collisions of transmissions, and the limited buffer size of IoT devices often produces buffer overflows.",
                            "vi": "Tuy nhiên, việc định nghĩa cơ chế này không hề đơn giản: bản chất môi trường vô tuyến dùng chung (shared wireless medium) dẫn đến xung đột đường truyền (collisions), và dung lượng bộ đệm hữu hạn của thiết bị IoT thường gây ra hiện tượng tràn bộ đệm (buffer overflows).",
                            "terms": ["wireless medium", "collisions", "buffer overflows"]
                        },
                        {
                            "en": "Both phenomena can cause frequent packet losses that lead to further message retransmissions, which eventually lead to congestion.",
                            "vi": "Cả hai hiện tượng trên đều có thể gây ra mất gói thường xuyên, dẫn tới các lần truyền lại bản tin tiếp theo và rốt cuộc đẩy mạng vào tình trạng tắc nghẽn nghiêm trọng.",
                            "terms": ["packet losses", "retransmissions", "congestion"]
                        }
                    ]
                },
                {
                    "id": "p1_intro_3",
                    "sentences": [
                        {
                            "en": "Since CoAP defines only a basic congestion control mechanism, a new advanced congestion control have been proposed recently in [2], and further extended in [3].",
                            "vi": "Bởi vì CoAP gốc chỉ định nghĩa một cơ chế điều khiển tắc nghẽn cơ bản, một cơ chế điều khiển tắc nghẽn nâng cao mới đã được đề xuất gần đây trong tài liệu [2] và được mở rộng thêm trong [3].",
                            "terms": ["congestion control", "CoAP"]
                        },
                        {
                            "en": "Such algorithm, called CoCoA, is currently under standardization within the CoRE Working Group [8].",
                            "vi": "Thuật toán đó, có tên là CoCoA (CoAP Simple Congestion Control/Advanced), hiện đang trong quá trình chuẩn hóa thuộc Nhóm công tác CoRE [8].",
                            "terms": ["CoCoA", "CoRE Working Group"]
                        },
                        {
                            "en": "CoCoA exploits the measured round-trip time (RTT) between the client and the server to adjust the retransmission timeout and therefore avoid too frequent retransmissions.",
                            "vi": "CoCoA khai thác giá trị thời gian truyền khứ hồi (RTT) đo được giữa phía máy khách (client) và máy chủ (server) để tự động điều chỉnh thời gian chờ truyền lại (Retransmission Timeout - RTO), từ đó tránh được các đợt phát lại quá dày đặc.",
                            "terms": ["RTT", "retransmission timeout", "RTO"]
                        },
                        {
                            "en": "CoCoA has been originally evaluated against CoAP in [2] and [3], showing that it can improve the performance in terms of throughput, packet delivery ratio, and average delays.",
                            "vi": "CoCoA ban đầu đã được đánh giá đối chứng với CoAP trong [2] và [3], chứng minh rằng nó có thể cải thiện hiệu năng về thông lượng (throughput), tỷ lệ phân phối gói tin thành công (packet delivery ratio - PDR) và độ trễ trung bình (average delays).",
                            "terms": ["throughput", "packet delivery ratio", "PDR", "delays"]
                        }
                    ]
                },
                {
                    "id": "p1_intro_4",
                    "sentences": [
                        {
                            "en": "In this work, we present an exhaustive performance evaluation of the CoCoA congestion control algorithm.",
                            "vi": "Trong công trình này, chúng tôi trình bày một đánh giá hiệu năng toàn diện về thuật toán điều khiển tắc nghẽn CoCoA.",
                            "terms": ["performance evaluation", "CoCoA"]
                        },
                        {
                            "en": "First, we present an evaluation of the algorithm considering two different scenarios, the first one with only CoAP traffic, and the second one in which CoAP traffic competes with interfering greedy traffic that is transmitted without rate control.",
                            "vi": "Đầu tiên, chúng tôi trình bày việc đánh giá thuật toán trong hai kịch bản khác nhau: kịch bản thứ nhất chỉ có lưu lượng CoAP, và kịch bản thứ hai khi lưu lượng CoAP phải cạnh tranh với lưu lượng gây nhiễu tham lam (greedy traffic) vốn được phát mà không có bất kỳ sự kiểm soát tốc độ nào.",
                            "terms": ["CoAP traffic", "greedy traffic", "rate control"]
                        },
                        {
                            "en": "An in-depth analysis of these simulation results allows us to highlight some novel critical issues of the algorithm.",
                            "vi": "Một phân tích chuyên sâu từ các kết quả mô phỏng này cho phép chúng tôi chỉ ra một số vấn đề nghiêm trọng mới phát sinh của thuật toán.",
                            "terms": ["simulation results", "critical issues"]
                        },
                        {
                            "en": "Consequently, we propose a set of modifications to the original algorithm to overcome these limitations.",
                            "vi": "Hệ quả là, chúng tôi đề xuất một tập hợp các cải tiến đối với thuật toán nguyên bản để khắc phục những giới hạn này.",
                            "terms": ["modifications", "limitations"]
                        },
                        {
                            "en": "The resulting algorithm, named pCoCoA, is evaluated against CoAP, CoCoA+ and two more recent algorithms: 4-state-strong [7] and CoCoA-E [14].",
                            "vi": "Thuật toán kết quả, mang tên pCoCoA, được đánh giá so sánh với CoAP, CoCoA+ cùng hai thuật toán gần đây: 4-state-strong [7] và CoCoA-E [14].",
                            "terms": ["pCoCoA", "4-state-strong", "CoCoA-E"]
                        },
                        {
                            "en": "Results demonstrated that pCoCoA effectively mitigates the issues of the original algorithm, reducing the overall number of retransmissions while keeping throughputs and delays comparable to those obtained with CoAP, CoCoA, CoCoA-E and 4-state-strong.",
                            "vi": "Các kết quả chứng minh rằng pCoCoA giảm thiểu hiệu quả các vấn đề của thuật toán gốc, cắt giảm tổng số lần truyền lại trong khi vẫn duy trì thông lượng và độ trễ tương đương với CoAP, CoCoA, CoCoA-E và 4-state-strong.",
                            "terms": ["retransmissions", "throughputs", "delays"]
                        },
                        {
                            "en": "Moreover, pCoCoA can correctly handle scenarios in which CoAP traffic competes with interfering bursty traffic, whereas other algorithms, such as CoCoA-E, do not.",
                            "vi": "Hơn thế nữa, pCoCoA có thể xử lý chính xác các kịch bản mà lưu lượng CoAP cạnh tranh với lưu lượng bùng phát (bursty traffic) gây nhiễu, điều mà các thuật toán khác như CoCoA-E không làm được.",
                            "terms": ["bursty traffic", "CoCoA-E"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "sec_p1_cocoa_plus",
            "title": "II. COCOA+ CONGESTION CONTROL",
            "title_vi": "II. ĐIỀU KHIỂN TẮC NGHẼN COCOA+",
            "paragraphs": [
                {
                    "id": "p1_cocoa_overview",
                    "sentences": [
                        {
                            "en": "The Simple Congestion Control/Advanced, also known as CoCoA, is an alternative congestion control algorithm for CoAP originally proposed in [2] and now currently under standardization within the activities of the CoRE Working Group [8].",
                            "vi": "Giải thuật Điều khiển Tắc nghẽn Đơn giản/Nâng cao (Simple Congestion Control/Advanced), hay còn gọi là CoCoA, là một thuật toán điều khiển tắc nghẽn thay thế dành cho CoAP, ban đầu được đề xuất trong [2] và hiện đang trong quá trình chuẩn hóa thuộc khuôn khổ Nhóm công tác CoRE [8].",
                            "terms": ["CoCoA", "CoAP", "CoRE Working Group"]
                        },
                        {
                            "en": "Different versions of the algorithm have been proposed over time, including minor modifications that helped improving the performance. In this work we consider its last revision, CoCoA+ [3].",
                            "vi": "Nhiều phiên bản khác nhau của thuật toán đã được đề xuất qua thời gian, bao gồm những chỉnh sửa nhỏ giúp cải thiện hiệu năng. Trong công trình này, chúng tôi xem xét phiên bản sửa đổi mới nhất của nó là CoCoA+ [3].",
                            "terms": ["CoCoA+"]
                        },
                        {
                            "en": "The algorithm is composed of the following three main functions: a policy to calculate the retransmission timeout (RTO), the back-off policy to set the RTO for retransmissions, and an ageing policy for the status information.",
                            "vi": "Thuật toán bao gồm ba chức năng chính sau: chính sách tính toán thời gian chờ truyền lại (Retransmission Timeout - RTO), chính sách thoái lui (back-off policy) để thiết lập RTO cho các lần truyền lại, và chính sách lão hóa (ageing policy) dành cho thông tin trạng thái mạng.",
                            "terms": ["retransmission timeout", "RTO", "back-off policy", "ageing policy"]
                        }
                    ]
                },
                {
                    "id": "p1_cocoa_rto_calc",
                    "sentences": [
                        {
                            "en": "A. RTO calculation: In order to calculate the RTO, CoCoA+ adopts the same algorithm used by TCP, which updates the RTO value based on measured Round Trip Times (RTTs).",
                            "vi": "A. Tính toán RTO: Để tính toán RTO, CoCoA+ áp dụng thuật toán tương tự như của TCP, tức cập nhật giá trị RTO dựa trên các giá trị Thời gian Truyền khứ hồi (RTT) đo được.",
                            "terms": ["RTO calculation", "TCP", "RTT"]
                        },
                        {
                            "en": "According to Karn's algorithm [9], the RTT measurements should be considered only when the message was correctly delivered without retransmissions.",
                            "vi": "Theo giải thuật Karn [9], các phép đo RTT chỉ nên được ghi nhận khi bản tin được truyền phát thành công mà không phải qua bất kỳ lần truyền lại nào.",
                            "terms": ["Karn's algorithm", "retransmissions"]
                        },
                        {
                            "en": "In the context of lossy networks, however, many transmissions are expected to experience retransmissions, thus reducing the probability of obtaining valid RTT measurements.",
                            "vi": "Tuy nhiên, trong bối cảnh các mạng tổn hao (lossy networks), nhiều lượt truyền tin khó tránh khỏi việc phải truyền lại, do đó làm giảm đáng kể xác suất thu được các mẫu đo RTT hợp lệ theo chuẩn Karn.",
                            "terms": ["lossy networks", "RTT measurements"]
                        },
                        {
                            "en": "For this reason, CoCoA+ considers also transactions that experienced retransmissions to obtain a more accurate RTT estimation.",
                            "vi": "Chính vì lý do này, CoCoA+ tính đến cả những giao dịch phải truyền lại để có thể thu được ước lượng RTT đầy đủ và cập nhật hơn.",
                            "terms": ["transactions", "RTT estimation"]
                        },
                        {
                            "en": "Specifically, two RTO values are calculated: a strong RTO, estimated using RTTs samples from transactions that did not required any retransmission, and a weak RTO, estimated using RTT values of transactions that required no more than two transmissions.",
                            "vi": "Cụ thể, hai giá trị RTO được tính toán song song: RTO mạnh (strong RTO), được ước lượng từ các mẫu RTT của những giao dịch không cần truyền lại; và RTO yếu (weak RTO), được ước lượng bằng các giá trị RTT của các giao dịch cần tối đa hai lần truyền lại.",
                            "terms": ["strong RTO", "weak RTO"]
                        },
                        {
                            "en": "Considering that it is not possible to know for an ACK to which transmission it belongs to, RTT samples are collected measuring the time between the first transmission and the arrival of the response, but only if two retransmissions at most are required.",
                            "vi": "Do không thể biết chắc một gói tin ACK nhận được thuộc về lần truyền nào (vấn đề nhập nhằng RTT), mẫu RTT được thu thập bằng cách đo khoảng thời gian từ lần truyền đầu tiên cho tới khi nhận được phản hồi, nhưng chỉ áp dụng khi số lần truyền lại không vượt quá 2.",
                            "terms": ["ACK", "RTT samples", "retransmissions"]
                        }
                    ]
                },
                {
                    "id": "p1_cocoa_formulas",
                    "sentences": [
                        {
                            "en": "For each destination, a node maintains the following quantities: two smoothed mean RTT estimators (RTTstrong and RTTweak), two smoothed mean variance (RTTVARstrong and RTTVARweak), two RTO estimators (RTOstrong and RTOweak), and a comprehensive RTO (RTOoverall) which keeps track of both RTOstrong and RTOweak changes.",
                            "vi": "Với mỗi địa chỉ đích, một nút mạng duy trì các đại lượng sau: hai bộ ước lượng RTT trung bình trượt làm mịn (RTTstrong và RTTweak), hai phương sai trung bình làm mịn (RTTVARstrong và RTTVARweak), hai bộ ước lượng RTO (RTOstrong và RTOweak), và một giá trị RTO tổng hợp (RTOoverall) để theo dõi biến thiên của cả RTOstrong lẫn RTOweak.",
                            "terms": ["RTTstrong", "RTTweak", "RTTVAR", "RTOoverall"]
                        },
                        {
                            "en": "Initially, the RTO estimators are initialized with a default value of 2s. The value of the other RTTx and RTTVARx parameters are initialized when the first corresponding RTT value R is measured: RTTx = R, RTTVARx = R / 2 (Eq. 1).",
                            "vi": "Ban đầu, các bộ ước lượng RTO được khởi tạo với giá trị mặc định là 2 giây. Các tham số RTTx và RTTVARx còn lại được khởi tạo khi mẫu RTT đầu tiên R được đo đạc theo công thức: RTTx = R, RTTVARx = R / 2 (Phương trình 1).",
                            "terms": ["RTTx", "RTTVARx"]
                        },
                        {
                            "en": "Every time a new RTT sample R is measured, the corresponding strong or weak estimators are updated: RTTx = (1 - alpha)*RTTx + alpha*R (Eq. 2); RTTVARx = (1 - beta)*RTTVARx + beta*|RTTx - R| (Eq. 3); RTOx = RTTx + Kx*RTTVARx (Eq. 4); RTOoverall = lambda_x*RTOx + (1 - lambda_x)*RTOoverall (Eq. 5).",
                            "vi": "Mỗi khi đo được một mẫu RTT mới R, các bộ ước lượng mạnh hoặc yếu tương ứng được cập nhật: RTTx = (1 - α)RTTx + αR (2); RTTVARx = (1 - β)RTTVARx + β|RTTx - R| (3); RTOx = RTTx + Kx·RTTVARx (4); RTOoverall = λx·RTOx + (1 - λx)RTOoverall (5).",
                            "terms": ["alpha", "beta", "Kx", "lambda"]
                        },
                        {
                            "en": "Recommended parameter values are: alpha = 0.125, beta = 0.25, Kstrong = 4, Kweak = 1, lambda_strong = 0.5, and lambda_weak = 0.25.",
                            "vi": "Các giá trị tham số được khuyến nghị gồm: α = 0.125, β = 0.25, Kstrong = 4, Kweak = 1, λstrong = 0.5, và λweak = 0.25.",
                            "terms": ["Kstrong", "Kweak"]
                        },
                        {
                            "en": "RTOoverall is used to set the initial RTO (RTOinit) for the next CON transmission using a dithering approach: RTOinit is randomly chosen from [RTOoverall, 1.5 * RTOoverall].",
                            "vi": "RTOoverall được sử dụng để thiết lập RTO khởi tạo (RTOinit) cho lần truyền bản tin CON kế tiếp thông qua phương pháp rung ngẫu nhiên (dithering): RTOinit được chọn ngẫu nhiên trong khoảng [RTOoverall, 1.5 · RTOoverall] nhằm phân tán thời gian truyền tránh xung đột.",
                            "terms": ["RTOoverall", "RTOinit", "dithering", "CON"]
                        }
                    ]
                },
                {
                    "id": "p1_cocoa_backoff_aging",
                    "sentences": [
                        {
                            "en": "B. Backoff policy: CoCoA+ introduces a backoff mechanism to set the retransmission timeout. Compared to CoAP, in which the RTO is doubled, CoCoA+ computes the new RTO value for retransmissions according to a variable backoff factor (VBF) that depends on RTOinit: RTOnew = RTOprevious * VBF(RTOinit).",
                            "vi": "B. Chính sách thoái lui (Backoff policy): CoCoA+ giới thiệu một cơ chế thoái lui để thiết lập thời gian chờ truyền lại. Khác với CoAP vốn chỉ đơn thuần nhân đôi RTO (Binary Exponential Backoff - BEB), CoCoA+ tính toán giá trị RTO mới cho các lần truyền lại dựa trên hệ số thoái lui khả biến VBF phụ thuộc vào RTOinit: RTOnew = RTOprevious · VBF(RTOinit).",
                            "terms": ["backoff policy", "VBF", "BEB"]
                        },
                        {
                            "en": "The VBF factor is set according to RTOinit to avoid frequent retransmissions in a short time when the RTO value is low, and to avoid long delays in retransmissions when the RTO value is large.",
                            "vi": "Hệ số VBF được thiết lập tương ứng với RTOinit nhằm tránh truyền lại dồn dập trong khoảng thời gian quá ngắn khi RTO đang thấp (ví dụ VBF=3 khi RTO < 1s), đồng thời tránh độ trễ quá dài khi RTO đang lớn (ví dụ VBF=1.5 khi RTO > 3s).",
                            "terms": ["VBF", "retransmissions", "delay"]
                        },
                        {
                            "en": "C. Information aging: CoCoA+ introduces a mechanism to age RTO values when RTT updates are not received for a certain time.",
                            "vi": "C. Lão hóa thông tin (Information aging): CoCoA+ đưa vào cơ chế làm lão hóa các giá trị RTO khi không nhận được cập nhật RTT mới nào trong một khoảng thời gian nhất định.",
                            "terms": ["information aging", "RTT updates"]
                        },
                        {
                            "en": "Specifically, if RTOoverall is larger than 2s and is not updated for more than 30s, RTOoverall is updated as (2 + RTOoverall) / 2. If RTOoverall is less than 1s and not updated for 16 times its actual value, it is reset to 1s.",
                            "vi": "Cụ thể, nếu RTOoverall lớn hơn 2 giây (giá trị RTO mặc định của CoAP) và không được cập nhật trong hơn 30 giây, RTOoverall sẽ được kéo về gần giá trị ban đầu theo công thức (2 + RTOoverall) / 2. Còn nếu RTOoverall nhỏ hơn 1 giây và không được cập nhật trong khoảng thời gian gấp 16 lần giá trị thực của nó, RTOoverall sẽ được thiết lập lại về 1 giây.",
                            "terms": ["RTOoverall", "information aging"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "sec_p1_shortcomings",
            "title": "V. COCOA+ SHORTCOMINGS",
            "title_vi": "V. CÁC THIẾU SÓT VÀ HẠN CHẾ CỦA COCOA+",
            "paragraphs": [
                {
                    "id": "p1_shortcomings_a",
                    "sentences": [
                        {
                            "en": "A. RTO too close to RTT: When a sequence of similar RTTs is sampled, the RTTVAR variable, which measures the mean variance, tends to vanish.",
                            "vi": "A. Giá trị RTO tiệm cận quá sát RTT: Khi một chuỗi các mẫu RTT tương tự nhau được ghi nhận liên tiếp, biến RTTVAR (đại diện cho phương sai trung bình) có xu hướng tiến dần về 0 (triệt tiêu).",
                            "terms": ["RTO", "RTT", "RTTVAR"]
                        },
                        {
                            "en": "It follows that RTO values get close to the measured RTT. The problem is exacerbated when such RTTs have a very small value, for instance because of a period in which the network is lightly loaded that leads to small RTOs.",
                            "vi": "Kéo theo đó, giá trị RTO sẽ hạ xuống tiệm cận rất sát với RTT thực tế. Vấn đề càng trầm trọng khi các giá trị RTT này rất nhỏ, chẳng hạn trong giai đoạn mạng có tải nhẹ khiến RTO bị thu hẹp đáng kể.",
                            "terms": ["RTO", "RTT", "lightly loaded"]
                        },
                        {
                            "en": "However, even when the network is stable, RTTs can fluctuate, consequently the probability of spurious retransmissions increases as RTOs get close to small RTTs.",
                            "vi": "Tuy nhiên, ngay cả khi mạng ổn định, RTT vẫn luôn có những dao động ngẫu nhiên, dẫn tới xác suất phát sinh các lần truyền lại giả tạo (spurious retransmissions) tăng vọt khi RTO bám quá sát các giá trị RTT nhỏ.",
                            "terms": ["fluctuate", "spurious retransmissions"]
                        }
                    ]
                },
                {
                    "id": "p1_shortcomings_b_c",
                    "sentences": [
                        {
                            "en": "B. Lack of weak estimator update: The rule to avoid the weak estimator update when more than two retransmissions occur has been introduced in CoCoA+ to reduce the impact of the weak RTO on the final RTO.",
                            "vi": "B. Thiếu cập nhật bộ ước lượng yếu: Quy tắc không cập nhật bộ ước lượng yếu khi có trên hai lần truyền lại vốn được đưa vào CoCoA+ nhằm giảm bớt ảnh hưởng của RTO yếu lên giá trị RTO cuối cùng.",
                            "terms": ["weak estimator", "retransmissions", "weak RTO"]
                        },
                        {
                            "en": "However, this countermeasure can work well only under steady conditions when the network load is constant or changes very slowly. On the other hand, if competing traffic is bursty, a more timely adaptation to the current network load is required.",
                            "vi": "Tuy nhiên, biện pháp đối phó này chỉ hoạt động tốt trong điều kiện mạng ổn định khi tải không đổi hoặc biến thiên rất chậm. Ngược lại, nếu lưu lượng cạnh tranh có tính bùng nổ (bursty), hệ thống đòi hỏi khả năng thích ứng kịp thời hơn với tải mạng hiện thời.",
                            "terms": ["bursty traffic", "network load"]
                        },
                        {
                            "en": "C. Insufficient weak estimator weight: Setting Kweak to 1 also limits the impact of the weak RTO. Our results showed that if the sampled RTT after a retransmission is very close to the RTO, the weak estimator is not able to increase the RTO value effectively, causing a sequence of spurious retransmissions.",
                            "vi": "C. Trọng số của bộ ước lượng yếu không đủ lớn: Việc đặt Kweak = 1 cũng làm giảm tác động của RTO yếu. Kết quả của chúng tôi chỉ ra rằng nếu RTT đo được sau một lần truyền lại rất gần với RTO, bộ ước lượng yếu không đủ khả năng nâng RTO lên một cách hiệu quả, dẫn đến hàng loạt các lần truyền lại không cần thiết liên tiếp.",
                            "terms": ["Kweak", "weak estimator", "spurious retransmissions"]
                        }
                    ]
                },
                {
                    "id": "p1_shortcomings_d_e_f",
                    "sentences": [
                        {
                            "en": "D. RTO peaks in response to RTT decrease: If the RTT rapidly decreases, the RTO, contrarily, increases. This is because the difference between the smoothed mean RTT and the sampled RTT becomes negative while RTTVAR is updated using the absolute value of such difference, thus resulting in an artificial increase of the RTO.",
                            "vi": "D. RTO tăng vọt nghịch lý khi RTT giảm: Nếu RTT sụt giảm nhanh, RTO ngược lại lại tăng vọt lên. Điều này là do hiệu số giữa RTT trung bình làm mịn và mẫu RTT trở thành số âm, nhưng RTTVAR lại được cập nhật bằng giá trị tuyệt đối của hiệu số đó, gây ra hiện tượng tăng ảo giá trị RTO.",
                            "terms": ["RTO peaks", "RTT decrease", "RTTVAR"]
                        },
                        {
                            "en": "E. Double algorithms, double histories: The analysis of RTO traces highlighted some RTOinit spikes due to the lack of an aging mechanism for the weak estimator.",
                            "vi": "E. Tồn tại hai thuật toán và hai chuỗi lịch sử song song: Phân tích vết RTO cho thấy các đỉnh đột biến của RTOinit xuất phát từ việc thiếu cơ chế lão hóa (aging) dành riêng cho bộ ước lượng yếu.",
                            "terms": ["RTOinit spikes", "aging mechanism", "weak estimator"]
                        },
                        {
                            "en": "F. Excessive RTO growth: In CoCoA+ the RTOinit value can grow very large. If retransmissions occur, the back-off further increases such values, leading to very large waiting times (up to 200 to 300 seconds).",
                            "vi": "F. Sự phình to quá mức của RTO: Trong CoCoA+, giá trị RTOinit có thể tăng lên rất lớn. Khi có các lần truyền lại, thuật toán thoái lui tiếp tục nhân giá trị này lên, dẫn tới thời gian chờ quá dài (trong các thử nghiệm ghi nhận những giao dịch phải chờ từ 200 đến 300 giây).",
                            "terms": ["RTO growth", "waiting times", "back-off"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "sec_p1_pcocoa",
            "title": "VI. COAP PRECISE CONGESTION CONTROL (pCoCoA)",
            "title_vi": "VI. ĐIỀU KHIỂN TẮC NGHẼN CHÍNH XÁC PCOCOA",
            "paragraphs": [
                {
                    "id": "p1_pcocoa_principles",
                    "sentences": [
                        {
                            "en": "The proposed solution is based on two main elements: (i) a mechanism to precisely link requests to responses even in case of retransmissions; (ii) a set of modifications to the RTO estimation algorithm.",
                            "vi": "Giải pháp đề xuất dựa trên hai yếu tố cốt lõi: (i) cơ chế liên kết chính xác bản tin yêu cầu với bản tin phản hồi ngay cả khi có truyền lại; (ii) một tập hợp các cải tiến đối với thuật toán ước lượng RTO.",
                            "terms": ["retransmissions", "RTO estimation"]
                        },
                        {
                            "en": "Specifically, pCoCoA differs from CoCoA+ in three points: it eliminates the use of the weak estimator by introducing a transmission count option; it introduces a different way to initialize and update RTTVAR and the smoothed RTT (SRTT); and it employs a dynamic method to limit the minimum RTO (via mdev_max).",
                            "vi": "Cụ thể, pCoCoA khác biệt với CoCoA+ ở ba điểm then chốt: loại bỏ hoàn toàn bộ ước lượng yếu nhờ bổ sung tùy chọn đếm số lần truyền (Transmission Counter - TC); đưa ra cách thức khởi tạo và cập nhật mới cho RTTVAR cùng RTT làm mịn (SRTT); và áp dụng phương pháp động để giới hạn chặn dưới RTO tối thiểu (thông qua biến mdev_max).",
                            "terms": ["weak estimator", "transmission count", "SRTT", "mdev_max", "RTO"]
                        }
                    ]
                },
                {
                    "id": "p1_pcocoa_con_ack",
                    "sentences": [
                        {
                            "en": "A. CON-ACK precise mapping: Current CoAP and CoCoA+ implementations cannot match a specific ACK with its CON when retransmissions occur, making it impossible to distinguish between single-transmission transactions and multiple-retransmission transactions.",
                            "vi": "A. Ánh xạ chính xác CON-ACK: Các bản cài đặt hiện thời của CoAP và CoCoA+ không thể khớp một gói ACK cụ thể với lần truyền CON tương ứng khi có truyền lại, khiến hệ thống không thể phân biệt giữa giao dịch hoàn tất ngay lần phát đầu với giao dịch phải qua nhiều lần truyền lại.",
                            "terms": ["CON", "ACK", "mapping", "retransmissions"]
                        },
                        {
                            "en": "To overcome this, a new CoAP option called transmission counter (TC) is introduced. The sender sets TC = 1 on the first transmission and increments it on each retransmission. The receiver echoes the TC option in the ACK.",
                            "vi": "Để khắc phục điều này, một tùy chọn CoAP mới gọi là Bộ đếm số lần truyền (Transmission Counter - TC) được đưa vào. Phía gửi thiết lập TC = 1 ở lần truyền đầu tiên và tăng dần giá trị này sau mỗi lần truyền lại. Phía nhận sẽ sao chép và trả lại tùy chọn TC này trong bản tin ACK.",
                            "terms": ["Transmission Counter", "TC", "ACK"]
                        },
                        {
                            "en": "This mechanism allows the sender to estimate the round-trip time precisely and detect spurious retransmissions by comparing the TC of the last transmission with the TC received in the ACK message.",
                            "vi": "Cơ chế này cho phép bên gửi ước lượng thời gian trễ khứ hồi RTT một cách tuyệt đối chính xác, đồng thời phát hiện được các lần truyền lại giả tạo (spurious retransmissions) bằng cách so sánh giá trị TC của lần truyền cuối cùng với giá trị TC nhận được trong bản tin ACK.",
                            "terms": ["round-trip time", "spurious retransmissions", "TC"]
                        }
                    ]
                },
                {
                    "id": "p1_pcocoa_algo2",
                    "sentences": [
                        {
                            "en": "B. RTO Computation algorithm: Inspired by Linux TCP congestion control, pCoCoA tracks the maximum mean deviance of the RTO (mdev_max) to avoid issues caused by sudden RTT variations and prevent RTO from dropping too low.",
                            "vi": "B. Thuật toán tính toán RTO: Được lấy cảm hứng từ cơ chế kiểm soát tắc nghẽn của Linux TCP, pCoCoA theo dõi độ lệch trung bình cực đại của RTO (mdev_max) nhằm tránh các vấn đề gây ra bởi sự biến thiên đột ngột của RTT và ngăn chặn RTO bị sụt giảm quá thấp.",
                            "terms": ["Linux TCP", "mdev_max", "deviance", "RTT variations"]
                        },
                        {
                            "en": "When a spurious transmission occurs, the parameter k is set to 6 instead of 4, allowing the SRTO estimator to grow faster and effectively limiting successive spurious retransmissions: SRTO = SRTT + max(k * RTTVAR, mdev_max).",
                            "vi": "Khi phát hiện có truyền lại giả tạo (cờ spurious bật true), tham số k được gán bằng 6 thay vì 4, cho phép bộ ước lượng SRTO tăng nhanh hơn và hạn chế hữu hiệu các lần truyền lại thừa kế tiếp theo công thức: SRTO = SRTT + max(k · RTTVAR, mdev_max).",
                            "terms": ["spurious", "k", "SRTO", "SRTT", "mdev_max"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "sec_p1_conclusions",
            "title": "VIII. CONCLUSIONS",
            "title_vi": "VIII. KẾT LUẬN",
            "paragraphs": [
                {
                    "id": "p1_conc_1",
                    "sentences": [
                        {
                            "en": "In this paper, we presented an in-depth analysis of the CoCoA+ advanced congestion control algorithm under both periodic and interfering bursty traffic scenarios.",
                            "vi": "Trong bài báo này, chúng tôi đã trình bày một phân tích chuyên sâu về thuật toán điều khiển tắc nghẽn nâng cao CoCoA+ dưới cả hai kịch bản lưu lượng định kỳ và lưu lượng bùng nổ gây nhiễu.",
                            "terms": ["CoCoA+", "congestion control", "bursty traffic"]
                        },
                        {
                            "en": "The simulation results allowed us to highlight critical issues of CoCoA+, where it unnecessarily triggers more retransmissions than CoAP and fails to adapt responsively to network load variations.",
                            "vi": "Kết quả mô phỏng cho phép chúng tôi làm sáng tỏ những vấn đề cốt tử của CoCoA+, khi mà nó vô tình kích hoạt nhiều lần truyền lại thừa hơn cả CoAP mặc định và không thể thích ứng nhanh nhạy với các biến động tải mạng.",
                            "terms": ["simulation results", "retransmissions", "CoAP"]
                        },
                        {
                            "en": "The proposed pCoCoA algorithm overcomes these limitations by combining precise CON-ACK mapping with an enhanced RTO computation inspired by Linux TCP.",
                            "vi": "Thuật toán pCoCoA được đề xuất đã khắc phục triệt để các hạn chế này bằng cách kết hợp cơ chế ánh xạ chính xác CON-ACK với thuật toán tính toán RTO cải tiến lấy cảm hứng từ Linux TCP.",
                            "terms": ["pCoCoA", "CON-ACK mapping", "Linux TCP"]
                        },
                        {
                            "en": "Results demonstrated that pCoCoA achieves comparable carried load while significantly reducing the number of retransmissions and handling interfering bursty traffic robustly.",
                            "vi": "Các kết quả thử nghiệm chứng minh pCoCoA đạt được mức tải hữu ích (carried load) tương đương trong khi giảm thiểu rõ rệt số lần truyền lại và đối phó rất vững vàng trước lưu lượng bùng phát gây nhiễu.",
                            "terms": ["carried load", "retransmissions", "bursty traffic"]
                        }
                    ]
                }
            ]
        }
    ]
}

with open(r"C:\Users\nam\.gemini\antigravity\scratch\telecom-reader\data_paper1.js", "w", encoding="utf-8") as f:
    f.write("const PAPER_1_DATA = " + json.dumps(paper1_data, ensure_ascii=False, indent=2) + ";\n")

print("Generated data_paper1.js successfully!")
