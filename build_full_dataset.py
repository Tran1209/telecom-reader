# -*- coding: utf-8 -*-
"""
Full Dataset Generator for Telecom Reader
Creates:
- data_paper1.js (pCoCoA: A precise congestion control algorithm for CoAP)
- data_paper2.js (CoAP Congestion Control for the Internet of Things)
- dictionary.js (Comprehensive Telecom & Networking Dictionary + Lemmatizer)
"""

import os
import json

base_dir = r"C:\Users\nam\.gemini\antigravity\scratch\telecom-reader"

# ==========================================
# PAPER 1 DATA
# ==========================================
paper1 = {
    "id": "paper1",
    "code": "pCoCoA",
    "title": "pCoCoA: A precise congestion control algorithm for CoAP",
    "title_vi": "pCoCoA: Thuật toán điều khiển tắc nghẽn chính xác cho CoAP",
    "authors": "Simone Bolettieri, Giacomo Tanganelli, Carlo Vallati, Enzo Mingozzi",
    "affiliations": "Department of Information Engineering, University of Pisa, Italy & IIT-CNR, Pisa, Italy",
    "venue": "Ad Hoc Networks (Elsevier), Volume 80, 2018, Pages 116–129",
    "doi": "https://doi.org/10.1016/j.adhoc.2018.06.015",
    "summary_vi": "Bài báo nghiên cứu chuyên sâu về giao thức điều khiển tắc nghẽn CoCoA+ trong mạng IoT (LLN), vạch rõ các điểm yếu chí tử (RTO tiệm cận RTT, đỉnh nhọn RTO giả tạo, bộ ước lượng yếu không phản ứng kịp) và đề xuất thuật toán mới pCoCoA sử dụng tùy chọn bộ đếm Transmission Counter (TC) cùng bộ ước lượng mdev_max theo Linux TCP giúp triệt tiêu truyền lại giả tạo (spurious retransmissions).",
    "sections": [
        {
            "id": "p1_sec_abstract",
            "title": "Abstract",
            "title_vi": "Tóm tắt bài báo",
            "paragraphs": [
                {
                    "id": "p1_p_abs_1",
                    "sentences": [
                        {
                            "en": "The Constrained Application Protocol (CoAP) is an IETF standard application protocol for the future Internet of Things (IoT).",
                            "vi": "Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) là một giao thức tầng ứng dụng tiêu chuẩn của tổ chức IETF dành cho mạng lưới Vạn vật kết nối Internet (IoT) tương lai.",
                            "terms": ["CoAP", "IETF", "IoT", "application protocol"]
                        },
                        {
                            "en": "Since IoT devices are often interconnected by networks characterized by high packet error rates and low throughput, congestion control will be crucial to ensure proper and timed communication in these networks.",
                            "vi": "Do các thiết bị IoT thường được kết nối thông qua các mạng có đặc tính tỷ lệ lỗi gói cao (high packet error rates) và thông lượng thấp (low throughput), cơ chế điều khiển tắc nghẽn (congestion control) là yếu tố mang tính quyết định để đảm bảo việc truyền thông diễn ra chuẩn xác và đúng thời hạn trong các mạng này.",
                            "terms": ["packet error rates", "throughput", "congestion control"]
                        },
                        {
                            "en": "Therefore, CoCoA+, an advanced congestion control algorithm for CoAP, is currently being specified by the IETF.",
                            "vi": "Vì vậy, CoCoA+ – một thuật toán điều khiển tắc nghẽn nâng cao dành cho CoAP – hiện đang được nhóm nghiên cứu của IETF hoàn thiện đặc tả kỹ thuật.",
                            "terms": ["CoCoA+", "IETF"]
                        },
                        {
                            "en": "In this work, we present a critical analysis of CoCoA+ performance and highlight some of its shortcomings and pitfalls.",
                            "vi": "Trong công trình này, chúng tôi trình bày một phân tích phản biện chuyên sâu về hiệu năng của CoCoA+ và vạch ra một số thiếu sót cùng những cạm bẫy kỹ thuật của thuật toán này.",
                            "terms": ["performance", "shortcomings", "pitfalls"]
                        },
                        {
                            "en": "Two different scenarios are considered: one with an increasing traffic load due to an increasing number of CoAP requests, and another with an interfering traffic concurrently transmitted in the network characterized by a bursty pattern.",
                            "vi": "Hai kịch bản thử nghiệm được xem xét: một kịch bản với tải lưu lượng (traffic load) gia tăng do số lượng yêu cầu CoAP tăng dần, và một kịch bản khác có lưu lượng gây nhiễu (interfering traffic) được truyền đồng thời trong mạng với đặc trưng dạng bùng nổ (bursty pattern).",
                            "terms": ["traffic load", "interfering traffic", "bursty pattern"]
                        },
                        {
                            "en": "In the former scenario, we show how CoCoA+ may be characterized by many spurious retransmissions at some offered loads close to congestion.",
                            "vi": "Ở kịch bản đầu tiên, chúng tôi chỉ ra rằng CoCoA+ có xu hướng phát sinh rất nhiều lần truyền lại giả tạo / không cần thiết (spurious retransmissions) tại một số mức tải cung cấp (offered loads) tiệm cận ngưỡng tắc nghẽn.",
                            "terms": ["spurious retransmissions", "offered loads", "congestion"]
                        },
                        {
                            "en": "In the latter, we show instead how the weak estimator is not particularly effective in adapting to changing traffic loads.",
                            "vi": "Ở kịch bản thứ hai, chúng tôi chỉ ra rằng bộ ước lượng yếu (weak estimator) hoàn toàn không đạt hiệu quả trong việc thích ứng với các mức tải lưu lượng thay đổi nhanh.",
                            "terms": ["weak estimator", "traffic loads"]
                        },
                        {
                            "en": "In order to overcome such limitations, a number of modifications to CoCoA+ are proposed.",
                            "vi": "Nhằm khắc phục những giới hạn cố hữu này, một loạt cải tiến đối với CoCoA+ đã được chúng tôi đề xuất.",
                            "terms": ["limitations", "modifications"]
                        },
                        {
                            "en": "The resulting solution, named precise Congestion Control (pCoCoA), is shown to reduce the number of retransmissions, while guaranteeing throughputs and delays comparable to those of CoAP and CoCoA+.",
                            "vi": "Giải pháp kết quả, được đặt tên là Điều khiển Tắc nghẽn Chính xác (precise Congestion Control - pCoCoA), được chứng minh là làm giảm đáng kể số lần truyền lại thừa, trong khi vẫn bảo đảm mức thông lượng và độ trễ tương đương với CoAP mặc định và CoCoA+.",
                            "terms": ["pCoCoA", "retransmissions", "throughput", "delay"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p1_sec_intro",
            "title": "I. INTRODUCTION",
            "title_vi": "I. GIỚI THIỆU TỔNG QUAN",
            "paragraphs": [
                {
                    "id": "p1_p_intro_1",
                    "sentences": [
                        {
                            "en": "The Internet of Things (IoT) is getting momentum both in academia, as a very active research topic, and in industry, with smart objects that are meant to thoroughly affect our lives.",
                            "vi": "Mạng lưới Vạn vật kết nối Internet (IoT) đang phát triển như vũ bão cả trong giới học thuật – như một chủ đề nghiên cứu trọng điểm – lẫn trong công nghiệp, với hàng loạt thiết bị thông minh tác động sâu sắc đến đời sống con người.",
                            "terms": ["IoT", "smart objects"]
                        },
                        {
                            "en": "IoT systems are built on top of IoT devices that collect data and interact with the physical environment.",
                            "vi": "Hệ thống IoT được kiến tạo trên nền tảng các thiết bị IoT chuyên thu thập dữ liệu và tương tác trực tiếp với môi trường vật lý.",
                            "terms": ["IoT devices"]
                        },
                        {
                            "en": "IoT devices are usually cheap, battery-powered devices, with limited computation capabilities.",
                            "vi": "Các thiết bị IoT phần lớn là thiết bị giá thành thấp, chạy bằng nguồn pin và có năng lực xử lý tính toán rất hạn chế.",
                            "terms": ["battery-powered", "computation capabilities"]
                        },
                        {
                            "en": "Those devices are equipped with low power transceivers that, however, allow forming Low Power and Lossy Networks (LLN), characterized by possibly large packet error rates, and low throughput.",
                            "vi": "Những thiết bị này được trang bị các bộ thu phát vô tuyến công suất thấp (low power transceivers), tạo thành Mạng năng lượng thấp và tổn thất cao (Low Power and Lossy Networks - LLN), với đặc tính tỷ lệ lỗi gói tin (PER) lớn và thông lượng kênh truyền hạn chế.",
                            "terms": ["transceivers", "LLN", "packet error rates", "throughput"]
                        },
                        {
                            "en": "Due to these characteristics, new communication protocols tailored for constrained devices operating in lossy networks are required.",
                            "vi": "Chính vì các đặc tính khắc nghiệt này, các giao thức truyền thông mới được thiết kế 'đo ni đóng giày' cho các thiết bị bị ràng buộc (constrained devices) hoạt động trong mạng tổn hao là điều bắt buộc.",
                            "terms": ["communication protocols", "constrained devices", "lossy networks"]
                        },
                        {
                            "en": "To this aim, IETF defined a communication protocol stack for IoT devices.",
                            "vi": "Để đáp ứng mục tiêu đó, tổ chức IETF đã chuẩn hóa một ngăn xếp giao thức truyền thông chuyên dụng dành cho thiết bị IoT.",
                            "terms": ["IETF", "protocol stack"]
                        },
                        {
                            "en": "In particular, the IETF CoRE Working Group standardized the Constrained Application Protocol (CoAP) [1], which allows applications to exchange information with IoT devices.",
                            "vi": "Cụ thể, Nhóm công tác CoRE của IETF đã ban hành chuẩn Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) [RFC 7252], cho phép các ứng dụng trao đổi thông tin dữ liệu với thiết bị IoT theo cơ chế kiến trúc RESTful gọn nhẹ.",
                            "terms": ["CoRE Working Group", "CoAP"]
                        }
                    ]
                },
                {
                    "id": "p1_p_intro_2",
                    "sentences": [
                        {
                            "en": "Considering the limited capabilities of nodes and the limited amount of bandwidth available in LLNs, congestion control is crucial to ensure proper and timely delivery of data.",
                            "vi": "Xét đến năng lực tài nguyên hạn chế của từng nút mạng và dải băng thông eo hẹp trong các mạng LLN, việc kiểm soát tắc nghẽn là điều kiện tiên quyết để đảm bảo việc chuyển phát dữ liệu đúng đắn và kịp thời.",
                            "terms": ["bandwidth", "LLN", "congestion control"]
                        },
                        {
                            "en": "In traditional networks, application data is usually transported by the Transmission Control Protocol (TCP), which includes a congestion control mechanism.",
                            "vi": "Trong các mạng Internet truyền thống, dữ liệu ứng dụng thường được truyền tải bởi Giao thức Điều khiển Truyền vận (TCP), vốn đã tích hợp sẵn cơ chế kiểm soát tắc nghẽn tinh vi (như AIMD, Slow Start, Congestion Avoidance).",
                            "terms": ["TCP", "congestion control mechanism"]
                        },
                        {
                            "en": "In LLNs, instead, CoAP employs the User Datagram Protocol (UDP), which does not provide any congestion control mechanism.",
                            "vi": "Trái lại, trong mạng LLN, CoAP hoạt động trên nền Giao thức Datagram Người dùng (UDP) – một giao thức hướng phi kết nối và hoàn toàn không cung cấp bất kỳ cơ chế kiểm soát tắc nghẽn nào.",
                            "terms": ["LLNs", "CoAP", "UDP"]
                        },
                        {
                            "en": "For this reason, CoAP implements optional reliable data delivery through retransmissions and regulates the amount of data transmitted through a simple congestion avoidance mechanism.",
                            "vi": "Vì lý do đó, CoAP tự đảm nhận việc phân phối dữ liệu tin cậy tùy chọn thông qua các lần truyền lại (retransmissions) và điều tiết lưu lượng phát đi bằng một cơ chế tránh tắc nghẽn đơn giản.",
                            "terms": ["retransmissions", "congestion avoidance"]
                        },
                        {
                            "en": "The definition of the latter, however, is not trivial: the shared nature of the wireless medium results in collisions of transmissions, and the limited buffer size of IoT devices often produces buffer overflows.",
                            "vi": "Tuy nhiên, việc thiết lập cơ chế này vô cùng phức tạp: bản chất môi trường truyền thông vô tuyến dùng chung gây ra va chạm xung đột gói (collisions), đồng thời kích thước bộ đệm (buffer size) eo hẹp của thiết bị IoT thường xuyên dẫn đến hiện tượng tràn bộ đệm (buffer overflow).",
                            "terms": ["wireless medium", "collisions", "buffer overflows"]
                        },
                        {
                            "en": "Both phenomena can cause frequent packet losses that lead to further message retransmissions, which eventually lead to congestion.",
                            "vi": "Cả hai hiện tượng này gây mất gói liên tục, buộc các nút phải phát lại bản tin, và chuỗi truyền lại dồn dập này cuối cùng đẩy toàn bộ mạng lưới rơi vào thảm họa tắc nghẽn (congestion collapse).",
                            "terms": ["packet losses", "retransmissions", "congestion"]
                        }
                    ]
                },
                {
                    "id": "p1_p_intro_3",
                    "sentences": [
                        {
                            "en": "Since CoAP defines only a basic congestion control mechanism, a new advanced congestion control have been proposed recently in [2], and further extended in [3].",
                            "vi": "Do CoAP mặc định chỉ định nghĩa một cơ chế điều khiển tắc nghẽn thô sơ (dựa trên bộ đếm thời gian RTO cố định 2-3s và thuật toán thoái lui nhị phân BEB), một giải thuật kiểm soát tắc nghẽn nâng cao mới đã được đề xuất trong [2] và phát triển mở rộng trong [3].",
                            "terms": ["congestion control", "CoAP"]
                        },
                        {
                            "en": "Such algorithm, called CoCoA, is currently under standardization within the CoRE Working Group [8].",
                            "vi": "Thuật toán này mang tên CoCoA (CoAP Simple Congestion Control/Advanced) và hiện đang trong tiến trình chuẩn hóa tại Nhóm công tác CoRE của IETF.",
                            "terms": ["CoCoA", "CoRE Working Group"]
                        },
                        {
                            "en": "CoCoA exploits the measured round-trip time (RTT) between the client and the server to adjust the retransmission timeout and therefore avoid too frequent retransmissions.",
                            "vi": "CoCoA tận dụng giá trị thời gian truyền khứ hồi (RTT - Round-Trip Time) đo đạc thực tế giữa client và server để linh hoạt điều chỉnh thời gian chờ truyền lại (RTO - Retransmission Timeout), từ đó ngăn chặn việc truyền lại quá vội vàng và dày đặc.",
                            "terms": ["RTT", "round-trip time", "RTO", "retransmission timeout"]
                        },
                        {
                            "en": "CoCoA has been originally evaluated against CoAP in [2] and [3], showing that it can improve the performance in terms of throughput, packet delivery ratio, and average delays.",
                            "vi": "CoCoA ban đầu đã được thử nghiệm đối chứng với CoAP trong [2] và [3], chứng tỏ khả năng nâng cao hiệu năng rõ rệt về thông lượng (throughput), tỷ lệ phát gói thành công (PDR - Packet Delivery Ratio) và độ trễ trung bình (average delays).",
                            "terms": ["throughput", "packet delivery ratio", "delays"]
                        }
                    ]
                },
                {
                    "id": "p1_p_intro_4",
                    "sentences": [
                        {
                            "en": "In this work, we present an exhaustive performance evaluation of the CoCoA congestion control algorithm.",
                            "vi": "Trong bài báo này, chúng tôi tiến hành đánh giá hiệu năng toàn diện và sâu sắc thuật toán điều khiển tắc nghẽn CoCoA.",
                            "terms": ["performance evaluation", "CoCoA"]
                        },
                        {
                            "en": "First, we present an evaluation of the algorithm considering two different scenarios, the first one with only CoAP traffic, and the second one in which CoAP traffic competes with interfering greedy traffic that is transmitted without rate control.",
                            "vi": "Trước tiên, chúng tôi khảo sát thuật toán trong hai kịch bản: kịch bản thứ nhất chỉ gồm lưu lượng CoAP định kỳ, và kịch bản thứ hai lưu lượng CoAP phải cạnh tranh tài nguyên với nguồn lưu lượng gây nhiễu tham lam (greedy traffic) phát liên tục mà không có cơ chế điều hòa tốc độ.",
                            "terms": ["CoAP traffic", "greedy traffic", "rate control"]
                        },
                        {
                            "en": "An in-depth analysis of these simulation results allows us to highlight some novel critical issues of the algorithm.",
                            "vi": "Việc phân tích cặn kẽ các kết quả mô phỏng đã giúp chúng tôi phát hiện và chỉ ra những điểm yếu nghiêm trọng hoàn toàn mới của thuật toán này.",
                            "terms": ["simulation results", "critical issues"]
                        },
                        {
                            "en": "Consequently, we propose a set of modifications to the original algorithm to overcome these limitations.",
                            "vi": "Từ đó, chúng tôi đề xuất một tập các sửa đổi cải tiến cho thuật toán ban đầu để vượt qua những rào cản kỹ thuật này.",
                            "terms": ["modifications", "limitations"]
                        },
                        {
                            "en": "The resulting algorithm, named pCoCoA, is evaluated against CoAP, CoCoA+ and two more recent algorithms: 4-state-strong [7] and CoCoA-E [14].",
                            "vi": "Thuật toán thu được, được đặt tên là pCoCoA, được đánh giá đối sánh toàn diện với CoAP gốc, CoCoA+ và hai thuật toán biến thể mới nhất: 4-state-strong [7] và CoCoA-E [14].",
                            "terms": ["pCoCoA", "4-state-strong", "CoCoA-E"]
                        },
                        {
                            "en": "Results demonstrated that pCoCoA effectively mitigates the issues of the original algorithm, reducing the overall number of retransmissions while keeping throughputs and delays comparable to those obtained with CoAP, CoCoA, CoCoA-E and 4-state-strong.",
                            "vi": "Kết quả thực nghiệm chứng minh rằng pCoCoA loại bỏ hiệu quả các khuyết tật của giải thuật gốc, cắt giảm mạnh mẽ tổng số lần truyền lại trong khi vẫn duy trì mức thông lượng và độ trễ cạnh tranh sòng phẳng với CoAP, CoCoA, CoCoA-E và 4-state-strong.",
                            "terms": ["retransmissions", "throughputs", "delays"]
                        },
                        {
                            "en": "Moreover, pCoCoA can correctly handle scenarios in which CoAP traffic competes with interfering bursty traffic, whereas other algorithms, such as CoCoA-E, do not.",
                            "vi": "Đặc biệt, pCoCoA hoạt động cực kỳ ổn định trong môi trường chịu ảnh hưởng của lưu lượng bùng nổ (bursty traffic), trong khi các thuật toán khác (như CoCoA-E) bị suy thoái hiệu năng nghiêm trọng.",
                            "terms": ["bursty traffic", "CoCoA-E"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p1_sec_cocoa_details",
            "title": "II. COCOA+ CONGESTION CONTROL",
            "title_vi": "II. NGUYÊN LÝ ĐIỀU KHIỂN TẮC NGHẼN TRONG COCOA+",
            "paragraphs": [
                {
                    "id": "p1_p_cocoa_core",
                    "sentences": [
                        {
                            "en": "The Simple Congestion Control/Advanced, also known as CoCoA, is an alternative congestion control algorithm for CoAP originally proposed in [2] and now currently under standardization within the activities of the CoRE Working Group [8].",
                            "vi": "Thuật toán Điều khiển Tắc nghẽn Đơn giản/Nâng cao (Simple Congestion Control/Advanced - CoCoA) là một giải thuật thay thế cho CoAP, được đề xuất nhằm nâng cấp khả năng thích ứng của mạng IoT.",
                            "terms": ["CoCoA", "CoAP", "standardization"]
                        },
                        {
                            "en": "In this work we consider its last revision, CoCoA+ [3]. The algorithm is composed of the following three main functions: a policy to calculate the retransmission timeout (RTO), the back-off policy to set the RTO for retransmissions, and an ageing policy for the status information.",
                            "vi": "Trong nghiên cứu này, chúng tôi xem xét phiên bản mới nhất là CoCoA+ [3]. Thuật toán được cấu thành từ ba cơ chế chính: chính sách tính toán thời gian chờ truyền lại (RTO), chính sách thoái lui (back-off) để thiết lập RTO cho các lần phát lại, và chính sách lão hóa (ageing) cho thông tin trạng thái mạng.",
                            "terms": ["CoCoA+", "retransmission timeout", "RTO", "back-off", "ageing"]
                        }
                    ]
                },
                {
                    "id": "p1_p_rto_calculation",
                    "sentences": [
                        {
                            "en": "A. RTO calculation: In order to calculate the RTO, CoCoA+ adopts the same algorithm used by TCP, which updates the RTO value based on measured Round Trip Times (RTTs).",
                            "vi": "A. Tính toán thời gian RTO: Để tính toán RTO, CoCoA+ kế thừa giải thuật kinh điển của TCP (RFC 6298), cập nhật RTO dựa trên việc theo dõi liên tục giá trị Round-Trip Time (RTT).",
                            "terms": ["RTO calculation", "TCP", "RTT"]
                        },
                        {
                            "en": "According to Karn's algorithm [9], the RTT measurements should be considered only when the message was correctly delivered without retransmissions.",
                            "vi": "Tuy nhiên, theo quy tắc giải thuật Karn [9], mẫu đo RTT chỉ được phép chấp nhận khi bản tin được gửi đi và nhận xác nhận ACK thành công ngay lần đầu mà không phải trải qua bất kỳ lần phát lại nào.",
                            "terms": ["Karn's algorithm", "retransmissions", "ACK"]
                        },
                        {
                            "en": "In the context of lossy networks, however, many transmissions are expected to experience retransmissions, thus reducing the probability of obtaining valid RTT measurements.",
                            "vi": "Thế nhưng, trong môi trường mạng vô tuyến tổn hao (LLN), việc phải truyền lại diễn ra rất phổ biến; nếu tuân thủ tuyệt đối quy tắc Karn thì số lượng mẫu RTT hợp lệ thu được sẽ quá ít, khiến việc ước lượng bị sai lệch hoặc mất tính cập nhật.",
                            "terms": ["lossy networks", "RTT measurements"]
                        },
                        {
                            "en": "For this reason, CoCoA+ considers also transactions that experienced retransmissions to obtain a more accurate RTT estimation.",
                            "vi": "Chính vì thế, CoCoA+ phá lệ bằng cách chấp nhận cả những giao dịch có truyền lại nhằm thu thập đủ mẫu RTT cho việc ước lượng.",
                            "terms": ["transactions", "RTT estimation"]
                        },
                        {
                            "en": "Specifically, two RTO values are calculated: a strong RTO, estimated using RTTs samples from transactions that did not required any retransmission, and a weak RTO, estimated using RTT values of transactions that required no more than two transmissions.",
                            "vi": "Cụ thể, CoCoA+ duy trì song song hai giá trị: RTO mạnh (strong RTO) – ước lượng từ các mẫu RTT của gói tin không bị truyền lại; và RTO yếu (weak RTO) – ước lượng từ RTT của các gói tin chỉ cần tối đa hai lần truyền lại.",
                            "terms": ["strong RTO", "weak RTO", "retransmissions"]
                        },
                        {
                            "en": "Considering that it is not possible to know for an ACK to which transmission it belongs to, RTT samples are collected measuring the time between the first transmission and the arrival of the response, but only if two retransmissions at most are required.",
                            "vi": "Bởi vì phía gửi không thể xác định gói ACK nhận về là phản hồi của lần phát đầu tiên hay của lần phát lại (vấn nạn 'nhập nhằng RTT'), mẫu RTT yếu được tính bằng khoảng thời gian tính từ lần phát đầu tiên cho đến khi nhận được ACK, với điều kiện số lần truyền lại không vượt quá 2.",
                            "terms": ["ACK", "RTT samples", "retransmissions"]
                        }
                    ]
                },
                {
                    "id": "p1_p_equations",
                    "sentences": [
                        {
                            "en": "For each destination, a node maintains: two smoothed mean RTT estimators (RTTstrong and RTTweak), two smoothed mean variance (RTTVARstrong and RTTVARweak), two RTO estimators (RTOstrong and RTOweak), and a comprehensive RTO (RTOoverall).",
                            "vi": "Đối với mỗi đích truyền thông, nút mạng lưu giữ: hai giá trị trung bình trượt RTT làm mịn (RTTstrong và RTTweak), hai giá trị phương sai làm mịn (RTTVARstrong và RTTVARweak), hai bộ ước lượng RTO (RTOstrong và RTOweak), cùng giá trị RTO tổng thể (RTOoverall).",
                            "terms": ["RTTstrong", "RTTweak", "RTTVAR", "RTOoverall"]
                        },
                        {
                            "en": "When a new RTT sample R is measured, the estimators are updated: RTTx = (1 - alpha)*RTTx + alpha*R; RTTVARx = (1 - beta)*RTTVARx + beta*|RTTx - R|; RTOx = RTTx + Kx*RTTVARx; RTOoverall = lambda_x*RTOx + (1 - lambda_x)*RTOoverall.",
                            "vi": "Mỗi khi có mẫu đo RTT mới là R, thuật toán cập nhật: RTTx = (1 - α)RTTx + αR; RTTVARx = (1 - β)RTTVARx + β|RTTx - R|; RTOx = RTTx + Kx·RTTVARx; RTOoverall = λx·RTOx + (1 - λx)RTOoverall.",
                            "terms": ["alpha", "beta", "Kx", "lambda_x"]
                        },
                        {
                            "en": "The recommended parameters are: alpha = 0.125, beta = 0.25, Kstrong = 4, Kweak = 1, lambda_strong = 0.5, and lambda_weak = 0.25.",
                            "vi": "Bộ thông số tối ưu được khuyến nghị gồm: α = 0.125, β = 0.25, Kstrong = 4, Kweak = 1, λstrong = 0.5, và λweak = 0.25.",
                            "terms": ["parameters", "Kstrong", "Kweak"]
                        },
                        {
                            "en": "RTOoverall is used to set the initial RTO (RTOinit) for the next CON transmission using dithering: RTOinit is randomly chosen from [RTOoverall, 1.5 * RTOoverall].",
                            "vi": "Giá trị RTOoverall được dùng để xác định RTO khởi tạo (RTOinit) cho bản tin CON tiếp theo thông qua kỹ thuật rung ngẫu nhiên (dithering): RTOinit được chọn ngẫu nhiên trong khoảng [RTOoverall, 1.5 · RTOoverall] để chống hiện tượng các nút cùng phát lại đồng bộ gây tắc nghẽn dây chuyền.",
                            "terms": ["RTOoverall", "RTOinit", "dithering", "CON"]
                        }
                    ]
                },
                {
                    "id": "p1_p_vbf_aging",
                    "sentences": [
                        {
                            "en": "B. Backoff policy: CoCoA+ introduces a variable backoff factor (VBF) to set the RTO for retransmissions: RTOnew = RTOprevious * VBF(RTOinit).",
                            "vi": "B. Chính sách thoái lui: CoCoA+ sử dụng hệ số thoái lui khả biến VBF (Variable Backoff Factor) để tính RTO cho các lần phát lại: RTOnew = RTOprevious · VBF(RTOinit).",
                            "terms": ["backoff policy", "VBF", "RTO"]
                        },
                        {
                            "en": "If RTOinit < 1s, VBF = 3; if RTOinit > 3s, VBF = 1.5; otherwise VBF = 2 (standard binary exponential backoff).",
                            "vi": "Nếu RTOinit < 1s thì VBF = 3 (tăng nhanh RTO để tránh truyền lại dồn dập); nếu RTOinit > 3s thì VBF = 1.5 (hạn chế thời gian chờ đợi vô ích); nếu trong khoảng 1s đến 3s thì VBF = 2 (tương đương với thoái lui nhị phân chuẩn BEB).",
                            "terms": ["VBF", "binary exponential backoff", "BEB"]
                        },
                        {
                            "en": "C. Information aging: When RTT updates are absent for a prolonged period, RTOoverall is converged back toward the default 2s or reset to 1s to prevent obsolete network state from harming subsequent transmissions.",
                            "vi": "C. Cơ chế lão hóa thông tin: Khi mạng im lặng không có cập nhật RTT trong một thời gian dài, RTOoverall được kéo dần về giá trị mặc định 2s hoặc đặt lại về 1s, tránh việc lưu giữ trạng thái mạng lỗi thời làm hỏng các lượt truyền mới.",
                            "terms": ["information aging", "RTT updates", "obsolete network state"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p1_sec_shortcomings",
            "title": "V. COCOA+ SHORTCOMINGS & ROOT CAUSES",
            "title_vi": "V. PHÂN TÍCH CÁC KHIẾM KHUYẾT CỦA COCOA+",
            "paragraphs": [
                {
                    "id": "p1_p_short_1",
                    "sentences": [
                        {
                            "en": "A. RTO too close to RTT: When a series of similar RTT values is sampled, the RTTVAR component vanishes, causing RTO to fall dangerously close to the measured RTT.",
                            "vi": "A. Giá trị RTO áp sát RTT một cách nguy hiểm: Khi các gói tin liên tiếp có RTT xấp xỉ nhau, biến số RTTVAR (phương sai) sẽ bị triệt tiêu về 0, khiến RTO bị kéo xuống sát nút với RTT thực tế.",
                            "terms": ["RTTVAR", "RTO", "RTT"]
                        },
                        {
                            "en": "Because wireless networks naturally exhibit RTT fluctuations, small delays cause the retransmission timer to expire prematurely, triggering spurious retransmissions that needlessly inject packets into the channel.",
                            "vi": "Do mạng vô tuyến luôn có dao động trễ tự nhiên (jitter), chỉ cần một dao động nhỏ là bộ đếm RTO đã bị hết hạn non (premature timeout), dẫn đến các đợt truyền lại giả tạo (spurious retransmissions) làm nghẽn kênh truyền một cách vô ích.",
                            "terms": ["RTT fluctuations", "spurious retransmissions", "premature timeout"]
                        }
                    ]
                },
                {
                    "id": "p1_p_short_2",
                    "sentences": [
                        {
                            "en": "B. Lack of weak estimator update: Under heavy congestion or bursty traffic, transactions frequently require more than two retransmissions.",
                            "vi": "B. Thiếu cập nhật bộ ước lượng yếu: Khi mạng bị tắc nghẽn nặng hoặc có lưu lượng bùng phát, các giao dịch thường phải truyền lại trên hai lần.",
                            "terms": ["weak estimator", "heavy congestion", "bursty traffic"]
                        },
                        {
                            "en": "Because CoCoA+ freezes weak estimator updates after two retransmissions, RTOinit stops increasing precisely when the network needs a larger timeout most, causing consecutive retransmission storms.",
                            "vi": "Do CoCoA+ 'đóng băng' việc cập nhật bộ ước lượng yếu nếu số lần phát lại vượt quá 2, RTOinit không thể tăng lên đúng vào thời điểm mạng đang cần giãn cách thời gian nhất, gây ra cơn bão truyền lại liên hoàn.",
                            "terms": ["CoCoA+", "RTOinit", "retransmission storms"]
                        }
                    ]
                },
                {
                    "id": "p1_p_short_3",
                    "sentences": [
                        {
                            "en": "C. RTO peaks in response to RTT decrease: If network congestion clears and RTT drops rapidly, the difference (SRTT - R) becomes negative.",
                            "vi": "C. RTO tăng vọt nghịch lý khi RTT giảm: Khi tắc nghẽn vừa được giải tỏa và RTT sụt giảm nhanh, hiệu số (SRTT - R) mang giá trị âm.",
                            "terms": ["congestion", "RTT drops", "SRTT"]
                        },
                        {
                            "en": "Because RTTVAR updates using the absolute value |SRTT - R|, RTTVAR surges upward, paradoxically causing RTO to skyrocket exactly when the network has improved.",
                            "vi": "Bởi vì công thức RTTVAR lại lấy trị tuyệt đối |SRTT - R|, biến thiên RTTVAR bị đội lên đột ngột, dẫn tới nghịch lý là RTO lại tăng vọt lên trời đúng vào lúc mạng đang thông thoáng.",
                            "terms": ["RTTVAR", "RTO"]
                        }
                    ]
                },
                {
                    "id": "p1_p_short_4",
                    "sentences": [
                        {
                            "en": "D. Excessive RTO growth: Due to chained backoff calculations and lack of an upper cap during retransmission phases, RTO can escalate to several hundred seconds (200-300s), paralyzing node communications.",
                            "vi": "D. Thời gian RTO phình to quá mức: Do chuỗi tính toán thoái lui liên tiếp và thiếu ngưỡng chặn trên trong quá trình truyền lại, RTO có thể bị thổi phồng lên hàng trăm giây (200 - 300s), làm tê liệt hoàn toàn khả năng truyền thông của nút mạng.",
                            "terms": ["RTO growth", "backoff calculations", "waiting times"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p1_sec_pcocoa_solution",
            "title": "VI. THE PROPOSED pCoCoA ALGORITHM",
            "title_vi": "VI. THUẬT TOÁN ĐIỀU KHIỂN TẮC NGHẼN CHÍNH XÁC pCoCoA",
            "paragraphs": [
                {
                    "id": "p1_p_pcocoa_overview",
                    "sentences": [
                        {
                            "en": "To resolve the structural flaws of CoCoA+, pCoCoA introduces two foundational innovations: (1) a precise request-to-response mapping mechanism, and (2) an enhanced RTO computation engine.",
                            "vi": "Để khắc phục triệt để các khuyết tật kiến trúc của CoCoA+, thuật toán pCoCoA đưa ra hai đột phá nền tảng: (1) cơ chế ánh xạ chính xác tuyệt đối giữa bản tin yêu cầu và bản tin xác nhận, và (2) bộ máy tính toán RTO cải tiến vượt bậc.",
                            "terms": ["innovations", "mapping mechanism", "RTO computation"]
                        },
                        {
                            "en": "pCoCoA eliminates the flawed weak estimator entirely by introducing the Transmission Counter (TC) CoAP elective option.",
                            "vi": "pCoCoA loại bỏ hoàn toàn bộ ước lượng yếu (weak estimator) đầy khiếm khuyết bằng việc bổ sung một tùy chọn CoAP tùy chọn mới mang tên Bộ đếm Lần truyền (Transmission Counter - TC).",
                            "terms": ["weak estimator", "Transmission Counter", "TC", "CoAP option"]
                        },
                        {
                            "en": "On the initial transmission, TC is set to 1; each subsequent retransmission increments TC by 1.",
                            "vi": "Ở lần phát đầu tiên, phía gửi gán TC = 1; mỗi lần truyền lại sau đó, giá trị TC được tự động tăng thêm 1 đơn vị.",
                            "terms": ["transmission", "retransmission", "TC"]
                        },
                        {
                            "en": "The destination node echoes the received TC value in its ACK packet, allowing the sender to know exactly which transmission attempt generated the response.",
                            "vi": "Nút đích sẽ sao chép và gắn trả lại giá trị TC này trong bản tin ACK, giúp phía gửi biết chính xác bản tin phản hồi tương ứng với lần phát thứ mấy.",
                            "terms": ["ACK", "sender", "destination node"]
                        },
                        {
                            "en": "If the echoed TC is smaller than the current transmission attempt, the sender instantly flags a spurious retransmission, enabling intelligent compensation.",
                            "vi": "Nếu giá trị TC nhận về trong ACK nhỏ hơn số lần phát hiện tại, phía gửi lập tức nhận diện đây là một đợt truyền lại giả tạo (spurious retransmission) và bật cờ cảnh báo để thực hiện bù trừ thông minh.",
                            "terms": ["spurious retransmission", "compensation"]
                        }
                    ]
                },
                {
                    "id": "p1_p_algo2_explanation",
                    "sentences": [
                        {
                            "en": "In the RTO calculation procedure (Algorithm 2), pCoCoA borrows the maximum mean deviance concept (mdev_max) from Linux TCP.",
                            "vi": "Trong quy trình tính toán RTO (Giải thuật 2), pCoCoA ứng dụng khái niệm độ lệch trung bình cực đại (mdev_max) mượn từ ngăn xếp Linux TCP.",
                            "terms": ["Algorithm 2", "mdev_max", "Linux TCP"]
                        },
                        {
                            "en": "The lower bound for RTO computation is clamped using mdev_max: SRTO = SRTT + max(k * RTTVAR, mdev_max).",
                            "vi": "Chặn dưới của giá trị RTO được ghìm giữ an toàn nhờ mdev_max: SRTO = SRTT + max(k · RTTVAR, mdev_max). Nhờ đó, RTO không bao giờ bị sụt giảm quá sát RTT kể cả khi phương sai RTTVAR tiến về 0.",
                            "terms": ["SRTO", "SRTT", "mdev_max", "RTTVAR"]
                        },
                        {
                            "en": "When a spurious transmission is detected, k is dynamically escalated from 4 to 6, rapidly expanding the safety margin and quenching further unnecessary retransmissions.",
                            "vi": "Đặc biệt, khi phát hiện có truyền lại giả tạo (cờ spurious = True), hệ số k được tự động nâng từ 4 lên 6, lập tức mở rộng khoảng biên an toàn cho RTO và dập tắt hoàn toàn các lần phát lại thừa thãi tiếp theo.",
                            "terms": ["spurious transmission", "safety margin", "retransmissions"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p1_sec_evaluation",
            "title": "VII. PERFORMANCE EVALUATION & BENCHMARKING",
            "title_vi": "VII. KẾT QUẢ ĐÁNH GIÁ HIỆU NĂNG VÀ THỰC NGHIỆM",
            "paragraphs": [
                {
                    "id": "p1_p_eval_results",
                    "sentences": [
                        {
                            "en": "The evaluations were conducted using Cooja simulator and ContikiOS on a 6x6 grid topology with IEEE 802.15.4 and 6LoWPAN.",
                            "vi": "Các thử nghiệm được thực hiện trên phần mềm mô phỏng mạng Cooja với hệ điều hành ContikiOS, triển khai trên mô hình mạng lưới ma trận 6x6 nút sử dụng chuẩn IEEE 802.15.4 và 6LoWPAN.",
                            "terms": ["Cooja", "ContikiOS", "IEEE 802.15.4", "6LoWPAN"]
                        },
                        {
                            "en": "Under periodic traffic with 8s period, pCoCoA achieves an average retransmission count drastically lower than CoCoA+ and 4-state-strong, while matching their high throughput.",
                            "vi": "Dưới lưu lượng định kỳ với chu kỳ phát 8s, pCoCoA đạt số lần truyền lại trung bình thấp hơn vượt trội so với CoCoA+ và 4-state-strong, trong khi vẫn duy trì mức thông lượng cao tương đương.",
                            "terms": ["periodic traffic", "retransmission count", "throughput"]
                        },
                        {
                            "en": "In bursty interfering traffic scenarios, CoCoA-E collapses due to improper gamma dampening, and CoCoA+ suffers from frozen RTOinit, while pCoCoA maintains flawless convergence and superior carried load.",
                            "vi": "Trong kịch bản có lưu lượng bùng nổ gây nhiễu, CoCoA-E bị suy giảm nghiêm trọng do bộ lọc gamma làm nghẽn phản ứng, CoCoA+ bị tê liệt do RTOinit đóng băng, trong khi pCoCoA duy trì sự hội tụ hoàn hảo và thông lượng truyền tải hữu ích (carried load) vượt trội.",
                            "terms": ["bursty interfering traffic", "CoCoA-E", "carried load", "convergence"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p1_sec_conclusions",
            "title": "VIII. CONCLUSIONS",
            "title_vi": "VIII. KẾT LUẬN TOÀN DIỆN",
            "paragraphs": [
                {
                    "id": "p1_p_conclusion",
                    "sentences": [
                        {
                            "en": "This paper provided a critical evaluation of the CoCoA+ algorithm and demonstrated how its estimator interactions lead to spurious retransmissions and sluggish adaptation.",
                            "vi": "Bài báo đã cung cấp một đánh giá phản biện chuyên sâu về thuật toán CoCoA+ và chứng minh cách thức các tương tác ước lượng trong CoCoA+ dẫn tới các lần truyền lại thừa và sự thích ứng chậm chạp.",
                            "terms": ["CoCoA+", "spurious retransmissions", "sluggish adaptation"]
                        },
                        {
                            "en": "The proposed pCoCoA protocol solves these fundamental problems by establishing unambiguous CON-ACK linkage through a Transmission Counter and bounding RTO via maximum deviance tracking.",
                            "vi": "Giao thức pCoCoA được đề xuất đã giải quyết triệt để các vấn nạn gốc rễ này nhờ thiết lập liên kết CON-ACK minh bạch thông qua Bộ đếm số lần truyền (TC) và chặn dưới RTO bằng cơ chế theo dõi độ lệch cực đại.",
                            "terms": ["pCoCoA", "CON-ACK linkage", "Transmission Counter", "deviance"]
                        },
                        {
                            "en": "pCoCoA stands out as a highly robust, scalable, and bandwidth-efficient congestion control mechanism for lossy IoT environments.",
                            "vi": "pCoCoA khẳng định vị thế là một cơ chế điều khiển tắc nghẽn vô cùng mạnh mẽ, có khả năng mở rộng cao và tiết kiệm tối đa băng thông cho các môi trường mạng IoT tổn hao.",
                            "terms": ["robust", "scalable", "congestion control", "IoT"]
                        }
                    ]
                }
            ]
        }
    ]
}

# ==========================================
# PAPER 2 DATA
# ==========================================
paper2 = {
    "id": "paper2",
    "code": "CoAP_IoT",
    "title": "CoAP Congestion Control for the Internet of Things",
    "title_vi": "Điều khiển tắc nghẽn CoAP trong mạng lưới Vạn vật kết nối Internet (IoT)",
    "authors": "August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells",
    "affiliations": "i2CAT Foundation, Barcelona, Spain & Universitat Politècnica de Catalunya, Barcelona, Spain",
    "venue": "IEEE Communications Magazine, Volume 54, Issue 7, July 2016, Pages 154–160",
    "doi": "https://doi.org/10.1109/MCOM.2016.7514179",
    "summary_vi": "Bài báo kinh điển trên tạp chí IEEE Communications Magazine giới thiệu toàn diện giải thuật CoCoA (CoAP Simple Congestion Control/Advanced) chuẩn hóa bởi IETF CoRE WG. Bài báo phân tích cơ chế RTO thích ứng cho IoT (kết hợp RTO mạnh và RTO yếu), hệ số thoái lui khả biến VBF, cơ chế lão hóa thông tin, đồng thời kiểm nghiệm thực nghiệm trên 2 phần cứng thực tế: mạng di động GPRS và mạng cảm biến không dây đa chặng FlockLab (IEEE 802.15.4 / ContikiMAC RDC).",
    "sections": [
        {
            "id": "p2_sec_abstract",
            "title": "Abstract",
            "title_vi": "Tóm tắt bài báo",
            "paragraphs": [
                {
                    "id": "p2_p_abs_1",
                    "sentences": [
                        {
                            "en": "The Constrained Application Protocol (CoAP) is a lightweight RESTful application layer protocol devised for the Internet of Things (IoT).",
                            "vi": "Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) là một giao thức tầng ứng dụng kiến trúc RESTful gọn nhẹ được thiết kế chuyên biệt cho mạng lưới Vạn vật kết nối Internet (IoT).",
                            "terms": ["CoAP", "RESTful", "application layer", "IoT"]
                        },
                        {
                            "en": "Operating on top of UDP, CoAP must handle congestion control by itself.",
                            "vi": "Hoạt động trực tiếp trên nền giao thức truyền vận UDP, CoAP bắt buộc phải tự đảm đương việc kiểm soát tắc nghẽn (congestion control).",
                            "terms": ["UDP", "congestion control"]
                        },
                        {
                            "en": "The core CoAP specification defines a basic congestion control mechanism, which is however not capable of adapting to network conditions.",
                            "vi": "Bản đặc tả CoAP gốc chỉ định nghĩa một cơ chế điều khiển tắc nghẽn cơ bản, cơ chế này hoàn toàn không có khả năng thích ứng linh hoạt với các biến động của điều kiện mạng.",
                            "terms": ["CoAP specification", "congestion control", "adapting"]
                        },
                        {
                            "en": "Yet, IoT scenarios exhibit significant resource constraints which pose new challenges on the design of congestion control mechanisms.",
                            "vi": "Trong khi đó, các kịch bản triển khai IoT lại bộc lộ những ràng buộc tài nguyên vô cùng ngặt nghèo, đặt ra những thách thức mới cho việc thiết kế các cơ chế điều khiển tắc nghẽn hiệu quả.",
                            "terms": ["IoT", "resource constraints", "congestion control"]
                        },
                        {
                            "en": "In this paper we present the CoAP Simple Congestion Control/Advanced (CoCoA), an advanced congestion control mechanism for CoAP being standardized by the Internet Engineering Task Force (IETF) CoRE working group.",
                            "vi": "Trong bài báo này, chúng tôi giới thiệu cơ chế CoCoA (CoAP Simple Congestion Control/Advanced) – một giải pháp điều khiển tắc nghẽn nâng cao cho CoAP hiện đang được chuẩn hóa bởi Nhóm công tác CoRE thuộc tổ chức IETF.",
                            "terms": ["CoCoA", "IETF", "CoRE working group"]
                        },
                        {
                            "en": "CoCoA introduces novel Round Trip Time (RTT) estimation techniques, together with a Variable Backoff Factor (VBF) and aging mechanisms in order to provide dynamic and controlled Retransmission Timeout (RTO) adaptation suitable for the peculiarities of IoT communications.",
                            "vi": "CoCoA đưa vào các kỹ thuật ước lượng Thời gian Truyền khứ hồi (RTT) hoàn toàn mới, kết hợp cùng Hệ số Thoái lui Khả biến (Variable Backoff Factor - VBF) và các cơ chế lão hóa (aging) nhằm mang lại khả năng điều chỉnh Thời gian Chờ truyền lại (RTO) một cách linh động và có kiểm soát, phù hợp hoàn hảo với các đặc thù của truyền thông IoT.",
                            "terms": ["RTT", "VBF", "Variable Backoff Factor", "aging", "RTO"]
                        },
                        {
                            "en": "We conduct a comparative performance analysis of CoCoA and a variety of alternative algorithms including state-of-the-art mechanisms developed for TCP.",
                            "vi": "Chúng tôi tiến hành một phân tích hiệu năng so sánh toàn diện giữa CoCoA và hàng loạt thuật toán đối chứng khác, bao gồm cả các cơ chế tiên tiến nhất được phát triển cho giao thức TCP.",
                            "terms": ["performance analysis", "CoCoA", "TCP"]
                        },
                        {
                            "en": "The study is based on experiments carried out in real testbeds.",
                            "vi": "Nghiên cứu này dựa trên các chuỗi thực nghiệm thực tế được triển khai trên các hệ thống thử nghiệm (testbed) phần cứng thật.",
                            "terms": ["experiments", "testbeds"]
                        },
                        {
                            "en": "Results show that, in contrast with the alternative methods considered, CoCoA consistently outperforms default CoAP congestion control mechanism in all evaluated scenarios.",
                            "vi": "Kết quả chỉ ra rằng, trái ngược với các phương pháp thay thế khác, CoCoA vượt trội hoàn toàn so với cơ chế kiểm soát tắc nghẽn CoAP mặc định trong toàn bộ các kịch bản được đánh giá.",
                            "terms": ["CoCoA", "default CoAP", "congestion control"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p2_sec_intro",
            "title": "I. INTRODUCTION",
            "title_vi": "I. GIỚI THIỆU BỐI CẢNH",
            "paragraphs": [
                {
                    "id": "p2_p_intro_1",
                    "sentences": [
                        {
                            "en": "The quantity and diversity of devices that are interconnected in the Internet of Things (IoT) are constantly increasing, leading to a large variety of new and appealing application scenarios.",
                            "vi": "Số lượng và sự đa dạng của các thiết bị kết nối trong mạng lưới Internet of Things (IoT) đang không ngừng gia tăng, mở ra vô số kịch bản ứng dụng mới mẻ và đầy hấp dẫn.",
                            "terms": ["IoT", "devices"]
                        },
                        {
                            "en": "More than 25 billion things are expected to be connected over the Internet by the end of 2020.",
                            "vi": "Dự kiến sẽ có hơn 25 tỷ thiết bị thông minh được kết nối qua mạng Internet vào cuối năm 2020.",
                            "terms": ["Internet"]
                        },
                        {
                            "en": "A significant pillar for this development is the Constrained Application Protocol (CoAP), a lightweight RESTful protocol recently standardized by the Internet Engineering Task Force (IETF).",
                            "vi": "Một trụ cột nền tảng cho sự phát triển này là Giao thức Ứng dụng Bị ràng buộc (CoAP), một giao thức kiểu RESTful siêu nhẹ được tổ chức IETF chuẩn hóa gần đây.",
                            "terms": ["CoAP", "RESTful", "IETF"]
                        },
                        {
                            "en": "CoAP is designed as the main application-layer protocol to be used by IoT devices for IP-based, HTTP-like interactions [1].",
                            "vi": "CoAP được thiết kế như giao thức tầng ứng dụng nòng cốt để các thiết bị IoT sử dụng cho các tương tác dựa trên nền IP tương tự như HTTP [1].",
                            "terms": ["application-layer", "IoT devices", "HTTP"]
                        },
                        {
                            "en": "Typically, constrained devices, such as low-power wireless sensor nodes, are used for IoT communications.",
                            "vi": "Thông thường, các thiết bị bị ràng buộc, ví dụ như các nút mạng cảm biến không dây công suất thấp, được sử dụng cho truyền thông IoT.",
                            "terms": ["constrained devices", "wireless sensor nodes"]
                        },
                        {
                            "en": "These devices offer very limited processing and memory capacities, with low data rates and relatively high bit error rate (BER).",
                            "vi": "Những thiết bị này có dung lượng bộ nhớ và năng lực xử lý rất eo hẹp, đồng thời đường truyền có tốc độ truyền dữ liệu thấp và tỷ lệ lỗi bit (BER) tương đối cao.",
                            "terms": ["data rates", "bit error rate", "BER"]
                        }
                    ]
                },
                {
                    "id": "p2_p_intro_2",
                    "sentences": [
                        {
                            "en": "One of the main problems to be handled when designing a new end-to-end communication paradigm is network congestion.",
                            "vi": "Một trong những bài toán hóc búa nhất phải giải quyết khi thiết kế một mô hình truyền thông đầu-cuối (end-to-end) là hiện tượng tắc nghẽn mạng.",
                            "terms": ["end-to-end", "network congestion"]
                        },
                        {
                            "en": "This phenomenon occurs when the traffic load offered to a network approaches the network capacity.",
                            "vi": "Hiện tượng tắc nghẽn này xảy ra khi tải lưu lượng (offered load) đưa vào mạng tiệm cận với dung lượng chuyển tải tối đa của hệ thống mạng.",
                            "terms": ["traffic load", "network capacity"]
                        },
                        {
                            "en": "In many traditional Internet applications, TCP provides end-to-end congestion control. However, CoAP operates over UDP to enable lightweight applications and must handle congestion by itself.",
                            "vi": "Trong các ứng dụng Internet thông thường, TCP phụ trách kiểm soát tắc nghẽn đầu-cuối. Tuy nhiên, CoAP lại chạy trên nền UDP nhằm tối giản tài nguyên, buộc nó phải tự kiểm soát tắc nghẽn.",
                            "terms": ["TCP", "UDP", "congestion control"]
                        },
                        {
                            "en": "In IoT communications, the traffic patterns are different from conventional networks: constrained devices often communicate periodically, or generate traffic bursts as a reaction to events (e.g. seismic alerts).",
                            "vi": "Trong truyền thông IoT, mô hình lưu lượng rất khác biệt so với mạng thông thường: các thiết bị thường phát dữ liệu định kỳ, hoặc đột ngột tạo ra các đợt bùng nổ lưu lượng (traffic bursts) phản ứng trước một sự kiện (ví dụ: chuỗi cảnh báo khi cảm biến gia tốc phát hiện địa chấn).",
                            "terms": ["traffic patterns", "traffic bursts", "seismic alerts"]
                        },
                        {
                            "en": "The core CoAP specification offers a simple congestion control mechanism based on Retransmission Timeout (RTO) with Binary Exponential Backoff (BEB), which is however insensitive to network conditions.",
                            "vi": "Bản đặc tả CoAP gốc chỉ cung cấp một cơ chế điều khiển tắc nghẽn đơn giản dựa trên thời gian chờ RTO kết hợp với thuật toán Thoái lui Hàm mũ Nhị phân (BEB), vốn hoàn toàn 'mù' và vô cảm trước các biến động thực tế của điều kiện mạng.",
                            "terms": ["RTO", "Binary Exponential Backoff", "BEB"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p2_sec_coap_cc",
            "title": "II. DEFAULT COAP CONGESTION CONTROL",
            "title_vi": "II. ĐIỀU KHIỂN TẮC NGHẼN COAP MẶC ĐỊNH",
            "paragraphs": [
                {
                    "id": "p2_p_coap_cc_1",
                    "sentences": [
                        {
                            "en": "The base CoAP specification provides congestion control by imposing conservative restrictions on the rate of outgoing messages and on the number of allowed parallel message exchanges.",
                            "vi": "Bản đặc tả CoAP cơ sở cung cấp cơ chế kiểm soát tắc nghẽn bằng cách áp đặt các giới hạn bảo thủ ngặt nghèo lên tốc độ gửi bản tin và số lượng luồng tương tác song song được phép hoạt động.",
                            "terms": ["restrictions", "parallel message exchanges"]
                        },
                        {
                            "en": "CoAP defines four types of messages: confirmable (CON), non-confirmable (NON), reset (RST), and acknowledgement (ACK) messages.",
                            "vi": "CoAP định nghĩa 4 loại bản tin cơ bản: bản tin cần xác nhận (CON - Confirmable), bản tin không cần xác nhận (NON - Non-confirmable), bản tin thiết lập lại (RST - Reset), và bản tin báo nhận (ACK - Acknowledgement).",
                            "terms": ["CON", "NON", "RST", "ACK"]
                        },
                        {
                            "en": "The restrictions are applied to CON and NON messages, the first one being the limitation of outstanding interactions per destination to 1 (NSTART = 1).",
                            "vi": "Các hạn chế được áp dụng cho cả bản tin CON và NON, trong đó quy định then chốt đầu tiên là giới hạn số lượng tương tác đang chờ xử lý (outstanding interactions) tới mỗi địa chỉ đích chỉ bằng 1 (NSTART = 1, mô hình dừng-và-chờ stop-and-wait).",
                            "terms": ["outstanding interactions", "NSTART"]
                        },
                        {
                            "en": "In CoAP, a CON message requires an ACK from the receiver and may be retransmitted up to four times before considering the transmission to have failed.",
                            "vi": "Trong CoAP, bản tin CON yêu cầu phải có một gói ACK trả về từ phía nhận và có thể được truyền lại tối đa 4 lần trước khi hệ thống kết luận giao dịch truyền thông đã thất bại hoàn toàn.",
                            "terms": ["CON", "ACK", "retransmitted"]
                        },
                        {
                            "en": "For the first transmission of a message, a RTO value is randomly picked from the interval [2, 3] s. As in TCP, a BEB is applied to the RTO value for a retransmission, i.e., the RTO value is then doubled.",
                            "vi": "Ở lần phát bản tin đầu tiên, giá trị RTO được chọn ngẫu nhiên trong khoảng [2, 3] giây. Giống như TCP, thuật toán thoái lui BEB được áp dụng cho mỗi lần truyền lại, tức là giá trị RTO sẽ được nhân đôi liên tiếp (2s -> 4s -> 8s -> 16s...).",
                            "terms": ["RTO", "BEB", "doubled"]
                        },
                        {
                            "en": "CoAP congestion control is insensitive to network conditions: if RTO is below actual RTT, spurious retransmissions occur; if RTO is far above RTT, unnecessarily long idle times delay error recovery.",
                            "vi": "Cơ chế của CoAP mặc định hoàn toàn vô cảm trước điều kiện mạng: nếu RTO nhỏ hơn RTT thực tế thì sẽ bùng phát các lần truyền lại giả tạo; ngược lại nếu RTO quá lớn so với RTT, mạng sẽ bị lãng phí các khoảng thời gian chết (idle times) vô ích khi có lỗi xảy ra.",
                            "terms": ["RTT", "spurious retransmissions", "idle times"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p2_sec_cocoa_architecture",
            "title": "III. THE COCOA MECHANISM",
            "title_vi": "III. KIẾN TRÚC VÀ GIẢI THUẬT COCOA",
            "paragraphs": [
                {
                    "id": "p2_p_cocoa_pillars",
                    "sentences": [
                        {
                            "en": "CoCoA comprises three main components: adaptive RTO calculation, Variable Backoff Factor (VBF), and RTO aging.",
                            "vi": "CoCoA được xây dựng dựa trên 3 trụ cột kỹ thuật then chốt: tính toán RTO thích ứng, Hệ số Thoái lui Khả biến (VBF), và cơ chế Lão hóa RTO.",
                            "terms": ["adaptive RTO", "Variable Backoff Factor", "VBF", "RTO aging"]
                        },
                        {
                            "en": "A. Adaptive RTO calculation: CoCoA differentiates between strong RTTs (measured from transmissions completed on the first attempt) and weak RTTs (measured from transmissions requiring at most two retransmissions).",
                            "vi": "A. Tính toán RTO thích ứng: CoCoA phân biệt rạch ròi giữa RTT mạnh (strong RTT - đo từ các lượt truyền thành công ngay lần đầu) và RTT yếu (weak RTT - đo từ các lượt truyền cần tối đa 2 lần phát lại).",
                            "terms": ["strong RTTs", "weak RTTs", "retransmissions"]
                        },
                        {
                            "en": "For weak RTO estimation, K is reduced from 4 to 1 to temper the large variance RTTVAR, and the overall RTO contribution weight is reduced to alpha = 0.25 (compared to alpha = 0.5 for strong RTO).",
                            "vi": "Đối với việc ước lượng RTO yếu, hệ số K được hạ từ 4 xuống 1 nhằm kìm hãm sự phình to của phương sai RTTVAR, đồng thời trọng số đóng góp vào RTO tổng thể được giảm xuống α = 0.25 (so với α = 0.5 của RTO mạnh).",
                            "terms": ["RTTVAR", "alpha", "weight"]
                        },
                        {
                            "en": "B. Variable Backoff Factor (VBF): Instead of blindly doubling RTO, CoCoA applies VBF = 3 when initial RTO < 1s to aggressively stop congestion, VBF = 1.5 when initial RTO > 3s to prevent extreme idle waits, and VBF = 2 for normal ranges [1, 3]s.",
                            "vi": "B. Hệ số Thoái lui Khả biến (VBF): Thay vì nhân đôi mù quáng, CoCoA áp dụng VBF = 3 khi RTO khởi tạo < 1s để nhanh chóng chặn đứng tắc nghẽn, VBF = 1.5 khi RTO khởi tạo > 3s nhằm tránh thời gian chờ chết chóc, và VBF = 2 đối với khoảng bình thường [1, 3]s.",
                            "terms": ["VBF", "Variable Backoff Factor", "initial RTO"]
                        },
                        {
                            "en": "C. RTO aging: If RTO is not updated for an extended period, it is smoothly converged back toward the default baseline to avoid carrying stale network state.",
                            "vi": "C. Lão hóa RTO: Nếu RTO không nhận được mẫu cập nhật trong thời gian dài, nó sẽ được làm mượt dần trở về mức cơ sở mặc định, ngăn chặn việc mang theo trạng thái mạng đã lỗi thời.",
                            "terms": ["RTO aging", "stale network state"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p2_sec_testbeds",
            "title": "V. EXPERIMENTAL SETUP & TESTBEDS",
            "title_vi": "V. MÔI TRƯỜNG THỰC NGHIỆM TRÊN PHẦN CỨNG THẬT",
            "paragraphs": [
                {
                    "id": "p2_p_testbeds_1",
                    "sentences": [
                        {
                            "en": "The authors evaluated CoCoA across two real-world hardware testbeds: (1) a cellular GPRS testbed using Matrix MTX-65-ULP modems, and (2) FlockLab, an indoor/outdoor wireless sensor network testbed with 30 TelosB motes running ContikiMAC with Radio Duty Cycling (RDC).",
                            "vi": "Nhóm tác giả đã tiến hành thử nghiệm CoCoA trên hai hệ thống phần cứng thực tế: (1) Hệ thống mạng di động GPRS sử dụng modem công nghiệp Matrix MTX-65-ULP, và (2) FlockLab – một testbed mạng cảm biến vô tuyến đa chặng với 30 nút TelosB chạy cơ chế ContikiMAC tích hợp Chu kỳ Làm việc Vô tuyến (Radio Duty Cycling - RDC).",
                            "terms": ["GPRS", "FlockLab", "TelosB", "ContikiMAC", "RDC", "Radio Duty Cycling"]
                        },
                        {
                            "en": "Two traffic scenarios were tested: Continuous Traffic (10 to 40 concurrent clients sending back-to-back requests) and Burst Traffic (a surge of 25-50 back-to-back requests simulating seismic alerts).",
                            "vi": "Hai kịch bản lưu lượng đã được khảo sát: Lưu lượng Liên tục (10 đến 40 client gửi bản tin dồn dập đồng thời) và Lưu lượng Bùng nổ (một đợt phát 25-50 bản tin tức thời mô phỏng tín hiệu cảnh báo địa chấn).",
                            "terms": ["Continuous Traffic", "Burst Traffic", "concurrent clients"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p2_sec_results",
            "title": "VI. EVALUATION RESULTS & KEY FINDINGS",
            "title_vi": "VI. PHÂN TÍCH KẾT QUẢ THỰC NGHIỆM",
            "paragraphs": [
                {
                    "id": "p2_p_results_1",
                    "sentences": [
                        {
                            "en": "Throughput: In the GPRS testbed, CoCoA achieved the highest transaction throughput across all client counts, while default CoAP lagged severely due to its inability to adjust RTO to high GPRS queue delays.",
                            "vi": "Về thông lượng: Trên mạng GPRS, CoCoA đạt thông lượng giao dịch cao nhất trong mọi quy mô client, trong khi CoAP mặc định bị tụt lại rất xa do không thể tự điều chỉnh RTO tương ứng với độ trễ hàng đợi lớn của mạng GPRS.",
                            "terms": ["Throughput", "CoCoA", "default CoAP", "GPRS"]
                        },
                        {
                            "en": "Settling Time: In burst traffic experiments, CoCoA dramatically shortened the Settling Time (time required to complete 80% of burst transactions), processing emergency traffic rapidly without stalling background communications.",
                            "vi": "Về Thời gian Lắng (Settling Time): Trong các đợt lưu lượng bùng phát, CoCoA rút ngắn vượt bậc thời gian lắng (thời gian để xử lý hoàn tất 80% lưu lượng bùng nổ), giải tỏa lưu lượng khẩn cấp một cách nhanh chóng mà không gây đình trệ truyền thông nền.",
                            "terms": ["Settling Time", "burst traffic"]
                        },
                        {
                            "en": "Fairness: Using Jain's Fairness Index (FI), CoCoA achieved a high fairness index of 0.74 in FlockLab, matching default CoAP (0.75) while TCP-derived methods (Linux-RTO: 0.55, Basic-RTO: 0.51) severely penalized multihop nodes.",
                            "vi": "Về tính công bằng: Đánh giá theo Chỉ số Công bằng Jain (FI), CoCoA đạt mức công bằng rất cao là 0.74 trên testbed FlockLab, tương đương với CoAP gốc (0.75), trong khi các phương pháp bắt chước TCP (Linux-RTO: 0.55, Basic-RTO: 0.51) phân biệt đối xử bất công và chèn ép nặng nề các nút truyền thông đa chặng xa xôi.",
                            "terms": ["Jain's Fairness Index", "FI", "Fairness", "multihop nodes"]
                        },
                        {
                            "en": "Memory footprint: CoCoA requires only 29 bytes of state per client destination, representing a negligible overhead well within the capacity of constrained microcontroller nodes.",
                            "vi": "Dấu chân bộ nhớ (Memory footprint): CoCoA chỉ tiêu tốn 29 bytes dung lượng RAM cho mỗi nút đích, một chi phí tài nguyên quá nhỏ bé và hoàn toàn nằm trong năng lực chịu tải của các vi điều khiển hạn chế nhất.",
                            "terms": ["Memory footprint", "RAM", "microcontroller"]
                        }
                    ]
                }
            ]
        },
        {
            "id": "p2_sec_conclusions",
            "title": "VII. CONCLUSIONS",
            "title_vi": "VII. KẾT LUẬN",
            "paragraphs": [
                {
                    "id": "p2_p_conclusions_1",
                    "sentences": [
                        {
                            "en": "CoCoA successfully bridges the gap between lightweight IoT communications and dynamic congestion control.",
                            "vi": "CoCoA đã bắc một nhịp cầu thành công rực rỡ giữa yêu cầu truyền thông siêu nhẹ của IoT và bài toán điều khiển tắc nghẽn mang tính thích ứng cao.",
                            "terms": ["CoCoA", "congestion control", "IoT"]
                        },
                        {
                            "en": "Through its combination of weak RTT estimation, VBF backoff, and aging, CoCoA delivers superior throughput, shorter settling times, and high network fairness on real-world constrained platforms.",
                            "vi": "Nhờ sự kết hợp tinh tế giữa cơ chế ước lượng RTT yếu, hệ số thoái lui VBF và kỹ thuật lão hóa RTO, CoCoA mang lại thông lượng vượt bậc, thời gian lắng cực ngắn và bảo toàn tính công bằng mạng trên các nền tảng thiết bị thực tế.",
                            "terms": ["weak RTT", "VBF", "aging", "throughput", "fairness"]
                        }
                    ]
                }
            ]
        }
    ]
}

# ==========================================
# DICTIONARY DATA
# Specialized Telecommunications & Networking Dictionary + General Academic English
# ==========================================
dictionary = {
    # Core Telecom & Networking terms
    "coap": {
        "word": "CoAP (Constrained Application Protocol)",
        "ipa": "/koʊ.æp/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Giao thức ứng dụng dành cho môi trường mạng và thiết bị bị ràng buộc (RFC 7252). Hoạt động trên nền UDP, sử dụng mô hình RESTful giống HTTP nhưng có tiêu đề ngắn chỉ 4 byte, hỗ trợ phát lại và điều khiển tắc nghẽn.",
        "general_def": "Giao thức truyền thông gọn nhẹ cho IoT.",
        "example": "CoAP operates over UDP to enable lightweight interactions for smart devices."
    },
    "congestion": {
        "word": "congestion",
        "ipa": "/kənˈdʒes.tʃən/",
        "pos": "Noun",
        "telecom_def": "Hiện tượng tắc nghẽn mạng: xảy ra khi lưu lượng dữ liệu nạp vào mạng (offered load) vượt quá dung lượng xử lý và truyền tải của các liên kết vô tuyến hoặc bộ đệm của nút mạng, gây sụt giảm thông lượng và tăng trễ đột biến.",
        "general_def": "Sự ùn tắc, ứ nghẽn (giao thông, mạng).",
        "example": "Network congestion leads to packet loss and high transmission delays."
    },
    "retransmission": {
        "word": "retransmission",
        "ipa": "/ˌriː.trænzˈmɪʃ.ən/",
        "pos": "Noun",
        "telecom_def": "Quá trình truyền lại: gửi lại gói tin đã phát trước đó khi không nhận được bản tin xác nhận ACK trước khi bộ đếm thời gian RTO hết hạn.",
        "general_def": "Sự truyền phát lại một thông điệp.",
        "example": "Excessive retransmissions can overwhelm buffer capacities in lossy networks."
    },
    "throughput": {
        "word": "throughput",
        "ipa": "/ˈθruː.pʊt/",
        "pos": "Noun",
        "telecom_def": "Thông lượng: Lượng dữ liệu hữu ích được truyền nhận thành công từ nút nguồn tới nút đích trên một đơn vị thời gian (thường tính bằng bit/s hoặc packet/s).",
        "general_def": "Công suất đầu ra, lưu lượng sản phẩm trong một khoảng thời gian.",
        "example": "CoCoA achieves higher throughput by dynamically tuning its retransmission timers."
    },
    "rto": {
        "word": "RTO (Retransmission Timeout)",
        "ipa": "/ˌɑːr.tiːˈoʊ/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thời gian chờ truyền lại: Khoảng thời gian tối đa mà phía phát chờ gói tin ACK từ phía thu trước khi quyết định gói tin đã bị thất lạc và kích hoạt truyền lại.",
        "general_def": "Thời gian hết hạn chờ đợi một hành động.",
        "example": "If the RTO timer expires before receiving an ACK, the packet is retransmitted."
    },
    "rtt": {
        "word": "RTT (Round-Trip Time)",
        "ipa": "/ˌɑːr.tiːˈtiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thời gian truyền khứ hồi (trễ vòng tròn): Tổng thời gian cần thiết để một gói tin đi từ phía phát tới phía nhận cộng với thời gian bản tin xác nhận (ACK) quay ngược trở lại phía phát.",
        "general_def": "Thời gian đi và về trọn vẹn một hành trình.",
        "example": "Round-trip time fluctuates significantly over wireless fading channels."
    },
    "spurious": {
        "word": "spurious",
        "ipa": "/ˈspjʊə.ri.əs/",
        "pos": "Adjective",
        "telecom_def": "Giả tạo / nhầm lẫn: Trong truyền thông, 'spurious retransmission' là việc truyền lại một gói tin chưa hề bị mất mà chỉ bị trễ trong mạng do RTO bị ước lượng quá ngắn.",
        "general_def": "Sai lệch, giả mạo, không có cơ sở xác thực.",
        "example": "Spurious retransmissions waste precious radio bandwidth and battery energy."
    },
    "backoff": {
        "word": "backoff",
        "ipa": "/ˈbæk.ɒf/",
        "pos": "Noun / Verb",
        "telecom_def": "Cơ chế thoái lui: Biện pháp trì hoãn có chủ đích, tăng khoảng thời gian chờ đợi giữa các lần truyền lại kế tiếp để giảm mật độ lưu lượng và cho mạng thời gian hồi phục.",
        "general_def": "Lùi bước, thoái lui khỏi một vị trí.",
        "example": "Binary Exponential Backoff doubles the waiting time after each collision."
    },
    "vbf": {
        "word": "VBF (Variable Backoff Factor)",
        "ipa": "/ˌviː.biːˈef/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Hệ số thoái lui khả biến: Cơ chế của CoCoA thay đổi hệ số nhân thoái lui tùy theo độ lớn của RTO khởi tạo (3 nếu RTO < 1s, 1.5 nếu RTO > 3s, 2 nếu bình thường).",
        "general_def": "Hệ số nhân linh hoạt theo điều kiện ban đầu.",
        "example": "VBF prevents rapid consecutive retransmissions when the initial RTO is small."
    },
    "beb": {
        "word": "BEB (Binary Exponential Backoff)",
        "ipa": "/biː.iːˈbiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thoái lui hàm mũ nhị phân: Thuật toán nhân đôi thời gian chờ sau mỗi lần truyền lỗi (hệ số = 2), dùng phổ biến trong giao thức Ethernet CSMA/CD, 802.11 và TCP.",
        "general_def": "Sự thoái lui tăng gấp đôi theo hàm mũ cơ số 2.",
        "example": "Default CoAP relies on simple BEB without monitoring current channel delays."
    },
    "lln": {
        "word": "LLN (Low Power and Lossy Networks)",
        "ipa": "/el.elˈen/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Mạng năng lượng thấp và tổn hao: Mạng gồm các thiết bị cảm biến bị giới hạn công suất, liên kết vô tuyến chất lượng không ổn định, tỷ lệ lỗi gói cao và băng thông hẹp (RFC 6550).",
        "general_def": "Mạng truyền thông của các thiết bị pin yếu và tỷ lệ suy hao tín hiệu cao.",
        "example": "Routing protocols in LLNs must minimize packet transmission overhead."
    },
    "bursty": {
        "word": "bursty",
        "ipa": "/ˈbɜː.sti/",
        "pos": "Adjective",
        "telecom_def": "Có tính bùng phát / dạng cụm xung: Đặc tính lưu lượng dữ liệu nảy sinh đột biến với số lượng lớn trong khoảng thời gian rất ngắn xen kẽ các khoảng im lặng dài.",
        "general_def": "Bùng nổ, xuất hiện dồn dập từng cơn.",
        "example": "Bursty traffic patterns from alarm triggers can instantly choke node buffers."
    },
    "dithering": {
        "word": "dithering",
        "ipa": "/ˈdɪð.ər.ɪŋ/",
        "pos": "Noun",
        "telecom_def": "Kỹ thuật rung ngẫu nhiên (dithering): Phân tán RTO bằng cách chọn một giá trị ngẫu nhiên trong khoảng [RTO, 1.5*RTO] nhằm tránh hiện tượng đồng bộ hóa khi nhiều nút cùng hết giờ đồng thời.",
        "general_def": "Sự dao động ngẫu nhiên, sự phân tán độ trễ.",
        "example": "RTO dithering breaks synchronization among competing client nodes."
    },
    "piggybacked": {
        "word": "piggybacked",
        "ipa": "/ˈpɪɡ.i.bækt/",
        "pos": "Adjective / Verb past",
        "telecom_def": "Cõng kèm: Phương thức gửi dữ liệu phản hồi (response payload) được lồng ghép trực tiếp vào bên trong bản tin xác nhận ACK, thay vì phải gửi riêng 2 gói tin độc lập.",
        "general_def": "Cõng trên lưng, đính kèm đi liền.",
        "example": "The CoAP server sends a piggybacked ACK containing the requested sensor value."
    },
    "buffer": {
        "word": "buffer",
        "ipa": "/ˈbʌf.ər/",
        "pos": "Noun",
        "telecom_def": "Bộ đệm hàng đợi: Bộ nhớ tạm thời tại card mạng hoặc vi điều khiển dùng để lưu trữ các gói tin đang chờ truyền phát hoặc chờ xử lý tầng ứng dụng.",
        "general_def": "Vùng đệm, vật giảm chấn động.",
        "example": "A full MAC buffer causes packet drops at intermediate forwarding nodes."
    },
    "overflow": {
        "word": "overflow",
        "ipa": "/ˌoʊ.vərˈfloʊ/",
        "pos": "Noun / Verb",
        "telecom_def": "Tràn bộ đệm: Tình trạng các gói tin mới tới bị hủy bỏ (drop) do dung lượng hàng đợi bộ đệm của thiết bị đã đầy hoàn toàn.",
        "general_def": "Tràn ra ngoài, quá mức chứa đựng.",
        "example": "Buffer overflows are the primary cause of packet loss in congested routers."
    },
    "lossy": {
        "word": "lossy",
        "ipa": "/ˈlɒs.i/",
        "pos": "Adjective",
        "telecom_def": "Tổn hao / dễ mất mát dữ liệu: Môi trường truyền dẫn có tỷ lệ lỗi kênh và suy hao tín hiệu cao khiến các gói tin thường xuyên bị hỏng hoặc mất trên đường truyền.",
        "general_def": "Gây hao hụt, mất mát.",
        "example": "Wireless sensor channels in industrial environments are notoriously lossy."
    },
    "constrained": {
        "word": "constrained",
        "ipa": "/kənˈstreɪnd/",
        "pos": "Adjective",
        "telecom_def": "Bị ràng buộc / hạn chế tài nguyên: Chỉ các vi điều khiển nhúng có dung lượng RAM (vài kB), ROM (vài chục kB), CPU tốc độ thấp và pin dung lượng nhỏ.",
        "general_def": "Bị kiềm chế, bị gò bó, chịu giới hạn.",
        "example": "Constrained nodes cannot run complex encryption suites or bulky protocol stacks."
    },
    "fairness": {
        "word": "fairness",
        "ipa": "/ˈfeə.nəs/",
        "pos": "Noun",
        "telecom_def": "Tính công bằng mạng: Mức độ chia sẻ tài nguyên băng thông và quyền truy cập kênh truyền một cách bình đẳng giữa các luồng truyền thông khác nhau (đo bằng Jain's Index).",
        "general_def": "Sự công bằng, vô tư, không thiên vị.",
        "example": "Jain's Fairness Index evaluates whether multihop nodes obtain a fair data share."
    },
    "latency": {
        "word": "latency",
        "ipa": "/ˈleɪ.tən.si/",
        "pos": "Noun",
        "telecom_def": "Độ trễ truyền dẫn: Khoảng thời gian từ lúc một bit hoặc gói tin được gửi đi từ nguồn cho đến lúc nó được nút đích nhận trọn vẹn.",
        "general_def": "Thời gian trễ, trạng thái âm ỉ.",
        "example": "Excessive queue latency degrades real-time industrial monitoring systems."
    },
    "jitter": {
        "word": "jitter",
        "ipa": "/ˈdʒɪt.ər/",
        "pos": "Noun",
        "telecom_def": "Độ biến động trễ (Jitter): Sự dao động hoặc biến thiên không đồng đều của thời gian trễ giữa các gói tin liên tiếp trên cùng một liên kết mạng.",
        "general_def": "Sự run rẩy, sự chập chờn.",
        "example": "Radio duty cycling in sensor nodes introduces severe RTT jitter."
    },
    "aging": {
        "word": "aging",
        "ipa": "/ˈeɪ.dʒɪŋ/",
        "pos": "Noun",
        "telecom_def": "Cơ chế lão hóa: Quy trình làm giảm dần độ tin cậy của thông tin mạng đã cũ và kéo giá trị RTO trở lại giá trị mặc định khi lâu không có gói tin trao đổi.",
        "general_def": "Quá trình già đi, lão hóa theo thời gian.",
        "example": "RTO aging ensures that temporary spikes do not permanently skew the timer."
    },
    "deviance": {
        "word": "deviance",
        "ipa": "/ˈdiː.vi.əns/",
        "pos": "Noun",
        "telecom_def": "Độ lệch trung bình: Độ chênh lệch giữa giá trị đo được thực tế và giá trị kỳ vọng trung bình (trong pCoCoA là mdev_max dùng để chặn dưới RTO).",
        "general_def": "Sự sai khác, sự lệch hướng.",
        "example": "Maximum mean deviance keeps the RTO safely above rapid short-term drops."
    },
    "estimator": {
        "word": "estimator",
        "ipa": "/ˈes.tɪ.meɪ.tər/",
        "pos": "Noun",
        "telecom_def": "Bộ ước lượng: Hàm thuật toán thống kê (như EWMA) dùng để dự đoán trạng thái tương lai của biến số mạng (như SRTT, RTTVAR) từ các mẫu đo hiện tại.",
        "general_def": "Người ước lượng, công cụ định giá dự tính.",
        "example": "The weak estimator in CoCoA+ fails to adapt during bursty transmissions."
    },
    "settling": {
        "word": "settling (Settling Time)",
        "ipa": "/ˈset.lɪŋ taɪm/",
        "pos": "Noun",
        "telecom_def": "Thời gian lắng / thời gian hồi phục: Khoảng thời gian cần thiết để hệ thống mạng xử lý xong ít nhất 80% lưu lượng của đợt bùng nổ và đưa mạng về trạng thái ổn định.",
        "general_def": "Thời gian lắng đọng, định cư, yên ắng.",
        "example": "CoCoA achieves a much shorter settling time under traffic bursts."
    },
    "rdc": {
        "word": "RDC (Radio Duty Cycling)",
        "ipa": "/ˌɑːr.diːˈsiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Chu kỳ hoạt động thu phát vô tuyến: Kỹ thuật tiết kiệm điện năng bằng cách cho chip thu phát sóng vô tuyến tắt (ngủ) phần lớn thời gian và chỉ thức dậy định kỳ để nghe kênh.",
        "general_def": "Tỷ lệ thời gian hoạt động trên tổng chu kỳ.",
        "example": "ContikiMAC relies on RDC to achieve years of battery operation on TelosB motes."
    },
    "acknowledgement": {
        "word": "acknowledgement (ACK)",
        "ipa": "/əkˈnɒl.ɪdʒ.mənt/",
        "pos": "Noun",
        "telecom_def": "Bản tin báo nhận (ACK): Gói tin được phía nhận gửi ngược lại phía phát để xác nhận rằng một bản tin dữ liệu cụ thể đã được thu nhận an toàn và nguyên vẹn.",
        "general_def": "Sự thừa nhận, lời cảm tạ, sự hồi đáp.",
        "example": "The sender cancels the retransmission timer upon receiving the ACK."
    },
    "stop-and-wait": {
        "word": "stop-and-wait",
        "ipa": "/ˌstɒp.əndˈweɪt/",
        "pos": "Adjective / Noun",
        "telecom_def": "Giao thức Dừng và Chờ: Cơ chế truyền thông trong đó nút phát chỉ được gửi đúng 1 gói tin và phải dừng lại chờ nhận được gói tin ACK từ nút thu rồi mới được phép gửi gói tin kế tiếp (NSTART=1).",
        "general_def": "Làm từng bước, chờ xong bước này mới sang bước khác.",
        "example": "CoAP default specification enforces a stop-and-wait interaction model."
    },
    "multihop": {
        "word": "multihop",
        "ipa": "/ˈmʌl.ti.hɒp/",
        "pos": "Adjective",
        "telecom_def": "Đa chặng: Hình thức mạng trong đó gói tin phải được chuyển tiếp qua nhiều nút trung gian (relay/router) trước khi tới được nút đích cuối cùng.",
        "general_def": "Trải qua nhiều chặng dừng chân.",
        "example": "Multihop paths incur accumulated forwarding delays and higher loss risks."
    },
    "collision": {
        "word": "collision",
        "ipa": "/kəˈlɪʒ.ən/",
        "pos": "Noun",
        "telecom_def": "Va chạm / xung đột đường truyền: Hiện tượng xảy ra khi hai hoặc nhiều nút mạng cùng phát sóng vô tuyến trên cùng một tần số tại cùng một thời điểm, làm hỏng tín hiệu của nhau.",
        "general_def": "Sự va đâm, sự xung đột gay gắt.",
        "example": "Packet collision rates spike dramatically when traffic bursts occur."
    },
    "payload": {
        "word": "payload",
        "ipa": "/ˈpeɪ.ləʊd/",
        "pos": "Noun",
        "telecom_def": "Tải trọng dữ liệu hữu ích: Phần dữ liệu thực sự của người dùng hoặc ứng dụng được chuyên chở bên trong gói tin, không bao gồm các phần tiêu đề điều khiển (headers).",
        "general_def": "Hàng hóa vận chuyển hữu ích của phương tiện.",
        "example": "The sensor reading is packed into the 95-byte CoAP payload."
    },
    "dampening": {
        "word": "dampening",
        "ipa": "/ˈdæm.pən.ɪŋ/",
        "pos": "Noun / Verb",
        "telecom_def": "Làm suy giảm / giảm xóc: Việc sử dụng hệ số giảm chấn nhằm ngăn các biến số thuật toán (như RTO) dao động quá dữ dội trước các xung nhiễu nhất thời.",
        "general_def": "Sự dập tắt dao động, làm dịu đi.",
        "example": "Excessive dampening prevents the algorithm from reacting in time to sudden congestion."
    },
    "greedy": {
        "word": "greedy",
        "ipa": "/ˈɡriː.di/",
        "pos": "Adjective",
        "telecom_def": "Tham lam (lưu lượng): Nguồn phát liên tục bơm dữ liệu vào mạng với tốc độ tối đa mà không áp dụng cơ chế điều khiển tắc nghẽn, chèn ép tài nguyên của các luồng khác.",
        "general_def": "Tham lam, thèm khát quá độ.",
        "example": "Greedy background traffic severely disrupts delicate CoAP feedback loops."
    },
    "variance": {
        "word": "variance",
        "ipa": "/ˈveə.ri.əns/",
        "pos": "Noun",
        "telecom_def": "Phương sai: Đại lượng thống kê đo lường mức độ biến động phân tán của các mẫu RTT xung quanh giá trị trung bình trượt SRTT.",
        "general_def": "Sự biến thiên, sự khác biệt.",
        "example": "RTTVAR measures the round-trip time variance across recent transactions."
    },
    "border": {
        "word": "border (Border Router)",
        "ipa": "/ˈbɔː.dər ˈruː.tər/",
        "pos": "Noun",
        "telecom_def": "Bộ định tuyến biên: Thiết bị đóng vai trò cổng nối (gateway) kết nối mạng cảm biến LLN 6LoWPAN với mạng Internet IPv6 diện rộng.",
        "general_def": "Đường biên giới, ranh giới ngoài cùng.",
        "example": "The 6LoWPAN border router performs header compression and packet routing."
    },
    "piggyback": {
        "word": "piggyback",
        "ipa": "/ˈpɪɡ.i.bæk/",
        "pos": "Verb / Noun",
        "telecom_def": "Cõng kèm: Kỹ thuật đính kèm dữ liệu trả lời của ứng dụng vào trong cùng một gói tin xác nhận ACK để tiết kiệm băng thông.",
        "general_def": "Cõng ai đó trên lưng.",
        "example": "The server piggybacks the sensor response onto the CoAP ACK frame."
    },
    "dither": {
        "word": "dither",
        "ipa": "/ˈdɪð.ər/",
        "pos": "Verb / Noun",
        "telecom_def": "Thêm rung nhiễu ngẫu nhiên: Biến đổi giá trị RTO một lượng ngẫu nhiên để các nút mạng không cùng đồng loạt gửi lại bản tin tại một thời điểm.",
        "general_def": "Do dự, dao động nhỏ.",
        "example": "Dithering the RTO prevents repeated synchronization collisions."
    }
}

# Write files
with open(os.path.join(base_dir, "data_paper1.js"), "w", encoding="utf-8") as f:
    f.write("// Paper 1 Dataset: pCoCoA - Simone Bolettieri et al. (Ad Hoc Networks 2018)\n")
    f.write("const PAPER_1_DATA = " + json.dumps(paper1, ensure_ascii=False, indent=2) + ";\n")

with open(os.path.join(base_dir, "data_paper2.js"), "w", encoding="utf-8") as f:
    f.write("// Paper 2 Dataset: CoAP Congestion Control for IoT - August Betzler et al. (IEEE Comms Mag 2016)\n")
    f.write("const PAPER_2_DATA = " + json.dumps(paper2, ensure_ascii=False, indent=2) + ";\n")

with open(os.path.join(base_dir, "dictionary.js"), "w", encoding="utf-8") as f:
    f.write("// Specialized Telecommunications Dictionary & Lemmatizer\n")
    f.write("const TELECOM_DICTIONARY = " + json.dumps(dictionary, ensure_ascii=False, indent=2) + ";\n")

print("Generated all dataset files successfully!")
