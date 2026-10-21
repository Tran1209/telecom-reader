// Paper 2 Dataset: CoAP Congestion Control for IoT - August Betzler et al. (IEEE Comms Mag 2016)
const PAPER_2_DATA = {
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
  "sections": [
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
              "en": "Yet, IoT scenarios exhibit significant resource constraints which pose new challenges on the design of congestion control mechanisms.",
              "vi": "Trong khi đó, các kịch bản triển khai IoT lại bộc lộ những ràng buộc tài nguyên vô cùng ngặt nghèo, đặt ra những thách thức mới cho việc thiết kế các cơ chế điều khiển tắc nghẽn hiệu quả.",
              "terms": [
                "IoT",
                "resource constraints",
                "congestion control"
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
              "en": "We conduct a comparative performance analysis of CoCoA and a variety of alternative algorithms including state-of-the-art mechanisms developed for TCP.",
              "vi": "Chúng tôi tiến hành một phân tích hiệu năng so sánh toàn diện giữa CoCoA và hàng loạt thuật toán đối chứng khác, bao gồm cả các cơ chế tiên tiến nhất được phát triển cho giao thức TCP.",
              "terms": [
                "performance analysis",
                "CoCoA",
                "TCP"
              ]
            },
            {
              "en": "The study is based on experiments carried out in real testbeds.",
              "vi": "Nghiên cứu này dựa trên các chuỗi thực nghiệm thực tế được triển khai trên các hệ thống thử nghiệm (testbed) phần cứng thật.",
              "terms": [
                "experiments",
                "testbeds"
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
      "badge": "Bối cảnh nghiên cứu",
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
              "en": "More than 25 billion things are expected to be connected over the Internet by the end of 2020.",
              "vi": "Dự kiến sẽ có hơn 25 tỷ thiết bị thông minh được kết nối qua mạng Internet vào cuối năm 2020.",
              "terms": [
                "Internet"
              ]
            },
            {
              "en": "A significant pillar for this development is the Constrained Application Protocol (CoAP), a lightweight RESTful protocol recently standardized by the Internet Engineering Task Force (IETF).",
              "vi": "Một trụ cột nền tảng cho sự phát triển này là Giao thức Ứng dụng Bị ràng buộc (CoAP), một giao thức kiểu RESTful siêu nhẹ được tổ chức IETF chuẩn hóa gần đây.",
              "terms": [
                "CoAP",
                "RESTful",
                "IETF"
              ]
            },
            {
              "en": "CoAP is designed as the main application-layer protocol to be used by IoT devices for IP-based, HTTP-like interactions [1].",
              "vi": "CoAP được thiết kế như giao thức tầng ứng dụng nòng cốt để các thiết bị IoT sử dụng cho các tương tác dựa trên nền IP tương tự như HTTP [1].",
              "terms": [
                "application-layer",
                "IoT devices",
                "HTTP"
              ]
            },
            {
              "en": "Typically, constrained devices, such as low-power wireless sensor nodes, are used for IoT communications.",
              "vi": "Thông thường, các thiết bị bị ràng buộc, ví dụ như các nút mạng cảm biến không dây công suất thấp, được sử dụng cho truyền thông IoT.",
              "terms": [
                "constrained devices",
                "wireless sensor nodes"
              ]
            },
            {
              "en": "These devices offer very limited processing and memory capacities, with low data rates and relatively high bit error rate (BER).",
              "vi": "Những thiết bị này có dung lượng bộ nhớ và năng lực xử lý rất eo hẹp, đồng thời đường truyền có tốc độ truyền dữ liệu thấp và tỷ lệ lỗi bit (BER) tương đối cao.",
              "terms": [
                "data rates",
                "bit error rate",
                "BER"
              ]
            }
          ]
        },
        {
          "id": "p2_intro_2",
          "sentences": [
            {
              "en": "One of the main problems to be handled when designing a new end-to-end communication paradigm is network congestion.",
              "vi": "Một trong những bài toán hóc búa nhất phải giải quyết khi thiết kế một mô hình truyền thông đầu-cuối (end-to-end) là hiện tượng tắc nghẽn mạng.",
              "terms": [
                "end-to-end",
                "network congestion"
              ]
            },
            {
              "en": "This phenomenon occurs when the traffic load offered to a network approaches the network capacity.",
              "vi": "Hiện tượng tắc nghẽn này xảy ra khi tải lưu lượng (offered load) đưa vào mạng tiệm cận với dung lượng chuyển tải tối đa của hệ thống mạng.",
              "terms": [
                "traffic load",
                "network capacity"
              ]
            },
            {
              "en": "In many traditional Internet applications, TCP provides end-to-end congestion control. However, CoAP operates over UDP to enable lightweight applications and must handle congestion by itself.",
              "vi": "Trong các ứng dụng Internet thông thường, TCP phụ trách kiểm soát tắc nghẽn đầu-cuối. Tuy nhiên, CoAP lại chạy trên nền UDP nhằm tối giản tài nguyên, buộc nó phải tự kiểm soát tắc nghẽn.",
              "terms": [
                "TCP",
                "UDP",
                "congestion control"
              ]
            },
            {
              "en": "In IoT communications, the traffic patterns are different from conventional networks: constrained devices often communicate periodically, or generate traffic bursts as a reaction to events (e.g. seismic alerts).",
              "vi": "Trong truyền thông IoT, mô hình lưu lượng rất khác biệt so với mạng thông thường: các thiết bị thường phát dữ liệu định kỳ, hoặc đột ngột tạo ra các đợt bùng nổ lưu lượng (traffic bursts) phản ứng trước một sự kiện (ví dụ: chuỗi cảnh báo khi cảm biến gia tốc phát hiện địa chấn).",
              "terms": [
                "traffic patterns",
                "traffic bursts",
                "seismic alerts"
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
      "badge": "Tiêu chuẩn RFC 7252",
      "paragraphs": [
        {
          "id": "p2_cc_detail",
          "sentences": [
            {
              "en": "CoAP defines four message types: confirmable (CON), non-confirmable (NON), reset (RST), and acknowledgement (ACK).",
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
              "en": "For the first transmission, RTO is picked randomly from [2, 3] s. If no ACK arrives before RTO expires, BEB doubles the RTO for up to 4 retransmissions before failure.",
              "vi": "Ở lần truyền đầu tiên, RTO được chọn ngẫu nhiên trong khoảng [2, 3] giây. Nếu không nhận được ACK trước khi RTO hết hạn, thuật toán BEB sẽ nhân đôi RTO sau mỗi lần thử, tối đa 4 lần truyền lại trước khi tuyên bố thất bại.",
              "terms": [
                "RTO",
                "ACK",
                "BEB",
                "retransmissions"
              ]
            },
            {
              "en": "If RTO underestimates RTT, spurious retransmissions overload the network; if RTO overestimates RTT, long idle recovery times unnecessarily delay communication.",
              "vi": "Nếu RTO nhỏ hơn RTT thực tế, các lần truyền lại giả tạo sẽ làm quá tải mạng; ngược lại nếu RTO ước lượng quá lớn, khoảng thời gian nhàn rỗi (idle times) dài vô ích sẽ làm chậm trễ quá trình khôi phục truyền thông.",
              "terms": [
                "spurious retransmissions",
                "idle recovery times",
                "RTT"
              ]
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
              "terms": [
                "adaptive RTO",
                "Variable Backoff Factor",
                "VBF",
                "RTO aging"
              ]
            },
            {
              "en": "CoCoA defines strong RTTs (from transactions completed without retransmissions) and weak RTTs (from transactions requiring up to two retransmissions).",
              "vi": "CoCoA định nghĩa RTT mạnh (từ các giao dịch thành công ngay lần đầu không truyền lại) và RTT yếu (từ các giao dịch cần tối đa 2 lần truyền lại).",
              "terms": [
                "strong RTTs",
                "weak RTTs",
                "retransmissions"
              ]
            },
            {
              "en": "RTO is updated via: RTOx = SRTTx + Kx * RTTVARx, with Kstrong = 4 and Kweak = 1. RTOoverall uses alpha = 0.5 for strong RTO and alpha = 0.25 for weak RTO.",
              "vi": "RTO được cập nhật theo: RTOx = SRTTx + Kx · RTTVARx, với Kstrong = 4 và Kweak = 1. RTOoverall sử dụng trọng số α = 0.5 cho RTO mạnh và α = 0.25 cho RTO yếu.",
              "terms": [
                "Kstrong",
                "Kweak",
                "RTOoverall",
                "SRTT",
                "RTTVAR"
              ]
            },
            {
              "en": "Variable Backoff Factor (VBF): VBF = 3 if initial RTO < 1s; VBF = 1.5 if initial RTO > 3s; VBF = 2 if 1s <= initial RTO <= 3s.",
              "vi": "Hệ số Thoái lui Khả biến (VBF): VBF = 3 nếu RTO ban đầu < 1s (chặn đứng tắc nghẽn sớm); VBF = 1.5 nếu RTO ban đầu > 3s (tránh trễ quá dài); VBF = 2 nếu RTO trong khoảng [1s, 3s].",
              "terms": [
                "VBF",
                "initial RTO"
              ]
            },
            {
              "en": "RTO aging: If RTO is not updated for 16 or 4 times current RTO (for small or large estimations respectively), it is smoothly converged toward the default baseline.",
              "vi": "Lão hóa RTO: Nếu RTO không được cập nhật mẫu mới trong thời gian gấp 16 lần hoặc 4 lần RTO hiện tại (tương ứng với giá trị nhỏ hoặc lớn), nó sẽ được kéo mượt dần về giá trị mặc định ban đầu.",
              "terms": [
                "RTO aging",
                "baseline"
              ]
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
            },
            {
              "en": "In burst traffic tests, CoCoA achieved the shortest Settling Time (time to complete 80% of burst requests), enabling quick relief of network congestion.",
              "vi": "Trong các thử nghiệm lưu lượng bùng phát, CoCoA đạt Thời gian Lắng (Settling Time) ngắn nhất (thời gian để hoàn tất 80% yêu cầu bùng phát), giúp giải tỏa nhanh chóng tình trạng nghẽn mạng.",
              "terms": [
                "Settling Time",
                "burst traffic"
              ]
            },
            {
              "en": "In multihop FlockLab, CoCoA achieved a high Jain's Fairness Index (FI = 0.74), closely matching default CoAP (0.75) and far outperforming TCP-based algorithms (Linux RTO: 0.55, Basic RTO: 0.51) which starved distant nodes.",
              "vi": "Trên mạng đa chặng FlockLab, CoCoA đạt Chỉ số Công bằng Jain rất cao (FI = 0.74), tiệm cận CoAP mặc định (0.75) và vượt trội so với các giải thuật kiểu TCP (Linux RTO: 0.55, Basic RTO: 0.51) vốn bỏ đói các nút ở xa.",
              "terms": [
                "Jain's Fairness Index",
                "FI",
                "Linux RTO",
                "Basic RTO"
              ]
            },
            {
              "en": "Memory footprint: CoCoA requires only 29 bytes of RAM per destination, negligible compared to the 2 KB needed for DTLS.",
              "vi": "Dung lượng bộ nhớ: CoCoA chỉ tốn đúng 29 bytes RAM cho mỗi nút đích, một con số không đáng kể nếu so với 2 KB bộ nhớ cần dùng cho giao thức bảo mật DTLS.",
              "terms": [
                "Memory footprint",
                "RAM",
                "DTLS"
              ]
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
              "terms": [
                "CoAP",
                "congestion control"
              ]
            },
            {
              "en": "CoCoA provides a flexible, adaptive solution by combining adaptive RTO calculation, weak RTT estimation, VBF backoff, and RTO aging.",
              "vi": "CoCoA mang lại một giải pháp linh hoạt và thích ứng cao bằng cách phối hợp tính toán RTO thích ứng, ước lượng RTT yếu, hệ số thoái lui VBF và cơ chế lão hóa RTO.",
              "terms": [
                "CoCoA",
                "adaptive RTO",
                "weak RTT",
                "VBF",
                "aging"
              ]
            },
            {
              "en": "Extensive empirical evaluations demonstrate that CoCoA consistently outperforms default CoAP in throughput and settling time without sacrificing network fairness.",
              "vi": "Các thực nghiệm rộng rãi trên phần cứng thật chứng minh CoCoA luôn vượt trội CoAP mặc định về thông lượng và thời gian lắng mà không hề làm suy giảm tính công bằng của mạng.",
              "terms": [
                "throughput",
                "settling time",
                "fairness"
              ]
            }
          ]
        }
      ]
    }
  ]
};
