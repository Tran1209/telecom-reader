# -*- coding: utf-8 -*-
"""
Generate complete data for both papers with rich sentence-by-sentence telecom translations,
equations, algorithms, and comprehensive dictionary.
"""
import os
import json

base_dir = r"C:\Users\nam\.gemini\antigravity\scratch\telecom-reader"

# Read paper 1 sections
p1_sections = [
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
                        "terms": ["CoAP", "IETF", "IoT", "application protocol"]
                    },
                    {
                        "en": "Since IoT devices are often interconnected by networks characterized by high packet error rates and low throughput, congestion control will be crucial to ensure proper and timed communication in these networks.",
                        "vi": "Do các thiết bị IoT thường được liên kết thông qua các mạng có đặc tính tỷ lệ lỗi gói cao (high packet error rates) và thông lượng thấp (low throughput), việc điều khiển tắc nghẽn (congestion control) là yếu tố sống còn nhằm đảm bảo việc truyền thông diễn ra chính xác và kịp thời.",
                        "terms": ["packet error rates", "throughput", "congestion control"]
                    },
                    {
                        "en": "Therefore, CoCoA+, an advanced congestion control algorithm for CoAP, is currently being specified by the IETF.",
                        "vi": "Chính vì vậy, CoCoA+ – một thuật toán điều khiển tắc nghẽn nâng cao cho CoAP – hiện đang được IETF đặc tả và chuẩn hóa.",
                        "terms": ["CoCoA+", "IETF"]
                    },
                    {
                        "en": "In this work, we present a critical analysis of CoCoA+ performance and highlight some of its shortcomings and pitfalls.",
                        "vi": "Trong công trình này, chúng tôi trình bày một phân tích phản biện sâu sắc về hiệu năng của CoCoA+ và vạch rõ những thiếu sót cùng các cạm bẫy kỹ thuật của nó.",
                        "terms": ["performance", "shortcomings", "pitfalls"]
                    },
                    {
                        "en": "Two different scenarios are considered: one with an increasing traffic load due to an increasing number of CoAP requests, and another with an interfering traffic concurrently transmitted in the network characterized by a bursty pattern.",
                        "vi": "Hai kịch bản khác nhau được khảo sát: một kịch bản có tải lưu lượng tăng dần do số lượng yêu cầu CoAP tăng lên, và một kịch bản khác có lưu lượng gây nhiễu được truyền đồng thời trong mạng với đặc trưng dạng bùng nổ (bursty pattern).",
                        "terms": ["traffic load", "interfering traffic", "bursty pattern"]
                    },
                    {
                        "en": "In the former scenario, we show how CoCoA+ may be characterized by many spurious retransmissions at some offered loads close to congestion.",
                        "vi": "Ở kịch bản đầu tiên, chúng tôi chứng minh CoCoA+ phát sinh rất nhiều lần truyền lại giả tạo (spurious retransmissions) tại một số mức tải cung cấp cận kề ngưỡng tắc nghẽn.",
                        "terms": ["spurious retransmissions", "offered loads", "congestion"]
                    },
                    {
                        "en": "In the latter, we show instead how the weak estimator is not particularly effective in adapting to changing traffic loads.",
                        "vi": "Ở kịch bản thứ hai, chúng tôi chỉ ra rằng bộ ước lượng yếu (weak estimator) hoàn toàn không đạt hiệu quả trong việc thích ứng với các mức tải biến đổi.",
                        "terms": ["weak estimator", "traffic loads"]
                    },
                    {
                        "en": "In order to overcome such limitations, a number of modifications to CoCoA+ are proposed.",
                        "vi": "Để khắc phục triệt để các hạn chế đó, một loạt sửa đổi cải tiến cho CoCoA+ đã được đề xuất.",
                        "terms": ["modifications", "limitations"]
                    },
                    {
                        "en": "The resulting solution, named precise Congestion Control (pCoCoA), is shown to reduce the number of retransmissions, while guaranteeing throughputs and delays comparable to those of CoAP and CoCoA+.",
                        "vi": "Giải pháp kết quả mang tên Điều khiển Tắc nghẽn Chính xác (pCoCoA) được chứng minh là làm giảm đáng kể số lần truyền lại, trong khi vẫn đảm bảo thông lượng và độ trễ tương đương với CoAP và CoCoA+.",
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
        "badge": "Cơ sở lý thuyết",
        "paragraphs": [
            {
                "id": "p1_intro_1",
                "sentences": [
                    {
                        "en": "The Internet of Things (IoT) is getting momentum both in academia, as a very active research topic, and in industry, with smart objects that are meant to thoroughly affect our lives.",
                        "vi": "Mạng lưới Vạn vật kết nối Internet (IoT) đang tạo được sức bật mạnh mẽ cả trong giới học thuật lẫn công nghiệp, với các vật thể thông minh được kỳ vọng sẽ thay đổi sâu sắc cuộc sống của chúng ta.",
                        "terms": ["IoT", "smart objects"]
                    },
                    {
                        "en": "IoT systems are built on top of IoT devices that collect data and interact with the physical environment.",
                        "vi": "Hệ thống IoT được xây dựng dựa trên các thiết bị IoT có chức năng thu thập dữ liệu và tương tác trực tiếp với môi trường vật lý.",
                        "terms": ["IoT devices"]
                    },
                    {
                        "en": "IoT devices are usually cheap, battery-powered devices, with limited computation capabilities.",
                        "vi": "Các thiết bị IoT thường là những thiết bị giá rẻ, hoạt động bằng pin và có năng lực xử lý tính toán rất hạn chế.",
                        "terms": ["battery-powered", "computation capabilities"]
                    },
                    {
                        "en": "Those devices are equipped with low power transceivers that, however, allow forming Low Power and Lossy Networks (LLN), characterized by possibly large packet error rates, and low throughput.",
                        "vi": "Những thiết bị này được trang bị các bộ thu phát công suất thấp tạo nên Mạng năng lượng thấp và tổn thất cao (Low Power and Lossy Networks - LLN), có đặc tính tỷ lệ lỗi gói cao và thông lượng thấp.",
                        "terms": ["transceivers", "LLN", "packet error rates", "throughput"]
                    },
                    {
                        "en": "Due to these characteristics, new communication protocols tailored for constrained devices operating in lossy networks are required.",
                        "vi": "Do các đặc tính này, cần phải có các giao thức truyền thông mới được thiết kế riêng cho các thiết bị hạn chế tài nguyên hoạt động trong mạng tổn hao.",
                        "terms": ["communication protocols", "constrained devices", "lossy networks"]
                    },
                    {
                        "en": "To this aim, IETF defined a communication protocol stack for IoT devices.",
                        "vi": "Nhằm mục tiêu này, IETF đã định nghĩa một ngăn xếp giao thức truyền thông chuyên dụng cho thiết bị IoT.",
                        "terms": ["IETF", "protocol stack"]
                    },
                    {
                        "en": "In particular, the IETF CoRE Working Group standardized the Constrained Application Protocol (CoAP) [1], which allows applications to exchange information with IoT devices.",
                        "vi": "Cụ thể, Nhóm công tác CoRE của IETF đã chuẩn hóa Giao thức Ứng dụng Bị ràng buộc (CoAP) [RFC 7252], cho phép các ứng dụng trao đổi thông tin với thiết bị IoT theo phương thức RESTful gọn nhẹ.",
                        "terms": ["CoRE Working Group", "CoAP"]
                    }
                ]
            },
            {
                "id": "p1_intro_2",
                "sentences": [
                    {
                        "en": "Considering the limited capabilities of nodes and the limited amount of bandwidth available in LLNs, congestion control is crucial to ensure proper and timely delivery of data.",
                        "vi": "Xét đến năng lực hạn chế của các nút mạng và lượng băng thông eo hẹp trong các mạng LLN, việc điều khiển tắc nghẽn là tối quan trọng nhằm bảo đảm phân phối dữ liệu chính xác và đúng thời hạn.",
                        "terms": ["bandwidth", "LLN", "congestion control"]
                    },
                    {
                        "en": "In traditional networks, application data is usually transported by the Transmission Control Protocol (TCP), which includes a congestion control mechanism.",
                        "vi": "Trong các mạng truyền thống, dữ liệu ứng dụng thường được truyền tải bằng Giao thức Điều khiển Truyền vận (TCP) vốn đã tích hợp sẵn cơ chế kiểm soát tắc nghẽn.",
                        "terms": ["TCP", "congestion control mechanism"]
                    },
                    {
                        "en": "In LLNs, instead, CoAP employs the User Datagram Protocol (UDP), which does not provide any congestion control mechanism.",
                        "vi": "Trái lại, trong mạng LLN, CoAP sử dụng Giao thức Datagram Người dùng (UDP) – một giao thức không hề có cơ chế điều khiển tắc nghẽn nào.",
                        "terms": ["LLNs", "CoAP", "UDP"]
                    },
                    {
                        "en": "For this reason, CoAP implements optional reliable data delivery through retransmissions and regulates the amount of data transmitted through a simple congestion avoidance mechanism.",
                        "vi": "Vì lý do đó, CoAP tự cài đặt khả năng phân phối dữ liệu tin cậy tùy chọn thông qua cơ chế truyền lại và điều tiết lượng dữ liệu phát đi bằng một cơ chế tránh tắc nghẽn thô sơ.",
                        "terms": ["retransmissions", "congestion avoidance"]
                    },
                    {
                        "en": "The definition of the latter, however, is not trivial: the shared nature of the wireless medium results in collisions of transmissions, and the limited buffer size of IoT devices often produces buffer overflows.",
                        "vi": "Tuy nhiên, việc định nghĩa cơ chế này không hề đơn giản: bản chất môi trường vô tuyến dùng chung gây ra va chạm xung đột gói (collisions), và dung lượng bộ đệm eo hẹp của thiết bị IoT thường xuyên gây ra hiện tượng tràn bộ đệm (buffer overflows).",
                        "terms": ["wireless medium", "collisions", "buffer overflows"]
                    },
                    {
                        "en": "Both phenomena can cause frequent packet losses that lead to further message retransmissions, which eventually lead to congestion.",
                        "vi": "Cả hai hiện tượng trên đều gây mất gói liên tục, kéo theo các đợt phát lại bản tin tiếp theo và rốt cuộc đẩy toàn mạng vào tình trạng tắc nghẽn nghiêm trọng.",
                        "terms": ["packet losses", "retransmissions", "congestion"]
                    }
                ]
            },
            {
                "id": "p1_intro_3",
                "sentences": [
                    {
                        "en": "Since CoAP defines only a basic congestion control mechanism, a new advanced congestion control have been proposed recently in [2], and further extended in [3].",
                        "vi": "Bởi vì CoAP gốc chỉ định nghĩa một cơ chế điều khiển tắc nghẽn cơ bản, một giải thuật nâng cao mới đã được đề xuất trong [2] và tiếp tục mở rộng trong [3].",
                        "terms": ["congestion control", "CoAP"]
                    },
                    {
                        "en": "Such algorithm, called CoCoA, is currently under standardization within the CoRE Working Group [8].",
                        "vi": "Thuật toán này mang tên CoCoA (CoAP Simple Congestion Control/Advanced), hiện đang trong tiến trình chuẩn hóa tại Nhóm công tác CoRE [8].",
                        "terms": ["CoCoA", "CoRE Working Group"]
                    },
                    {
                        "en": "CoCoA exploits the measured round-trip time (RTT) between the client and the server to adjust the retransmission timeout and therefore avoid too frequent retransmissions.",
                        "vi": "CoCoA tận dụng thời gian truyền khứ hồi (RTT) đo được giữa client và server để điều chỉnh thời gian chờ truyền lại (RTO), từ đó tránh được việc phát lại quá dày đặc.",
                        "terms": ["RTT", "round-trip time", "RTO", "retransmission timeout"]
                    },
                    {
                        "en": "CoCoA has been originally evaluated against CoAP in [2] and [3], showing that it can improve the performance in terms of throughput, packet delivery ratio, and average delays.",
                        "vi": "CoCoA ban đầu đã được đánh giá đối chứng với CoAP trong [2] và [3], chứng tỏ khả năng cải thiện rõ rệt về thông lượng, tỷ lệ phân phối gói tin (PDR) và độ trễ trung bình.",
                        "terms": ["throughput", "packet delivery ratio", "delays"]
                    }
                ]
            },
            {
                "id": "p1_intro_4",
                "sentences": [
                    {
                        "en": "In this work, we present an exhaustive performance evaluation of the CoCoA congestion control algorithm.",
                        "vi": "Trong công trình này, chúng tôi trình bày một đánh giá hiệu năng toàn diện và sâu sắc về thuật toán điều khiển tắc nghẽn CoCoA.",
                        "terms": ["performance evaluation", "CoCoA"]
                    },
                    {
                        "en": "First, we present an evaluation of the algorithm considering two different scenarios: the first one with only CoAP traffic, and the second one in which CoAP traffic competes with interfering greedy traffic that is transmitted without rate control.",
                        "vi": "Đầu tiên, chúng tôi khảo sát thuật toán trong hai kịch bản: kịch bản thứ nhất chỉ có lưu lượng CoAP, và kịch bản thứ hai lưu lượng CoAP phải cạnh tranh với lưu lượng gây nhiễu tham lam (greedy traffic) phát tự do không kiểm soát tốc độ.",
                        "terms": ["CoAP traffic", "greedy traffic", "rate control"]
                    },
                    {
                        "en": "An in-depth analysis of these simulation results allows us to highlight some novel critical issues of the algorithm.",
                        "vi": "Phân tích chuyên sâu từ các kết quả mô phỏng cho phép chúng tôi vạch ra những vấn đề nghiêm trọng mới phát sinh của thuật toán.",
                        "terms": ["simulation results", "critical issues"]
                    },
                    {
                        "en": "Consequently, we propose a set of modifications to the original algorithm to overcome these limitations.",
                        "vi": "Từ đó, chúng tôi đề xuất một tập các cải tiến cho thuật toán ban đầu để vượt qua những giới hạn này.",
                        "terms": ["modifications", "limitations"]
                    },
                    {
                        "en": "The resulting algorithm, named pCoCoA, is evaluated against CoAP, CoCoA+ and two more recent algorithms: 4-state-strong [7] and CoCoA-E [14].",
                        "vi": "Thuật toán kết quả mang tên pCoCoA được đánh giá so sánh với CoAP, CoCoA+ và hai thuật toán gần đây: 4-state-strong [7] và CoCoA-E [14].",
                        "terms": ["pCoCoA", "4-state-strong", "CoCoA-E"]
                    },
                    {
                        "en": "Results demonstrated that pCoCoA effectively mitigates the issues of the original algorithm, reducing the overall number of retransmissions while keeping throughputs and delays comparable to those obtained with CoAP, CoCoA, CoCoA-E and 4-state-strong.",
                        "vi": "Kết quả chứng minh pCoCoA khắc phục hiệu quả các điểm yếu của thuật toán gốc, cắt giảm mạnh mẽ tổng số lần truyền lại trong khi vẫn duy trì thông lượng và độ trễ tương đương với CoAP, CoCoA, CoCoA-E và 4-state-strong.",
                        "terms": ["retransmissions", "throughputs", "delays"]
                    },
                    {
                        "en": "Moreover, pCoCoA can correctly handle scenarios in which CoAP traffic competes with interfering bursty traffic, whereas other algorithms, such as CoCoA-E, do not.",
                        "vi": "Đặc biệt, pCoCoA xử lý rất chuẩn xác trong các tình huống lưu lượng CoAP cạnh tranh với lưu lượng bùng nổ gây nhiễu, điều mà các thuật toán khác như CoCoA-E không làm được.",
                        "terms": ["bursty traffic", "CoCoA-E"]
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
                        "terms": ["CoCoA", "CoAP", "CoRE Working Group"]
                    },
                    {
                        "en": "In this work we consider its last revision, CoCoA+ [3]. The algorithm is composed of the following three main functions: a policy to calculate the retransmission timeout (RTO), the back-off policy to set the RTO for retransmissions, and an ageing policy for the status information.",
                        "vi": "Trong công trình này chúng tôi xem xét phiên bản mới nhất là CoCoA+ [3]. Thuật toán được cấu thành từ ba cơ chế then chốt: chính sách tính toán RTO, chính sách thoái lui (back-off) cho các lần truyền lại, và chính sách lão hóa (ageing) cho thông tin trạng thái mạng.",
                        "terms": ["CoCoA+", "RTO", "back-off policy", "ageing policy"]
                    }
                ]
            },
            {
                "id": "p1_cocoa_rto",
                "sentences": [
                    {
                        "en": "A. RTO calculation: In order to calculate the RTO, CoCoA+ adopts the same algorithm used by TCP, which updates the RTO value based on measured Round Trip Times (RTTs).",
                        "vi": "A. Tính toán RTO: Để tính RTO, CoCoA+ áp dụng thuật toán tương tự như của TCP, cập nhật RTO dựa trên các giá trị thời gian truyền khứ hồi (RTT) đo được.",
                        "terms": ["RTO calculation", "TCP", "RTT"]
                    },
                    {
                        "en": "According to Karn's algorithm [9], the RTT measurements should be considered only when the message was correctly delivered without retransmissions.",
                        "vi": "Theo giải thuật Karn [9], các phép đo RTT chỉ được phép chấp nhận khi bản tin được phân phối thành công ngay lần đầu mà không cần truyền lại.",
                        "terms": ["Karn's algorithm", "retransmissions"]
                    },
                    {
                        "en": "In the context of lossy networks, however, many transmissions are expected to experience retransmissions, thus reducing the probability of obtaining valid RTT measurements.",
                        "vi": "Tuy nhiên, trong bối cảnh mạng tổn hao (lossy networks), việc truyền lại diễn ra rất thường xuyên, do đó làm giảm xác suất thu được các mẫu đo RTT hợp lệ theo chuẩn Karn.",
                        "terms": ["lossy networks", "RTT measurements"]
                    },
                    {
                        "en": "For this reason, CoCoA+ considers also transactions that experienced retransmissions to obtain a more accurate RTT estimation.",
                        "vi": "Vì lý do đó, CoCoA+ chấp nhận cả những giao dịch có truyền lại để thu được ước lượng RTT đầy đủ và cập nhật hơn.",
                        "terms": ["transactions", "RTT estimation"]
                    },
                    {
                        "en": "Specifically, two RTO values are calculated: a strong RTO, estimated using RTTs samples from transactions that did not required any retransmission, and a weak RTO, estimated using RTT values of transactions that required no more than two transmissions.",
                        "vi": "Cụ thể, hai giá trị RTO được tính toán song song: RTO mạnh (strong RTO) – ước lượng từ các mẫu RTT của giao dịch không phải truyền lại; và RTO yếu (weak RTO) – ước lượng từ RTT của giao dịch cần tối đa hai lần truyền lại.",
                        "terms": ["strong RTO", "weak RTO", "retransmissions"]
                    },
                    {
                        "en": "Considering that it is not possible to know for an ACK to which transmission it belongs to, RTT samples are collected measuring the time between the first transmission and the arrival of the response, but only if two retransmissions at most are required.",
                        "vi": "Do không thể biết chắc một gói ACK nhận về tương ứng với lần phát nào (vấn nạn 'nhập nhằng RTT'), mẫu RTT được đo bằng khoảng thời gian từ lần phát đầu tiên đến lúc nhận được ACK, nhưng chỉ áp dụng khi số lần truyền lại không quá 2.",
                        "terms": ["ACK", "RTT samples", "retransmissions"]
                    }
                ]
            },
            {
                "id": "p1_cocoa_math",
                "sentences": [
                    {
                        "en": "For each destination, a node maintains: two smoothed mean RTT estimators (RTTstrong and RTTweak), two smoothed mean variance (RTTVARstrong and RTTVARweak), two RTO estimators (RTOstrong and RTOweak), and a comprehensive RTO (RTOoverall).",
                        "vi": "Với mỗi đích đến, nút mạng duy trì: hai bộ ước lượng RTT trung bình trượt làm mịn (RTTstrong và RTTweak), hai phương sai làm mịn (RTTVARstrong và RTTVARweak), hai bộ ước lượng RTO (RTOstrong và RTOweak), cùng giá trị RTO tổng hợp (RTOoverall).",
                        "terms": ["RTTstrong", "RTTweak", "RTTVAR", "RTOoverall"]
                    },
                    {
                        "en": "The estimators are updated via Equations: RTTx = (1 - alpha)*RTTx + alpha*R; RTTVARx = (1 - beta)*RTTVARx + beta*|RTTx - R|; RTOx = RTTx + Kx*RTTVARx; RTOoverall = lambda_x*RTOx + (1 - lambda_x)*RTOoverall.",
                        "vi": "Các bộ ước lượng được cập nhật theo hệ công thức: RTTx = (1 - α)RTTx + αR; RTTVARx = (1 - β)RTTVARx + β|RTTx - R|; RTOx = RTTx + Kx·RTTVARx; RTOoverall = λx·RTOx + (1 - λx)RTOoverall.",
                        "terms": ["alpha", "beta", "Kx", "lambda_x"]
                    },
                    {
                        "en": "Recommended parameter values: alpha = 0.125, beta = 0.25, Kstrong = 4, Kweak = 1, lambda_strong = 0.5, and lambda_weak = 0.25. RTOinit is chosen with dithering from [RTOoverall, 1.5 * RTOoverall].",
                        "vi": "Các giá trị tham số khuyến nghị: α = 0.125, β = 0.25, Kstrong = 4, Kweak = 1, λstrong = 0.5, và λweak = 0.25. Giá trị RTOinit được chọn ngẫu nhiên với kỹ thuật rung dithering trong khoảng [RTOoverall, 1.5 · RTOoverall].",
                        "terms": ["parameters", "dithering", "RTOinit"]
                    }
                ]
            },
            {
                "id": "p1_cocoa_backoff",
                "sentences": [
                    {
                        "en": "B. Backoff policy: CoCoA+ introduces a variable backoff factor (VBF) to set the RTO for retransmissions: RTOnew = RTOprevious * VBF(RTOinit).",
                        "vi": "B. Chính sách thoái lui: CoCoA+ đưa ra hệ số thoái lui khả biến VBF (Variable Backoff Factor) để tính RTO cho các lần phát lại: RTOnew = RTOprevious · VBF(RTOinit).",
                        "terms": ["backoff policy", "VBF", "RTO"]
                    },
                    {
                        "en": "The VBF factor is set according to RTOinit: VBF = 3 if RTOinit < 1s; VBF = 1.5 if RTOinit > 3s; VBF = 2 if 1s <= RTOinit <= 3s.",
                        "vi": "Hệ số VBF được thiết lập dựa theo RTOinit: VBF = 3 nếu RTOinit < 1s (tránh phát lại dồn dập); VBF = 1.5 nếu RTOinit > 3s (tránh chờ quá lâu); VBF = 2 nếu RTOinit trong khoảng [1s, 3s] (tương đương BEB chuẩn).",
                        "terms": ["VBF", "BEB"]
                    },
                    {
                        "en": "C. Information aging: CoCoA+ introduces a mechanism to age RTO values when RTT updates are not received for a certain time, smoothly resetting RTOoverall toward default values.",
                        "vi": "C. Lão hóa thông tin: CoCoA+ đưa vào cơ chế làm lão hóa giá trị RTO khi không nhận được mẫu RTT mới trong một thời gian nhất định, kéo RTOoverall dần về mức mặc định để tránh lưu giữ trạng thái mạng lỗi thời.",
                        "terms": ["information aging", "RTOoverall"]
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
                        "terms": ["RTTVAR", "RTO", "RTT"]
                    },
                    {
                        "en": "Even when the network is stable, RTTs fluctuate naturally, so the probability of spurious retransmissions increases dramatically as RTOs get close to small RTTs.",
                        "vi": "Ngay cả khi mạng ổn định, RTT vẫn luôn có dao động tự nhiên (jitter), do đó xác suất phát sinh các lần truyền lại giả tạo (spurious retransmissions) tăng vọt khi RTO bám quá sát các giá trị RTT nhỏ.",
                        "terms": ["fluctuate", "spurious retransmissions"]
                    }
                ]
            },
            {
                "id": "p1_short_b_c",
                "sentences": [
                    {
                        "en": "B. Lack of weak estimator update: The rule to avoid weak estimator update after more than two retransmissions leaves RTOinit frozen during heavy bursty periods, failing to respond to congestion.",
                        "vi": "B. Thiếu cập nhật bộ ước lượng yếu: Quy tắc ngừng cập nhật bộ ước lượng yếu khi có trên 2 lần truyền lại khiến RTOinit bị đóng băng trong các đợt lưu lượng bùng phát nặng nề, hoàn toàn mất khả năng phản ứng với tắc nghẽn.",
                        "terms": ["weak estimator", "retransmissions", "congestion"]
                    },
                    {
                        "en": "C. Insufficient weak estimator weight: Setting Kweak to 1 severely limits the impact of weak RTO, preventing timely adaptation during sudden load changes.",
                        "vi": "C. Trọng số bộ ước lượng yếu quá nhỏ: Việc đặt Kweak = 1 làm suy yếu nghiêm trọng tác động của RTO yếu, ngăn cản sự thích ứng kịp thời khi tải mạng thay đổi đột ngột.",
                        "terms": ["Kweak", "weak RTO", "adaptation"]
                    }
                ]
            },
            {
                "id": "p1_short_d_e_f",
                "sentences": [
                    {
                        "en": "D. RTO peaks in response to RTT decrease: If RTT rapidly decreases, RTTVAR updates using |SRTT - R| which spikes, artificially causing RTO to surge upward precisely when the network improves.",
                        "vi": "D. RTO tăng vọt nghịch lý khi RTT giảm: Khi RTT sụt giảm nhanh, RTTVAR lấy giá trị tuyệt đối |SRTT - R| khiến phương sai bị đội lên đột ngột, làm RTO tăng vọt giả tạo đúng vào lúc mạng đang thông thoáng.",
                        "terms": ["RTO peaks", "RTT decrease", "RTTVAR"]
                    },
                    {
                        "en": "E. Double algorithms, double histories: Lack of aging for the weak estimator creates obsolete history spikes.",
                        "vi": "E. Tồn tại song song hai thuật toán và hai lịch sử: Việc thiếu cơ chế lão hóa cho bộ ước lượng yếu gây ra các đột biến RTOinit do vết tích lịch sử đã quá cũ.",
                        "terms": ["weak estimator", "aging"]
                    },
                    {
                        "en": "F. Excessive RTO growth: Cumulative back-off without upper capping can cause RTO to escalate to 200–300 seconds, causing unreasonable delays.",
                        "vi": "F. RTO phình to quá mức: Việc thoái lui dồn dập mà thiếu trần chặn trên trong các lần phát lại có thể khiến RTO bị thổi phồng lên 200–300 giây, gây độ trễ vô lý và tê liệt kết nối.",
                        "terms": ["RTO growth", "back-off", "delays"]
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
                        "terms": ["Transmission Counter", "TC", "Linux TCP", "RTO"]
                    },
                    {
                        "en": "The elective Transmission Counter (TC) option is set to 1 initially and incremented on each retransmission. The receiver echoes the TC in the ACK, eliminating RTT ambiguity and enabling instant detection of spurious retransmissions.",
                        "vi": "Tùy chọn Transmission Counter (TC) được gán bằng 1 ở lần phát đầu và tăng thêm 1 sau mỗi lần truyền lại. Phía nhận sẽ sao chép và gắn lại giá trị TC này trong bản tin ACK, loại bỏ hoàn toàn vấn nạn nhập nhằng RTT và cho phép phát hiện tức thì các lần truyền lại giả tạo.",
                        "terms": ["TC", "ACK", "RTT ambiguity", "spurious retransmissions"]
                    }
                ]
            },
            {
                "id": "p1_pcocoa_algo2_detail",
                "sentences": [
                    {
                        "en": "Algorithm 2 computes RTO using maximum mean deviance (mdev_max): SRTO = SRTT + max(k * RTTVAR, mdev_max).",
                        "vi": "Giải thuật 2 tính toán RTO sử dụng độ lệch trung bình cực đại (mdev_max): SRTO = SRTT + max(k · RTTVAR, mdev_max).",
                        "terms": ["Algorithm 2", "mdev_max", "SRTO", "SRTT", "RTTVAR"]
                    },
                    {
                        "en": "If a spurious retransmission is detected, k is raised to 6 (otherwise k = 4), which accelerates RTO growth to quickly prevent further unnecessary retransmissions.",
                        "vi": "Nếu phát hiện có truyền lại giả tạo, hệ số k được nâng lên 6 (bình thường k = 4), thúc đẩy RTO tăng nhanh hơn để lập tức ngăn chặn các lần phát lại thừa thãi kế tiếp.",
                        "terms": ["spurious retransmission", "k"]
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
                        "terms": ["Cooja", "ContikiOS", "IEEE 802.15.4", "6LoWPAN"]
                    },
                    {
                        "en": "Under periodic traffic with 8s period, pCoCoA achieves an average retransmission count drastically lower than CoCoA+ and 4-state-strong, while matching their high throughput.",
                        "vi": "Dưới lưu lượng định kỳ với chu kỳ 8s, pCoCoA đạt số lần truyền lại trung bình thấp hơn vượt trội so với CoCoA+ và 4-state-strong, trong khi vẫn bảo toàn mức thông lượng cao tương đương.",
                        "terms": ["periodic traffic", "retransmission count", "throughput"]
                    },
                    {
                        "en": "In bursty interfering traffic scenarios, CoCoA-E collapses due to improper gamma dampening, and CoCoA+ suffers from frozen RTOinit, while pCoCoA maintains flawless convergence and superior carried load.",
                        "vi": "Trong kịch bản lưu lượng bùng nổ gây nhiễu, CoCoA-E bị suy sụp do hệ số suy giảm gamma bất cập, CoCoA+ bị đóng băng RTOinit, trong khi pCoCoA duy trì sự hội tụ hoàn hảo và đạt tải thực truyền tải (carried load) vượt trội.",
                        "terms": ["bursty traffic", "CoCoA-E", "carried load"]
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
                        "terms": ["CoCoA+", "congestion control", "estimator"]
                    },
                    {
                        "en": "The proposed pCoCoA algorithm overcomes these shortcomings by introducing precise CON-ACK mapping via a Transmission Counter and bounding RTO with maximum mean deviance.",
                        "vi": "Thuật toán pCoCoA được đề xuất đã khắc phục triệt để các hạn chế này bằng cách đưa vào cơ chế ánh xạ chính xác CON-ACK qua Bộ đếm số lần truyền (TC) và chặn dưới RTO bằng độ lệch trung bình cực đại (mdev_max).",
                        "terms": ["pCoCoA", "CON-ACK mapping", "Transmission Counter", "mdev_max"]
                    },
                    {
                        "en": "Simulations confirmed that pCoCoA significantly reduces retransmissions while delivering high carried load across both steady and bursty network scenarios.",
                        "vi": "Các kết quả mô phỏng khẳng định pCoCoA giảm thiểu rõ rệt số lần truyền lại trong khi vẫn đảm bảo tải hữu ích (carried load) cao trong cả điều kiện mạng ổn định lẫn khi có lưu lượng bùng nổ.",
                        "terms": ["carried load", "retransmissions", "bursty"]
                    }
                ]
            }
        ]
    }
]

# Read paper 2 sections
p2_sections = [
    {
        "id": "p2_sec_abstract",
        "title": "Abstract",
        "title_vi": "Tóm tắt bài báo",
        "badge": "Tổng quan",
        "paragraphs": [
            {
                "id": "p2_abs_1",
                "sentences": [
                    {
                        "en": "The Constrained Application Protocol (CoAP) is a lightweight RESTful application layer protocol devised for the Internet of Things (IoT).",
                        "vi": "Giao thức Ứng dụng Bị ràng buộc (CoAP - Constrained Application Protocol) là một giao thức tầng ứng dụng kiến trúc RESTful siêu nhẹ được phát triển chuyên biệt cho Mạng lưới Vạn vật kết nối Internet (IoT).",
                        "terms": ["CoAP", "RESTful", "application layer", "IoT"]
                    },
                    {
                        "en": "Operating on top of UDP, CoAP must handle congestion control by itself.",
                        "vi": "Do hoạt động trên nền giao thức truyền vận UDP, CoAP bắt buộc phải tự đảm đương việc kiểm soát tắc nghẽn (congestion control).",
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
        "badge": "Bối cảnh nghiên cứu",
        "paragraphs": [
            {
                "id": "p2_intro_1",
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
                "id": "p2_intro_2",
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
        "id": "p2_sec_coap_details",
        "title": "II. DEFAULT COAP CONGESTION CONTROL",
        "title_vi": "II. ĐIỀU KHIỂN TẮC NGHẼN TRONG COAP MẶC ĐỊNH",
        "badge": "Tiêu chuẩn RFC 7252",
        "paragraphs": [
            {
                "id": "p2_cc_detail",
                "sentences": [
                    {
                        "en": "CoAP defines four message types: confirmable (CON), non-confirmable (NON), reset (RST), and acknowledgement (ACK).",
                        "vi": "CoAP định nghĩa 4 kiểu bản tin: cần xác nhận (CON - Confirmable), không cần xác nhận (NON - Non-confirmable), thiết lập lại (RST - Reset), và báo nhận (ACK - Acknowledgement).",
                        "terms": ["CON", "NON", "RST", "ACK"]
                    },
                    {
                        "en": "A restriction of outstanding interactions per destination to 1 (NSTART = 1) is enforced by default, operating under a stop-and-wait model.",
                        "vi": "Quy định giới hạn số lượng tương tác đang chờ xử lý tới mỗi đích chỉ bằng 1 (NSTART = 1) được áp dụng mặc định, vận hành theo mô hình dừng-và-chờ (stop-and-wait).",
                        "terms": ["NSTART", "stop-and-wait", "outstanding interactions"]
                    },
                    {
                        "en": "For the first transmission, RTO is picked randomly from [2, 3] s. If no ACK arrives before RTO expires, BEB doubles the RTO for up to 4 retransmissions before failure.",
                        "vi": "Ở lần truyền đầu tiên, RTO được chọn ngẫu nhiên trong khoảng [2, 3] giây. Nếu không nhận được ACK trước khi RTO hết hạn, thuật toán BEB sẽ nhân đôi RTO sau mỗi lần thử, tối đa 4 lần truyền lại trước khi tuyên bố thất bại.",
                        "terms": ["RTO", "ACK", "BEB", "retransmissions"]
                    },
                    {
                        "en": "If RTO underestimates RTT, spurious retransmissions overload the network; if RTO overestimates RTT, long idle recovery times unnecessarily delay communication.",
                        "vi": "Nếu RTO nhỏ hơn RTT thực tế, các lần truyền lại giả tạo sẽ làm quá tải mạng; ngược lại nếu RTO ước lượng quá lớn, khoảng thời gian nhàn rỗi (idle times) dài vô ích sẽ làm chậm trễ quá trình khôi phục truyền thông.",
                        "terms": ["spurious retransmissions", "idle recovery times", "RTT"]
                    }
                ]
            }
        ]
    },
    {
        "id": "p2_sec_cocoa_design",
        "title": "III. THE COCOA ADVANCED CONGESTION CONTROL",
        "title_vi": "III. THUẬT TOÁN ĐIỀU KHIỂN TẮC NGHẼN NÂNG CAO COCOA",
        "badge": "Trọng tâm bài báo",
        "paragraphs": [
            {
                "id": "p2_cocoa_pillars",
                "sentences": [
                    {
                        "en": "CoCoA combines adaptive RTO calculation, Variable Backoff Factor (VBF), and RTO aging.",
                        "vi": "CoCoA kết hợp ba cơ chế: tính toán RTO thích ứng, Hệ số Thoái lui Khả biến (VBF), và cơ chế Lão hóa RTO.",
                        "terms": ["adaptive RTO", "Variable Backoff Factor", "VBF", "RTO aging"]
                    },
                    {
                        "en": "CoCoA defines strong RTTs (from transactions completed without retransmissions) and weak RTTs (from transactions requiring up to two retransmissions).",
                        "vi": "CoCoA định nghĩa RTT mạnh (từ các giao dịch thành công ngay lần đầu không truyền lại) và RTT yếu (từ các giao dịch cần tối đa 2 lần truyền lại).",
                        "terms": ["strong RTTs", "weak RTTs", "retransmissions"]
                    },
                    {
                        "en": "RTO is updated via: RTOx = SRTTx + Kx * RTTVARx, with Kstrong = 4 and Kweak = 1. RTOoverall uses alpha = 0.5 for strong RTO and alpha = 0.25 for weak RTO.",
                        "vi": "RTO được cập nhật theo: RTOx = SRTTx + Kx · RTTVARx, với Kstrong = 4 và Kweak = 1. RTOoverall sử dụng trọng số α = 0.5 cho RTO mạnh và α = 0.25 cho RTO yếu.",
                        "terms": ["Kstrong", "Kweak", "RTOoverall", "SRTT", "RTTVAR"]
                    },
                    {
                        "en": "Variable Backoff Factor (VBF): VBF = 3 if initial RTO < 1s; VBF = 1.5 if initial RTO > 3s; VBF = 2 if 1s <= initial RTO <= 3s.",
                        "vi": "Hệ số Thoái lui Khả biến (VBF): VBF = 3 nếu RTO ban đầu < 1s (chặn đứng tắc nghẽn sớm); VBF = 1.5 nếu RTO ban đầu > 3s (tránh trễ quá dài); VBF = 2 nếu RTO trong khoảng [1s, 3s].",
                        "terms": ["VBF", "initial RTO"]
                    },
                    {
                        "en": "RTO aging: If RTO is not updated for 16 or 4 times current RTO (for small or large estimations respectively), it is smoothly converged toward the default baseline.",
                        "vi": "Lão hóa RTO: Nếu RTO không được cập nhật mẫu mới trong thời gian gấp 16 lần hoặc 4 lần RTO hiện tại (tương ứng với giá trị nhỏ hoặc lớn), nó sẽ được kéo mượt dần về giá trị mặc định ban đầu.",
                        "terms": ["RTO aging", "baseline"]
                    }
                ]
            }
        ]
    },
    {
        "id": "p2_sec_testbed_results",
        "title": "V-VI. TESTBEDS & EXPERIMENTAL RESULTS",
        "title_vi": "V-VI. MÔI TRƯỜNG THỰC NGHIỆM VÀ KẾT QUẢ TRÊN PHẦN CỨNG",
        "badge": "Thực nghiệm phần cứng",
        "paragraphs": [
            {
                "id": "p2_testbeds",
                "sentences": [
                    {
                        "en": "Experiments were performed on two real testbeds: (1) GPRS cellular modem testbed (Matrix MTX-65-ULP) with 15/40 kbit/s bandwidth; (2) FlockLab testbed with 30 TelosB motes running IEEE 802.15.4 and ContikiMAC with Radio Duty Cycling (RDC).",
                        "vi": "Các thực nghiệm được tiến hành trên hai testbed phần cứng thật: (1) Testbed mạng di động GPRS (modem Matrix MTX-65-ULP) băng thông 15/40 kbit/s; (2) Testbed FlockLab gồm 30 nút TelosB chạy chuẩn IEEE 802.15.4 và ContikiMAC với cơ chế Chu kỳ Làm việc Vô tuyến (RDC).",
                        "terms": ["GPRS", "FlockLab", "TelosB", "IEEE 802.15.4", "ContikiMAC", "RDC"]
                    },
                    {
                        "en": "In the GPRS testbed, CoCoA achieved the highest transaction throughput across all client counts (10 to 40 clients), outperforming default CoAP which failed to adjust to modem queue latency.",
                        "vi": "Trên testbed GPRS, CoCoA đạt thông lượng giao dịch cao nhất trong mọi mức quy mô client (từ 10 đến 40 client), vượt trội so với CoAP mặc định vốn không thể thích ứng với độ trễ hàng đợi của modem.",
                        "terms": ["GPRS", "throughput", "default CoAP", "latency"]
                    },
                    {
                        "en": "In burst traffic tests, CoCoA achieved the shortest Settling Time (time to complete 80% of burst requests), enabling quick relief of network congestion.",
                        "vi": "Trong các thử nghiệm lưu lượng bùng phát, CoCoA đạt Thời gian Lắng (Settling Time) ngắn nhất (thời gian để hoàn tất 80% yêu cầu bùng phát), giúp giải tỏa nhanh chóng tình trạng nghẽn mạng.",
                        "terms": ["Settling Time", "burst traffic"]
                    },
                    {
                        "en": "In multihop FlockLab, CoCoA achieved a high Jain's Fairness Index (FI = 0.74), closely matching default CoAP (0.75) and far outperforming TCP-based algorithms (Linux RTO: 0.55, Basic RTO: 0.51) which starved distant nodes.",
                        "vi": "Trên mạng đa chặng FlockLab, CoCoA đạt Chỉ số Công bằng Jain rất cao (FI = 0.74), tiệm cận CoAP mặc định (0.75) và vượt trội so với các giải thuật kiểu TCP (Linux RTO: 0.55, Basic RTO: 0.51) vốn bỏ đói các nút ở xa.",
                        "terms": ["Jain's Fairness Index", "FI", "Linux RTO", "Basic RTO"]
                    },
                    {
                        "en": "Memory footprint: CoCoA requires only 29 bytes of RAM per destination, negligible compared to the 2 KB needed for DTLS.",
                        "vi": "Dung lượng bộ nhớ: CoCoA chỉ tốn đúng 29 bytes RAM cho mỗi nút đích, một con số không đáng kể nếu so với 2 KB bộ nhớ cần dùng cho giao thức bảo mật DTLS.",
                        "terms": ["Memory footprint", "RAM", "DTLS"]
                    }
                ]
            }
        ]
    },
    {
        "id": "p2_sec_conclusion",
        "title": "VII. CONCLUSIONS",
        "title_vi": "VII. KẾT LUẬN",
        "badge": "Tổng kết",
        "paragraphs": [
            {
                "id": "p2_conc_1",
                "sentences": [
                    {
                        "en": "Default CoAP specifies a conservative and non-adaptive congestion control mechanism.",
                        "vi": "CoAP mặc định sử dụng cơ chế điều khiển tắc nghẽn mang tính bảo thủ và hoàn toàn thiếu khả năng thích ứng.",
                        "terms": ["CoAP", "congestion control"]
                    },
                    {
                        "en": "CoCoA provides a flexible, adaptive solution by combining adaptive RTO calculation, weak RTT estimation, VBF backoff, and RTO aging.",
                        "vi": "CoCoA mang lại một giải pháp linh hoạt và thích ứng cao bằng cách phối hợp tính toán RTO thích ứng, ước lượng RTT yếu, hệ số thoái lui VBF và cơ chế lão hóa RTO.",
                        "terms": ["CoCoA", "adaptive RTO", "weak RTT", "VBF", "aging"]
                    },
                    {
                        "en": "Extensive empirical evaluations demonstrate that CoCoA consistently outperforms default CoAP in throughput and settling time without sacrificing network fairness.",
                        "vi": "Các thực nghiệm rộng rãi trên phần cứng thật chứng minh CoCoA luôn vượt trội CoAP mặc định về thông lượng và thời gian lắng mà không hề làm suy giảm tính công bằng của mạng.",
                        "terms": ["throughput", "settling time", "fairness"]
                    }
                ]
            }
        ]
    }
]

paper1_full = {
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
    "sections": p1_sections
}

paper2_full = {
    "id": "paper2",
    "code": "CoAP_IoT",
    "title": "CoAP Congestion Control for the Internet of Things",
    "title_vi": "Điều khiển tắc nghẽn CoAP trong mạng lưới Vạn vật kết nối Internet (IoT)",
    "authors": "August Betzler, Carles Gomez, Ilker Demirkol, Josep Paradells",
    "affiliations": "i2CAT Foundation, Barcelona, Spain & Universitat Politècnica de Catalunya, Barcelona, Spain",
    "venue": "IEEE Communications Magazine, Volume 54, Issue 7, July 2016, Pages 154–160",
    "doi": "https://doi.org/10.1109/MCOM.2016.7514179",
    "course": "Kỹ thuật Truyền thông (Telecommunications & Computer Networks)",
    "summary_vi": "Bài báo kinh điển trên tạp chí IEEE Communications Magazine giới thiệu toàn diện giải thuật CoCoA (CoAP Simple Congestion Control/Advanced) chuẩn hóa bởi IETF CoRE WG. Bài báo phân tích cơ chế RTO thích ứng cho IoT (kết hợp RTO mạnh và RTO yếu), hệ số thoái lui khả biến VBF, cơ chế lão hóa thông tin, đồng thời kiểm nghiệm thực nghiệm trên 2 phần cứng thực tế: mạng di động GPRS và mạng cảm biến không dây đa chặng FlockLab (IEEE 802.15.4 / ContikiMAC RDC).",
    "sections": p2_sections
}

# Write datasets
with open(os.path.join(base_dir, "data_paper1.js"), "w", encoding="utf-8") as f:
    f.write("// Paper 1 Dataset: pCoCoA - Simone Bolettieri et al. (Ad Hoc Networks 2018)\n")
    f.write("const PAPER_1_DATA = " + json.dumps(paper1_full, ensure_ascii=False, indent=2) + ";\n")

with open(os.path.join(base_dir, "data_paper2.js"), "w", encoding="utf-8") as f:
    f.write("// Paper 2 Dataset: CoAP Congestion Control for IoT - August Betzler et al. (IEEE Comms Mag 2016)\n")
    f.write("const PAPER_2_DATA = " + json.dumps(paper2_full, ensure_ascii=False, indent=2) + ";\n")

print("Generated complete data_paper1.js and data_paper2.js successfully!")
