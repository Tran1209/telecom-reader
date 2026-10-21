// Comprehensive Telecommunications and Academic Dictionary with Lemmatizer
const TELECOM_DICTIONARY = {
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
  },
  "adapt": {
    "word": "adapt",
    "ipa": "/əˈdæpt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thích ứng, điều chỉnh cho phù hợp).",
    "general_def": "Thích ứng, điều chỉnh cho phù hợp",
    "example": "CoCoA adapts the RTO based on measured RTTs."
  },
  "adaptive": {
    "word": "adaptive",
    "ipa": "/əˈdæp.tɪv/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (có tính thích nghi, thích ứng linh hoạt).",
    "general_def": "Có tính thích nghi, thích ứng linh hoạt",
    "example": "An adaptive timeout algorithm handles network load changes."
  },
  "algorithm": {
    "word": "algorithm",
    "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thuật toán, giải thuật xử lý từng bước).",
    "general_def": "Thuật toán, giải thuật xử lý từng bước",
    "example": "The pCoCoA algorithm improves CoAP reliability."
  },
  "alternative": {
    "word": "alternative",
    "ipa": "/ɒlˈtɜː.nə.tɪv/",
    "pos": "Adj/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thay thế, phương án khác).",
    "general_def": "Thay thế, phương án khác",
    "example": "Several alternative algorithms were compared against CoCoA."
  },
  "analysis": {
    "word": "analysis",
    "ipa": "/əˈnæl.ə.sɪs/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (sự phân tích, nghiên cứu chuyên sâu).",
    "general_def": "Sự phân tích, nghiên cứu chuyên sâu",
    "example": "An in-depth analysis revealed critical flaws in weak estimators."
  },
  "approach": {
    "word": "approach",
    "ipa": "/əˈprəʊtʃ/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phương pháp tiếp cận, tiến lại gần).",
    "general_def": "Phương pháp tiếp cận, tiến lại gần",
    "example": "The dithering approach breaks synchronization collisions."
  },
  "arbitrary": {
    "word": "arbitrary",
    "ipa": "/ˈɑː.bɪ.trər.i/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tùy ý, ngẫu nhiên không theo quy tắc).",
    "general_def": "Tùy ý, ngẫu nhiên không theo quy tắc",
    "example": "Arbitrary timeouts lead to network instability."
  },
  "benchmark": {
    "word": "benchmark",
    "ipa": "/ˈbentʃ.mɑːk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tiêu chuẩn đánh giá đối sánh).",
    "general_def": "Tiêu chuẩn đánh giá đối sánh",
    "example": "B-RTO serves as a minimalist benchmark."
  },
  "bottleneck": {
    "word": "bottleneck",
    "ipa": "/ˈbɒt.əl.nek/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (điểm nghẽn mạng, nút cổ chai).",
    "general_def": "Điểm nghẽn mạng, nút cổ chai",
    "example": "The client queue was the primary bottleneck in this scenario."
  },
  "capacity": {
    "word": "capacity",
    "ipa": "/kəˈpæs.ə.ti/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (dung lượng chứa, sức truyền tải tối đa).",
    "general_def": "Dung lượng chứa, sức truyền tải tối đa",
    "example": "Network traffic exceeded channel capacity."
  },
  "characteristic": {
    "word": "characteristic",
    "ipa": "/ˌkær.ək.təˈrɪs.tɪk/",
    "pos": "Noun/Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đặc trưng, đặc tính tiêu biểu).",
    "general_def": "Đặc trưng, đặc tính tiêu biểu",
    "example": "High loss is a core characteristic of LLNs."
  },
  "clamp": {
    "word": "clamp",
    "ipa": "/klæmp/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (kẹp giữ, ghìm chặn dưới/chặn trên).",
    "general_def": "Kẹp giữ, ghìm chặn dưới/chặn trên",
    "example": "mdev_max clamps the minimum RTO value."
  },
  "client": {
    "word": "client",
    "ipa": "/ˈklaɪ.ənt/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phía máy khách, nút khởi tạo yêu cầu).",
    "general_def": "Phía máy khách, nút khởi tạo yêu cầu",
    "example": "The CoAP client periodically polls the sensor server."
  },
  "communication": {
    "word": "communication",
    "ipa": "/kəˌmjuː.nɪˈkeɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (truyền thông, thông tin liên lạc).",
    "general_def": "Truyền thông, thông tin liên lạc",
    "example": "Reliable communication is vital in medical IoT."
  },
  "compare": {
    "word": "compare",
    "ipa": "/kəmˈpeər/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (so sánh, đối chiếu).",
    "general_def": "So sánh, đối chiếu",
    "example": "We compare pCoCoA with state-of-the-art algorithms."
  },
  "computation": {
    "word": "computation",
    "ipa": "/ˌkɒm.pjʊˈteɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (sự tính toán, năng lực xử lý số học).",
    "general_def": "Sự tính toán, năng lực xử lý số học",
    "example": "Low-power chips have constrained computation capacity."
  },
  "condition": {
    "word": "condition",
    "ipa": "/kənˈdɪʃ.ən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (điều kiện, hoàn cảnh hoạt động).",
    "general_def": "Điều kiện, hoàn cảnh hoạt động",
    "example": "The timer adjusts dynamically to network conditions."
  },
  "confirm": {
    "word": "confirm",
    "ipa": "/kənˈfɜːm/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (xác nhận, khẳng định).",
    "general_def": "Xác nhận, khẳng định",
    "example": "The ACK confirms successful receipt of the packet."
  },
  "conservative": {
    "word": "conservative",
    "ipa": "/kənˈsɜː.və.tɪv/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bảo thủ, dè dặt, an toàn quá mức).",
    "general_def": "Bảo thủ, dè dặt, an toàn quá mức",
    "example": "Default CoAP uses conservative fixed timer thresholds."
  },
  "constant": {
    "word": "constant",
    "ipa": "/ˈkɒn.stənt/",
    "pos": "Adj/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (không đổi, hằng số).",
    "general_def": "Không đổi, hằng số",
    "example": "Periodic clients generate packets at a constant rate."
  },
  "converge": {
    "word": "converge",
    "ipa": "/kənˈvɜːdʒ/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hội tụ về một giá trị ổn định).",
    "general_def": "Hội tụ về một giá trị ổn định",
    "example": "The RTO timer converges smoothly toward the measured RTT."
  },
  "critical": {
    "word": "critical",
    "ipa": "/ˈkrɪt.ɪ.kəl/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (nghiêm trọng, then chốt, mang tính quyết định).",
    "general_def": "Nghiêm trọng, then chốt, mang tính quyết định",
    "example": "Congestion control is critical in lossy wireless links."
  },
  "decay": {
    "word": "decay",
    "ipa": "/dɪˈkeɪ/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (suy giảm dần theo thời gian).",
    "general_def": "Suy giảm dần theo thời gian",
    "example": "The variance decays toward zero under stable loads."
  },
  "decrease": {
    "word": "decrease",
    "ipa": "/dɪˈkriːs/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giảm bớt, sự sụt giảm).",
    "general_def": "Giảm bớt, sự sụt giảm",
    "example": "RTO should decrease when channel conditions improve."
  },
  "delay": {
    "word": "delay",
    "ipa": "/dɪˈleɪ/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (độ trễ, sự chậm trễ truyền tin).",
    "general_def": "Độ trễ, sự chậm trễ truyền tin",
    "example": "Retransmissions cause accumulated network delay."
  },
  "deliver": {
    "word": "deliver",
    "ipa": "/dɪˈlɪv.ər/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chuyển giao, phân phối tới đích).",
    "general_def": "Chuyển giao, phân phối tới đích",
    "example": "The server delivers responses back to the client."
  },
  "destination": {
    "word": "destination",
    "ipa": "/ˌdes.tɪˈneɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (nút đích, điểm đến của gói tin).",
    "general_def": "Nút đích, điểm đến của gói tin",
    "example": "Packets are forwarded toward their final destination."
  },
  "detect": {
    "word": "detect",
    "ipa": "/dɪˈtekt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phát hiện, nhận diện ra).",
    "general_def": "Phát hiện, nhận diện ra",
    "example": "The TC option detects spurious retransmissions accurately."
  },
  "differentiate": {
    "word": "differentiate",
    "ipa": "/ˌdɪf.əˈren.ʃi.eɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phân biệt, tách bạch).",
    "general_def": "Phân biệt, tách bạch",
    "example": "CoCoA differentiates between weak and strong RTT samples."
  },
  "discard": {
    "word": "discard",
    "ipa": "/dɪˈskɑːd/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hủy bỏ, loại bỏ gói tin).",
    "general_def": "Hủy bỏ, loại bỏ gói tin",
    "example": "The buffer discards incoming packets when full."
  },
  "drastic": {
    "word": "drastic",
    "ipa": "/ˈdræs.tɪk/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (mạnh mẽ, quyết liệt).",
    "general_def": "Mạnh mẽ, quyết liệt",
    "example": "pCoCoA delivers a drastic cut in unnecessary retransmissions."
  },
  "dynamic": {
    "word": "dynamic",
    "ipa": "/daɪˈnæm.ɪk/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (động, thích ứng linh hoạt theo thời gian).",
    "general_def": "Động, thích ứng linh hoạt theo thời gian",
    "example": "Dynamic timers adjust to changing traffic loads."
  },
  "effective": {
    "word": "effective",
    "ipa": "/ɪˈfek.tɪv/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hiệu quả, đem lại kết quả tốt).",
    "general_def": "Hiệu quả, đem lại kết quả tốt",
    "example": "pCoCoA is an effective solution for IoT congestion."
  },
  "eliminate": {
    "word": "eliminate",
    "ipa": "/iˈlɪm.ɪ.neɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (loại trừ, triệt tiêu hoàn toàn).",
    "general_def": "Loại trừ, triệt tiêu hoàn toàn",
    "example": "pCoCoA eliminates the weak estimator entirely."
  },
  "emulate": {
    "word": "emulate",
    "ipa": "/ˈem.jʊ.leɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giả lập phần cứng hoặc mạng).",
    "general_def": "Giả lập phần cứng hoặc mạng",
    "example": "Cooja emulates TelosB hardware instruction by instruction."
  },
  "enhance": {
    "word": "enhance",
    "ipa": "/ɪnˈhɑːns/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tăng cường, nâng cao chất lượng).",
    "general_def": "Tăng cường, nâng cao chất lượng",
    "example": "Enhanced RTO algorithms improve network stability."
  },
  "evaluate": {
    "word": "evaluate",
    "ipa": "/ɪˈvæl.ju.eɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đánh giá, kiểm nghiệm thực tế).",
    "general_def": "Đánh giá, kiểm nghiệm thực tế",
    "example": "We evaluate the protocol in physical testbeds."
  },
  "exceed": {
    "word": "exceed",
    "ipa": "/ɪkˈsiːd/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (vượt quá giới hạn cho phép).",
    "general_def": "Vượt quá giới hạn cho phép",
    "example": "When traffic exceeds capacity, packet loss occurs."
  },
  "exhibit": {
    "word": "exhibit",
    "ipa": "/ɪɡˈzɪb.ɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bộc lộ, thể hiện ra).",
    "general_def": "Bộc lộ, thể hiện ra",
    "example": "The algorithm exhibits rapid convergence under bursts."
  },
  "experiment": {
    "word": "experiment",
    "ipa": "/ɪkˈsper.ɪ.mənt/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cuộc thực nghiệm, thí nghiệm).",
    "general_def": "Cuộc thực nghiệm, thí nghiệm",
    "example": "Experiments were conducted on GPRS and 802.15.4 testbeds."
  },
  "fluctuate": {
    "word": "fluctuate",
    "ipa": "/ˈflʌk.tʃu.eɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (dao động, biến thiên chập chờn).",
    "general_def": "Dao động, biến thiên chập chờn",
    "example": "Wireless RTT values fluctuate continuously."
  },
  "framework": {
    "word": "framework",
    "ipa": "/ˈfreɪm.wɜːk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (khung làm việc, khuôn khổ kiến trúc).",
    "general_def": "Khung làm việc, khuôn khổ kiến trúc",
    "example": "The IETF protocol framework standardizes IoT communications."
  },
  "frequency": {
    "word": "frequency",
    "ipa": "/ˈfriː.kwən.si/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tần số, tần suất xuất hiện).",
    "general_def": "Tần số, tần suất xuất hiện",
    "example": "Retransmission frequency increases as timers shorten."
  },
  "guarantee": {
    "word": "guarantee",
    "ipa": "/ˌɡær.ənˈtiː/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bảo đảm, cam kết chất lượng).",
    "general_def": "Bảo đảm, cam kết chất lượng",
    "example": "pCoCoA guarantees throughput comparable to CoCoA+."
  },
  "impact": {
    "word": "impact",
    "ipa": "/ˈɪm.pækt/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tác động, ảnh hưởng).",
    "general_def": "Tác động, ảnh hưởng",
    "example": "RTTVAR has a strong impact on the final RTO value."
  },
  "implement": {
    "word": "implement",
    "ipa": "/ˈɪm.plɪ.ment/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cài đặt, triển khai thực tế).",
    "general_def": "Cài đặt, triển khai thực tế",
    "example": "The algorithms were implemented inside Californium."
  },
  "improve": {
    "word": "improve",
    "ipa": "/ɪmˈpruːv/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cải thiện, nâng cao).",
    "general_def": "Cải thiện, nâng cao",
    "example": "Adaptive timers improve packet delivery ratios."
  },
  "increase": {
    "word": "increase",
    "ipa": "/ɪnˈkriːs/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tăng lên, sự gia tăng).",
    "general_def": "Tăng lên, sự gia tăng",
    "example": "Traffic loads increase during event notifications."
  },
  "indicate": {
    "word": "indicate",
    "ipa": "/ˈɪn.dɪ.keɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (biểu thị, chỉ ra rằng).",
    "general_def": "Biểu thị, chỉ ra rằng",
    "example": "Simulation results indicate lower retransmission counts."
  },
  "influence": {
    "word": "influence",
    "ipa": "/ˈɪn.flu.əns/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ảnh hưởng, chi phối).",
    "general_def": "Ảnh hưởng, chi phối",
    "example": "Packet drops influence RTO variance estimations."
  },
  "interfere": {
    "word": "interfere",
    "ipa": "/ˌɪn.təˈfɪər/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (gây nhiễu, can thiệp vào).",
    "general_def": "Gây nhiễu, can thiệp vào",
    "example": "Competing traffic interferes with periodic transmissions."
  },
  "investigate": {
    "word": "investigate",
    "ipa": "/ɪnˈves.tɪ.ɡeɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (điều tra, khảo sát kỹ lưỡng).",
    "general_def": "Điều tra, khảo sát kỹ lưỡng",
    "example": "We investigate protocol trade-offs under high loads."
  },
  "layer": {
    "word": "layer",
    "ipa": "/ˈleɪ.ər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tầng giao thức trong mô hình mạng).",
    "general_def": "Tầng giao thức trong mô hình mạng",
    "example": "CoAP sits at the application layer above UDP."
  },
  "lightweight": {
    "word": "lightweight",
    "ipa": "/ˈlaɪt.weɪt/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (siêu nhẹ, tốn ít tài nguyên).",
    "general_def": "Siêu nhẹ, tốn ít tài nguyên",
    "example": "CoAP is a lightweight RESTful protocol."
  },
  "limitation": {
    "word": "limitation",
    "ipa": "/ˌlɪm.ɪˈteɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hạn chế, giới hạn kỹ thuật).",
    "general_def": "Hạn chế, giới hạn kỹ thuật",
    "example": "The proposed design overcomes previous limitations."
  },
  "mechanism": {
    "word": "mechanism",
    "ipa": "/ˈmek.ə.nɪ.zəm/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cơ chế hoạt động).",
    "general_def": "Cơ chế hoạt động",
    "example": "The backoff mechanism dampens network loads."
  },
  "metric": {
    "word": "metric",
    "ipa": "/ˈmet.rɪk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chỉ số đo lường hiệu năng).",
    "general_def": "Chỉ số đo lường hiệu năng",
    "example": "Settling time is a key performance metric."
  },
  "mitigate": {
    "word": "mitigate",
    "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giảm nhẹ, giảm thiểu thiệt hại).",
    "general_def": "Giảm nhẹ, giảm thiểu thiệt hại",
    "example": "pCoCoA mitigates premature timeout occurrences."
  },
  "model": {
    "word": "model",
    "ipa": "/ˈmɒd.əl/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (mô hình toán học hoặc kiến trúc).",
    "general_def": "Mô hình toán học hoặc kiến trúc",
    "example": "We model network traffic using bursty ON-OFF sources."
  },
  "monitor": {
    "word": "monitor",
    "ipa": "/ˈmɒn.ɪ.tər/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giám sát, theo dõi liên tục).",
    "general_def": "Giám sát, theo dõi liên tục",
    "example": "Nodes monitor round-trip delays for each destination."
  },
  "multiple": {
    "word": "multiple",
    "ipa": "/ˈmʌl.tɪ.pəl/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (nhiều, đa dạng).",
    "general_def": "Nhiều, đa dạng",
    "example": "Packets may require multiple retransmission attempts."
  },
  "negligible": {
    "word": "negligible",
    "ipa": "/ˈneɡ.lɪ.dʒə.bəl/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (không đáng kể, có thể bỏ qua).",
    "general_def": "Không đáng kể, có thể bỏ qua",
    "example": "CoCoA state incurs a negligible RAM footprint."
  },
  "network": {
    "word": "network",
    "ipa": "/ˈnet.wɜːk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (mạng lưới truyền thông).",
    "general_def": "Mạng lưới truyền thông",
    "example": "The sensor network collects environmental readings."
  },
  "node": {
    "word": "node",
    "ipa": "/nəʊd/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (nút mạng, thiết bị tham gia mạng).",
    "general_def": "Nút mạng, thiết bị tham gia mạng",
    "example": "Each node communicates with the central RPL router."
  },
  "observe": {
    "word": "observe",
    "ipa": "/əbˈzɜːv/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (quan sát thấy, ghi nhận được).",
    "general_def": "Quan sát thấy, ghi nhận được",
    "example": "We observe significant throughput gains with pCoCoA."
  },
  "obtain": {
    "word": "obtain",
    "ipa": "/əbˈteɪn/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thu được, đạt được).",
    "general_def": "Thu được, đạt được",
    "example": "The client obtains valid RTT measurements."
  },
  "occur": {
    "word": "occur",
    "ipa": "/əˈkɜːr/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (xảy ra, phát sinh).",
    "general_def": "Xảy ra, phát sinh",
    "example": "Buffer drops occur when bursty traffic surges."
  },
  "operation": {
    "word": "operation",
    "ipa": "/ˌɒp.ərˈeɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hoạt động vận hành).",
    "general_def": "Hoạt động vận hành",
    "example": "Adaptive control ensures safe protocol operation."
  },
  "optimize": {
    "word": "optimize",
    "ipa": "/ˈɒp.tɪ.maɪz/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tối ưu hóa hiệu năng).",
    "general_def": "Tối ưu hóa hiệu năng",
    "example": "CoCoA optimizes timeout settings for IoT links."
  },
  "outperform": {
    "word": "outperform",
    "ipa": "/ˌaʊt.pəˈfɔːm/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (vượt trội hơn, đạt kết quả tốt hơn).",
    "general_def": "Vượt trội hơn, đạt kết quả tốt hơn",
    "example": "CoCoA consistently outperforms default CoAP."
  },
  "packet": {
    "word": "packet",
    "ipa": "/ˈpæk.ɪt/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (gói tin truyền thông).",
    "general_def": "Gói tin truyền thông",
    "example": "Each packet contains a CoAP header and payload."
  },
  "parameter": {
    "word": "parameter",
    "ipa": "/pəˈræm.ɪ.tər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tham số định lượng trong công thức).",
    "general_def": "Tham số định lượng trong công thức",
    "example": "Tuning smoothing parameters stabilizes RTO growth."
  },
  "pattern": {
    "word": "pattern",
    "ipa": "/ˈpæt.ən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (khuôn mẫu, mô hình diễn biến).",
    "general_def": "Khuôn mẫu, mô hình diễn biến",
    "example": "Traffic patterns fluctuate between steady and bursty."
  },
  "peak": {
    "word": "peak",
    "ipa": "/piːk/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đỉnh cực đại, đạt đỉnh).",
    "general_def": "Đỉnh cực đại, đạt đỉnh",
    "example": "RTT peaks occur when intermediate queues fill up."
  },
  "performance": {
    "word": "performance",
    "ipa": "/pəˈfɔː.məns/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hiệu năng, chất lượng hoạt động).",
    "general_def": "Hiệu năng, chất lượng hoạt động",
    "example": "Throughput is an essential performance indicator."
  },
  "periodic": {
    "word": "periodic",
    "ipa": "/ˌpɪə.riˈɒd.ɪk/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (định kỳ, lặp lại đều đặn).",
    "general_def": "Định kỳ, lặp lại đều đặn",
    "example": "Sensors report periodic telemetry readings every 8s."
  },
  "phenomenon": {
    "word": "phenomenon",
    "ipa": "/fəˈnɒm.ɪ.nən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hiện tượng mạng).",
    "general_def": "Hiện tượng mạng",
    "example": "Congestion collapse is a devastating network phenomenon."
  },
  "pitfall": {
    "word": "pitfall",
    "ipa": "/ˈpɪt.fɔːl/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cạm bẫy tiềm ẩn, sai lầm dễ gặp).",
    "general_def": "Cạm bẫy tiềm ẩn, sai lầm dễ gặp",
    "example": "Premature timeout is a frequent pitfall of weak timers."
  },
  "policy": {
    "word": "policy",
    "ipa": "/ˈpɒl.ə.si/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chính sách, quy tắc xử lý).",
    "general_def": "Chính sách, quy tắc xử lý",
    "example": "The backoff policy scales the retransmission delay."
  },
  "potential": {
    "word": "potential",
    "ipa": "/pəˈten.ʃəl/",
    "pos": "Adj/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tiềm năng, khả dĩ).",
    "general_def": "Tiềm năng, khả dĩ",
    "example": "Smart congestion control has high potential in smart cities."
  },
  "precise": {
    "word": "precise",
    "ipa": "/prɪˈsaɪs/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chính xác, chuẩn xác tuyệt đối).",
    "general_def": "Chính xác, chuẩn xác tuyệt đối",
    "example": "pCoCoA provides precise mapping between CON and ACK."
  },
  "prevent": {
    "word": "prevent",
    "ipa": "/prɪˈvent/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ngăn ngừa, phòng ngừa).",
    "general_def": "Ngăn ngừa, phòng ngừa",
    "example": "The guard timer prevents duplicate packet releases."
  },
  "probability": {
    "word": "probability",
    "ipa": "/ˌprɒb.əˈbɪl.ə.ti/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (xác suất thống kê).",
    "general_def": "Xác suất thống kê",
    "example": "Loss probability escalates under network saturation."
  },
  "procedure": {
    "word": "procedure",
    "ipa": "/prəˈsiː.dʒər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (quy trình, thủ tục thực hiện).",
    "general_def": "Quy trình, thủ tục thực hiện",
    "example": "Algorithm 1 outlines the send and receive procedure."
  },
  "propose": {
    "word": "propose",
    "ipa": "/prəˈpəʊz/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đề xuất, kiến nghị).",
    "general_def": "Đề xuất, kiến nghị",
    "example": "The authors propose an improved RTO computation model."
  },
  "protocol": {
    "word": "protocol",
    "ipa": "/ˈprəʊ.tə.kɒl/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giao thức truyền thông).",
    "general_def": "Giao thức truyền thông",
    "example": "CoAP is an IETF application protocol for IoT."
  },
  "random": {
    "word": "random",
    "ipa": "/ˈræn.dəm/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ngẫu nhiên).",
    "general_def": "Ngẫu nhiên",
    "example": "RTO dithering picks a random timer in a safe range."
  },
  "rate": {
    "word": "rate",
    "ipa": "/reɪt/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tốc độ, tỷ lệ phần trăm).",
    "general_def": "Tốc độ, tỷ lệ phần trăm",
    "example": "Data rate is limited on 802.15.4 wireless radios."
  },
  "react": {
    "word": "react",
    "ipa": "/riˈækt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phản ứng lại trước thay đổi).",
    "general_def": "Phản ứng lại trước thay đổi",
    "example": "pCoCoA reacts swiftly when congestion is detected."
  },
  "receive": {
    "word": "receive",
    "ipa": "/rɪˈsiːv/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tiếp nhận bản tin).",
    "general_def": "Tiếp nhận bản tin",
    "example": "The client receives an ACK from the gateway."
  },
  "reduce": {
    "word": "reduce",
    "ipa": "/rɪˈdjuːs/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cắt giảm, thu nhỏ lại).",
    "general_def": "Cắt giảm, thu nhỏ lại",
    "example": "pCoCoA reduces the number of spurious transmissions."
  },
  "regulate": {
    "word": "regulate",
    "ipa": "/ˈreɡ.jʊ.leɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (điều tiết, điều hòa lưu lượng).",
    "general_def": "Điều tiết, điều hòa lưu lượng",
    "example": "Congestion control regulates transmission speeds."
  },
  "reliable": {
    "word": "reliable",
    "ipa": "/rɪˈlaɪ.ə.bəl/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tin cậy, bảo đảm không mất mát).",
    "general_def": "Tin cậy, bảo đảm không mất mát",
    "example": "CON messages provide reliable delivery over UDP."
  },
  "replace": {
    "word": "replace",
    "ipa": "/rɪˈpleɪs/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thay thế vị trí).",
    "general_def": "Thay thế vị trí",
    "example": "CoCoA-E replaces parameters alpha and beta with gamma."
  },
  "report": {
    "word": "report",
    "ipa": "/rɪˈpɔːt/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (báo cáo, gửi bản tin dữ liệu).",
    "general_def": "Báo cáo, gửi bản tin dữ liệu",
    "example": "Sensor nodes report temperature data periodically."
  },
  "request": {
    "word": "request",
    "ipa": "/rɪˈkwest/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bản tin yêu cầu từ client).",
    "general_def": "Bản tin yêu cầu từ client",
    "example": "The client transmits a CON POST request."
  },
  "require": {
    "word": "require",
    "ipa": "/rɪˈkwaɪər/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đòi hỏi, yêu cầu phải có).",
    "general_def": "Đòi hỏi, yêu cầu phải có",
    "example": "Reliable transactions require acknowledgement frames."
  },
  "reset": {
    "word": "reset",
    "ipa": "/ˌriːˈset/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thiết lập lại giá trị ban đầu).",
    "general_def": "Thiết lập lại giá trị ban đầu",
    "example": "The aging mechanism resets obsolete RTO values to 2s."
  },
  "resolve": {
    "word": "resolve",
    "ipa": "/rɪˈzɒlv/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giải quyết triệt để vấn đề).",
    "general_def": "Giải quyết triệt để vấn đề",
    "example": "The TC option resolves the RTT ambiguity challenge."
  },
  "resource": {
    "word": "resource",
    "ipa": "/rɪˈzɔːs/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tài nguyên hệ thống (cpu, ram, pin)).",
    "general_def": "Tài nguyên hệ thống (CPU, RAM, Pin)",
    "example": "Constrained nodes operate under strict resource budgets."
  },
  "response": {
    "word": "response",
    "ipa": "/rɪˈspɒns/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bản tin phản hồi trả về).",
    "general_def": "Bản tin phản hồi trả về",
    "example": "The server generates a 2.05 Content response."
  },
  "restrict": {
    "word": "restrict",
    "ipa": "/rɪˈstrɪkt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hạn chế, giới hạn).",
    "general_def": "Hạn chế, giới hạn",
    "example": "NSTART limits outstanding requests to one per destination."
  },
  "result": {
    "word": "result",
    "ipa": "/rɪˈzʌlt/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (kết quả thực nghiệm).",
    "general_def": "Kết quả thực nghiệm",
    "example": "Experimental results confirm significant throughput gains."
  },
  "robust": {
    "word": "robust",
    "ipa": "/rəʊˈbʌst/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bền bỉ, vững vàng trước lỗi).",
    "general_def": "Bền bỉ, vững vàng trước lỗi",
    "example": "pCoCoA is robust against bursty background traffic."
  },
  "route": {
    "word": "route",
    "ipa": "/ruːt/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tuyến đường truyền, định tuyến).",
    "general_def": "Tuyến đường truyền, định tuyến",
    "example": "Packets route through multihop wireless nodes."
  },
  "router": {
    "word": "router",
    "ipa": "/ˈruː.tər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bộ định tuyến).",
    "general_def": "Bộ định tuyến",
    "example": "The border router connects the sensor mesh to the Internet."
  },
  "sample": {
    "word": "sample",
    "ipa": "/ˈsɑːm.pəl/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (mẫu đo đạc thống kê).",
    "general_def": "Mẫu đo đạc thống kê",
    "example": "Each RTT sample refines the smoothed average."
  },
  "scenario": {
    "word": "scenario",
    "ipa": "/sɪˈnɑː.ri.əʊ/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (kịch bản khảo sát thử nghiệm).",
    "general_def": "Kịch bản khảo sát thử nghiệm",
    "example": "Two realistic scenarios test steady and bursty conditions."
  },
  "scheme": {
    "word": "scheme",
    "ipa": "/skiːm/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (sơ đồ, phương án giải pháp).",
    "general_def": "Sơ đồ, phương án giải pháp",
    "example": "RFC 6298 defines a classic RTO computation scheme."
  },
  "segment": {
    "word": "segment",
    "ipa": "/ˈseɡ.mənt/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phân đoạn gói tin tcp).",
    "general_def": "Phân đoạn gói tin TCP",
    "example": "CoAP handles message packets rather than byte segments."
  },
  "sender": {
    "word": "sender",
    "ipa": "/ˈsen.dər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bên gửi, nút phát bản tin).",
    "general_def": "Bên gửi, nút phát bản tin",
    "example": "The sender starts an RTO timer upon CON transmission."
  },
  "sensor": {
    "word": "sensor",
    "ipa": "/ˈsen.sər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cảm biến thu nhận môi trường).",
    "general_def": "Cảm biến thu nhận môi trường",
    "example": "Temperature sensors report environmental readings."
  },
  "sequence": {
    "word": "sequence",
    "ipa": "/ˈsiː.kwəns/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chuỗi tuần tự các sự kiện).",
    "general_def": "Chuỗi tuần tự các sự kiện",
    "example": "A sequence of timeouts triggers exponential backoff."
  },
  "server": {
    "word": "server",
    "ipa": "/ˈsɜː.vər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (phía máy chủ cung cấp tài nguyên).",
    "general_def": "Phía máy chủ cung cấp tài nguyên",
    "example": "The CoAP server serves incoming REST requests."
  },
  "settle": {
    "word": "settle",
    "ipa": "/ˈset.əl/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (lắng dịu, ổn định trở lại).",
    "general_def": "Lắng dịu, ổn định trở lại",
    "example": "The network settles after the traffic burst dissipates."
  },
  "severe": {
    "word": "severe",
    "ipa": "/sɪˈvɪər/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (nghiêm trọng, khốc liệt).",
    "general_def": "Nghiêm trọng, khốc liệt",
    "example": "Buffer overflows cause severe packet loss."
  },
  "shortcoming": {
    "word": "shortcoming",
    "ipa": "/ˈʃɔːtˌkʌm.ɪŋ/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (thiếu sót, khuyết điểm cố hữu).",
    "general_def": "Thiếu sót, khuyết điểm cố hữu",
    "example": "We analyze the shortcomings of the CoCoA+ algorithm."
  },
  "significant": {
    "word": "significant",
    "ipa": "/sɪɡˈnɪf.ɪ.kənt/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đáng kể, có ý nghĩa thống kê).",
    "general_def": "Đáng kể, có ý nghĩa thống kê",
    "example": "CoCoA yields significant throughput improvements."
  },
  "simulate": {
    "word": "simulate",
    "ipa": "/ˈsɪm.jʊ.leɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (mô phỏng lại bằng phần mềm).",
    "general_def": "Mô phỏng lại bằng phần mềm",
    "example": "Cooja simulates radio transmission propagation."
  },
  "sluggish": {
    "word": "sluggish",
    "ipa": "/ˈslʌɡ.ɪʃ/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chậm chạp, ì ạch).",
    "general_def": "Chậm chạp, ì ạch",
    "example": "Excessive filtering creates a sluggish timer response."
  },
  "smooth": {
    "word": "smooth",
    "ipa": "/smuːð/",
    "pos": "Verb/Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (làm mịn dữ liệu, êm thuận).",
    "general_def": "Làm mịn dữ liệu, êm thuận",
    "example": "EWMA produces a smoothed RTT estimate."
  },
  "solution": {
    "word": "solution",
    "ipa": "/səˈluː.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giải pháp kỹ thuật).",
    "general_def": "Giải pháp kỹ thuật",
    "example": "pCoCoA provides an innovative congestion control solution."
  },
  "spike": {
    "word": "spike",
    "ipa": "/spaɪk/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đỉnh nhọn đột biến).",
    "general_def": "Đỉnh nhọn đột biến",
    "example": "An RTT spike can mislead the variance calculator."
  },
  "sporadic": {
    "word": "sporadic",
    "ipa": "/spəˈræd.ɪk/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (rải rác, thi thoảng xảy ra).",
    "general_def": "Rải rác, thi thoảng xảy ra",
    "example": "Sporadic losses stem from wireless fading rather than congestion."
  },
  "spread": {
    "word": "spread",
    "ipa": "/spred/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (lan truyền, phân tán).",
    "general_def": "Lan truyền, phân tán",
    "example": "RDC jitters spread out round-trip delays."
  },
  "stability": {
    "word": "stability",
    "ipa": "/stəˈbɪl.ə.ti/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tính ổn định của hệ thống).",
    "general_def": "Tính ổn định của hệ thống",
    "example": "Dithering preserves overall network stability."
  },
  "stable": {
    "word": "stable",
    "ipa": "/ˈsteɪ.bəl/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ổn định, bền vững).",
    "general_def": "Ổn định, bền vững",
    "example": "The protocol maintains stable operation under heavy load."
  },
  "stack": {
    "word": "stack",
    "ipa": "/stæk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ngăn xếp giao thức (protocol stack)).",
    "general_def": "Ngăn xếp giao thức (Protocol Stack)",
    "example": "ContikiOS features an embedded uIP and 6LoWPAN stack."
  },
  "standard": {
    "word": "standard",
    "ipa": "/ˈstæn.dəd/",
    "pos": "Noun/Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tiêu chuẩn kỹ thuật).",
    "general_def": "Tiêu chuẩn kỹ thuật",
    "example": "CoAP is an approved IETF standard (RFC 7252)."
  },
  "starvation": {
    "word": "starvation",
    "ipa": "/stɑːˈveɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hiện tượng 'bỏ đói' không cấp băng thông).",
    "general_def": "Hiện tượng 'bỏ đói' không cấp băng thông",
    "example": "Unfair timers induce node starvation on distant hops."
  },
  "steady": {
    "word": "steady",
    "ipa": "/ˈsted.i/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ổn định, đều đặn).",
    "general_def": "Ổn định, đều đặn",
    "example": "Under steady traffic, CoCoA converges smoothly."
  },
  "strategy": {
    "word": "strategy",
    "ipa": "/ˈstræt.ə.dʒi/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (chiến lược, giải thuật định hướng).",
    "general_def": "Chiến lược, giải thuật định hướng",
    "example": "Different backoff strategies alter network fairness."
  },
  "structure": {
    "word": "structure",
    "ipa": "/ˈstrʌk.tʃər/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cấu trúc tổ chức).",
    "general_def": "Cấu trúc tổ chức",
    "example": "The article outlines the protocol structure in detail."
  },
  "subsequent": {
    "word": "subsequent",
    "ipa": "/ˈsʌb.sɪ.kwənt/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (kế tiếp, xảy ra sau đó).",
    "general_def": "Kế tiếp, xảy ra sau đó",
    "example": "Subsequent transmissions increment the counter option."
  },
  "summarize": {
    "word": "summarize",
    "ipa": "/ˈsʌm.ər.aɪz/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tóm tắt, tổng hợp lại).",
    "general_def": "Tóm tắt, tổng hợp lại",
    "example": "Table I summarizes existing congestion algorithms."
  },
  "technique": {
    "word": "technique",
    "ipa": "/tekˈniːk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (kỹ thuật, phương pháp chuyên môn).",
    "general_def": "Kỹ thuật, phương pháp chuyên môn",
    "example": "Dithering is a technique to evade packet collision lockstep."
  },
  "temporary": {
    "word": "temporary",
    "ipa": "/ˈtem.pər.ər.i/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (tạm thời, ngắn hạn).",
    "general_def": "Tạm thời, ngắn hạn",
    "example": "Temporary bursts subside after sensors finish reporting."
  },
  "testbed": {
    "word": "testbed",
    "ipa": "/ˈtest.bed/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hệ thống thử nghiệm phần cứng thật).",
    "general_def": "Hệ thống thử nghiệm phần cứng thật",
    "example": "FlockLab provides a realistic testbed for IoT research."
  },
  "threshold": {
    "word": "threshold",
    "ipa": "/ˈθreʃ.həʊld/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ngưỡng giới hạn kích hoạt).",
    "general_def": "Ngưỡng giới hạn kích hoạt",
    "example": "Timer thresholds prevent unbounded RTO growth."
  },
  "timeout": {
    "word": "timeout",
    "ipa": "/ˈtaɪm.aʊt/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hết hạn thời gian chờ).",
    "general_def": "Hết hạn thời gian chờ",
    "example": "When timeout occurs, the client triggers a retry."
  },
  "timestamp": {
    "word": "timestamp",
    "ipa": "/ˈtaɪm.stæmp/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (nhãn thời gian ghi nhận).",
    "general_def": "Nhãn thời gian ghi nhận",
    "example": "The sender stores a timestamp for each transmission attempt."
  },
  "topology": {
    "word": "topology",
    "ipa": "/təˈpɒl.ə.dʒi/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cấu trúc liên kết mạng).",
    "general_def": "Cấu trúc liên kết mạng",
    "example": "The testbed employs a 6x6 grid topology."
  },
  "trade-off": {
    "word": "trade-off",
    "ipa": "/ˈtreɪd.ɒf/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (sự đánh đổi kỹ thuật).",
    "general_def": "Sự đánh đổi kỹ thuật",
    "example": "There is a trade-off between memory footprint and responsiveness."
  },
  "transaction": {
    "word": "transaction",
    "ipa": "/trænˈzæk.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (giao dịch truyền thông trọn vẹn (con - ack)).",
    "general_def": "Giao dịch truyền thông trọn vẹn (CON - ACK)",
    "example": "A transaction concludes once the ACK is delivered."
  },
  "transceiver": {
    "word": "transceiver",
    "ipa": "/trænˈsiː.vər/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (bộ thu phát vô tuyến tích hợp).",
    "general_def": "Bộ thu phát vô tuyến tích hợp",
    "example": "Low-power transceivers operate in the 2.4 GHz ISM band."
  },
  "transmit": {
    "word": "transmit",
    "ipa": "/trænzˈmɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (truyền phát tín hiệu).",
    "general_def": "Truyền phát tín hiệu",
    "example": "Client motes transmit periodic telemetry frames."
  },
  "transmission": {
    "word": "transmission",
    "ipa": "/trænzˈmɪʃ.ən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (lượt truyền phát, sự truyền dẫn).",
    "general_def": "Lượt truyền phát, sự truyền dẫn",
    "example": "Each transmission consumes vital battery energy."
  },
  "unambiguous": {
    "word": "unambiguous",
    "ipa": "/ˌʌn.æmˈbɪɡ.ju.əs/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (rõ ràng, không bị nhập nhằng).",
    "general_def": "Rõ ràng, không bị nhập nhằng",
    "example": "TC options provide unambiguous packet matching."
  },
  "underestimate": {
    "word": "underestimate",
    "ipa": "/ˌʌn.dərˈes.tɪ.meɪt/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (ước lượng non, đánh giá thấp).",
    "general_def": "Ước lượng non, đánh giá thấp",
    "example": "Underestimating the RTO causes premature timeouts."
  },
  "update": {
    "word": "update",
    "ipa": "/ʌpˈdeɪt/",
    "pos": "Verb/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (cập nhật giá trị mới).",
    "general_def": "Cập nhật giá trị mới",
    "example": "Every ACK updates the running SRTT estimate."
  },
  "uplink": {
    "word": "uplink",
    "ipa": "/ˈʌp.lɪŋk/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (đường lên (từ thiết bị về trạm/máy chủ)).",
    "general_def": "Đường lên (từ thiết bị về trạm/máy chủ)",
    "example": "GPRS uplink bandwidth is restricted to 15 kbit/s."
  },
  "valid": {
    "word": "valid",
    "ipa": "/ˈvæl.ɪd/",
    "pos": "Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (hợp lệ, có giá trị chuẩn).",
    "general_def": "Hợp lệ, có giá trị chuẩn",
    "example": "Karn's rule ensures only valid RTT samples are recorded."
  },
  "variable": {
    "word": "variable",
    "ipa": "/ˈveə.ri.ə.bəl/",
    "pos": "Noun/Adj",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (biến số / có thể thay đổi).",
    "general_def": "Biến số / có thể thay đổi",
    "example": "VBF applies a variable factor to backoff timers."
  },
  "variation": {
    "word": "variation",
    "ipa": "/ˌveə.riˈeɪ.ʃən/",
    "pos": "Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (sự biến thiên, độ dao động).",
    "general_def": "Sự biến thiên, độ dao động",
    "example": "Delay variation dictates the required safety margin."
  },
  "verify": {
    "word": "verify",
    "ipa": "/ˈver.ɪ.faɪ/",
    "pos": "Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (kiểm chứng, xác nhận tính đúng đắn).",
    "general_def": "Kiểm chứng, xác nhận tính đúng đắn",
    "example": "Hardware tests verify the simulation hypotheses."
  },
  "weight": {
    "word": "weight",
    "ipa": "/weɪt/",
    "pos": "Noun/Verb",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (trọng số trong công thức tính toán).",
    "general_def": "Trọng số trong công thức tính toán",
    "example": "Strong RTO receives a higher weight in overall blending."
  },
  "wireless": {
    "word": "wireless",
    "ipa": "/ˈwaɪə.ləs/",
    "pos": "Adj/Noun",
    "telecom_def": "Trong Kỹ thuật Truyền thông: Áp dụng vào cơ chế phân tích và xử lý giao thức mạng (không dây, vô tuyến).",
    "general_def": "Không dây, vô tuyến",
    "example": "Wireless sensor networks suffer from fading and noise."
  }
};
