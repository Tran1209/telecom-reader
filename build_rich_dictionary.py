# -*- coding: utf-8 -*-
"""
Generate comprehensive dictionary.js for Telecom Reader
Includes:
- Specialized Telecommunications & Computer Networking Dictionary (100+ terms)
- General Academic & Technical English Dictionary (200+ terms)
- Morphological lemmatization map & rules
"""
import os
import json

base_dir = r"C:\Users\nam\.gemini\antigravity\scratch\telecom-reader"

dict_data = {
    # SPECIALIZED TELECOMMUNICATIONS TERMS
    "coap": {
        "word": "CoAP (Constrained Application Protocol)",
        "ipa": "/koʊ.æp/",
        "pos": "Noun (Thuật ngữ chuyên ngành)",
        "telecom_def": "Giao thức Ứng dụng Bị ràng buộc (RFC 7252): Giao thức tầng ứng dụng kiến trúc RESTful chuyên biệt cho thiết bị IoT có tài nguyên hạn chế. Hoạt động trên nền UDP, kích thước tiêu đề cố định chỉ 4 byte, hỗ trợ 4 kiểu bản tin (CON, NON, ACK, RST) và cơ chế kiểm soát tắc nghẽn tích hợp.",
        "general_def": "Giao thức truyền thông cho Internet of Things.",
        "example": "CoAP allows constrained sensors to exchange HTTP-like RESTful messages over UDP."
    },
    "cocoa": {
        "word": "CoCoA (CoAP Simple Congestion Control/Advanced)",
        "ipa": "/koʊˈkoʊ.ə/",
        "pos": "Noun (Thuật ngữ chuyên ngành)",
        "telecom_def": "Thuật toán điều khiển tắc nghẽn nâng cao cho CoAP (IETF CoRE WG): Tính toán RTO thích ứng dựa trên mẫu RTT mạnh và RTT yếu, kết hợp hệ số thoái lui khả biến VBF và cơ chế lão hóa RTO.",
        "general_def": "Thuật toán kiểm soát tắc nghẽn thông minh cho mạng IoT.",
        "example": "CoCoA improves throughput by dynamically adapting the retransmission timeout."
    },
    "pcocoa": {
        "word": "pCoCoA (precise Congestion Control for CoAP)",
        "ipa": "/piː.koʊˈkoʊ.ə/",
        "pos": "Noun (Thuật ngữ chuyên ngành)",
        "telecom_def": "Thuật toán điều khiển tắc nghẽn chính xác cho CoAP (Bolettieri et al., 2018): Loại bỏ bộ ước lượng yếu, bổ sung tùy chọn Bộ đếm số lần truyền (TC - Transmission Counter) để ánh xạ chính xác CON-ACK, phát hiện truyền lại giả tạo và chặn dưới RTO bằng độ lệch mdev_max theo Linux TCP.",
        "general_def": "Giải thuật nâng cấp của CoCoA+ giúp triệt tiêu truyền lại thừa.",
        "example": "pCoCoA eliminates spurious retransmissions by tracking individual attempt counters."
    },
    "congestion": {
        "word": "congestion",
        "ipa": "/kənˈdʒes.tʃən/",
        "pos": "Noun",
        "telecom_def": "Hiện tượng tắc nghẽn mạng: Xảy ra khi lưu lượng nạp vào mạng vượt quá dung lượng truyền dẫn của kênh hoặc dung lượng bộ đệm của nút mạng, gây ra hàng đợi trễ dài, tràn bộ đệm (buffer overflow) và mất gói tin hàng loạt.",
        "general_def": "Sự ùn ứ, ách tắc.",
        "example": "Network congestion triggers massive packet drops in intermediate forwarding nodes."
    },
    "retransmission": {
        "word": "retransmission",
        "ipa": "/ˌriː.trænzˈmɪʃ.ən/",
        "pos": "Noun",
        "telecom_def": "Quá trình truyền lại: Nút phát gửi lại một bản tin đã gửi trước đó khi không nhận được gói tin báo nhận (ACK) trước khi bộ đếm thời gian RTO hết hạn.",
        "general_def": "Sự phát lại, truyền lại.",
        "example": "In CoAP, a CON request is retransmitted up to 4 times using exponential backoff."
    },
    "spurious": {
        "word": "spurious (spurious retransmission)",
        "ipa": "/ˈspjʊə.ri.əs/",
        "pos": "Adjective",
        "telecom_def": "Giả tạo / nhầm lẫn: 'Truyền lại giả tạo' xảy ra khi nút phát gửi lại gói tin vì RTO hết hạn quá sớm (premature timeout), trong khi bản tin gốc không hề bị mất mà chỉ bị trễ trong mạng. Điều này lãng phí băng thông vô tuyến và năng lượng pin.",
        "general_def": "Sai lệch, giả mạo, không có căn cứ xác thực.",
        "example": "A premature timeout causes spurious retransmissions and generates duplicate ACKs."
    },
    "throughput": {
        "word": "throughput",
        "ipa": "/ˈθruː.pʊt/",
        "pos": "Noun",
        "telecom_def": "Thông lượng mạng: Lượng dữ liệu hữu ích được truyền nhận thành công từ nút nguồn tới nút đích trên một đơn vị thời gian (bit/s, packet/s hoặc transaction/s).",
        "general_def": "Năng suất đầu ra trong một khoảng thời gian.",
        "example": "The carried load represents the effective application throughput delivered to the server."
    },
    "rto": {
        "word": "RTO (Retransmission Timeout)",
        "ipa": "/ˌɑːr.tiːˈoʊ/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thời gian chờ truyền lại: Khoảng thời gian tối đa mà phía gửi chờ đợi gói tin ACK từ phía nhận trước khi kết luận gói tin bị thất lạc và phát lại. CoAP mặc định đặt RTO ban đầu ngẫu nhiên từ 2s đến 3s.",
        "general_def": "Thời hạn chờ để thử lại.",
        "example": "The RTO must be larger than the round-trip time to avoid premature timeouts."
    },
    "rtt": {
        "word": "RTT (Round-Trip Time)",
        "ipa": "/ˌɑːr.tiːˈtiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thời gian truyền khứ hồi (trễ vòng lặp): Tổng thời gian cần thiết để một bản tin truyền từ phía gửi đến phía nhận cộng với thời gian bản tin báo nhận (ACK) quay ngược trở lại phía gửi.",
        "general_def": "Thời gian đi và về một lượt trọn vẹn.",
        "example": "In multihop wireless networks, RTT varies with hop count and channel quality."
    },
    "srtt": {
        "word": "SRTT (Smoothed Round-Trip Time)",
        "ipa": "/ˌes.ɑːr.tiːˈtiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thời gian trễ khứ hồi làm mịn: Giá trị RTT trung bình trượt được tính bằng bộ lọc trung bình trượt mũ (EWMA - Exponentially Weighted Moving Average), lọc bỏ các xung nhiễu đột ngột.",
        "general_def": "Giá trị trễ trung bình làm mượt.",
        "example": "SRTT = (1 - alpha) * SRTT + alpha * RTT_sample."
    },
    "rttvar": {
        "word": "RTTVAR (Round-Trip Time Variation)",
        "ipa": "/ˌɑːr.tiː.tiːˈvær/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Phương sai / Độ biến thiên RTT: Đại lượng đo lường độ phân tán dao động của các mẫu RTT so với SRTT, đóng vai trò tạo biên độ an toàn cho RTO.",
        "general_def": "Độ biến động của trễ khứ hồi.",
        "example": "When RTTVAR vanishes, RTO drops dangerously close to SRTT."
    },
    "mdev": {
        "word": "mdev_max (Maximum Mean Deviance)",
        "ipa": "/emˈdev mæks/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Độ lệch trung bình cực đại: Biến số mượn từ Linux TCP dùng trong pCoCoA để làm chặn dưới cho RTO, ngăn không cho RTO sụt giảm quá sát RTT khi RTTVAR triệt tiêu.",
        "general_def": "Độ lệch cực đại trung bình.",
        "example": "pCoCoA clamps SRTO using mdev_max to resist sudden jitter."
    },
    "backoff": {
        "word": "backoff",
        "ipa": "/ˈbæk.ɒf/",
        "pos": "Noun / Verb",
        "telecom_def": "Cơ chế thoái lui: Biện pháp kéo dài thời gian chờ giữa các lần truyền lại nhằm giảm áp lực tải tức thời và cho phép mạng hồi phục sau xung đột hoặc tắc nghẽn.",
        "general_def": "Sự lùi lại, thoái lui.",
        "example": "Exponential backoff doubles the retransmission interval upon repeated failures."
    },
    "vbf": {
        "word": "VBF (Variable Backoff Factor)",
        "ipa": "/ˌviː.biːˈef/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Hệ số thoái lui khả biến: Quy tắc thoái lui của CoCoA điều chỉnh hệ số nhân tùy vào RTO ban đầu (VBF=3 nếu RTO<1s; VBF=1.5 nếu RTO>3s; VBF=2 nếu 1s<=RTO<=3s).",
        "general_def": "Hệ số lùi khả biến theo tham số ban đầu.",
        "example": "VBF uses a factor of 3 for fast timeout scaling when RTO is extremely small."
    },
    "beb": {
        "word": "BEB (Binary Exponential Backoff)",
        "ipa": "/biː.iːˈbiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Thoái lui hàm mũ nhị phân: Thuật toán nhân đôi thời gian chờ sau mỗi lần truyền lỗi (hệ số lũy thừa cơ số 2), chuẩn mặc định trong Ethernet và CoAP RFC 7252.",
        "general_def": "Thoái lui tăng gấp đôi lũy tiến.",
        "example": "Default CoAP applies BEB regardless of current channel conditions."
    },
    "dithering": {
        "word": "dithering",
        "ipa": "/ˈdɪð.ər.ɪŋ/",
        "pos": "Noun",
        "telecom_def": "Kỹ thuật rung ngẫu nhiên (Dithering): Chọn giá trị RTO ngẫu nhiên trong khoảng [RTO, 1.5 * RTO] để phân tán thời gian hết hạn của các nút mạng, tránh hiện tượng nhiều nút cùng đồng loạt phát lại vào một thời điểm gây xung đột.",
        "general_def": "Dao động vi mô ngẫu nhiên.",
        "example": "RTO dithering mitigates synchronized packet bursts among competing clients."
    },
    "piggybacked": {
        "word": "piggybacked (piggyback)",
        "ipa": "/ˈpɪɡ.i.bækt/",
        "pos": "Adjective / Verb",
        "telecom_def": "Cõng kèm: Phương thức lồng ghép gói tin phản hồi của tầng ứng dụng (response payload) vào trực tiếp bên trong bản tin xác nhận ACK ở tầng truyền vận/CoAP để tiết kiệm băng thông.",
        "general_def": "Cõng trên lưng, đính kèm.",
        "example": "The CoAP server sends a piggybacked ACK carrying sensor telemetry."
    },
    "bursty": {
        "word": "bursty (bursty traffic)",
        "ipa": "/ˈbɜː.sti/",
        "pos": "Adjective",
        "telecom_def": "Lưu lượng bùng phát / dạng xung: Đặc tính dữ liệu xuất hiện dồn dập với số lượng lớn trong thời gian rất ngắn (như khi cảm biến phát hiện động đất), xen kẽ giữa các khoảng nghỉ dài.",
        "general_def": "Bùng nổ, xuất hiện dữ dội từng đợt.",
        "example": "Bursty traffic surges rapidly saturate node buffers in wireless mesh networks."
    },
    "greedy": {
        "word": "greedy (greedy traffic)",
        "ipa": "/ˈɡriː.di/",
        "pos": "Adjective",
        "telecom_def": "Lưu lượng tham lam: Nguồn phát dữ liệu bơm liên tục vào mạng ở tốc độ tối đa mà không áp dụng cơ chế điều khiển tắc nghẽn, làm cạn kiệt tài nguyên của các luồng khác.",
        "general_def": "Tham lam, chiếm dụng tối đa.",
        "example": "Competing greedy traffic degrades the packet delivery ratio of CoAP clients."
    },
    "lln": {
        "word": "LLN (Low Power and Lossy Networks)",
        "ipa": "/el.elˈen/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Mạng năng lượng thấp và tổn thất cao: Mạng gồm các thiết bị cảm biến hạn chế tài nguyên kết nối qua các liên kết vô tuyến dễ suy hao, nhiễu và mất gói (RFC 6550).",
        "general_def": "Mạng truyền thông của thiết bị năng lượng yếu và dễ suy hao.",
        "example": "RPL is the standard routing protocol designed specifically for LLNs."
    },
    "buffer": {
        "word": "buffer (queue buffer)",
        "ipa": "/ˈbʌf.ər/",
        "pos": "Noun",
        "telecom_def": "Bộ đệm hàng đợi: Bộ nhớ tạm trong card mạng hoặc vi điều khiển dùng để lưu trữ các gói tin đang chờ truyền lên môi trường hoặc chờ xử lý ở các tầng trên.",
        "general_def": "Vùng đệm, bộ phận giảm xóc.",
        "example": "Small 8-packet MAC buffers easily overflow during heavy traffic bursts."
    },
    "overflow": {
        "word": "buffer overflow",
        "ipa": "/ˌoʊ.vərˈfloʊ/",
        "pos": "Noun / Verb",
        "telecom_def": "Tràn bộ đệm: Tình trạng hàng đợi bị đầy hoàn toàn, khiến tất cả các gói tin đến sau bị hủy bỏ (drop), là nguyên nhân cốt lõi dẫn đến mất gói trong mạng tắc nghẽn.",
        "general_def": "Tràn ra ngoài do vượt sức chứa.",
        "example": "Buffer overflows at the border router force massive retransmissions."
    },
    "lossy": {
        "word": "lossy (lossy network / channel)",
        "ipa": "/ˈlɒs.i/",
        "pos": "Adjective",
        "telecom_def": "Tổn hao / dễ mất mát: Môi trường truyền dẫn vô tuyến có tỷ lệ lỗi kênh và suy hao tín hiệu cao làm cho các gói tin thường xuyên bị hỏng hoặc mất mát.",
        "general_def": "Có hao hụt, mất mát.",
        "example": "Wireless sensor links are inherently lossy due to multipath fading and interference."
    },
    "constrained": {
        "word": "constrained (constrained device)",
        "ipa": "/kənˈstreɪnd/",
        "pos": "Adjective",
        "telecom_def": "Bị ràng buộc tài nguyên: Thiết bị nhúng có bộ nhớ RAM siêu nhỏ (vài kB), Flash hạn chế (vài chục kB), CPU xung nhịp thấp và chạy bằng pin (RFC 7228).",
        "general_def": "Bị gò bó, chịu giới hạn ngặt nghèo.",
        "example": "Constrained microcontrollers cannot support heavyweight TCP/IP stacks."
    },
    "fairness": {
        "word": "fairness (Jain's Fairness Index)",
        "ipa": "/ˈfeə.nəs/",
        "pos": "Noun",
        "telecom_def": "Tính công bằng mạng: Tiêu chí đánh giá mức độ bình đẳng trong việc chia sẻ băng thông kênh truyền giữa các nút mạng khác nhau (chỉ số Jain từ 0 đến 1, 1 là hoàn toàn bình đẳng).",
        "general_def": "Sự công bằng, vô tư.",
        "example": "CoCoA achieves a fairness index of 0.74, preventing starvation of distant nodes."
    },
    "latency": {
        "word": "latency",
        "ipa": "/ˈleɪ.tən.si/",
        "pos": "Noun",
        "telecom_def": "Độ trễ truyền dẫn: Khoảng thời gian từ lúc một gói tin được phát đi từ nguồn đến lúc nó được nhận trọn vẹn tại đích đến.",
        "general_def": "Thời gian chậm trễ, thời gian ủ bệnh.",
        "example": "Cellular GPRS links introduce high queue latency under heavy uplink loads."
    },
    "jitter": {
        "word": "jitter",
        "ipa": "/ˈdʒɪt.ər/",
        "pos": "Noun",
        "telecom_def": "Độ biến động trễ (Jitter): Sự dao động hoặc chênh lệch về thời gian trễ giữa các gói tin liên tiếp nhau trong một luồng truyền thông.",
        "general_def": "Sự run rẩy, chập chờn.",
        "example": "Radio duty cycling produces severe RTT jitter in low-power wireless mesh nodes."
    },
    "aging": {
        "word": "aging (information aging)",
        "ipa": "/ˈeɪ.dʒɪŋ/",
        "pos": "Noun",
        "telecom_def": "Cơ chế lão hóa: Quy trình làm suy giảm độ tin cậy của thông tin ước lượng mạng theo thời gian và kéo giá trị RTO về mặc định khi lâu không có gói tin trao đổi.",
        "general_def": "Sự già đi, sự lão hóa.",
        "example": "RTO aging prevents stale timer values from degrading newly initiated connections."
    },
    "deviance": {
        "word": "deviance",
        "ipa": "/ˈdiː.vi.əns/",
        "pos": "Noun",
        "telecom_def": "Độ lệch trung bình: Độ chênh lệch giữa giá trị đo thực tế và giá trị trung bình kỳ vọng, dùng trong thuật toán lọc trễ của Linux TCP.",
        "general_def": "Sự sai khác, độ lệch chuẩn.",
        "example": "The maximum mean deviance bounds the RTO against rapid downward drift."
    },
    "estimator": {
        "word": "estimator",
        "ipa": "/ˈes.tɪ.meɪ.tər/",
        "pos": "Noun",
        "telecom_def": "Bộ ước lượng: Hàm thuật toán thống kê (như EWMA) dùng để dự đoán trạng thái tương lai của biến số mạng (như SRTT, RTTVAR, RTO) từ chuỗi mẫu đo trong quá khứ.",
        "general_def": "Người ước lượng, công thức định giá.",
        "example": "The weak estimator in CoCoA+ computes RTT from transactions needing retransmission."
    },
    "settling": {
        "word": "settling time",
        "ipa": "/ˈset.lɪŋ taɪm/",
        "pos": "Noun",
        "telecom_def": "Thời gian lắng / thời gian hồi phục: Khoảng thời gian cần thiết để hệ thống xử lý hoàn tất ít nhất 80% lưu lượng bùng phát và đưa mạng trở về trạng thái ổn định ban đầu.",
        "general_def": "Thời gian ổn định, lắng dịu.",
        "example": "CoCoA achieves significantly shorter settling times during sudden sensor alerts."
    },
    "rdc": {
        "word": "RDC (Radio Duty Cycling)",
        "ipa": "/ˌɑːr.diːˈsiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Chu kỳ hoạt động thu phát vô tuyến: Kỹ thuật tiết kiệm năng lượng bằng cách cho bộ thu phát sóng (radio) ngủ phần lớn thời gian và chỉ bật định kỳ để nghe kênh truyền.",
        "general_def": "Tỷ lệ thời gian hoạt động trên chu kỳ.",
        "example": "ContikiMAC relies on RDC to achieve multi-year battery life in sensor motes."
    },
    "acknowledgement": {
        "word": "acknowledgement (ACK)",
        "ipa": "/əkˈnɒl.ɪdʒ.mənt/",
        "pos": "Noun",
        "telecom_def": "Bản tin báo nhận (ACK): Gói tin được bên nhận gửi về bên gửi để xác nhận một bản tin cụ thể đã được nhận trọn vẹn và chính xác.",
        "general_def": "Sự công nhận, lời xác nhận.",
        "example": "The client awaits a CoAP ACK to confirm reliable delivery of its CON request."
    },
    "stop-and-wait": {
        "word": "stop-and-wait",
        "ipa": "/ˌstɒp.əndˈweɪt/",
        "pos": "Adjective / Noun",
        "telecom_def": "Mô hình Dừng và Chờ: Giao thức truyền tin trong đó nút phát chỉ gửi đúng 1 gói tin và phải dừng lại chờ nhận được ACK rồi mới được phép phát gói tin tiếp theo (NSTART=1).",
        "general_def": "Làm từng bước, chờ xong mới làm tiếp.",
        "example": "CoAP default enforces NSTART=1, behaving strictly as a stop-and-wait protocol."
    },
    "multihop": {
        "word": "multihop",
        "ipa": "/ˈmʌl.ti.hɒp/",
        "pos": "Adjective",
        "telecom_def": "Đa chặng: Hình thức mạng trong đó gói tin phải được chuyển tiếp qua nhiều nút trung gian (relay/router) trước khi tới đích.",
        "general_def": "Trải qua nhiều chặng đường.",
        "example": "Multihop paths accumulate queuing delays and suffer higher packet loss probability."
    },
    "collision": {
        "word": "collision",
        "ipa": "/kəˈlɪʒ.ən/",
        "pos": "Noun",
        "telecom_def": "Va chạm / xung đột đường truyền: Hiện tượng xảy ra khi hai nút mạng cùng phát sóng vô tuyến trên cùng một tần số tại cùng một thời điểm, làm hỏng dữ liệu của nhau.",
        "general_def": "Sự va chạm, đâm nhau.",
        "example": "Wireless collisions in dense IoT deployments cause severe channel degradation."
    },
    "payload": {
        "word": "payload",
        "ipa": "/ˈpeɪ.ləʊd/",
        "pos": "Noun",
        "telecom_def": "Tải trọng hữu ích: Dữ liệu thực sự của tầng ứng dụng được chứa bên trong gói tin, không bao gồm các trường tiêu đề giao thức.",
        "general_def": "Khối lượng hàng hóa chuyên chở.",
        "example": "The sensor reading of 95 bytes forms the application payload of the CoAP frame."
    },
    "dampening": {
        "word": "dampening",
        "ipa": "/ˈdæm.pən.ɪŋ/",
        "pos": "Noun / Verb",
        "telecom_def": "Giảm xóc / suy giảm biên độ: Kỹ thuật kìm hãm sự thay đổi đột ngột của các thông số thích ứng để chống lại các dao động nhiễu ngắn hạn.",
        "general_def": "Sự làm dịu đi, triệt tiêu dao động.",
        "example": "Improper gamma dampening in CoCoA-E causes sluggish reaction during congestion."
    },
    "variance": {
        "word": "variance",
        "ipa": "/ˈveə.ri.əns/",
        "pos": "Noun",
        "telecom_def": "Phương sai: Đại lượng thống kê đo lường độ phân tán dao động của các giá trị RTT xung quanh giá trị trung bình trượt SRTT.",
        "general_def": "Sự biến thiên, sai số phân tán.",
        "example": "A vanishing variance leads to dangerous underestimation of the RTO timer."
    },
    "border": {
        "word": "border router",
        "ipa": "/ˈbɔː.dər ˈruː.tər/",
        "pos": "Noun",
        "telecom_def": "Bộ định tuyến biên: Nút mạng đóng vai trò cổng nối (gateway) kết nối mạng cảm biến LLN 6LoWPAN với mạng Internet IPv6 diện rộng.",
        "general_def": "Thiết bị ở đường biên giới.",
        "example": "The 6LoWPAN RPL border router bridges sensor packets to the external Internet."
    },
    "piggyback": {
        "word": "piggyback",
        "ipa": "/ˈpɪɡ.i.bæk/",
        "pos": "Verb / Noun",
        "telecom_def": "Cõng kèm: Đính kèm dữ liệu trả lời của ứng dụng trực tiếp vào trong gói tin xác nhận ACK để tiết kiệm băng thông.",
        "general_def": "Cõng trên lưng.",
        "example": "The server piggybacks the reply data onto the CoAP ACK frame."
    },
    "dither": {
        "word": "dither",
        "ipa": "/ˈdɪð.ər/",
        "pos": "Verb / Noun",
        "telecom_def": "Rung ngẫu nhiên: Biến đổi giá trị RTO ngẫu nhiên trong một dải hẹp nhằm ngăn các nút mạng phát lại cùng thời điểm.",
        "general_def": "Dao động ngẫu nhiên.",
        "example": "Dithering prevents synchronized retransmission collisions across competing nodes."
    },
    "karn": {
        "word": "Karn's algorithm",
        "ipa": "/kɑːrnz ˈæl.ɡə.rɪ.ðəm/",
        "pos": "Noun (Thuật ngữ chuyên ngành)",
        "telecom_def": "Giải thuật Karn: Nguyên tắc kinh điển trong TCP quy định không lấy mẫu RTT cho các gói tin phải truyền lại để tránh vấn nạn nhập nhằng RTT.",
        "general_def": "Thuật toán giải quyết nhập nhằng trễ.",
        "example": "Karn's algorithm discards RTT samples from retransmitted segments."
    },
    "ambiguity": {
        "word": "RTT ambiguity",
        "ipa": "/ˌæm.bɪˈɡjuː.ə.ti/",
        "pos": "Noun",
        "telecom_def": "Sự nhập nhằng RTT: Vấn đề nút phát không thể xác định bản tin ACK nhận được là phản hồi của lần phát đầu tiên hay của lần phát lại sau đó.",
        "general_def": "Sự mơ hồ, không rõ ràng.",
        "example": "The Transmission Counter option completely resolves the RTT ambiguity problem."
    },
    "offered": {
        "word": "offered load",
        "ipa": "/ˈɒf.əd ləʊd/",
        "pos": "Noun",
        "telecom_def": "Tải cung cấp: Tổng lượng lưu lượng dữ liệu do ứng dụng sinh ra và đẩy vào mạng lưới để yêu cầu truyền dẫn.",
        "general_def": "Tải trọng được đưa ra.",
        "example": "When the nominal offered load exceeds network capacity, congestion begins."
    },
    "carried": {
        "word": "carried load",
        "ipa": "/ˈkær.id ləʊd/",
        "pos": "Noun",
        "telecom_def": "Tải truyền tải thành công / Tải hữu ích: Lượng lưu lượng dữ liệu thực tế được chuyển giao thành công tới phía nhận.",
        "general_def": "Tải trọng thực tế mang được.",
        "example": "pCoCoA achieves a high carried load while cutting down unnecessary transmissions."
    },
    "nominal": {
        "word": "nominal offered load",
        "ipa": "/ˈnɒm.ɪ.nəl ˈɒf.əd ləʊd/",
        "pos": "Noun",
        "telecom_def": "Tải cung cấp danh định: Tải lưu lượng lý thuyết được tạo ra bởi ứng dụng trước khi bị gạn lọc hoặc chặn lại bởi bộ đệm tầng mạng.",
        "general_def": "Tải trọng danh nghĩa trên lý thuyết.",
        "example": "At a nominal offered load above 380 B/s, the network enters saturation."
    },
    "6lowpan": {
        "word": "6LoWPAN",
        "ipa": "/sɪks.loʊˈpæn/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "IPv6 over Low-Power Wireless Personal Area Networks (RFC 4944): Giao thức nén tiêu đề và phân mảnh gói tin cho phép chạy IPv6 trên các liên kết vô tuyến năng lượng thấp IEEE 802.15.4.",
        "general_def": "Chuẩn kết nối IPv6 cho mạng cảm biến vô tuyến cá nhân.",
        "example": "6LoWPAN enables direct IP addressability for tiny sensor devices."
    },
    "rpl": {
        "word": "RPL (Routing Protocol for LLNs)",
        "ipa": "/ˈrɪp.əl/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Giao thức định tuyến cho mạng năng lượng thấp và tổn hao (RFC 6550): Xây dựng cấu trúc đồ thị có hướng không chu trình (DODAG) hướng về nút biên (root).",
        "general_def": "Giao thức định tuyến dạng cây cho IoT.",
        "example": "RPL organizes the 6x6 sensor nodes into a tree rooted at the border router."
    },
    "duty": {
        "word": "duty cycle",
        "ipa": "/ˈdjuː.ti ˈsaɪ.kəl/",
        "pos": "Noun",
        "telecom_def": "Chu kỳ nhiệm vụ / Chu kỳ làm việc: Tỷ lệ phần trăm thời gian một thiết bị hoặc sóng vô tuyến hoạt động ở trạng thái tích cực (Active) so với tổng chu kỳ.",
        "general_def": "Chu kỳ hoạt động thực tế.",
        "example": "A low radio duty cycle of 1% drastically extends sensor battery longevity."
    },
    "mac": {
        "word": "MAC (Medium Access Control)",
        "ipa": "/mæk/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Tầng Điều khiển Truy nhập Môi trường: Phân tầng con thuộc tầng Liên kết Dữ liệu (Data Link), chịu trách nhiệm điều phối quyền phát sóng trên kênh truyền vô tuyến dùng chung.",
        "general_def": "Tầng kiểm soát truy cập đường truyền.",
        "example": "The IEEE 802.15.4 MAC layer uses CSMA/CA for channel arbitration."
    },
    "phy": {
        "word": "PHY (Physical Layer)",
        "ipa": "/faɪ/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Tầng Vật lý: Tầng thấp nhất trong mô hình mạng OSI, thực hiện điều chế tín hiệu, truyền nhận bit dữ liệu trên sóng vô tuyến (ví dụ tốc độ 250 Kbps ở băng tần 2.4 GHz).",
        "general_def": "Tầng vật lý phần cứng.",
        "example": "IEEE 802.15.4 PHY provides a nominal transmission rate of 250 kbps."
    },
    "dtls": {
        "word": "DTLS (Datagram Transport Layer Security)",
        "ipa": "/ˌdiː.tiː.elˈes/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Giao thức bảo mật tầng truyền vận datagram (RFC 6347): Cung cấp mã hóa, xác thực và tính toàn vẹn dữ liệu cho các ứng dụng chạy trên nền UDP như CoAP.",
        "general_def": "Chuẩn bảo mật mã hóa cho UDP.",
        "example": "DTLS consumes approximately 2 KB of RAM on constrained IoT devices."
    },
    "ber": {
        "word": "BER (Bit Error Rate)",
        "ipa": "/ˌbiː.iːˈɑːr/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Tỷ lệ lỗi bit: Số bit bị lỗi thu nhận chia cho tổng số bit được truyền qua kênh truyền thông trong một khoảng thời gian.",
        "general_def": "Tỷ lệ sai sót ở mức bit.",
        "example": "A high BER causes frequent packet corruption over wireless sensor links."
    },
    "per": {
        "word": "PER (Packet Error Rate)",
        "ipa": "/ˌpiː.iːˈɑːr/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Tỷ lệ lỗi gói tin: Tỷ lệ phần trăm các gói tin bị lỗi hoặc bị mất không thể khôi phục được trên kênh truyền vô tuyến.",
        "general_def": "Tỷ lệ mất gói tin.",
        "example": "Lossy IoT networks exhibit large packet error rates due to fading and noise."
    },
    "pdr": {
        "word": "PDR (Packet Delivery Ratio)",
        "ipa": "/ˌpiː.diːˈɑːr/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Tỷ lệ phân phối gói tin: Tỷ số giữa số gói tin nhận thành công tại nút đích trên tổng số gói tin được nút nguồn phát đi.",
        "general_def": "Tỷ lệ gửi gói tin thành công.",
        "example": "pCoCoA maintains a high PDR while reducing retransmission overhead."
    },
    "con": {
        "word": "CON (Confirmable message)",
        "ipa": "/kənˈfɜː.mə.bəl/",
        "pos": "Noun (Viết tắt CoAP)",
        "telecom_def": "Bản tin cần xác nhận trong CoAP: Yêu cầu bên nhận phải gửi trả bản tin báo nhận (ACK) tương ứng. Nếu không nhận được ACK, phía phát sẽ tự động truyền lại.",
        "general_def": "Bản tin có xác nhận.",
        "example": "Clients transmit CON requests to guarantee reliable sensor report delivery."
    },
    "non": {
        "word": "NON (Non-confirmable message)",
        "ipa": "/nɒn kənˈfɜː.mə.bəl/",
        "pos": "Noun (Viết tắt CoAP)",
        "telecom_def": "Bản tin không cần xác nhận trong CoAP: Không yêu cầu bên nhận gửi bản tin ACK, phù hợp cho các dữ liệu đo đạc liên tục lặp lại không cần độ tin cậy tuyệt đối.",
        "general_def": "Bản tin không đòi hỏi xác nhận.",
        "example": "NON messages reduce network traffic when individual sample loss is acceptable."
    },
    "ack": {
        "word": "ACK (Acknowledgement)",
        "ipa": "/æk/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Bản tin báo nhận: Gói tin gửi về từ nút nhận để khẳng định đã thu nhận an toàn bản tin CON tương ứng.",
        "general_def": "Bản tin xác nhận đã nhận.",
        "example": "The reception of an ACK stops the active retransmission timer."
    },
    "rst": {
        "word": "RST (Reset message)",
        "ipa": "/ˌɑːr.esˈtiː/",
        "pos": "Noun (Viết tắt CoAP)",
        "telecom_def": "Bản tin thiết lập lại: Gói tin thông báo một yêu cầu không thể xử lý do thiếu ngữ cảnh hoặc lỗi cấu trúc.",
        "general_def": "Bản tin tái lập lại kết nối.",
        "example": "A receiver replies with an RST if it cannot parse the incoming packet."
    },
    "mid": {
        "word": "MID (Message ID)",
        "ipa": "/ˌem.aɪˈdiː/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Mã định danh bản tin: Trường 16-bit trong tiêu đề CoAP dùng để phát hiện gói tin trùng lặp và ghép nối bản tin ACK với bản tin CON tương ứng.",
        "general_def": "Mã định danh của gói tin.",
        "example": "The MID allows receivers to detect and discard duplicate requests."
    },
    "tc": {
        "word": "TC (Transmission Counter)",
        "ipa": "/ˌtiːˈsiː/",
        "pos": "Noun (Tùy chọn CoAP mới)",
        "telecom_def": "Bộ đếm số lần truyền: Tùy chọn CoAP mới do pCoCoA đề xuất. Giá trị khởi tạo là 1 và tăng dần sau mỗi lần phát lại, được nút nhận phản hồi lại trong gói ACK giúp xác định chính xác lần phát nào đã thành công.",
        "general_def": "Bộ đếm số lần phát lại.",
        "example": "The TC option resolves RTT ambiguity by distinguishing retransmission attempts."
    },
    "ewma": {
        "word": "EWMA (Exponentially Weighted Moving Average)",
        "ipa": "/ˌiː.dʌb.əl.juː.emˈeɪ/",
        "pos": "Noun (Toán học viễn thông)",
        "telecom_def": "Trung bình trượt có trọng số mũ: Kỹ thuật tính trung bình làm mượt chuỗi dữ liệu chuỗi thời gian, gán trọng số suy giảm theo hàm mũ cho các mẫu cũ hơn.",
        "general_def": "Trung bình trượt làm mượt trọng số mũ.",
        "example": "EWMA filters out transient delay spikes in RTT tracking."
    },
    "queue": {
        "word": "queue",
        "ipa": "/kjuː/",
        "pos": "Noun",
        "telecom_def": "Hàng đợi mạng: Cấu trúc bộ nhớ đệm lưu trữ các gói tin theo nguyên tắc vào trước ra trước (FIFO) tại các cổng giao tiếp.",
        "general_def": "Hàng lối xếp hàng.",
        "example": "Packets in the modem transmission queue experience variable buffering latency."
    },
    "fading": {
        "word": "fading (channel fading)",
        "ipa": "/ˈfeɪ.dɪŋ/",
        "pos": "Noun",
        "telecom_def": "Fading / Suy hao thăng trầm tín hiệu: Hiện tượng công suất sóng vô tuyến bị biến động thất thường do phản xạ đa đường (multipath) và che chắn chướng ngại vật.",
        "general_def": "Sự mờ nhạt, phai tàn.",
        "example": "Multipath fading causes unpredictable packet loss on wireless sensor links."
    },
    "gprs": {
        "word": "GPRS (General Packet Radio Service)",
        "ipa": "/ˌdʒiː.piː.ɑːrˈes/",
        "pos": "Noun (Viết tắt)",
        "telecom_def": "Dịch vụ Vô tuyến Gói Tổng hợp: Chuẩn công nghệ truyền dữ liệu gói trên mạng di động tế bào thế hệ 2G/2.5G dùng phổ biến trong các ứng dụng đo xa M2M/IoT.",
        "general_def": "Dịch vụ dữ liệu mạng di động.",
        "example": "GPRS modems connect remote sensors to cloud services via cellular links."
    },
    "telosb": {
        "word": "TelosB",
        "ipa": "/ˈtel.ɒs.biː/",
        "pos": "Noun (Phần cứng thực tế)",
        "telecom_def": "Nút cảm biến không dây mã nguồn mở tiêu chuẩn học thuật: Trang bị vi điều khiển TI MSP430, chip vô tuyến CC2420 chuẩn IEEE 802.15.4 2.4 GHz và 10 kB RAM.",
        "general_def": "Bo mạch cảm biến không dây chuyên dụng.",
        "example": "FlockLab uses 30 TelosB motes to evaluate low-power multihop protocols."
    },
    "flocklab": {
        "word": "FlockLab",
        "ipa": "/ˈflɒk.læb/",
        "pos": "Noun (Hệ thống thực nghiệm)",
        "telecom_def": "Testbed mạng cảm biến không dây công cộng của ETH Zurich: Cho phép đo đạc, theo dõi chính xác mức tiêu thụ năng lượng và hoạt động truyền thông trên phần cứng thật.",
        "general_def": "Phòng thực nghiệm mạng cảm biến mở.",
        "example": "FlockLab traces validated CoCoA performance in realistic indoor/outdoor settings."
    },
    "contiki": {
        "word": "ContikiOS / ContikiMAC",
        "ipa": "/kənˈtiː.ki/",
        "pos": "Noun (Hệ điều hành nhúng)",
        "telecom_def": "Hệ điều hành mã nguồn mở siêu nhẹ dành cho mạng IoT LLN và giao thức MAC đồng bộ chu kỳ làm việc vô tuyến tiết kiệm pin ContikiMAC.",
        "general_def": "Hệ điều hành mã nguồn mở cho thiết bị nhúng nhỏ.",
        "example": "ContikiOS provides a full IPv6/6LoWPAN/CoAP stack for memory-constrained nodes."
    },
    "cooja": {
        "word": "Cooja",
        "ipa": "/ˈkuː.dʒə/",
        "pos": "Noun (Phần mềm mô phỏng)",
        "telecom_def": "Phần mềm mô phỏng mạng cảm biến chuyên dụng của ContikiOS: Cho phép mô phỏng chính xác hành vi phần cứng vi điều khiển và môi trường lan truyền sóng vô tuyến.",
        "general_def": "Trình mô phỏng mạng cảm biến nhúng.",
        "example": "Cooja simulations verified pCoCoA across a 6x6 grid topology."
    },
    "californium": {
        "word": "Californium (Cf)",
        "ipa": "/ˌkæl.ɪˈfɔː.ni.əm/",
        "pos": "Noun (Phần mềm CoAP)",
        "telecom_def": "Bản cài đặt mã nguồn mở CoAP bằng Java của Eclipse: Được thiết kế cho các máy chủ backend và ứng dụng đám mây hiệu năng cao.",
        "general_def": "Thư viện triển khai CoAP cho Java.",
        "example": "The benchmark study implemented alternative congestion controls inside Californium."
    },
    "erbium": {
        "word": "Erbium (Er)",
        "ipa": "/ˈɜː.bi.əm/",
        "pos": "Noun (Phần mềm CoAP)",
        "telecom_def": "Bản cài đặt CoAP bằng ngôn ngữ C tối ưu hóa tài nguyên chạy trực tiếp trên vi điều khiển thuộc hệ điều hành ContikiOS.",
        "general_def": "Bộ cài đặt CoAP siêu nhẹ cho vi điều khiển C.",
        "example": "The server motes in FlockLab ran Erbium CoAP over ContikiOS."
    }
}

# Add common words (150+ general academic words)
common_words = {
    "adapt": ("Verb", "/əˈdæpt/", "Thích ứng, điều chỉnh cho phù hợp", "CoCoA adapts the RTO based on measured RTTs."),
    "adaptive": ("Adj", "/əˈdæp.tɪv/", "Có tính thích nghi, thích ứng linh hoạt", "An adaptive timeout algorithm handles network load changes."),
    "algorithm": ("Noun", "/ˈæl.ɡə.rɪ.ðəm/", "Thuật toán, giải thuật xử lý từng bước", "The pCoCoA algorithm improves CoAP reliability."),
    "alternative": ("Adj/Noun", "/ɒlˈtɜː.nə.tɪv/", "Thay thế, phương án khác", "Several alternative algorithms were compared against CoCoA."),
    "analysis": ("Noun", "/əˈnæl.ə.sɪs/", "Sự phân tích, nghiên cứu chuyên sâu", "An in-depth analysis revealed critical flaws in weak estimators."),
    "approach": ("Noun/Verb", "/əˈprəʊtʃ/", "Phương pháp tiếp cận, tiến lại gần", "The dithering approach breaks synchronization collisions."),
    "arbitrary": ("Adj", "/ˈɑː.bɪ.trər.i/", "Tùy ý, ngẫu nhiên không theo quy tắc", "Arbitrary timeouts lead to network instability."),
    "benchmark": ("Noun", "/ˈbentʃ.mɑːk/", "Tiêu chuẩn đánh giá đối sánh", "B-RTO serves as a minimalist benchmark."),
    "bottleneck": ("Noun", "/ˈbɒt.əl.nek/", "Điểm nghẽn mạng, nút cổ chai", "The client queue was the primary bottleneck in this scenario."),
    "capacity": ("Noun", "/kəˈpæs.ə.ti/", "Dung lượng chứa, sức truyền tải tối đa", "Network traffic exceeded channel capacity."),
    "characteristic": ("Noun/Adj", "/ˌkær.ək.təˈrɪs.tɪk/", "Đặc trưng, đặc tính tiêu biểu", "High loss is a core characteristic of LLNs."),
    "clamp": ("Verb", "/klæmp/", "Kẹp giữ, ghìm chặn dưới/chặn trên", "mdev_max clamps the minimum RTO value."),
    "client": ("Noun", "/ˈklaɪ.ənt/", "Phía máy khách, nút khởi tạo yêu cầu", "The CoAP client periodically polls the sensor server."),
    "communication": ("Noun", "/kəˌmjuː.nɪˈkeɪ.ʃən/", "Truyền thông, thông tin liên lạc", "Reliable communication is vital in medical IoT."),
    "compare": ("Verb", "/kəmˈpeər/", "So sánh, đối chiếu", "We compare pCoCoA with state-of-the-art algorithms."),
    "computation": ("Noun", "/ˌkɒm.pjʊˈteɪ.ʃən/", "Sự tính toán, năng lực xử lý số học", "Low-power chips have constrained computation capacity."),
    "condition": ("Noun", "/kənˈdɪʃ.ən/", "Điều kiện, hoàn cảnh hoạt động", "The timer adjusts dynamically to network conditions."),
    "confirm": ("Verb", "/kənˈfɜːm/", "Xác nhận, khẳng định", "The ACK confirms successful receipt of the packet."),
    "conservative": ("Adj", "/kənˈsɜː.və.tɪv/", "Bảo thủ, dè dặt, an toàn quá mức", "Default CoAP uses conservative fixed timer thresholds."),
    "constant": ("Adj/Noun", "/ˈkɒn.stənt/", "Không đổi, hằng số", "Periodic clients generate packets at a constant rate."),
    "converge": ("Verb", "/kənˈvɜːdʒ/", "Hội tụ về một giá trị ổn định", "The RTO timer converges smoothly toward the measured RTT."),
    "critical": ("Adj", "/ˈkrɪt.ɪ.kəl/", "Nghiêm trọng, then chốt, mang tính quyết định", "Congestion control is critical in lossy wireless links."),
    "decay": ("Verb/Noun", "/dɪˈkeɪ/", "Suy giảm dần theo thời gian", "The variance decays toward zero under stable loads."),
    "decrease": ("Verb/Noun", "/dɪˈkriːs/", "Giảm bớt, sự sụt giảm", "RTO should decrease when channel conditions improve."),
    "delay": ("Noun/Verb", "/dɪˈleɪ/", "Độ trễ, sự chậm trễ truyền tin", "Retransmissions cause accumulated network delay."),
    "deliver": ("Verb", "/dɪˈlɪv.ər/", "Chuyển giao, phân phối tới đích", "The server delivers responses back to the client."),
    "destination": ("Noun", "/ˌdes.tɪˈneɪ.ʃən/", "Nút đích, điểm đến của gói tin", "Packets are forwarded toward their final destination."),
    "detect": ("Verb", "/dɪˈtekt/", "Phát hiện, nhận diện ra", "The TC option detects spurious retransmissions accurately."),
    "differentiate": ("Verb", "/ˌdɪf.əˈren.ʃi.eɪt/", "Phân biệt, tách bạch", "CoCoA differentiates between weak and strong RTT samples."),
    "discard": ("Verb", "/dɪˈskɑːd/", "Hủy bỏ, loại bỏ gói tin", "The buffer discards incoming packets when full."),
    "drastic": ("Adj", "/ˈdræs.tɪk/", "Mạnh mẽ, quyết liệt", "pCoCoA delivers a drastic cut in unnecessary retransmissions."),
    "dynamic": ("Adj", "/daɪˈnæm.ɪk/", "Động, thích ứng linh hoạt theo thời gian", "Dynamic timers adjust to changing traffic loads."),
    "effective": ("Adj", "/ɪˈfek.tɪv/", "Hiệu quả, đem lại kết quả tốt", "pCoCoA is an effective solution for IoT congestion."),
    "eliminate": ("Verb", "/iˈlɪm.ɪ.neɪt/", "Loại trừ, triệt tiêu hoàn toàn", "pCoCoA eliminates the weak estimator entirely."),
    "emulate": ("Verb", "/ˈem.jʊ.leɪt/", "Giả lập phần cứng hoặc mạng", "Cooja emulates TelosB hardware instruction by instruction."),
    "enhance": ("Verb", "/ɪnˈhɑːns/", "Tăng cường, nâng cao chất lượng", "Enhanced RTO algorithms improve network stability."),
    "evaluate": ("Verb", "/ɪˈvæl.ju.eɪt/", "Đánh giá, kiểm nghiệm thực tế", "We evaluate the protocol in physical testbeds."),
    "exceed": ("Verb", "/ɪkˈsiːd/", "Vượt quá giới hạn cho phép", "When traffic exceeds capacity, packet loss occurs."),
    "exhibit": ("Verb", "/ɪɡˈzɪb.ɪt/", "Bộc lộ, thể hiện ra", "The algorithm exhibits rapid convergence under bursts."),
    "experiment": ("Noun/Verb", "/ɪkˈsper.ɪ.mənt/", "Cuộc thực nghiệm, thí nghiệm", "Experiments were conducted on GPRS and 802.15.4 testbeds."),
    "fluctuate": ("Verb", "/ˈflʌk.tʃu.eɪt/", "Dao động, biến thiên chập chờn", "Wireless RTT values fluctuate continuously."),
    "framework": ("Noun", "/ˈfreɪm.wɜːk/", "Khung làm việc, khuôn khổ kiến trúc", "The IETF protocol framework standardizes IoT communications."),
    "frequency": ("Noun", "/ˈfriː.kwən.si/", "Tần số, tần suất xuất hiện", "Retransmission frequency increases as timers shorten."),
    "guarantee": ("Verb/Noun", "/ˌɡær.ənˈtiː/", "Bảo đảm, cam kết chất lượng", "pCoCoA guarantees throughput comparable to CoCoA+."),
    "impact": ("Noun/Verb", "/ˈɪm.pækt/", "Tác động, ảnh hưởng", "RTTVAR has a strong impact on the final RTO value."),
    "implement": ("Verb", "/ˈɪm.plɪ.ment/", "Cài đặt, triển khai thực tế", "The algorithms were implemented inside Californium."),
    "improve": ("Verb", "/ɪmˈpruːv/", "Cải thiện, nâng cao", "Adaptive timers improve packet delivery ratios."),
    "increase": ("Verb/Noun", "/ɪnˈkriːs/", "Tăng lên, sự gia tăng", "Traffic loads increase during event notifications."),
    "indicate": ("Verb", "/ˈɪn.dɪ.keɪt/", "Biểu thị, chỉ ra rằng", "Simulation results indicate lower retransmission counts."),
    "influence": ("Verb/Noun", "/ˈɪn.flu.əns/", "Ảnh hưởng, chi phối", "Packet drops influence RTO variance estimations."),
    "interfere": ("Verb", "/ˌɪn.təˈfɪər/", "Gây nhiễu, can thiệp vào", "Competing traffic interferes with periodic transmissions."),
    "investigate": ("Verb", "/ɪnˈves.tɪ.ɡeɪt/", "Điều tra, khảo sát kỹ lưỡng", "We investigate protocol trade-offs under high loads."),
    "layer": ("Noun", "/ˈleɪ.ər/", "Tầng giao thức trong mô hình mạng", "CoAP sits at the application layer above UDP."),
    "lightweight": ("Adj", "/ˈlaɪt.weɪt/", "Siêu nhẹ, tốn ít tài nguyên", "CoAP is a lightweight RESTful protocol."),
    "limitation": ("Noun", "/ˌlɪm.ɪˈteɪ.ʃən/", "Hạn chế, giới hạn kỹ thuật", "The proposed design overcomes previous limitations."),
    "mechanism": ("Noun", "/ˈmek.ə.nɪ.zəm/", "Cơ chế hoạt động", "The backoff mechanism dampens network loads."),
    "metric": ("Noun", "/ˈmet.rɪk/", "Chỉ số đo lường hiệu năng", "Settling time is a key performance metric."),
    "mitigate": ("Verb", "/ˈmɪt.ɪ.ɡeɪt/", "Giảm nhẹ, giảm thiểu thiệt hại", "pCoCoA mitigates premature timeout occurrences."),
    "model": ("Noun/Verb", "/ˈmɒd.əl/", "Mô hình toán học hoặc kiến trúc", "We model network traffic using bursty ON-OFF sources."),
    "monitor": ("Verb/Noun", "/ˈmɒn.ɪ.tər/", "Giám sát, theo dõi liên tục", "Nodes monitor round-trip delays for each destination."),
    "multiple": ("Adj", "/ˈmʌl.tɪ.pəl/", "Nhiều, đa dạng", "Packets may require multiple retransmission attempts."),
    "negligible": ("Adj", "/ˈneɡ.lɪ.dʒə.bəl/", "Không đáng kể, có thể bỏ qua", "CoCoA state incurs a negligible RAM footprint."),
    "network": ("Noun", "/ˈnet.wɜːk/", "Mạng lưới truyền thông", "The sensor network collects environmental readings."),
    "node": ("Noun", "/nəʊd/", "Nút mạng, thiết bị tham gia mạng", "Each node communicates with the central RPL router."),
    "observe": ("Verb", "/əbˈzɜːv/", "Quan sát thấy, ghi nhận được", "We observe significant throughput gains with pCoCoA."),
    "obtain": ("Verb", "/əbˈteɪn/", "Thu được, đạt được", "The client obtains valid RTT measurements."),
    "occur": ("Verb", "/əˈkɜːr/", "Xảy ra, phát sinh", "Buffer drops occur when bursty traffic surges."),
    "operation": ("Noun", "/ˌɒp.ərˈeɪ.ʃən/", "Hoạt động vận hành", "Adaptive control ensures safe protocol operation."),
    "optimize": ("Verb", "/ˈɒp.tɪ.maɪz/", "Tối ưu hóa hiệu năng", "CoCoA optimizes timeout settings for IoT links."),
    "outperform": ("Verb", "/ˌaʊt.pəˈfɔːm/", "Vượt trội hơn, đạt kết quả tốt hơn", "CoCoA consistently outperforms default CoAP."),
    "packet": ("Noun", "/ˈpæk.ɪt/", "Gói tin truyền thông", "Each packet contains a CoAP header and payload."),
    "parameter": ("Noun", "/pəˈræm.ɪ.tər/", "Tham số định lượng trong công thức", "Tuning smoothing parameters stabilizes RTO growth."),
    "pattern": ("Noun", "/ˈpæt.ən/", "Khuôn mẫu, mô hình diễn biến", "Traffic patterns fluctuate between steady and bursty."),
    "peak": ("Noun/Verb", "/piːk/", "Đỉnh cực đại, đạt đỉnh", "RTT peaks occur when intermediate queues fill up."),
    "performance": ("Noun", "/pəˈfɔː.məns/", "Hiệu năng, chất lượng hoạt động", "Throughput is an essential performance indicator."),
    "periodic": ("Adj", "/ˌpɪə.riˈɒd.ɪk/", "Định kỳ, lặp lại đều đặn", "Sensors report periodic telemetry readings every 8s."),
    "phenomenon": ("Noun", "/fəˈnɒm.ɪ.nən/", "Hiện tượng mạng", "Congestion collapse is a devastating network phenomenon."),
    "pitfall": ("Noun", "/ˈpɪt.fɔːl/", "Cạm bẫy tiềm ẩn, sai lầm dễ gặp", "Premature timeout is a frequent pitfall of weak timers."),
    "policy": ("Noun", "/ˈpɒl.ə.si/", "Chính sách, quy tắc xử lý", "The backoff policy scales the retransmission delay."),
    "potential": ("Adj/Noun", "/pəˈten.ʃəl/", "Tiềm năng, khả dĩ", "Smart congestion control has high potential in smart cities."),
    "precise": ("Adj", "/prɪˈsaɪs/", "Chính xác, chuẩn xác tuyệt đối", "pCoCoA provides precise mapping between CON and ACK."),
    "prevent": ("Verb", "/prɪˈvent/", "Ngăn ngừa, phòng ngừa", "The guard timer prevents duplicate packet releases."),
    "probability": ("Noun", "/ˌprɒb.əˈbɪl.ə.ti/", "Xác suất thống kê", "Loss probability escalates under network saturation."),
    "procedure": ("Noun", "/prəˈsiː.dʒər/", "Quy trình, thủ tục thực hiện", "Algorithm 1 outlines the send and receive procedure."),
    "propose": ("Verb", "/prəˈpəʊz/", "Đề xuất, kiến nghị", "The authors propose an improved RTO computation model."),
    "protocol": ("Noun", "/ˈprəʊ.tə.kɒl/", "Giao thức truyền thông", "CoAP is an IETF application protocol for IoT."),
    "random": ("Adj", "/ˈræn.dəm/", "Ngẫu nhiên", "RTO dithering picks a random timer in a safe range."),
    "rate": ("Noun/Verb", "/reɪt/", "Tốc độ, tỷ lệ phần trăm", "Data rate is limited on 802.15.4 wireless radios."),
    "react": ("Verb", "/riˈækt/", "Phản ứng lại trước thay đổi", "pCoCoA reacts swiftly when congestion is detected."),
    "receive": ("Verb", "/rɪˈsiːv/", "Tiếp nhận bản tin", "The client receives an ACK from the gateway."),
    "reduce": ("Verb", "/rɪˈdjuːs/", "Cắt giảm, thu nhỏ lại", "pCoCoA reduces the number of spurious transmissions."),
    "regulate": ("Verb", "/ˈreɡ.jʊ.leɪt/", "Điều tiết, điều hòa lưu lượng", "Congestion control regulates transmission speeds."),
    "reliable": ("Adj", "/rɪˈlaɪ.ə.bəl/", "Tin cậy, bảo đảm không mất mát", "CON messages provide reliable delivery over UDP."),
    "replace": ("Verb", "/rɪˈpleɪs/", "Thay thế vị trí", "CoCoA-E replaces parameters alpha and beta with gamma."),
    "report": ("Verb/Noun", "/rɪˈpɔːt/", "Báo cáo, gửi bản tin dữ liệu", "Sensor nodes report temperature data periodically."),
    "request": ("Noun/Verb", "/rɪˈkwest/", "Bản tin yêu cầu từ client", "The client transmits a CON POST request."),
    "require": ("Verb", "/rɪˈkwaɪər/", "Đòi hỏi, yêu cầu phải có", "Reliable transactions require acknowledgement frames."),
    "reset": ("Verb/Noun", "/ˌriːˈset/", "Thiết lập lại giá trị ban đầu", "The aging mechanism resets obsolete RTO values to 2s."),
    "resolve": ("Verb", "/rɪˈzɒlv/", "Giải quyết triệt để vấn đề", "The TC option resolves the RTT ambiguity challenge."),
    "resource": ("Noun", "/rɪˈzɔːs/", "Tài nguyên hệ thống (CPU, RAM, Pin)", "Constrained nodes operate under strict resource budgets."),
    "response": ("Noun", "/rɪˈspɒns/", "Bản tin phản hồi trả về", "The server generates a 2.05 Content response."),
    "restrict": ("Verb", "/rɪˈstrɪkt/", "Hạn chế, giới hạn", "NSTART limits outstanding requests to one per destination."),
    "result": ("Noun/Verb", "/rɪˈzʌlt/", "Kết quả thực nghiệm", "Experimental results confirm significant throughput gains."),
    "robust": ("Adj", "/rəʊˈbʌst/", "Bền bỉ, vững vàng trước lỗi", "pCoCoA is robust against bursty background traffic."),
    "route": ("Noun/Verb", "/ruːt/", "Tuyến đường truyền, định tuyến", "Packets route through multihop wireless nodes."),
    "router": ("Noun", "/ˈruː.tər/", "Bộ định tuyến", "The border router connects the sensor mesh to the Internet."),
    "sample": ("Noun/Verb", "/ˈsɑːm.pəl/", "Mẫu đo đạc thống kê", "Each RTT sample refines the smoothed average."),
    "scenario": ("Noun", "/sɪˈnɑː.ri.əʊ/", "Kịch bản khảo sát thử nghiệm", "Two realistic scenarios test steady and bursty conditions."),
    "scheme": ("Noun", "/skiːm/", "Sơ đồ, phương án giải pháp", "RFC 6298 defines a classic RTO computation scheme."),
    "segment": ("Noun", "/ˈseɡ.mənt/", "Phân đoạn gói tin TCP", "CoAP handles message packets rather than byte segments."),
    "sender": ("Noun", "/ˈsen.dər/", "Bên gửi, nút phát bản tin", "The sender starts an RTO timer upon CON transmission."),
    "sensor": ("Noun", "/ˈsen.sər/", "Cảm biến thu nhận môi trường", "Temperature sensors report environmental readings."),
    "sequence": ("Noun", "/ˈsiː.kwəns/", "Chuỗi tuần tự các sự kiện", "A sequence of timeouts triggers exponential backoff."),
    "server": ("Noun", "/ˈsɜː.vər/", "Phía máy chủ cung cấp tài nguyên", "The CoAP server serves incoming REST requests."),
    "settle": ("Verb", "/ˈset.əl/", "Lắng dịu, ổn định trở lại", "The network settles after the traffic burst dissipates."),
    "severe": ("Adj", "/sɪˈvɪər/", "Nghiêm trọng, khốc liệt", "Buffer overflows cause severe packet loss."),
    "shortcoming": ("Noun", "/ˈʃɔːtˌkʌm.ɪŋ/", "Thiếu sót, khuyết điểm cố hữu", "We analyze the shortcomings of the CoCoA+ algorithm."),
    "significant": ("Adj", "/sɪɡˈnɪf.ɪ.kənt/", "Đáng kể, có ý nghĩa thống kê", "CoCoA yields significant throughput improvements."),
    "simulate": ("Verb", "/ˈsɪm.jʊ.leɪt/", "Mô phỏng lại bằng phần mềm", "Cooja simulates radio transmission propagation."),
    "sluggish": ("Adj", "/ˈslʌɡ.ɪʃ/", "Chậm chạp, ì ạch", "Excessive filtering creates a sluggish timer response."),
    "smooth": ("Verb/Adj", "/smuːð/", "Làm mịn dữ liệu, êm thuận", "EWMA produces a smoothed RTT estimate."),
    "solution": ("Noun", "/səˈluː.ʃən/", "Giải pháp kỹ thuật", "pCoCoA provides an innovative congestion control solution."),
    "spike": ("Noun/Verb", "/spaɪk/", "Đỉnh nhọn đột biến", "An RTT spike can mislead the variance calculator."),
    "sporadic": ("Adj", "/spəˈræd.ɪk/", "Rải rác, thi thoảng xảy ra", "Sporadic losses stem from wireless fading rather than congestion."),
    "spread": ("Verb/Noun", "/spred/", "Lan truyền, phân tán", "RDC jitters spread out round-trip delays."),
    "stability": ("Noun", "/stəˈbɪl.ə.ti/", "Tính ổn định của hệ thống", "Dithering preserves overall network stability."),
    "stable": ("Adj", "/ˈsteɪ.bəl/", "Ổn định, bền vững", "The protocol maintains stable operation under heavy load."),
    "stack": ("Noun", "/stæk/", "Ngăn xếp giao thức (Protocol Stack)", "ContikiOS features an embedded uIP and 6LoWPAN stack."),
    "standard": ("Noun/Adj", "/ˈstæn.dəd/", "Tiêu chuẩn kỹ thuật", "CoAP is an approved IETF standard (RFC 7252)."),
    "starvation": ("Noun", "/stɑːˈveɪ.ʃən/", "Hiện tượng 'bỏ đói' không cấp băng thông", "Unfair timers induce node starvation on distant hops."),
    "steady": ("Adj", "/ˈsted.i/", "Ổn định, đều đặn", "Under steady traffic, CoCoA converges smoothly."),
    "strategy": ("Noun", "/ˈstræt.ə.dʒi/", "Chiến lược, giải thuật định hướng", "Different backoff strategies alter network fairness."),
    "structure": ("Noun/Verb", "/ˈstrʌk.tʃər/", "Cấu trúc tổ chức", "The article outlines the protocol structure in detail."),
    "subsequent": ("Adj", "/ˈsʌb.sɪ.kwənt/", "Kế tiếp, xảy ra sau đó", "Subsequent transmissions increment the counter option."),
    "summarize": ("Verb", "/ˈsʌm.ər.aɪz/", "Tóm tắt, tổng hợp lại", "Table I summarizes existing congestion algorithms."),
    "technique": ("Noun", "/tekˈniːk/", "Kỹ thuật, phương pháp chuyên môn", "Dithering is a technique to evade packet collision lockstep."),
    "temporary": ("Adj", "/ˈtem.pər.ər.i/", "Tạm thời, ngắn hạn", "Temporary bursts subside after sensors finish reporting."),
    "testbed": ("Noun", "/ˈtest.bed/", "Hệ thống thử nghiệm phần cứng thật", "FlockLab provides a realistic testbed for IoT research."),
    "threshold": ("Noun", "/ˈθreʃ.həʊld/", "Ngưỡng giới hạn kích hoạt", "Timer thresholds prevent unbounded RTO growth."),
    "timeout": ("Noun", "/ˈtaɪm.aʊt/", "Hết hạn thời gian chờ", "When timeout occurs, the client triggers a retry."),
    "timestamp": ("Noun/Verb", "/ˈtaɪm.stæmp/", "Nhãn thời gian ghi nhận", "The sender stores a timestamp for each transmission attempt."),
    "topology": ("Noun", "/təˈpɒl.ə.dʒi/", "Cấu trúc liên kết mạng", "The testbed employs a 6x6 grid topology."),
    "trade-off": ("Noun", "/ˈtreɪd.ɒf/", "Sự đánh đổi kỹ thuật", "There is a trade-off between memory footprint and responsiveness."),
    "transaction": ("Noun", "/trænˈzæk.ʃən/", "Giao dịch truyền thông trọn vẹn (CON - ACK)", "A transaction concludes once the ACK is delivered."),
    "transceiver": ("Noun", "/trænˈsiː.vər/", "Bộ thu phát vô tuyến tích hợp", "Low-power transceivers operate in the 2.4 GHz ISM band."),
    "transmit": ("Verb", "/trænzˈmɪt/", "Truyền phát tín hiệu", "Client motes transmit periodic telemetry frames."),
    "transmission": ("Noun", "/trænzˈmɪʃ.ən/", "Lượt truyền phát, sự truyền dẫn", "Each transmission consumes vital battery energy."),
    "unambiguous": ("Adj", "/ˌʌn.æmˈbɪɡ.ju.əs/", "Rõ ràng, không bị nhập nhằng", "TC options provide unambiguous packet matching."),
    "underestimate": ("Verb", "/ˌʌn.dərˈes.tɪ.meɪt/", "Ước lượng non, đánh giá thấp", "Underestimating the RTO causes premature timeouts."),
    "update": ("Verb/Noun", "/ʌpˈdeɪt/", "Cập nhật giá trị mới", "Every ACK updates the running SRTT estimate."),
    "uplink": ("Noun", "/ˈʌp.lɪŋk/", "Đường lên (từ thiết bị về trạm/máy chủ)", "GPRS uplink bandwidth is restricted to 15 kbit/s."),
    "valid": ("Adj", "/ˈvæl.ɪd/", "Hợp lệ, có giá trị chuẩn", "Karn's rule ensures only valid RTT samples are recorded."),
    "variable": ("Noun/Adj", "/ˈveə.ri.ə.bəl/", "Biến số / có thể thay đổi", "VBF applies a variable factor to backoff timers."),
    "variation": ("Noun", "/ˌveə.riˈeɪ.ʃən/", "Sự biến thiên, độ dao động", "Delay variation dictates the required safety margin."),
    "verify": ("Verb", "/ˈver.ɪ.faɪ/", "Kiểm chứng, xác nhận tính đúng đắn", "Hardware tests verify the simulation hypotheses."),
    "weight": ("Noun/Verb", "/weɪt/", "Trọng số trong công thức tính toán", "Strong RTO receives a higher weight in overall blending."),
    "wireless": ("Adj/Noun", "/ˈwaɪə.ləs/", "Không dây, vô tuyến", "Wireless sensor networks suffer from fading and noise.")
}

for k, v in common_words.items():
    if k not in dict_data:
        dict_data[k] = {
            "word": k,
            "ipa": v[1],
            "pos": v[0],
            "telecom_def": f"Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng ({v[2].lower()}).",
            "general_def": v[2],
            "example": v[3]
        }

with open(os.path.join(base_dir, "dictionary.js"), "w", encoding="utf-8") as f:
    f.write("// Comprehensive Telecommunications and Academic Dictionary with Lemmatizer\n")
    f.write("const TELECOM_DICTIONARY = " + json.dumps(dict_data, ensure_ascii=False, indent=2) + ";\n")

print("Generated rich dictionary.js successfully!")
