// Complete Telecommunications & English-Vietnamese Dictionary
const TELECOM_DICTIONARY = {
  "coap": {
    "word": "CoAP (Constrained Application Protocol)",
    "ipa": "/koʊ.æp/",
    "pos": "Danh từ (Viết tắt)",
    "vi": "Giao thức CoAP (RFC 7252)",
    "telecom_def": "Giao thức tầng ứng dụng kiến trúc RESTful (RFC 7252) dành riêng cho thiết bị IoT bị ràng buộc tài nguyên. Chạy trên UDP, tiêu đề 4 byte, hỗ trợ phát lại và tránh tắc nghẽn.",
    "general_def": "Giao thức truyền thông gọn nhẹ cho mạng IoT.",
    "example": "CoAP enables lightweight RESTful interactions over UDP."
  },
  "cocoa": {
    "word": "CoCoA",
    "ipa": "/koʊˈkoʊ.ə/",
    "pos": "Danh từ",
    "vi": "Giải thuật điều khiển tắc nghẽn CoCoA",
    "telecom_def": "Thuật toán điều khiển tắc nghẽn nâng cao cho CoAP chuẩn hóa bởi IETF CoRE WG, sử dụng bộ ước lượng RTT mạnh/yếu, hệ số thoái lui VBF và cơ chế lão hóa RTO.",
    "general_def": "Thuật toán kiểm soát tắc nghẽn thích ứng cho IoT.",
    "example": "CoCoA adapts RTO dynamically to network round-trip time."
  },
  "pcocoa": {
    "word": "pCoCoA",
    "ipa": "/piː.koʊˈkoʊ.ə/",
    "pos": "Danh từ",
    "vi": "Giải thuật pCoCoA (điều khiển tắc nghẽn chính xác)",
    "telecom_def": "Thuật toán cải tiến từ CoCoA+ của Bolettieri et al. (2018), sử dụng tùy chọn bộ đếm TC (Transmission Counter) để khớp chính xác CON-ACK và chặn dưới RTO bằng mdev_max theo Linux TCP.",
    "general_def": "Thuật toán kiểm soát tắc nghẽn chính xác cho CoAP.",
    "example": "pCoCoA eliminates spurious retransmissions."
  },
  "congestion": {
    "word": "congestion",
    "ipa": "/kənˈdʒes.tʃən/",
    "pos": "Danh từ",
    "vi": "Sự tắc nghẽn mạng",
    "telecom_def": "Hiện tượng tắc nghẽn mạng: Xảy ra khi lưu lượng nạp vào vượt quá dung lượng truyền dẫn của kênh hoặc bộ đệm, gây hàng đợi trễ dài, tràn bộ đệm và mất gói.",
    "general_def": "Sự ùn tắc, ứ nghẽn (giao thông, mạng).",
    "example": "Network congestion triggers severe packet losses."
  },
  "retransmission": {
    "word": "retransmission",
    "ipa": "/ˌriː.trænzˈmɪʃ.ən/",
    "pos": "Danh từ",
    "vi": "Lần truyền lại gói tin",
    "telecom_def": "Quá trình gửi lại gói tin khi bộ đếm RTO hết hạn mà chưa nhận được ACK.",
    "general_def": "Việc phát lại một thông điệp.",
    "example": "CoAP allows up to 4 retransmissions before declaring failure."
  },
  "throughput": {
    "word": "throughput",
    "ipa": "/ˈθruː.pʊt/",
    "pos": "Danh từ",
    "vi": "Thông lượng truyền tải hữu ích",
    "telecom_def": "Lượng dữ liệu hữu ích được truyền nhận thành công trên một đơn vị thời gian (bit/s, packet/s).",
    "general_def": "Năng suất đầu ra, lưu lượng sản phẩm trong một khoảng thời gian.",
    "example": "Carried load represents the effective application throughput."
  },
  "rto": {
    "word": "RTO (Retransmission Timeout)",
    "ipa": "/ˌɑːr.tiːˈoʊ/",
    "pos": "Danh từ (Viết tắt)",
    "vi": "Thời gian chờ truyền lại RTO",
    "telecom_def": "Khoảng thời gian tối đa phía phát chờ gói tin ACK từ phía thu trước khi quyết định gói tin đã mất và kích hoạt phát lại.",
    "general_def": "Thời hạn chờ hết hạn.",
    "example": "RTO is adaptively calculated from measured RTTs."
  },
  "rtt": {
    "word": "RTT (Round-Trip Time)",
    "ipa": "/ˌɑːr.tiːˈtiː/",
    "pos": "Danh từ (Viết tắt)",
    "vi": "Thời gian trễ khứ hồi RTT",
    "telecom_def": "Tổng thời gian từ khi gói tin được gửi đi tới khi nhận được gói tin xác nhận ACK quay trở lại.",
    "general_def": "Thời gian đi và về một vòng.",
    "example": "Measured RTT samples drive the smoothing estimators."
  },
  "spurious": {
    "word": "spurious",
    "ipa": "/ˈspjʊə.ri.əs/",
    "pos": "Tính từ",
    "vi": "Giả tạo / nhầm lẫn do RTO non",
    "telecom_def": "Truyền lại giả tạo (spurious retransmission): Việc phát lại một gói tin chưa hề bị mất mà chỉ bị trễ trong mạng do RTO bị ước lượng quá ngắn.",
    "general_def": "Sai lệch, giả mạo, không có cơ sở.",
    "example": "Spurious retransmissions waste precious bandwidth."
  },
  "backoff": {
    "word": "backoff",
    "ipa": "/ˈbæk.ɒf/",
    "pos": "Danh từ / Động từ",
    "vi": "Cơ chế thoái lui (lùi lại)",
    "telecom_def": "Cơ chế trì hoãn có chủ đích, tăng khoảng thời gian chờ đợi giữa các lần truyền lại kế tiếp để giảm áp lực lên mạng.",
    "general_def": "Lùi bước, thoái lui.",
    "example": "Binary exponential backoff doubles the RTO after every timeout."
  },
  "vbf": {
    "word": "VBF (Variable Backoff Factor)",
    "ipa": "/ˌviː.biːˈef/",
    "pos": "Danh từ",
    "vi": "Hệ số thoái lui khả biến VBF",
    "telecom_def": "Hệ số thoái lui của CoCoA thay đổi linh hoạt tùy RTO khởi tạo: 3 khi RTO<1s, 1.5 khi RTO>3s, 2 khi trong khoảng [1s, 3s].",
    "general_def": "Hệ số nhân lùi linh hoạt.",
    "example": "VBF scales timeouts faster when initial RTO is small."
  },
  "beb": {
    "word": "BEB (Binary Exponential Backoff)",
    "ipa": "/biː.iːˈbiː/",
    "pos": "Danh từ",
    "vi": "Thoái lui hàm mũ nhị phân",
    "telecom_def": "Thuật toán nhân đôi thời gian chờ sau mỗi lần truyền lỗi (2*RTO), tiêu chuẩn mặc định của CoAP RFC 7252.",
    "general_def": "Thoái lui nhân đôi theo hàm mũ.",
    "example": "Default CoAP applies BEB irrespective of RTT dynamics."
  },
  "bursty": {
    "word": "bursty",
    "ipa": "/ˈbɜː.sti/",
    "pos": "Tính từ",
    "vi": "Có tính bùng phát, dạng cụm xung",
    "telecom_def": "Lưu lượng bùng phát: Dữ liệu xuất hiện dồn dập với số lượng lớn trong thời gian ngắn xen kẽ giữa các khoảng im lặng dài.",
    "general_def": "Bùng nổ, xuất hiện dữ dội từng cơn.",
    "example": "Bursty traffic rapidly fills intermediate buffers."
  },
  "dithering": {
    "word": "dithering",
    "ipa": "/ˈdɪð.ər.ɪŋ/",
    "pos": "Danh từ",
    "vi": "Kỹ thuật rung ngẫu nhiên tránh va chạm",
    "telecom_def": "Chọn RTO ngẫu nhiên trong khoảng [RTO, 1.5*RTO] để tránh hiện tượng các nút mạng đồng loạt hết giờ cùng lúc gây xung đột truyền lại.",
    "general_def": "Sự dao động ngẫu nhiên phân tán.",
    "example": "Dithering prevents synchronized collisions."
  },
  "piggybacked": {
    "word": "piggybacked",
    "ipa": "/ˈpɪɡ.i.bækt/",
    "pos": "Tính từ / Động từ",
    "vi": "Được cõng kèm trong bản tin ACK",
    "telecom_def": "Gói phản hồi dữ liệu ứng dụng được gắn trực tiếp vào trong bản tin ACK để tiết kiệm băng thông mạng.",
    "general_def": "Cõng trên lưng, đính kèm.",
    "example": "The server replies with a response piggybacked onto a CoAP ACK."
  },
  "overflow": {
    "word": "overflow",
    "ipa": "/ˌoʊ.vərˈfloʊ/",
    "pos": "Danh từ / Động từ",
    "vi": "Sự tràn bộ đệm hàng đợi",
    "telecom_def": "Bộ đệm hàng đợi bị đầy khiến các gói tin đến sau bị loại bỏ (drop), là nguyên nhân cốt lõi gây mất gói trong mạng nghẽn.",
    "general_def": "Tràn ra ngoài do vượt sức chứa.",
    "example": "Buffer overflows trigger packet loss at relay nodes."
  },
  "lossy": {
    "word": "lossy",
    "ipa": "/ˈlɒs.i/",
    "pos": "Tính từ",
    "vi": "Tổn hao, dễ mất gói",
    "telecom_def": "Kênh truyền vô tuyến có tỷ lệ lỗi và suy hao tín hiệu cao khiến các gói tin thường xuyên bị hỏng hoặc mất.",
    "general_def": "Gây hao hụt, mất mát.",
    "example": "Low Power and Lossy Networks (LLN) suffer from intermittent connectivity."
  },
  "constrained": {
    "word": "constrained",
    "ipa": "/kənˈstreɪnd/",
    "pos": "Tính từ",
    "vi": "Bị ràng buộc tài nguyên",
    "telecom_def": "Chỉ các vi điều khiển nhúng bị hạn chế ngặt nghèo về RAM (vài kB), ROM, pin và năng lực xử lý (RFC 7228).",
    "general_def": "Bị gò bó, chịu giới hạn.",
    "example": "Constrained IoT nodes cannot run full-fledged TCP stacks."
  },
  "fairness": {
    "word": "fairness",
    "ipa": "/ˈfeə.nəs/",
    "pos": "Danh từ",
    "vi": "Tính công bằng mạng (Jain's Index)",
    "telecom_def": "Mức độ chia sẻ tài nguyên băng thông bình đẳng giữa các luồng mạng (đo bằng chỉ số Jain's Fairness Index từ 0 đến 1).",
    "general_def": "Sự công bằng, vô tư.",
    "example": "CoCoA maintains high network fairness in multihop setups."
  },
  "settling": {
    "word": "settling (settling time)",
    "ipa": "/ˈset.lɪŋ taɪm/",
    "pos": "Danh từ",
    "vi": "Thời gian lắng ổn định",
    "telecom_def": "Khoảng thời gian cần thiết để hệ thống xử lý hoàn tất ít nhất 80% lưu lượng bùng phát và đưa mạng về trạng thái ổn định.",
    "general_def": "Thời gian lắng đọng, ổn định.",
    "example": "CoCoA achieves shorter settling times during traffic bursts."
  },
  "rdc": {
    "word": "RDC (Radio Duty Cycling)",
    "ipa": "/ˌɑːr.diːˈsiː/",
    "pos": "Danh từ",
    "vi": "Chu kỳ hoạt động vô tuyến",
    "telecom_def": "Kỹ thuật tiết kiệm pin bằng cách cho chip thu phát vô tuyến ngủ phần lớn thời gian và chỉ thức dậy định kỳ để nghe kênh.",
    "general_def": "Chu kỳ nhiệm vụ của thiết bị vô tuyến.",
    "example": "ContikiMAC uses RDC to extend sensor battery lifetime."
  },
  "acknowledgement": {
    "word": "acknowledgement (ACK)",
    "ipa": "/əkˈnɒl.ɪdʒ.mənt/",
    "pos": "Danh từ",
    "vi": "Bản tin báo nhận (ACK)",
    "telecom_def": "Gói tin gửi về từ bên nhận để xác nhận một bản tin CON đã được nhận an toàn và toàn vẹn.",
    "general_def": "Sự thừa nhận, sự báo nhận.",
    "example": "The reception of an ACK stops the retransmission timer."
  },
  "stop-and-wait": {
    "word": "stop-and-wait",
    "ipa": "/ˌstɒp.əndˈweɪt/",
    "pos": "Tính từ / Danh từ",
    "vi": "Giao thức Dừng và Chờ",
    "telecom_def": "Mô hình truyền tin trong đó nút phát chỉ gửi đúng 1 gói tin và phải dừng lại chờ nhận được ACK rồi mới được gửi tiếp (NSTART=1).",
    "general_def": "Làm từng bước, chờ xong mới làm tiếp.",
    "example": "CoAP default specification enforces a stop-and-wait interaction model."
  },
  "multihop": {
    "word": "multihop",
    "ipa": "/ˈmʌl.ti.hɒp/",
    "pos": "Tính từ",
    "vi": "Đa chặng",
    "telecom_def": "Hình thức truyền thông mà gói tin phải qua nhiều nút trung gian (relay) chuyển tiếp trước khi tới đích.",
    "general_def": "Trải qua nhiều chặng dừng.",
    "example": "Multihop paths experience higher delay jitter."
  },
  "payload": {
    "word": "payload",
    "ipa": "/ˈpeɪ.ləʊd/",
    "pos": "Danh từ",
    "vi": "Tải trọng dữ liệu tầng ứng dụng",
    "telecom_def": "Phần dữ liệu thực sự của tầng ứng dụng được chứa trong gói tin, không bao gồm các phần tiêu đề điều khiển.",
    "general_def": "Khối lượng hàng chuyên chở có ích.",
    "example": "The sensor reading is carried inside the 95-byte payload."
  },
  "deviance": {
    "word": "deviance (mdev_max)",
    "ipa": "/ˈdiː.vi.əns/",
    "pos": "Danh từ",
    "vi": "Độ lệch trung bình",
    "telecom_def": "Độ chênh lệch giữa giá trị đo thực tế và giá trị kỳ vọng, được pCoCoA mượn từ Linux TCP làm chặn dưới bảo vệ RTO.",
    "general_def": "Sự sai khác, độ lệch.",
    "example": "mdev_max prevents RTO from dropping below safe margins."
  },
  "tc": {
    "word": "TC (Transmission Counter)",
    "ipa": "/ˌtiːˈsiː/",
    "pos": "Danh từ",
    "vi": "Bộ đếm số lần truyền",
    "telecom_def": "Tùy chọn CoAP mới do pCoCoA đề xuất. Giá trị khởi tạo là 1 và tăng dần sau mỗi lần phát lại, được nút nhận phản hồi lại trong ACK.",
    "general_def": "Bộ đếm số lần truyền.",
    "example": "The TC option uniquely matches every ACK to its specific CON attempt."
  },
  "abstract": {
    "word": "abstract",
    "ipa": "/ˈæb.strækt/",
    "pos": "Danh từ",
    "vi": "Tóm tắt, phần trích yếu nội dung bài báo khoa học",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tóm tắt, phần trích yếu nội dung bài báo khoa học'.",
    "general_def": "Tóm tắt, phần trích yếu nội dung bài báo khoa học",
    "example": "Example in text: '... abstract ...'"
  },
  "academia": {
    "word": "academia",
    "ipa": "/ˌæk.əˈdiː.mi.ə/",
    "pos": "Danh từ",
    "vi": "Giới học thuật, môi trường nghiên cứu đại học",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giới học thuật, môi trường nghiên cứu đại học'.",
    "general_def": "Giới học thuật, môi trường nghiên cứu đại học",
    "example": "Example in text: '... academia ...'"
  },
  "accelerates": {
    "word": "accelerates",
    "ipa": "/əkˈsel.ə.reɪts/",
    "pos": "Động từ",
    "vi": "Tăng tốc, thúc đẩy nhanh hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tăng tốc, thúc đẩy nhanh hơn'.",
    "general_def": "Tăng tốc, thúc đẩy nhanh hơn",
    "example": "Example in text: '... accelerates ...'"
  },
  "according": {
    "word": "according",
    "ipa": "/əˈkɔː.dɪŋ/",
    "pos": "Giới từ",
    "vi": "Theo như, căn cứ theo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'theo như, căn cứ theo'.",
    "general_def": "Theo như, căn cứ theo",
    "example": "Example in text: '... according ...'"
  },
  "accurate": {
    "word": "accurate",
    "ipa": "/ˈæk.jə.rət/",
    "pos": "Tính từ",
    "vi": "Chính xác, chuẩn xác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chính xác, chuẩn xác'.",
    "general_def": "Chính xác, chuẩn xác",
    "example": "Example in text: '... accurate ...'"
  },
  "achieved": {
    "word": "achieved",
    "ipa": "/əˈtʃiːvd/",
    "pos": "Động từ",
    "vi": "Đã đạt được, thu được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã đạt được, thu được'.",
    "general_def": "Đã đạt được, thu được",
    "example": "Example in text: '... achieved ...'"
  },
  "achieves": {
    "word": "achieves",
    "ipa": "/əˈtʃiːvz/",
    "pos": "Động từ",
    "vi": "Đạt được, hoàn thành",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đạt được, hoàn thành'.",
    "general_def": "Đạt được, hoàn thành",
    "example": "Example in text: '... achieves ...'"
  },
  "ack": {
    "word": "ack",
    "ipa": "/æk/",
    "pos": "Danh từ",
    "vi": "Bản tin báo nhận ACK (Acknowledgement)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản tin báo nhận ack (acknowledgement)'.",
    "general_def": "Bản tin báo nhận ACK (Acknowledgement)",
    "example": "Example in text: '... ack ...'"
  },
  "across": {
    "word": "across",
    "ipa": "/əˈkrɒs/",
    "pos": "Giới từ",
    "vi": "Xuyên suốt, trên khắp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xuyên suốt, trên khắp'.",
    "general_def": "Xuyên suốt, trên khắp",
    "example": "Example in text: '... across ...'"
  },
  "active": {
    "word": "active",
    "ipa": "/ˈæk.tɪv/",
    "pos": "Tính từ",
    "vi": "Đang hoạt động, tích cực, sôi nổi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang hoạt động, tích cực, sôi nổi'.",
    "general_def": "Đang hoạt động, tích cực, sôi nổi",
    "example": "Example in text: '... active ...'"
  },
  "activities": {
    "word": "activities",
    "ipa": "/ækˈtɪv.ə.tiz/",
    "pos": "Danh từ",
    "vi": "Các hoạt động, tiến trình công việc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hoạt động, tiến trình công việc'.",
    "general_def": "Các hoạt động, tiến trình công việc",
    "example": "Example in text: '... activities ...'"
  },
  "ad": {
    "word": "ad",
    "ipa": "/æd/",
    "pos": "Danh từ",
    "vi": "Quảng cáo; trong Ad Hoc nghĩa là mạng tùy biến không dây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quảng cáo; trong ad hoc nghĩa là mạng tùy biến không dây'.",
    "general_def": "Quảng cáo; trong Ad Hoc nghĩa là mạng tùy biến không dây",
    "example": "Example in text: '... ad ...'"
  },
  "adaptation": {
    "word": "adaptation",
    "ipa": "/ˌæd.æpˈteɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự thích nghi, sự điều chỉnh thích ứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự thích nghi, sự điều chỉnh thích ứng'.",
    "general_def": "Sự thích nghi, sự điều chỉnh thích ứng",
    "example": "Example in text: '... adaptation ...'"
  },
  "adapting": {
    "word": "adapting",
    "ipa": "/əˈdæp.tɪŋ/",
    "pos": "Động từ",
    "vi": "Đang thích ứng, đang điều chỉnh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang thích ứng, đang điều chỉnh'.",
    "general_def": "Đang thích ứng, đang điều chỉnh",
    "example": "Example in text: '... adapting ...'"
  },
  "adaptive": {
    "word": "adaptive",
    "ipa": "/əˈdæp.tɪv/",
    "pos": "Tính từ",
    "vi": "Có tính thích ứng, tự thích nghi theo môi trường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có tính thích ứng, tự thích nghi theo môi trường'.",
    "general_def": "Có tính thích ứng, tự thích nghi theo môi trường",
    "example": "Example in text: '... adaptive ...'"
  },
  "adhoc": {
    "word": "adhoc",
    "ipa": "/æd ˈhɒk/",
    "pos": "Tính từ",
    "vi": "Tùy biến (mạng ad-hoc: mạng không dây tự cấu hình không cần trạm gốc)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tùy biến (mạng ad-hoc: mạng không dây tự cấu hình không cần trạm gốc)'.",
    "general_def": "Tùy biến (mạng ad-hoc: mạng không dây tự cấu hình không cần trạm gốc)",
    "example": "Example in text: '... adhoc ...'"
  },
  "adjust": {
    "word": "adjust",
    "ipa": "/əˈdʒʌst/",
    "pos": "Động từ",
    "vi": "Điều chỉnh, hiệu chỉnh tham số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điều chỉnh, hiệu chỉnh tham số'.",
    "general_def": "Điều chỉnh, hiệu chỉnh tham số",
    "example": "Example in text: '... adjust ...'"
  },
  "adopts": {
    "word": "adopts",
    "ipa": "/əˈdɒpts/",
    "pos": "Động từ",
    "vi": "Áp dụng, tiếp nhận sử dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'áp dụng, tiếp nhận sử dụng'.",
    "general_def": "Áp dụng, tiếp nhận sử dụng",
    "example": "Example in text: '... adopts ...'"
  },
  "advanced": {
    "word": "advanced",
    "ipa": "/ədˈvɑːnst/",
    "pos": "Tính từ",
    "vi": "Nâng cao, tiên tiến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nâng cao, tiên tiến'.",
    "general_def": "Nâng cao, tiên tiến",
    "example": "Example in text: '... advanced ...'"
  },
  "affect": {
    "word": "affect",
    "ipa": "/əˈfekt/",
    "pos": "Động từ",
    "vi": "Ảnh hưởng, tác động đến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ảnh hưởng, tác động đến'.",
    "general_def": "Ảnh hưởng, tác động đến",
    "example": "Example in text: '... affect ...'"
  },
  "affiliations": {
    "word": "affiliations",
    "ipa": "/əˌfɪl.iˈeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Đơn vị công tác, cơ quan trực thuộc của tác giả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đơn vị công tác, cơ quan trực thuộc của tác giả'.",
    "general_def": "Đơn vị công tác, cơ quan trực thuộc của tác giả",
    "example": "Example in text: '... affiliations ...'"
  },
  "after": {
    "word": "after",
    "ipa": "/ˈɑːf.tər/",
    "pos": "Giới từ",
    "vi": "Sau khi, tiếp sau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sau khi, tiếp sau'.",
    "general_def": "Sau khi, tiếp sau",
    "example": "Example in text: '... after ...'"
  },
  "against": {
    "word": "against",
    "ipa": "/əˈɡenst/",
    "pos": "Giới từ",
    "vi": "Đối chiếu với, so sánh chống lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đối chiếu với, so sánh chống lại'.",
    "general_def": "Đối chiếu với, so sánh chống lại",
    "example": "Example in text: '... against ...'"
  },
  "age": {
    "word": "age",
    "ipa": "/eɪdʒ/",
    "pos": "Động từ/Danh từ",
    "vi": "Lão hóa, già đi, tuổi thọ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lão hóa, già đi, tuổi thọ'.",
    "general_def": "Lão hóa, già đi, tuổi thọ",
    "example": "Example in text: '... age ...'"
  },
  "ageing": {
    "word": "ageing",
    "ipa": "/ˈeɪ.dʒɪŋ/",
    "pos": "Danh từ",
    "vi": "Cơ chế lão hóa thông tin mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cơ chế lão hóa thông tin mạng'.",
    "general_def": "Cơ chế lão hóa thông tin mạng",
    "example": "Example in text: '... ageing ...'"
  },
  "aging": {
    "word": "aging",
    "ipa": "/ˈeɪ.dʒɪŋ/",
    "pos": "Danh từ",
    "vi": "Sự lão hóa (làm mờ thông tin đo đạc cũ)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự lão hóa (làm mờ thông tin đo đạc cũ)'.",
    "general_def": "Sự lão hóa (làm mờ thông tin đo đạc cũ)",
    "example": "Example in text: '... aging ...'"
  },
  "aim": {
    "word": "aim",
    "ipa": "/eɪm/",
    "pos": "Động từ/Danh từ",
    "vi": "Mục tiêu, nhằm mục đích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mục tiêu, nhằm mục đích'.",
    "general_def": "Mục tiêu, nhằm mục đích",
    "example": "Example in text: '... aim ...'"
  },
  "alerts": {
    "word": "alerts",
    "ipa": "/əˈlɜːts/",
    "pos": "Danh từ",
    "vi": "Các bản tin cảnh báo khẩn cấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bản tin cảnh báo khẩn cấp'.",
    "general_def": "Các bản tin cảnh báo khẩn cấp",
    "example": "Example in text: '... alerts ...'"
  },
  "algorithm": {
    "word": "algorithm",
    "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
    "pos": "Danh từ",
    "vi": "Thuật toán, giải thuật xử lý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thuật toán, giải thuật xử lý'.",
    "general_def": "Thuật toán, giải thuật xử lý",
    "example": "Example in text: '... algorithm ...'"
  },
  "algorithms": {
    "word": "algorithms",
    "ipa": "/ˈæl.ɡə.rɪ.ðəmz/",
    "pos": "Danh từ",
    "vi": "Các thuật toán, giải thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thuật toán, giải thuật'.",
    "general_def": "Các thuật toán, giải thuật",
    "example": "Example in text: '... algorithms ...'"
  },
  "all": {
    "word": "all",
    "ipa": "/ɔːl/",
    "pos": "Lượng từ",
    "vi": "Tất cả, toàn bộ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tất cả, toàn bộ'.",
    "general_def": "Tất cả, toàn bộ",
    "example": "Example in text: '... all ...'"
  },
  "allow": {
    "word": "allow",
    "ipa": "/əˈlaʊ/",
    "pos": "Động từ",
    "vi": "Cho phép",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cho phép'.",
    "general_def": "Cho phép",
    "example": "Example in text: '... allow ...'"
  },
  "allows": {
    "word": "allows",
    "ipa": "/əˈlaʊz/",
    "pos": "Động từ",
    "vi": "Cho phép thực hiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cho phép thực hiện'.",
    "general_def": "Cho phép thực hiện",
    "example": "Example in text: '... allows ...'"
  },
  "alpha": {
    "word": "alpha",
    "ipa": "/ˈæl.fə/",
    "pos": "Danh từ",
    "vi": "Hệ số alpha trong công thức lọc trượt mũ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hệ số alpha trong công thức lọc trượt mũ'.",
    "general_def": "Hệ số alpha trong công thức lọc trượt mũ",
    "example": "Example in text: '... alpha ...'"
  },
  "also": {
    "word": "also",
    "ipa": "/ˈɔːl.səʊ/",
    "pos": "Trạng từ",
    "vi": "Cũng, hơn nữa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cũng, hơn nữa'.",
    "general_def": "Cũng, hơn nữa",
    "example": "Example in text: '... also ...'"
  },
  "alternative": {
    "word": "alternative",
    "ipa": "/ɒlˈtɜː.nə.tɪv/",
    "pos": "Tính từ/Danh từ",
    "vi": "Thay thế, phương án thay thế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thay thế, phương án thay thế'.",
    "general_def": "Thay thế, phương án thay thế",
    "example": "Example in text: '... alternative ...'"
  },
  "ambiguity": {
    "word": "ambiguity",
    "ipa": "/ˌæm.bɪˈɡjuː.ə.ti/",
    "pos": "Danh từ",
    "vi": "Sự nhập nhằng (RTT ambiguity: không phân biệt được ACK của lần phát nào)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự nhập nhằng (rtt ambiguity: không phân biệt được ack của lần phát nào)'.",
    "general_def": "Sự nhập nhằng (RTT ambiguity: không phân biệt được ACK của lần phát nào)",
    "example": "Example in text: '... ambiguity ...'"
  },
  "amount": {
    "word": "amount",
    "ipa": "/əˈmaʊnt/",
    "pos": "Danh từ",
    "vi": "Lượng, số lượng dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lượng, số lượng dữ liệu'.",
    "general_def": "Lượng, số lượng dữ liệu",
    "example": "Example in text: '... amount ...'"
  },
  "analysis": {
    "word": "analysis",
    "ipa": "/əˈnæl.ə.sɪs/",
    "pos": "Danh từ",
    "vi": "Sự phân tích chuyên sâu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự phân tích chuyên sâu'.",
    "general_def": "Sự phân tích chuyên sâu",
    "example": "Example in text: '... analysis ...'"
  },
  "and": {
    "word": "and",
    "ipa": "/ænd/",
    "pos": "Liên từ",
    "vi": "Và",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'và'.",
    "general_def": "Và",
    "example": "Example in text: '... and ...'"
  },
  "another": {
    "word": "another",
    "ipa": "/əˈnʌð.ər/",
    "pos": "Đại từ",
    "vi": "Một cái khác, người khác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cái khác, người khác'.",
    "general_def": "Một cái khác, người khác",
    "example": "Example in text: '... another ...'"
  },
  "any": {
    "word": "any",
    "ipa": "/ˈen.i/",
    "pos": "Lượng từ",
    "vi": "Bất kỳ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bất kỳ'.",
    "general_def": "Bất kỳ",
    "example": "Example in text: '... any ...'"
  },
  "appealing": {
    "word": "appealing",
    "ipa": "/əˈpiː.lɪŋ/",
    "pos": "Tính từ",
    "vi": "Hấp dẫn, đầy triển vọng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hấp dẫn, đầy triển vọng'.",
    "general_def": "Hấp dẫn, đầy triển vọng",
    "example": "Example in text: '... appealing ...'"
  },
  "application": {
    "word": "application",
    "ipa": "/ˌæp.lɪˈkeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Ứng dụng, tầng ứng dụng trong mô hình mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ứng dụng, tầng ứng dụng trong mô hình mạng'.",
    "general_def": "Ứng dụng, tầng ứng dụng trong mô hình mạng",
    "example": "Example in text: '... application ...'"
  },
  "applications": {
    "word": "applications",
    "ipa": "/ˌæp.lɪˈkeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các ứng dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các ứng dụng'.",
    "general_def": "Các ứng dụng",
    "example": "Example in text: '... applications ...'"
  },
  "approaches": {
    "word": "approaches",
    "ipa": "/əˈprəʊ.tʃɪz/",
    "pos": "Danh từ/Động từ",
    "vi": "Các phương pháp tiếp cận / tiến lại gần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các phương pháp tiếp cận / tiến lại gần'.",
    "general_def": "Các phương pháp tiếp cận / tiến lại gần",
    "example": "Example in text: '... approaches ...'"
  },
  "are": {
    "word": "are",
    "ipa": "/ɑːr/",
    "pos": "Động từ to be",
    "vi": "Là, thì, ở",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'là, thì, ở'.",
    "general_def": "Là, thì, ở",
    "example": "Example in text: '... are ...'"
  },
  "area": {
    "word": "area",
    "ipa": "/ˈeə.ri.ə/",
    "pos": "Danh từ",
    "vi": "Khu vực, vùng phủ sóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khu vực, vùng phủ sóng'.",
    "general_def": "Khu vực, vùng phủ sóng",
    "example": "Example in text: '... area ...'"
  },
  "arrival": {
    "word": "arrival",
    "ipa": "/əˈraɪ.vəl/",
    "pos": "Danh từ",
    "vi": "Sự đến nơi của gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đến nơi của gói tin'.",
    "general_def": "Sự đến nơi của gói tin",
    "example": "Example in text: '... arrival ...'"
  },
  "article": {
    "word": "article",
    "ipa": "/ˈɑː.tɪ.kəl/",
    "pos": "Danh từ",
    "vi": "Bài báo, bài viết khoa học",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bài báo, bài viết khoa học'.",
    "general_def": "Bài báo, bài viết khoa học",
    "example": "Example in text: '... article ...'"
  },
  "associated": {
    "word": "associated",
    "ipa": "/əˈsəʊ.si.eɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Được liên kết với, gắn liền với",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được liên kết với, gắn liền với'.",
    "general_def": "Được liên kết với, gắn liền với",
    "example": "Example in text: '... associated ...'"
  },
  "assuring": {
    "word": "assuring",
    "ipa": "/əˈʃɔː.rɪŋ/",
    "pos": "Động từ",
    "vi": "Đảm bảo, cam đoan",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đảm bảo, cam đoan'.",
    "general_def": "Đảm bảo, cam đoan",
    "example": "Example in text: '... assuring ...'"
  },
  "attempts": {
    "word": "attempts",
    "ipa": "/əˈtempts/",
    "pos": "Danh từ",
    "vi": "Các lần thử, các lần phát lại gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các lần thử, các lần phát lại gói tin'.",
    "general_def": "Các lần thử, các lần phát lại gói tin",
    "example": "Example in text: '... attempts ...'"
  },
  "authors": {
    "word": "authors",
    "ipa": "/ˈɔː.θərz/",
    "pos": "Danh từ",
    "vi": "Các tác giả của công trình",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tác giả của công trình'.",
    "general_def": "Các tác giả của công trình",
    "example": "Example in text: '... authors ...'"
  },
  "available": {
    "word": "available",
    "ipa": "/əˈveɪ.lə.bəl/",
    "pos": "Tính từ",
    "vi": "Có sẵn, khả dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có sẵn, khả dụng'.",
    "general_def": "Có sẵn, khả dụng",
    "example": "Example in text: '... available ...'"
  },
  "average": {
    "word": "average",
    "ipa": "/ˈæv.ər.ɪdʒ/",
    "pos": "Tính từ/Danh từ",
    "vi": "Trung bình, giá trị bình quân",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trung bình, giá trị bình quân'.",
    "general_def": "Trung bình, giá trị bình quân",
    "example": "Example in text: '... average ...'"
  },
  "avoid": {
    "word": "avoid",
    "ipa": "/əˈvɔɪd/",
    "pos": "Động từ",
    "vi": "Tránh khỏi, ngăn ngừa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tránh khỏi, ngăn ngừa'.",
    "general_def": "Tránh khỏi, ngăn ngừa",
    "example": "Example in text: '... avoid ...'"
  },
  "back": {
    "word": "back",
    "ipa": "/bæk/",
    "pos": "Trạng từ",
    "vi": "Quay lại, phía sau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quay lại, phía sau'.",
    "general_def": "Quay lại, phía sau",
    "example": "Example in text: '... back ...'"
  },
  "bandwidth": {
    "word": "bandwidth",
    "ipa": "/ˈbænd.wɪtθ/",
    "pos": "Danh từ",
    "vi": "Băng thông kênh truyền (Hz hoặc bit/s)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'băng thông kênh truyền (hz hoặc bit/s)'.",
    "general_def": "Băng thông kênh truyền (Hz hoặc bit/s)",
    "example": "Example in text: '... bandwidth ...'"
  },
  "base": {
    "word": "base",
    "ipa": "/beɪs/",
    "pos": "Danh từ",
    "vi": "Cơ sở, nền tảng, mức cơ bản",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cơ sở, nền tảng, mức cơ bản'.",
    "general_def": "Cơ sở, nền tảng, mức cơ bản",
    "example": "Example in text: '... base ...'"
  },
  "based": {
    "word": "based",
    "ipa": "/beɪst/",
    "pos": "Tính từ",
    "vi": "Dựa trên, căn cứ vào",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dựa trên, căn cứ vào'.",
    "general_def": "Dựa trên, căn cứ vào",
    "example": "Example in text: '... based ...'"
  },
  "basic": {
    "word": "basic",
    "ipa": "/ˈbeɪ.sɪk/",
    "pos": "Tính từ",
    "vi": "Cơ bản, sơ cấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cơ bản, sơ cấp'.",
    "general_def": "Cơ bản, sơ cấp",
    "example": "Example in text: '... basic ...'"
  },
  "battery": {
    "word": "battery",
    "ipa": "/ˈbæt.ər.i/",
    "pos": "Danh từ",
    "vi": "Nguồn pin của nút cảm biến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nguồn pin của nút cảm biến'.",
    "general_def": "Nguồn pin của nút cảm biến",
    "example": "Example in text: '... battery ...'"
  },
  "because": {
    "word": "because",
    "ipa": "/bɪˈkɒz/",
    "pos": "Liên từ",
    "vi": "Bởi vì, do",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bởi vì, do'.",
    "general_def": "Bởi vì, do",
    "example": "Example in text: '... because ...'"
  },
  "become": {
    "word": "become",
    "ipa": "/bɪˈkʌm/",
    "pos": "Động từ",
    "vi": "Trở nên, trở thành",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trở nên, trở thành'.",
    "general_def": "Trở nên, trở thành",
    "example": "Example in text: '... become ...'"
  },
  "before": {
    "word": "before",
    "ipa": "/bɪˈfɔːr/",
    "pos": "Giới từ",
    "vi": "Trước khi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trước khi'.",
    "general_def": "Trước khi",
    "example": "Example in text: '... before ...'"
  },
  "behave": {
    "word": "behave",
    "ipa": "/bɪˈheɪv/",
    "pos": "Động từ",
    "vi": "Hành xử, hoạt động thể hiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hành xử, hoạt động thể hiện'.",
    "general_def": "Hành xử, hoạt động thể hiện",
    "example": "Example in text: '... behave ...'"
  },
  "behavior": {
    "word": "behavior",
    "ipa": "/bɪˈheɪ.vjər/",
    "pos": "Danh từ",
    "vi": "Hành vi, đặc tính hoạt động của giao thức",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hành vi, đặc tính hoạt động của giao thức'.",
    "general_def": "Hành vi, đặc tính hoạt động của giao thức",
    "example": "Example in text: '... behavior ...'"
  },
  "behind": {
    "word": "behind",
    "ipa": "/bɪˈhaɪnd/",
    "pos": "Giới từ",
    "vi": "Đằng sau, cơ sở phía sau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đằng sau, cơ sở phía sau'.",
    "general_def": "Đằng sau, cơ sở phía sau",
    "example": "Example in text: '... behind ...'"
  },
  "being": {
    "word": "being",
    "ipa": "/ˈbiː.ɪŋ/",
    "pos": "Động từ",
    "vi": "Đang là, đang được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang là, đang được'.",
    "general_def": "Đang là, đang được",
    "example": "Example in text: '... being ...'"
  },
  "belong": {
    "word": "belong",
    "ipa": "/bɪˈlɒŋ/",
    "pos": "Động từ",
    "vi": "Thuộc về",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thuộc về'.",
    "general_def": "Thuộc về",
    "example": "Example in text: '... belong ...'"
  },
  "below": {
    "word": "below",
    "ipa": "/bɪˈləʊ/",
    "pos": "Giới từ",
    "vi": "Bên dưới, thấp hơn ngưỡng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bên dưới, thấp hơn ngưỡng'.",
    "general_def": "Bên dưới, thấp hơn ngưỡng",
    "example": "Example in text: '... below ...'"
  },
  "benchmark": {
    "word": "benchmark",
    "ipa": "/ˈbentʃ.mɑːk/",
    "pos": "Danh từ",
    "vi": "Tiêu chuẩn đối sánh hiệu năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiêu chuẩn đối sánh hiệu năng'.",
    "general_def": "Tiêu chuẩn đối sánh hiệu năng",
    "example": "Example in text: '... benchmark ...'"
  },
  "best": {
    "word": "best",
    "ipa": "/best/",
    "pos": "Tính từ",
    "vi": "Tốt nhất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tốt nhất'.",
    "general_def": "Tốt nhất",
    "example": "Example in text: '... best ...'"
  },
  "better": {
    "word": "better",
    "ipa": "/ˈbet.ər/",
    "pos": "Tính từ",
    "vi": "Tốt hơn, vượt trội hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tốt hơn, vượt trội hơn'.",
    "general_def": "Tốt hơn, vượt trội hơn",
    "example": "Example in text: '... better ...'"
  },
  "between": {
    "word": "between",
    "ipa": "/bɪˈtwiːn/",
    "pos": "Giới từ",
    "vi": "Ở giữa hai đối tượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ở giữa hai đối tượng'.",
    "general_def": "Ở giữa hai đối tượng",
    "example": "Example in text: '... between ...'"
  },
  "billion": {
    "word": "billion",
    "ipa": "/ˈbɪl.jən/",
    "pos": "Danh từ",
    "vi": "Tỷ (1.000.000.000)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tỷ (1.000.000.000)'.",
    "general_def": "Tỷ (1.000.000.000)",
    "example": "Example in text: '... billion ...'"
  },
  "binary": {
    "word": "binary",
    "ipa": "/ˈbaɪ.nər.i/",
    "pos": "Tính từ",
    "vi": "Nhị phân, hệ cơ số 2",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhị phân, hệ cơ số 2'.",
    "general_def": "Nhị phân, hệ cơ số 2",
    "example": "Example in text: '... binary ...'"
  },
  "bit": {
    "word": "bit",
    "ipa": "/bɪt/",
    "pos": "Danh từ",
    "vi": "Bit (đơn vị dữ liệu nhị phân nhỏ nhất 0 hoặc 1)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bit (đơn vị dữ liệu nhị phân nhỏ nhất 0 hoặc 1)'.",
    "general_def": "Bit (đơn vị dữ liệu nhị phân nhỏ nhất 0 hoặc 1)",
    "example": "Example in text: '... bit ...'"
  },
  "border": {
    "word": "border",
    "ipa": "/ˈbɔː.dər/",
    "pos": "Danh từ",
    "vi": "Biên giới (Border Router: bộ định tuyến biên mạng LLN)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'biên giới (border router: bộ định tuyến biên mạng lln)'.",
    "general_def": "Biên giới (Border Router: bộ định tuyến biên mạng LLN)",
    "example": "Example in text: '... border ...'"
  },
  "both": {
    "word": "both",
    "ipa": "/bəʊθ/",
    "pos": "Lượng từ",
    "vi": "Cả hai",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cả hai'.",
    "general_def": "Cả hai",
    "example": "Example in text: '... both ...'"
  },
  "bottleneck": {
    "word": "bottleneck",
    "ipa": "/ˈbɒt.əl.nek/",
    "pos": "Danh từ",
    "vi": "Nút cổ chai, điểm nghẽn lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nút cổ chai, điểm nghẽn lưu lượng'.",
    "general_def": "Nút cổ chai, điểm nghẽn lưu lượng",
    "example": "Example in text: '... bottleneck ...'"
  },
  "bound": {
    "word": "bound",
    "ipa": "/baʊnd/",
    "pos": "Danh từ/Động từ",
    "vi": "Giới hạn, chặn trên/chặn dưới",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giới hạn, chặn trên/chặn dưới'.",
    "general_def": "Giới hạn, chặn trên/chặn dưới",
    "example": "Example in text: '... bound ...'"
  },
  "brief": {
    "word": "brief",
    "ipa": "/briːf/",
    "pos": "Tính từ",
    "vi": "Ngắn gọn, vắn tắt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngắn gọn, vắn tắt'.",
    "general_def": "Ngắn gọn, vắn tắt",
    "example": "Example in text: '... brief ...'"
  },
  "briefly": {
    "word": "briefly",
    "ipa": "/ˈbriːf.li/",
    "pos": "Trạng từ",
    "vi": "Một cách ngắn gọn, tóm lược",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách ngắn gọn, tóm lược'.",
    "general_def": "Một cách ngắn gọn, tóm lược",
    "example": "Example in text: '... briefly ...'"
  },
  "buffer": {
    "word": "buffer",
    "ipa": "/ˈbʌf.ər/",
    "pos": "Danh từ",
    "vi": "Bộ đệm hàng đợi lưu gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ đệm hàng đợi lưu gói tin'.",
    "general_def": "Bộ đệm hàng đợi lưu gói tin",
    "example": "Example in text: '... buffer ...'"
  },
  "buffers": {
    "word": "buffers",
    "ipa": "/ˈbʌf.ərz/",
    "pos": "Danh từ",
    "vi": "Các bộ đệm hàng đợi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bộ đệm hàng đợi'.",
    "general_def": "Các bộ đệm hàng đợi",
    "example": "Example in text: '... buffers ...'"
  },
  "built": {
    "word": "built",
    "ipa": "/bɪlt/",
    "pos": "Động từ",
    "vi": "Được xây dựng, kiến tạo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được xây dựng, kiến tạo'.",
    "general_def": "Được xây dựng, kiến tạo",
    "example": "Example in text: '... built ...'"
  },
  "burst": {
    "word": "burst",
    "ipa": "/bɜːst/",
    "pos": "Danh từ",
    "vi": "Đợt bùng nổ, bùng phát lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đợt bùng nổ, bùng phát lưu lượng'.",
    "general_def": "Đợt bùng nổ, bùng phát lưu lượng",
    "example": "Example in text: '... burst ...'"
  },
  "bursts": {
    "word": "bursts",
    "ipa": "/bɜːsts/",
    "pos": "Danh từ",
    "vi": "Các đợt bùng nổ lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đợt bùng nổ lưu lượng'.",
    "general_def": "Các đợt bùng nổ lưu lượng",
    "example": "Example in text: '... bursts ...'"
  },
  "byte": {
    "word": "byte",
    "ipa": "/baɪt/",
    "pos": "Danh từ",
    "vi": "Byte (8 bit dữ liệu)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'byte (8 bit dữ liệu)'.",
    "general_def": "Byte (8 bit dữ liệu)",
    "example": "Example in text: '... byte ...'"
  },
  "calculate": {
    "word": "calculate",
    "ipa": "/ˈkæl.kjʊ.leɪt/",
    "pos": "Động từ",
    "vi": "Tính toán giá trị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tính toán giá trị'.",
    "general_def": "Tính toán giá trị",
    "example": "Example in text: '... calculate ...'"
  },
  "calculated": {
    "word": "calculated",
    "ipa": "/ˈkæl.kjʊ.leɪ.tɪd/",
    "pos": "Động từ",
    "vi": "Đã được tính toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được tính toán'.",
    "general_def": "Đã được tính toán",
    "example": "Example in text: '... calculated ...'"
  },
  "calculation": {
    "word": "calculation",
    "ipa": "/ˌkæl.kjʊˈleɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Phép tính, sự tính toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phép tính, sự tính toán'.",
    "general_def": "Phép tính, sự tính toán",
    "example": "Example in text: '... calculation ...'"
  },
  "can": {
    "word": "can",
    "ipa": "/kæn/",
    "pos": "Trợ động từ",
    "vi": "Có thể",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có thể'.",
    "general_def": "Có thể",
    "example": "Example in text: '... can ...'"
  },
  "capabilities": {
    "word": "capabilities",
    "ipa": "/ˌkeɪ.pəˈbɪl.ə.tiz/",
    "pos": "Danh từ",
    "vi": "Các năng lực xử lý/truyền dẫn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các năng lực xử lý/truyền dẫn'.",
    "general_def": "Các năng lực xử lý/truyền dẫn",
    "example": "Example in text: '... capabilities ...'"
  },
  "capacity": {
    "word": "capacity",
    "ipa": "/kəˈpæs.ə.ti/",
    "pos": "Danh từ",
    "vi": "Dung lượng truyền tải tối đa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dung lượng truyền tải tối đa'.",
    "general_def": "Dung lượng truyền tải tối đa",
    "example": "Example in text: '... capacity ...'"
  },
  "carried": {
    "word": "carried",
    "ipa": "/ˈkær.id/",
    "pos": "Tính từ",
    "vi": "Được truyền tải (carried load: tải hữu ích tới đích)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được truyền tải (carried load: tải hữu ích tới đích)'.",
    "general_def": "Được truyền tải (carried load: tải hữu ích tới đích)",
    "example": "Example in text: '... carried ...'"
  },
  "cause": {
    "word": "cause",
    "ipa": "/kɔːz/",
    "pos": "Động từ/Danh từ",
    "vi": "Gây ra, nguyên nhân",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gây ra, nguyên nhân'.",
    "general_def": "Gây ra, nguyên nhân",
    "example": "Example in text: '... cause ...'"
  },
  "causes": {
    "word": "causes",
    "ipa": "/kɔː.zɪz/",
    "pos": "Động từ",
    "vi": "Gây ra các tác động",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gây ra các tác động'.",
    "general_def": "Gây ra các tác động",
    "example": "Example in text: '... causes ...'"
  },
  "causing": {
    "word": "causing",
    "ipa": "/ˈkɔː.zɪŋ/",
    "pos": "Động từ",
    "vi": "Gây nên hiện tượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gây nên hiện tượng'.",
    "general_def": "Gây nên hiện tượng",
    "example": "Example in text: '... causing ...'"
  },
  "cellular": {
    "word": "cellular",
    "ipa": "/ˈsel.jʊ.lər/",
    "pos": "Tính từ",
    "vi": "Di động tế bào (mạng di động GPRS/3G/4G/5G)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'di động tế bào (mạng di động gprs/3g/4g/5g)'.",
    "general_def": "Di động tế bào (mạng di động GPRS/3G/4G/5G)",
    "example": "Example in text: '... cellular ...'"
  },
  "certain": {
    "word": "certain",
    "ipa": "/ˈsɜː.tən/",
    "pos": "Tính từ",
    "vi": "Nhất định, cụ thể",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhất định, cụ thể'.",
    "general_def": "Nhất định, cụ thể",
    "example": "Example in text: '... certain ...'"
  },
  "channel": {
    "word": "channel",
    "ipa": "/ˈtʃæn.əl/",
    "pos": "Danh từ",
    "vi": "Kênh truyền vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kênh truyền vô tuyến'.",
    "general_def": "Kênh truyền vô tuyến",
    "example": "Example in text: '... channel ...'"
  },
  "characteristics": {
    "word": "characteristics",
    "ipa": "/ˌkær.ək.təˈrɪs.tɪks/",
    "pos": "Danh từ",
    "vi": "Các đặc tính kỹ thuật tiêu biểu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đặc tính kỹ thuật tiêu biểu'.",
    "general_def": "Các đặc tính kỹ thuật tiêu biểu",
    "example": "Example in text: '... characteristics ...'"
  },
  "cheap": {
    "word": "cheap",
    "ipa": "/tʃiːp/",
    "pos": "Tính từ",
    "vi": "Giá rẻ, chi phí thấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giá rẻ, chi phí thấp'.",
    "general_def": "Giá rẻ, chi phí thấp",
    "example": "Example in text: '... cheap ...'"
  },
  "chosen": {
    "word": "chosen",
    "ipa": "/ˈtʃəʊ.zən/",
    "pos": "Động từ",
    "vi": "Được chọn lựa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được chọn lựa'.",
    "general_def": "Được chọn lựa",
    "example": "Example in text: '... chosen ...'"
  },
  "client": {
    "word": "client",
    "ipa": "/ˈklaɪ.ənt/",
    "pos": "Danh từ",
    "vi": "Máy khách, nút khởi tạo yêu cầu CoAP",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'máy khách, nút khởi tạo yêu cầu coap'.",
    "general_def": "Máy khách, nút khởi tạo yêu cầu CoAP",
    "example": "Example in text: '... client ...'"
  },
  "clients": {
    "word": "clients",
    "ipa": "/ˈklaɪ.ənts/",
    "pos": "Danh từ",
    "vi": "Các nút máy khách",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các nút máy khách'.",
    "general_def": "Các nút máy khách",
    "example": "Example in text: '... clients ...'"
  },
  "close": {
    "word": "close",
    "ipa": "/kləʊs/",
    "pos": "Tính từ",
    "vi": "Gần sát, tiệm cận",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gần sát, tiệm cận'.",
    "general_def": "Gần sát, tiệm cận",
    "example": "Example in text: '... close ...'"
  },
  "closer": {
    "word": "closer",
    "ipa": "/ˈkləʊ.sər/",
    "pos": "Tính từ",
    "vi": "Gần hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gần hơn'.",
    "general_def": "Gần hơn",
    "example": "Example in text: '... closer ...'"
  },
  "cloud": {
    "word": "cloud",
    "ipa": "/klaʊd/",
    "pos": "Danh từ",
    "vi": "Điện toán đám mây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điện toán đám mây'.",
    "general_def": "Điện toán đám mây",
    "example": "Example in text: '... cloud ...'"
  },
  "collect": {
    "word": "collect",
    "ipa": "/kəˈlekt/",
    "pos": "Động từ",
    "vi": "Thu thập dữ liệu cảm biến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thu thập dữ liệu cảm biến'.",
    "general_def": "Thu thập dữ liệu cảm biến",
    "example": "Example in text: '... collect ...'"
  },
  "collision": {
    "word": "collision",
    "ipa": "/kəˈlɪʒ.ən/",
    "pos": "Danh từ",
    "vi": "Sự va chạm / xung đột sóng vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự va chạm / xung đột sóng vô tuyến'.",
    "general_def": "Sự va chạm / xung đột sóng vô tuyến",
    "example": "Example in text: '... collision ...'"
  },
  "collisions": {
    "word": "collisions",
    "ipa": "/kəˈlɪʒ.ənz/",
    "pos": "Danh từ",
    "vi": "Các vụ va chạm xung đột gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các vụ va chạm xung đột gói tin'.",
    "general_def": "Các vụ va chạm xung đột gói tin",
    "example": "Example in text: '... collisions ...'"
  },
  "combination": {
    "word": "combination",
    "ipa": "/ˌkɒm.bɪˈneɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự kết hợp nhiều cơ chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự kết hợp nhiều cơ chế'.",
    "general_def": "Sự kết hợp nhiều cơ chế",
    "example": "Example in text: '... combination ...'"
  },
  "combines": {
    "word": "combines",
    "ipa": "/kəmˈbaɪnz/",
    "pos": "Động từ",
    "vi": "Kết hợp các thành phần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kết hợp các thành phần'.",
    "general_def": "Kết hợp các thành phần",
    "example": "Example in text: '... combines ...'"
  },
  "common": {
    "word": "common",
    "ipa": "/ˈkɒm.ən/",
    "pos": "Tính từ",
    "vi": "Phổ biến, thông dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phổ biến, thông dụng'.",
    "general_def": "Phổ biến, thông dụng",
    "example": "Example in text: '... common ...'"
  },
  "communication": {
    "word": "communication",
    "ipa": "/kəˌmjuː.nɪˈkeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Truyền thông, thông tin liên lạc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'truyền thông, thông tin liên lạc'.",
    "general_def": "Truyền thông, thông tin liên lạc",
    "example": "Example in text: '... communication ...'"
  },
  "comparable": {
    "word": "comparable",
    "ipa": "/ˈkɒm.pər.ə.bəl/",
    "pos": "Tính từ",
    "vi": "Tương đương, có thể so sánh được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương đương, có thể so sánh được'.",
    "general_def": "Tương đương, có thể so sánh được",
    "example": "Example in text: '... comparable ...'"
  },
  "comparative": {
    "word": "comparative",
    "ipa": "/kəmˈpær.ə.tɪv/",
    "pos": "Tính từ",
    "vi": "Mang tính so sánh, đối chiếu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mang tính so sánh, đối chiếu'.",
    "general_def": "Mang tính so sánh, đối chiếu",
    "example": "Example in text: '... comparative ...'"
  },
  "compare": {
    "word": "compare",
    "ipa": "/kəmˈpeər/",
    "pos": "Động từ",
    "vi": "So sánh, đối chiếu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'so sánh, đối chiếu'.",
    "general_def": "So sánh, đối chiếu",
    "example": "Example in text: '... compare ...'"
  },
  "competing": {
    "word": "competing",
    "ipa": "/kəmˈpiː.tɪŋ/",
    "pos": "Tính từ",
    "vi": "Cạnh tranh tài nguyên mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cạnh tranh tài nguyên mạng'.",
    "general_def": "Cạnh tranh tài nguyên mạng",
    "example": "Example in text: '... competing ...'"
  },
  "complete": {
    "word": "complete",
    "ipa": "/kəmˈpliːt/",
    "pos": "Tính từ/Động từ",
    "vi": "Hoàn tất, trọn vẹn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hoàn tất, trọn vẹn'.",
    "general_def": "Hoàn tất, trọn vẹn",
    "example": "Example in text: '... complete ...'"
  },
  "computation": {
    "word": "computation",
    "ipa": "/ˌkɒm.pjʊˈteɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự tính toán, năng lực tính",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự tính toán, năng lực tính'.",
    "general_def": "Sự tính toán, năng lực tính",
    "example": "Example in text: '... computation ...'"
  },
  "con": {
    "word": "con",
    "ipa": "/kɒn/",
    "pos": "Danh từ",
    "vi": "Bản tin CON (Confirmable - cần xác nhận trong CoAP)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản tin con (confirmable - cần xác nhận trong coap)'.",
    "general_def": "Bản tin CON (Confirmable - cần xác nhận trong CoAP)",
    "example": "Example in text: '... con ...'"
  },
  "conclusion": {
    "word": "conclusion",
    "ipa": "/kənˈkluː.ʒən/",
    "pos": "Danh từ",
    "vi": "Kết luận",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kết luận'.",
    "general_def": "Kết luận",
    "example": "Example in text: '... conclusion ...'"
  },
  "conclusions": {
    "word": "conclusions",
    "ipa": "/kənˈkluː.ʒənz/",
    "pos": "Danh từ",
    "vi": "Các kết luận của bài báo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các kết luận của bài báo'.",
    "general_def": "Các kết luận của bài báo",
    "example": "Example in text: '... conclusions ...'"
  },
  "condition": {
    "word": "condition",
    "ipa": "/kənˈdɪʃ.ən/",
    "pos": "Danh từ",
    "vi": "Điều kiện hoạt động",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điều kiện hoạt động'.",
    "general_def": "Điều kiện hoạt động",
    "example": "Example in text: '... condition ...'"
  },
  "conditions": {
    "word": "conditions",
    "ipa": "/kənˈdɪʃ.ənz/",
    "pos": "Danh từ",
    "vi": "Các điều kiện mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các điều kiện mạng'.",
    "general_def": "Các điều kiện mạng",
    "example": "Example in text: '... conditions ...'"
  },
  "confirm": {
    "word": "confirm",
    "ipa": "/kənˈfɜːm/",
    "pos": "Động từ",
    "vi": "Xác nhận",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xác nhận'.",
    "general_def": "Xác nhận",
    "example": "Example in text: '... confirm ...'"
  },
  "connect": {
    "word": "connect",
    "ipa": "/kəˈnekt/",
    "pos": "Động từ",
    "vi": "Kết nối",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kết nối'.",
    "general_def": "Kết nối",
    "example": "Example in text: '... connect ...'"
  },
  "connection": {
    "word": "connection",
    "ipa": "/kəˈnek.ʃən/",
    "pos": "Danh từ",
    "vi": "Liên kết kết nối",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'liên kết kết nối'.",
    "general_def": "Liên kết kết nối",
    "example": "Example in text: '... connection ...'"
  },
  "connections": {
    "word": "connections",
    "ipa": "/kəˈnek.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các kết nối truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các kết nối truyền thông'.",
    "general_def": "Các kết nối truyền thông",
    "example": "Example in text: '... connections ...'"
  },
  "conservative": {
    "word": "conservative",
    "ipa": "/kənˈsɜː.və.tɪv/",
    "pos": "Tính từ",
    "vi": "Bảo thủ, quá dè dặt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bảo thủ, quá dè dặt'.",
    "general_def": "Bảo thủ, quá dè dặt",
    "example": "Example in text: '... conservative ...'"
  },
  "consider": {
    "word": "consider",
    "ipa": "/kənˈsɪd.ər/",
    "pos": "Động từ",
    "vi": "Xem xét, khảo sát",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xem xét, khảo sát'.",
    "general_def": "Xem xét, khảo sát",
    "example": "Example in text: '... consider ...'"
  },
  "considered": {
    "word": "considered",
    "ipa": "/kənˈsɪd.əd/",
    "pos": "Động từ",
    "vi": "Đã được xem xét",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được xem xét'.",
    "general_def": "Đã được xem xét",
    "example": "Example in text: '... considered ...'"
  },
  "considering": {
    "word": "considering",
    "ipa": "/kənˈsɪd.ər.ɪŋ/",
    "pos": "Liên từ",
    "vi": "Xét đến, xem xét yếu tố",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xét đến, xem xét yếu tố'.",
    "general_def": "Xét đến, xem xét yếu tố",
    "example": "Example in text: '... considering ...'"
  },
  "consistently": {
    "word": "consistently",
    "ipa": "/kənˈsɪs.tənt.li/",
    "pos": "Trạng từ",
    "vi": "Một cách nhất quán, ổn định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách nhất quán, ổn định'.",
    "general_def": "Một cách nhất quán, ổn định",
    "example": "Example in text: '... consistently ...'"
  },
  "constant": {
    "word": "constant",
    "ipa": "/ˈkɒn.stənt/",
    "pos": "Tính từ",
    "vi": "Không đổi, hằng định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không đổi, hằng định'.",
    "general_def": "Không đổi, hằng định",
    "example": "Example in text: '... constant ...'"
  },
  "control": {
    "word": "control",
    "ipa": "/kənˈtrəʊl/",
    "pos": "Danh từ/Động từ",
    "vi": "Điều khiển, kiểm soát",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điều khiển, kiểm soát'.",
    "general_def": "Điều khiển, kiểm soát",
    "example": "Example in text: '... control ...'"
  },
  "converge": {
    "word": "converge",
    "ipa": "/kənˈvɜːdʒ/",
    "pos": "Động từ",
    "vi": "Hội tụ về một giá trị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hội tụ về một giá trị'.",
    "general_def": "Hội tụ về một giá trị",
    "example": "Example in text: '... converge ...'"
  },
  "converges": {
    "word": "converges",
    "ipa": "/kənˈvɜː.dʒɪz/",
    "pos": "Động từ",
    "vi": "Hội tụ dần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hội tụ dần'.",
    "general_def": "Hội tụ dần",
    "example": "Example in text: '... converges ...'"
  },
  "core": {
    "word": "core",
    "ipa": "/kɔːr/",
    "pos": "Danh từ/Tính từ",
    "vi": "Cốt lõi (nhóm công tác CoRE của IETF)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cốt lõi (nhóm công tác core của ietf)'.",
    "general_def": "Cốt lõi (nhóm công tác CoRE của IETF)",
    "example": "Example in text: '... core ...'"
  },
  "correct": {
    "word": "correct",
    "ipa": "/kəˈrekt/",
    "pos": "Tính từ",
    "vi": "Đúng đắn, chính xác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đúng đắn, chính xác'.",
    "general_def": "Đúng đắn, chính xác",
    "example": "Example in text: '... correct ...'"
  },
  "correctly": {
    "word": "correctly",
    "ipa": "/kəˈrekt.li/",
    "pos": "Trạng từ",
    "vi": "Một cách chính xác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách chính xác'.",
    "general_def": "Một cách chính xác",
    "example": "Example in text: '... correctly ...'"
  },
  "corresponding": {
    "word": "corresponding",
    "ipa": "/ˌkɒr.ɪˈspɒn.dɪŋ/",
    "pos": "Tính từ",
    "vi": "Tương ứng với",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương ứng với'.",
    "general_def": "Tương ứng với",
    "example": "Example in text: '... corresponding ...'"
  },
  "count": {
    "word": "count",
    "ipa": "/kaʊnt/",
    "pos": "Danh từ/Động từ",
    "vi": "Số lượng đếm, đếm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'số lượng đếm, đếm'.",
    "general_def": "Số lượng đếm, đếm",
    "example": "Example in text: '... count ...'"
  },
  "counter": {
    "word": "counter",
    "ipa": "/ˈkaʊn.tər/",
    "pos": "Danh từ",
    "vi": "Bộ đếm (Transmission Counter: bộ đếm số lần phát)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ đếm (transmission counter: bộ đếm số lần phát)'.",
    "general_def": "Bộ đếm (Transmission Counter: bộ đếm số lần phát)",
    "example": "Example in text: '... counter ...'"
  },
  "countermeasure": {
    "word": "countermeasure",
    "ipa": "/ˈkaʊn.təˌmeʒ.ər/",
    "pos": "Danh từ",
    "vi": "Biện pháp đối phó, giải pháp khắc phục",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'biện pháp đối phó, giải pháp khắc phục'.",
    "general_def": "Biện pháp đối phó, giải pháp khắc phục",
    "example": "Example in text: '... countermeasure ...'"
  },
  "crucial": {
    "word": "crucial",
    "ipa": "/ˈkruː.ʃəl/",
    "pos": "Tính từ",
    "vi": "Tối quan trọng, mang tính quyết định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tối quan trọng, mang tính quyết định'.",
    "general_def": "Tối quan trọng, mang tính quyết định",
    "example": "Example in text: '... crucial ...'"
  },
  "current": {
    "word": "current",
    "ipa": "/ˈkʌr.ənt/",
    "pos": "Tính từ",
    "vi": "Hiện hành, hiện tại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiện hành, hiện tại'.",
    "general_def": "Hiện hành, hiện tại",
    "example": "Example in text: '... current ...'"
  },
  "currently": {
    "word": "currently",
    "ipa": "/ˈkʌr.ənt.li/",
    "pos": "Trạng từ",
    "vi": "Hiện nay, đang trong thời điểm này",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiện nay, đang trong thời điểm này'.",
    "general_def": "Hiện nay, đang trong thời điểm này",
    "example": "Example in text: '... currently ...'"
  },
  "cycle": {
    "word": "cycle",
    "ipa": "/ˈsaɪ.kəl/",
    "pos": "Danh từ",
    "vi": "Chu kỳ hoạt động",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chu kỳ hoạt động'.",
    "general_def": "Chu kỳ hoạt động",
    "example": "Example in text: '... cycle ...'"
  },
  "cycling": {
    "word": "cycling",
    "ipa": "/ˈsaɪ.klɪŋ/",
    "pos": "Danh từ",
    "vi": "Sự đóng ngắt chu kỳ (Duty Cycling)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đóng ngắt chu kỳ (duty cycling)'.",
    "general_def": "Sự đóng ngắt chu kỳ (Duty Cycling)",
    "example": "Example in text: '... cycling ...'"
  },
  "data": {
    "word": "data",
    "ipa": "/ˈdeɪ.tə/",
    "pos": "Danh từ",
    "vi": "Dữ liệu thông tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dữ liệu thông tin'.",
    "general_def": "Dữ liệu thông tin",
    "example": "Example in text: '... data ...'"
  },
  "decay": {
    "word": "decay",
    "ipa": "/dɪˈkeɪ/",
    "pos": "Động từ/Danh từ",
    "vi": "Suy thoái, suy giảm dần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'suy thoái, suy giảm dần'.",
    "general_def": "Suy thoái, suy giảm dần",
    "example": "Example in text: '... decay ...'"
  },
  "decrease": {
    "word": "decrease",
    "ipa": "/dɪˈkriːs/",
    "pos": "Động từ/Danh từ",
    "vi": "Giảm xuống, sự suy giảm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giảm xuống, sự suy giảm'.",
    "general_def": "Giảm xuống, sự suy giảm",
    "example": "Example in text: '... decrease ...'"
  },
  "decreases": {
    "word": "decreases",
    "ipa": "/dɪˈkriː.sɪz/",
    "pos": "Động từ",
    "vi": "Sụt giảm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sụt giảm'.",
    "general_def": "Sụt giảm",
    "example": "Example in text: '... decreases ...'"
  },
  "default": {
    "word": "default",
    "ipa": "/dɪˈfɔːlt/",
    "pos": "Tính từ/Danh từ",
    "vi": "Mặc định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mặc định'.",
    "general_def": "Mặc định",
    "example": "Example in text: '... default ...'"
  },
  "defined": {
    "word": "defined",
    "ipa": "/dɪˈfaɪnd/",
    "pos": "Tính từ",
    "vi": "Được định nghĩa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được định nghĩa'.",
    "general_def": "Được định nghĩa",
    "example": "Example in text: '... defined ...'"
  },
  "defines": {
    "word": "defines",
    "ipa": "/dɪˈfaɪnz/",
    "pos": "Động từ",
    "vi": "Định nghĩa, quy định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'định nghĩa, quy định'.",
    "general_def": "Định nghĩa, quy định",
    "example": "Example in text: '... defines ...'"
  },
  "definition": {
    "word": "definition",
    "ipa": "/ˌdef.ɪˈnɪʃ.ən/",
    "pos": "Danh từ",
    "vi": "Định nghĩa, sự xác lập",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'định nghĩa, sự xác lập'.",
    "general_def": "Định nghĩa, sự xác lập",
    "example": "Example in text: '... definition ...'"
  },
  "delay": {
    "word": "delay",
    "ipa": "/dɪˈleɪ/",
    "pos": "Danh từ/Động từ",
    "vi": "Độ trễ truyền gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'độ trễ truyền gói tin'.",
    "general_def": "Độ trễ truyền gói tin",
    "example": "Example in text: '... delay ...'"
  },
  "delays": {
    "word": "delays",
    "ipa": "/dɪˈleɪz/",
    "pos": "Danh từ",
    "vi": "Các khoảng thời gian trễ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các khoảng thời gian trễ'.",
    "general_def": "Các khoảng thời gian trễ",
    "example": "Example in text: '... delays ...'"
  },
  "deliver": {
    "word": "deliver",
    "ipa": "/dɪˈlɪv.ər/",
    "pos": "Động từ",
    "vi": "Phân phối, chuyển giao tới đích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phân phối, chuyển giao tới đích'.",
    "general_def": "Phân phối, chuyển giao tới đích",
    "example": "Example in text: '... deliver ...'"
  },
  "delivered": {
    "word": "delivered",
    "ipa": "/dɪˈlɪv.əd/",
    "pos": "Động từ",
    "vi": "Đã được chuyển phát",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được chuyển phát'.",
    "general_def": "Đã được chuyển phát",
    "example": "Example in text: '... delivered ...'"
  },
  "delivery": {
    "word": "delivery",
    "ipa": "/dɪˈlɪv.ər.i/",
    "pos": "Danh từ",
    "vi": "Sự chuyển phát gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự chuyển phát gói tin'.",
    "general_def": "Sự chuyển phát gói tin",
    "example": "Example in text: '... delivery ...'"
  },
  "demonstrated": {
    "word": "demonstrated",
    "ipa": "/ˈdem.ən.streɪ.tɪd/",
    "pos": "Động từ",
    "vi": "Đã được chứng minh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được chứng minh'.",
    "general_def": "Đã được chứng minh",
    "example": "Example in text: '... demonstrated ...'"
  },
  "depends": {
    "word": "depends",
    "ipa": "/dɪˈpendz/",
    "pos": "Động từ",
    "vi": "Phụ thuộc vào",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phụ thuộc vào'.",
    "general_def": "Phụ thuộc vào",
    "example": "Example in text: '... depends ...'"
  },
  "derived": {
    "word": "derived",
    "ipa": "/dɪˈraɪvd/",
    "pos": "Tính từ",
    "vi": "Được bắt nguồn, suy ra từ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được bắt nguồn, suy ra từ'.",
    "general_def": "Được bắt nguồn, suy ra từ",
    "example": "Example in text: '... derived ...'"
  },
  "description": {
    "word": "description",
    "ipa": "/dɪˈskrɪp.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự mô tả chi tiết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự mô tả chi tiết'.",
    "general_def": "Sự mô tả chi tiết",
    "example": "Example in text: '... description ...'"
  },
  "design": {
    "word": "design",
    "ipa": "/dɪˈzaɪn/",
    "pos": "Danh từ/Động từ",
    "vi": "Thiết kế giao thức",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiết kế giao thức'.",
    "general_def": "Thiết kế giao thức",
    "example": "Example in text: '... design ...'"
  },
  "destination": {
    "word": "destination",
    "ipa": "/ˌdes.tɪˈneɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Nút đích của gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nút đích của gói tin'.",
    "general_def": "Nút đích của gói tin",
    "example": "Example in text: '... destination ...'"
  },
  "detect": {
    "word": "detect",
    "ipa": "/dɪˈtekt/",
    "pos": "Động từ",
    "vi": "Phát hiện, nhận diện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phát hiện, nhận diện'.",
    "general_def": "Phát hiện, nhận diện",
    "example": "Example in text: '... detect ...'"
  },
  "detection": {
    "word": "detection",
    "ipa": "/dɪˈtek.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự phát hiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự phát hiện'.",
    "general_def": "Sự phát hiện",
    "example": "Example in text: '... detection ...'"
  },
  "device": {
    "word": "device",
    "ipa": "/dɪˈvaɪs/",
    "pos": "Danh từ",
    "vi": "Thiết bị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiết bị'.",
    "general_def": "Thiết bị",
    "example": "Example in text: '... device ...'"
  },
  "devices": {
    "word": "devices",
    "ipa": "/dɪˈvaɪ.sɪz/",
    "pos": "Danh từ",
    "vi": "Các thiết bị IoT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thiết bị iot'.",
    "general_def": "Các thiết bị IoT",
    "example": "Example in text: '... devices ...'"
  },
  "difference": {
    "word": "difference",
    "ipa": "/ˈdɪf.ər.əns/",
    "pos": "Danh từ",
    "vi": "Sự khác biệt, hiệu số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự khác biệt, hiệu số'.",
    "general_def": "Sự khác biệt, hiệu số",
    "example": "Example in text: '... difference ...'"
  },
  "different": {
    "word": "different",
    "ipa": "/ˈdɪf.ər.ənt/",
    "pos": "Tính từ",
    "vi": "Khác nhau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khác nhau'.",
    "general_def": "Khác nhau",
    "example": "Example in text: '... different ...'"
  },
  "differently": {
    "word": "differently",
    "ipa": "/ˈdɪf.ər.ənt.li/",
    "pos": "Trạng từ",
    "vi": "Một cách khác biệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách khác biệt'.",
    "general_def": "Một cách khác biệt",
    "example": "Example in text: '... differently ...'"
  },
  "differs": {
    "word": "differs",
    "ipa": "/ˈdɪf.ərz/",
    "pos": "Động từ",
    "vi": "Khác biệt với",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khác biệt với'.",
    "general_def": "Khác biệt với",
    "example": "Example in text: '... differs ...'"
  },
  "discard": {
    "word": "discard",
    "ipa": "/dɪˈskɑːd/",
    "pos": "Động từ",
    "vi": "Hủy bỏ, loại bỏ gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hủy bỏ, loại bỏ gói tin'.",
    "general_def": "Hủy bỏ, loại bỏ gói tin",
    "example": "Example in text: '... discard ...'"
  },
  "discarded": {
    "word": "discarded",
    "ipa": "/dɪˈskɑː.dɪd/",
    "pos": "Động từ",
    "vi": "Bị hủy bỏ do đầy hàng đợi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bị hủy bỏ do đầy hàng đợi'.",
    "general_def": "Bị hủy bỏ do đầy hàng đợi",
    "example": "Example in text: '... discarded ...'"
  },
  "distance": {
    "word": "distance",
    "ipa": "/ˈdɪs.təns/",
    "pos": "Danh từ",
    "vi": "Khoảng cách địa lý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khoảng cách địa lý'.",
    "general_def": "Khoảng cách địa lý",
    "example": "Example in text: '... distance ...'"
  },
  "distinguish": {
    "word": "distinguish",
    "ipa": "/dɪˈstɪŋ.ɡwɪʃ/",
    "pos": "Động từ",
    "vi": "Phân biệt giữa các loại mất gói",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phân biệt giữa các loại mất gói'.",
    "general_def": "Phân biệt giữa các loại mất gói",
    "example": "Example in text: '... distinguish ...'"
  },
  "dither": {
    "word": "dither",
    "ipa": "/ˈdɪð.ər/",
    "pos": "Động từ",
    "vi": "Rung ngẫu nhiên RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'rung ngẫu nhiên rto'.",
    "general_def": "Rung ngẫu nhiên RTO",
    "example": "Example in text: '... dither ...'"
  },
  "diversity": {
    "word": "diversity",
    "ipa": "/daɪˈvɜː.sə.ti/",
    "pos": "Danh từ",
    "vi": "Sự đa dạng của các thiết bị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đa dạng của các thiết bị'.",
    "general_def": "Sự đa dạng của các thiết bị",
    "example": "Example in text: '... diversity ...'"
  },
  "doubled": {
    "word": "doubled",
    "ipa": "/ˈdʌb.əld/",
    "pos": "Tính từ/Động từ",
    "vi": "Bị nhân đôi (BEB nhân đôi RTO)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bị nhân đôi (beb nhân đôi rto)'.",
    "general_def": "Bị nhân đôi (BEB nhân đôi RTO)",
    "example": "Example in text: '... doubled ...'"
  },
  "drops": {
    "word": "drops",
    "ipa": "/drɒps/",
    "pos": "Danh từ/Động từ",
    "vi": "Các gói tin bị rơi/mất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các gói tin bị rơi/mất'.",
    "general_def": "Các gói tin bị rơi/mất",
    "example": "Example in text: '... drops ...'"
  },
  "due": {
    "word": "due",
    "ipa": "/djuː/",
    "pos": "Tính từ/Giới từ",
    "vi": "Do, bởi vì",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'do, bởi vì'.",
    "general_def": "Do, bởi vì",
    "example": "Example in text: '... due ...'"
  },
  "duplicate": {
    "word": "duplicate",
    "ipa": "/ˈdjuː.plɪ.kət/",
    "pos": "Tính từ/Danh từ",
    "vi": "Trùng lặp (ACK trùng lặp)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trùng lặp (ack trùng lặp)'.",
    "general_def": "Trùng lặp (ACK trùng lặp)",
    "example": "Example in text: '... duplicate ...'"
  },
  "duration": {
    "word": "duration",
    "ipa": "/djʊˈreɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Khoảng thời gian kéo dài",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khoảng thời gian kéo dài'.",
    "general_def": "Khoảng thời gian kéo dài",
    "example": "Example in text: '... duration ...'"
  },
  "during": {
    "word": "during",
    "ipa": "/ˈdjʊə.rɪŋ/",
    "pos": "Giới từ",
    "vi": "Trong suốt khoảng thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trong suốt khoảng thời gian'.",
    "general_def": "Trong suốt khoảng thời gian",
    "example": "Example in text: '... during ...'"
  },
  "duty": {
    "word": "duty",
    "ipa": "/ˈdjuː.ti/",
    "pos": "Danh từ",
    "vi": "Nhiệm vụ, tỷ lệ làm việc (Duty Cycle)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiệm vụ, tỷ lệ làm việc (duty cycle)'.",
    "general_def": "Nhiệm vụ, tỷ lệ làm việc (Duty Cycle)",
    "example": "Example in text: '... duty ...'"
  },
  "dynamic": {
    "word": "dynamic",
    "ipa": "/daɪˈnæm.ɪk/",
    "pos": "Tính từ",
    "vi": "Động, tự điều chỉnh linh hoạt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'động, tự điều chỉnh linh hoạt'.",
    "general_def": "Động, tự điều chỉnh linh hoạt",
    "example": "Example in text: '... dynamic ...'"
  },
  "dynamically": {
    "word": "dynamically",
    "ipa": "/daɪˈnæm.ɪ.kəl.i/",
    "pos": "Trạng từ",
    "vi": "Một cách linh động",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách linh động'.",
    "general_def": "Một cách linh động",
    "example": "Example in text: '... dynamically ...'"
  },
  "each": {
    "word": "each",
    "ipa": "/iːtʃ/",
    "pos": "Lượng từ",
    "vi": "Mỗi một",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mỗi một'.",
    "general_def": "Mỗi một",
    "example": "Example in text: '... each ...'"
  },
  "earlier": {
    "word": "earlier",
    "ipa": "/ˈɜː.li.ər/",
    "pos": "Trạng từ",
    "vi": "Sớm hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sớm hơn'.",
    "general_def": "Sớm hơn",
    "example": "Example in text: '... earlier ...'"
  },
  "effective": {
    "word": "effective",
    "ipa": "/ɪˈfek.tɪv/",
    "pos": "Tính từ",
    "vi": "Hiệu quả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiệu quả'.",
    "general_def": "Hiệu quả",
    "example": "Example in text: '... effective ...'"
  },
  "effectively": {
    "word": "effectively",
    "ipa": "/ɪˈfek.tɪv.li/",
    "pos": "Trạng từ",
    "vi": "Một cách hiệu quả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách hiệu quả'.",
    "general_def": "Một cách hiệu quả",
    "example": "Example in text: '... effectively ...'"
  },
  "effectiveness": {
    "word": "effectiveness",
    "ipa": "/ɪˈfek.tɪv.nəs/",
    "pos": "Danh từ",
    "vi": "Tính hiệu quả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tính hiệu quả'.",
    "general_def": "Tính hiệu quả",
    "example": "Example in text: '... effectiveness ...'"
  },
  "either": {
    "word": "either",
    "ipa": "/ˈaɪ.ðər/",
    "pos": "Liên từ",
    "vi": "Hoặc cái này hoặc cái kia",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hoặc cái này hoặc cái kia'.",
    "general_def": "Hoặc cái này hoặc cái kia",
    "example": "Example in text: '... either ...'"
  },
  "eliminate": {
    "word": "eliminate",
    "ipa": "/iˈlɪm.ɪ.neɪt/",
    "pos": "Động từ",
    "vi": "Loại bỏ hoàn toàn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'loại bỏ hoàn toàn'.",
    "general_def": "Loại bỏ hoàn toàn",
    "example": "Example in text: '... eliminate ...'"
  },
  "eliminates": {
    "word": "eliminates",
    "ipa": "/iˈlɪm.ɪ.neɪts/",
    "pos": "Động từ",
    "vi": "Triệt tiêu, loại bỏ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'triệt tiêu, loại bỏ'.",
    "general_def": "Triệt tiêu, loại bỏ",
    "example": "Example in text: '... eliminates ...'"
  },
  "employed": {
    "word": "employed",
    "ipa": "/ɪmˈplɔɪd/",
    "pos": "Động từ",
    "vi": "Được áp dụng, sử dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được áp dụng, sử dụng'.",
    "general_def": "Được áp dụng, sử dụng",
    "example": "Example in text: '... employed ...'"
  },
  "emulate": {
    "word": "emulate",
    "ipa": "/ˈem.jʊ.leɪt/",
    "pos": "Động từ",
    "vi": "Mô phỏng giả lập phần cứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mô phỏng giả lập phần cứng'.",
    "general_def": "Mô phỏng giả lập phần cứng",
    "example": "Example in text: '... emulate ...'"
  },
  "emulated": {
    "word": "emulated",
    "ipa": "/ˈem.jʊ.leɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Được giả lập",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được giả lập'.",
    "general_def": "Được giả lập",
    "example": "Example in text: '... emulated ...'"
  },
  "enables": {
    "word": "enables",
    "ipa": "/ɪˈneɪ.bəlz/",
    "pos": "Động từ",
    "vi": "Cho phép, kích hoạt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cho phép, kích hoạt'.",
    "general_def": "Cho phép, kích hoạt",
    "example": "Example in text: '... enables ...'"
  },
  "end": {
    "word": "end",
    "ipa": "/end/",
    "pos": "Danh từ/Động từ",
    "vi": "Điểm kết thúc, đầu cuối",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điểm kết thúc, đầu cuối'.",
    "general_def": "Điểm kết thúc, đầu cuối",
    "example": "Example in text: '... end ...'"
  },
  "enough": {
    "word": "enough",
    "ipa": "/ɪˈnʌf/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Đủ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đủ'.",
    "general_def": "Đủ",
    "example": "Example in text: '... enough ...'"
  },
  "ensure": {
    "word": "ensure",
    "ipa": "/ɪnˈʃɔːr/",
    "pos": "Động từ",
    "vi": "Đảm bảo, chắc chắn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đảm bảo, chắc chắn'.",
    "general_def": "Đảm bảo, chắc chắn",
    "example": "Example in text: '... ensure ...'"
  },
  "environment": {
    "word": "environment",
    "ipa": "/ɪnˈvaɪ.rən.mənt/",
    "pos": "Danh từ",
    "vi": "Môi trường vật lý / môi trường mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'môi trường vật lý / môi trường mạng'.",
    "general_def": "Môi trường vật lý / môi trường mạng",
    "example": "Example in text: '... environment ...'"
  },
  "equal": {
    "word": "equal",
    "ipa": "/ˈiː.kwəl/",
    "pos": "Tính từ",
    "vi": "Bằng nhau, tương đương",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bằng nhau, tương đương'.",
    "general_def": "Bằng nhau, tương đương",
    "example": "Example in text: '... equal ...'"
  },
  "equally": {
    "word": "equally",
    "ipa": "/ˈiː.kwə.li/",
    "pos": "Trạng từ",
    "vi": "Bình đẳng, như nhau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bình đẳng, như nhau'.",
    "general_def": "Bình đẳng, như nhau",
    "example": "Example in text: '... equally ...'"
  },
  "equipped": {
    "word": "equipped",
    "ipa": "/ɪˈkwɪpt/",
    "pos": "Tính từ",
    "vi": "Được trang bị phần cứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được trang bị phần cứng'.",
    "general_def": "Được trang bị phần cứng",
    "example": "Example in text: '... equipped ...'"
  },
  "error": {
    "word": "error",
    "ipa": "/ˈer.ər/",
    "pos": "Danh từ",
    "vi": "Lỗi bit, lỗi gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lỗi bit, lỗi gói tin'.",
    "general_def": "Lỗi bit, lỗi gói tin",
    "example": "Example in text: '... error ...'"
  },
  "escalate": {
    "word": "escalate",
    "ipa": "/ˈes.kə.leɪt/",
    "pos": "Động từ",
    "vi": "Leo thang, tăng vọt quá mức",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'leo thang, tăng vọt quá mức'.",
    "general_def": "Leo thang, tăng vọt quá mức",
    "example": "Example in text: '... escalate ...'"
  },
  "especially": {
    "word": "especially",
    "ipa": "/ɪˈspeʃ.əl.i/",
    "pos": "Trạng từ",
    "vi": "Đặc biệt là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đặc biệt là'.",
    "general_def": "Đặc biệt là",
    "example": "Example in text: '... especially ...'"
  },
  "essential": {
    "word": "essential",
    "ipa": "/ɪˈsen.ʃəl/",
    "pos": "Tính từ",
    "vi": "Cốt yếu, thiết yếu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cốt yếu, thiết yếu'.",
    "general_def": "Cốt yếu, thiết yếu",
    "example": "Example in text: '... essential ...'"
  },
  "essentially": {
    "word": "essentially",
    "ipa": "/ɪˈsen.ʃəl.i/",
    "pos": "Trạng từ",
    "vi": "Về bản chất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'về bản chất'.",
    "general_def": "Về bản chất",
    "example": "Example in text: '... essentially ...'"
  },
  "estimate": {
    "word": "estimate",
    "ipa": "/ˈes.tɪ.meɪt/",
    "pos": "Động từ/Danh từ",
    "vi": "Ước lượng giá trị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ước lượng giá trị'.",
    "general_def": "Ước lượng giá trị",
    "example": "Example in text: '... estimate ...'"
  },
  "estimated": {
    "word": "estimated",
    "ipa": "/ˈes.tɪ.meɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Được ước lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được ước lượng'.",
    "general_def": "Được ước lượng",
    "example": "Example in text: '... estimated ...'"
  },
  "estimation": {
    "word": "estimation",
    "ipa": "/ˌes.tɪˈmeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự ước lượng thống kê",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự ước lượng thống kê'.",
    "general_def": "Sự ước lượng thống kê",
    "example": "Example in text: '... estimation ...'"
  },
  "estimator": {
    "word": "estimator",
    "ipa": "/ˈes.tɪ.meɪ.tər/",
    "pos": "Danh từ",
    "vi": "Bộ ước lượng (ước lượng RTT, RTO)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ ước lượng (ước lượng rtt, rto)'.",
    "general_def": "Bộ ước lượng (ước lượng RTT, RTO)",
    "example": "Example in text: '... estimator ...'"
  },
  "estimators": {
    "word": "estimators",
    "ipa": "/ˈes.tɪ.meɪ.tərz/",
    "pos": "Danh từ",
    "vi": "Các bộ ước lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bộ ước lượng'.",
    "general_def": "Các bộ ước lượng",
    "example": "Example in text: '... estimators ...'"
  },
  "evaluate": {
    "word": "evaluate",
    "ipa": "/ɪˈvæl.ju.eɪt/",
    "pos": "Động từ",
    "vi": "Đánh giá hiệu năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đánh giá hiệu năng'.",
    "general_def": "Đánh giá hiệu năng",
    "example": "Example in text: '... evaluate ...'"
  },
  "evaluated": {
    "word": "evaluated",
    "ipa": "/ɪˈvæl.ju.eɪ.tɪd/",
    "pos": "Động từ",
    "vi": "Đã được đánh giá",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được đánh giá'.",
    "general_def": "Đã được đánh giá",
    "example": "Example in text: '... evaluated ...'"
  },
  "evaluation": {
    "word": "evaluation",
    "ipa": "/ɪˌvæl.juˈeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự đánh giá, thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đánh giá, thực nghiệm'.",
    "general_def": "Sự đánh giá, thực nghiệm",
    "example": "Example in text: '... evaluation ...'"
  },
  "even": {
    "word": "even",
    "ipa": "/ˈiː.vən/",
    "pos": "Trạng từ",
    "vi": "Thậm chí, ngay cả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thậm chí, ngay cả'.",
    "general_def": "Thậm chí, ngay cả",
    "example": "Example in text: '... even ...'"
  },
  "event": {
    "word": "event",
    "ipa": "/ɪˈvent/",
    "pos": "Danh từ",
    "vi": "Sự kiện kích hoạt (cảnh báo địa chấn)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự kiện kích hoạt (cảnh báo địa chấn)'.",
    "general_def": "Sự kiện kích hoạt (cảnh báo địa chấn)",
    "example": "Example in text: '... event ...'"
  },
  "eventually": {
    "word": "eventually",
    "ipa": "/ɪˈven.tʃu.ə.li/",
    "pos": "Trạng từ",
    "vi": "Cuối cùng, rốt cuộc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cuối cùng, rốt cuộc'.",
    "general_def": "Cuối cùng, rốt cuộc",
    "example": "Example in text: '... eventually ...'"
  },
  "every": {
    "word": "every",
    "ipa": "/ˈev.ri/",
    "pos": "Lượng từ",
    "vi": "Mỗi, mọi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mỗi, mọi'.",
    "general_def": "Mỗi, mọi",
    "example": "Example in text: '... every ...'"
  },
  "exacerbate": {
    "word": "exacerbate",
    "ipa": "/ɪɡˈzæs.ə.beɪt/",
    "pos": "Động từ",
    "vi": "Làm trầm trọng thêm vấn đề",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'làm trầm trọng thêm vấn đề'.",
    "general_def": "Làm trầm trọng thêm vấn đề",
    "example": "Example in text: '... exacerbate ...'"
  },
  "exact": {
    "word": "exact",
    "ipa": "/ɪɡˈzækt/",
    "pos": "Tính từ",
    "vi": "Chính xác tuyệt đối",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chính xác tuyệt đối'.",
    "general_def": "Chính xác tuyệt đối",
    "example": "Example in text: '... exact ...'"
  },
  "example": {
    "word": "example",
    "ipa": "/ɪɡˈzɑːm.pəl/",
    "pos": "Danh từ",
    "vi": "Ví dụ minh họa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ví dụ minh họa'.",
    "general_def": "Ví dụ minh họa",
    "example": "Example in text: '... example ...'"
  },
  "exceeds": {
    "word": "exceeds",
    "ipa": "/ɪkˈsiːdz/",
    "pos": "Động từ",
    "vi": "Vượt quá ngưỡng dung lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vượt quá ngưỡng dung lượng'.",
    "general_def": "Vượt quá ngưỡng dung lượng",
    "example": "Example in text: '... exceeds ...'"
  },
  "excessive": {
    "word": "excessive",
    "ipa": "/ɪkˈses.ɪv/",
    "pos": "Tính từ",
    "vi": "Quá mức, thái quá",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quá mức, thái quá'.",
    "general_def": "Quá mức, thái quá",
    "example": "Example in text: '... excessive ...'"
  },
  "exchange": {
    "word": "exchange",
    "ipa": "/ɪksˈtʃeɪndʒ/",
    "pos": "Động từ/Danh từ",
    "vi": "Trao đổi bản tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trao đổi bản tin'.",
    "general_def": "Trao đổi bản tin",
    "example": "Example in text: '... exchange ...'"
  },
  "exhibit": {
    "word": "exhibit",
    "ipa": "/ɪɡˈzɪb.ɪt/",
    "pos": "Động từ",
    "vi": "Bộc lộ, thể hiện đặc tính",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộc lộ, thể hiện đặc tính'.",
    "general_def": "Bộc lộ, thể hiện đặc tính",
    "example": "Example in text: '... exhibit ...'"
  },
  "exhibits": {
    "word": "exhibits",
    "ipa": "/ɪɡˈzɪb.ɪts/",
    "pos": "Động từ",
    "vi": "Thể hiện ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thể hiện ra'.",
    "general_def": "Thể hiện ra",
    "example": "Example in text: '... exhibits ...'"
  },
  "existing": {
    "word": "existing",
    "ipa": "/ɪɡˈzɪs.tɪŋ/",
    "pos": "Tính từ",
    "vi": "Hiện hữu, đang tồn tại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiện hữu, đang tồn tại'.",
    "general_def": "Hiện hữu, đang tồn tại",
    "example": "Example in text: '... existing ...'"
  },
  "expanded": {
    "word": "expanded",
    "ipa": "/ɪkˈspæn.dɪd/",
    "pos": "Tính từ",
    "vi": "Mở rộng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mở rộng'.",
    "general_def": "Mở rộng",
    "example": "Example in text: '... expanded ...'"
  },
  "expect": {
    "word": "expect",
    "ipa": "/ɪkˈspekt/",
    "pos": "Động từ",
    "vi": "Kỳ vọng, dự tính",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kỳ vọng, dự tính'.",
    "general_def": "Kỳ vọng, dự tính",
    "example": "Example in text: '... expect ...'"
  },
  "expected": {
    "word": "expected",
    "ipa": "/ɪkˈspek.tɪd/",
    "pos": "Tính từ",
    "vi": "Được dự kiến trước",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được dự kiến trước'.",
    "general_def": "Được dự kiến trước",
    "example": "Example in text: '... expected ...'"
  },
  "experience": {
    "word": "experience",
    "ipa": "/ɪkˈspɪə.ri.əns/",
    "pos": "Động từ/Danh từ",
    "vi": "Trải qua hiện tượng / kinh nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trải qua hiện tượng / kinh nghiệm'.",
    "general_def": "Trải qua hiện tượng / kinh nghiệm",
    "example": "Example in text: '... experience ...'"
  },
  "experiment": {
    "word": "experiment",
    "ipa": "/ɪkˈsper.ɪ.mənt/",
    "pos": "Danh từ",
    "vi": "Cuộc thử nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cuộc thử nghiệm'.",
    "general_def": "Cuộc thử nghiệm",
    "example": "Example in text: '... experiment ...'"
  },
  "experimental": {
    "word": "experimental",
    "ipa": "/ɪkˌsper.ɪˈmen.təl/",
    "pos": "Tính từ",
    "vi": "Thuộc về thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thuộc về thực nghiệm'.",
    "general_def": "Thuộc về thực nghiệm",
    "example": "Example in text: '... experimental ...'"
  },
  "experiments": {
    "word": "experiments",
    "ipa": "/ɪkˈsper.ɪ.mənts/",
    "pos": "Danh từ",
    "vi": "Các thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thực nghiệm'.",
    "general_def": "Các thực nghiệm",
    "example": "Example in text: '... experiments ...'"
  },
  "exploits": {
    "word": "exploits",
    "ipa": "/ɪkˈsplɔɪts/",
    "pos": "Động từ",
    "vi": "Khai thác, tận dụng cơ chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khai thác, tận dụng cơ chế'.",
    "general_def": "Khai thác, tận dụng cơ chế",
    "example": "Example in text: '... exploits ...'"
  },
  "exponential": {
    "word": "exponential",
    "ipa": "/ˌek.spəˈnen.ʃəl/",
    "pos": "Tính từ",
    "vi": "Hàm mũ (Exponential backoff)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hàm mũ (exponential backoff)'.",
    "general_def": "Hàm mũ (Exponential backoff)",
    "example": "Example in text: '... exponential ...'"
  },
  "extended": {
    "word": "extended",
    "ipa": "/ɪkˈsten.dɪd/",
    "pos": "Tính từ",
    "vi": "Mở rộng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mở rộng'.",
    "general_def": "Mở rộng",
    "example": "Example in text: '... extended ...'"
  },
  "extreme": {
    "word": "extreme",
    "ipa": "/ɪkˈstriːm/",
    "pos": "Tính từ",
    "vi": "Cực đoan, khắc nghiệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cực đoan, khắc nghiệt'.",
    "general_def": "Cực đoan, khắc nghiệt",
    "example": "Example in text: '... extreme ...'"
  },
  "fact": {
    "word": "fact",
    "ipa": "/fækt/",
    "pos": "Danh từ",
    "vi": "Thực tế, sự thật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thực tế, sự thật'.",
    "general_def": "Thực tế, sự thật",
    "example": "Example in text: '... fact ...'"
  },
  "factor": {
    "word": "factor",
    "ipa": "/ˈfæk.tər/",
    "pos": "Danh từ",
    "vi": "Hệ số nhân (Backoff Factor)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hệ số nhân (backoff factor)'.",
    "general_def": "Hệ số nhân (Backoff Factor)",
    "example": "Example in text: '... factor ...'"
  },
  "factors": {
    "word": "factors",
    "ipa": "/ˈfæk.tərz/",
    "pos": "Danh từ",
    "vi": "Các hệ số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hệ số'.",
    "general_def": "Các hệ số",
    "example": "Example in text: '... factors ...'"
  },
  "fading": {
    "word": "fading",
    "ipa": "/ˈfeɪ.dɪŋ/",
    "pos": "Danh từ",
    "vi": "Hiện tượng Fading sóng vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiện tượng fading sóng vô tuyến'.",
    "general_def": "Hiện tượng Fading sóng vô tuyến",
    "example": "Example in text: '... fading ...'"
  },
  "fail": {
    "word": "fail",
    "ipa": "/feɪl/",
    "pos": "Động từ",
    "vi": "Thất bại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thất bại'.",
    "general_def": "Thất bại",
    "example": "Example in text: '... fail ...'"
  },
  "fails": {
    "word": "fails",
    "ipa": "/feɪlz/",
    "pos": "Động từ",
    "vi": "Thất bại trong việc thích ứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thất bại trong việc thích ứng'.",
    "general_def": "Thất bại trong việc thích ứng",
    "example": "Example in text: '... fails ...'"
  },
  "failure": {
    "word": "failure",
    "ipa": "/ˈfeɪ.ljər/",
    "pos": "Danh từ",
    "vi": "Sự thất bại truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự thất bại truyền thông'.",
    "general_def": "Sự thất bại truyền thông",
    "example": "Example in text: '... failure ...'"
  },
  "fair": {
    "word": "fair",
    "ipa": "/feər/",
    "pos": "Tính từ",
    "vi": "Công bằng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'công bằng'.",
    "general_def": "Công bằng",
    "example": "Example in text: '... fair ...'"
  },
  "far": {
    "word": "far",
    "ipa": "/fɑːr/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Xa xôi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xa xôi'.",
    "general_def": "Xa xôi",
    "example": "Example in text: '... far ...'"
  },
  "fast": {
    "word": "fast",
    "ipa": "/fɑːst/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Nhanh chóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhanh chóng'.",
    "general_def": "Nhanh chóng",
    "example": "Example in text: '... fast ...'"
  },
  "faster": {
    "word": "faster",
    "ipa": "/fɑː.stər/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Nhanh hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhanh hơn'.",
    "general_def": "Nhanh hơn",
    "example": "Example in text: '... faster ...'"
  },
  "feature": {
    "word": "feature",
    "ipa": "/ˈfiː.tʃər/",
    "pos": "Danh từ",
    "vi": "Tính năng kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tính năng kỹ thuật'.",
    "general_def": "Tính năng kỹ thuật",
    "example": "Example in text: '... feature ...'"
  },
  "features": {
    "word": "features",
    "ipa": "/ˈfiː.tʃərz/",
    "pos": "Danh từ",
    "vi": "Các đặc điểm tính năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đặc điểm tính năng'.",
    "general_def": "Các đặc điểm tính năng",
    "example": "Example in text: '... features ...'"
  },
  "few": {
    "word": "few",
    "ipa": "/fjuː/",
    "pos": "Lượng từ",
    "vi": "Một vài, rất ít",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một vài, rất ít'.",
    "general_def": "Một vài, rất ít",
    "example": "Example in text: '... few ...'"
  },
  "field": {
    "word": "field",
    "ipa": "/fiːld/",
    "pos": "Danh từ",
    "vi": "Trường dữ liệu trong tiêu đề gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trường dữ liệu trong tiêu đề gói tin'.",
    "general_def": "Trường dữ liệu trong tiêu đề gói tin",
    "example": "Example in text: '... field ...'"
  },
  "final": {
    "word": "final",
    "ipa": "/ˈfaɪ.nəl/",
    "pos": "Tính từ",
    "vi": "Cuối cùng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cuối cùng'.",
    "general_def": "Cuối cùng",
    "example": "Example in text: '... final ...'"
  },
  "finally": {
    "word": "finally",
    "ipa": "/ˈfaɪ.nəl.i/",
    "pos": "Trạng từ",
    "vi": "Cuối cùng là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cuối cùng là'.",
    "general_def": "Cuối cùng là",
    "example": "Example in text: '... finally ...'"
  },
  "find": {
    "word": "find",
    "ipa": "/faɪnd/",
    "pos": "Động từ",
    "vi": "Tìm thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tìm thấy'.",
    "general_def": "Tìm thấy",
    "example": "Example in text: '... find ...'"
  },
  "finished": {
    "word": "finished",
    "ipa": "/ˈfɪn.ɪʃt/",
    "pos": "Tính từ",
    "vi": "Đã kết thúc trọn vẹn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã kết thúc trọn vẹn'.",
    "general_def": "Đã kết thúc trọn vẹn",
    "example": "Example in text: '... finished ...'"
  },
  "first": {
    "word": "first",
    "ipa": "/fɜːst/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Đầu tiên, trước nhất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đầu tiên, trước nhất'.",
    "general_def": "Đầu tiên, trước nhất",
    "example": "Example in text: '... first ...'"
  },
  "fixed": {
    "word": "fixed",
    "ipa": "/fɪkst/",
    "pos": "Tính từ",
    "vi": "Cố định (RTO cố định)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cố định (rto cố định)'.",
    "general_def": "Cố định (RTO cố định)",
    "example": "Example in text: '... fixed ...'"
  },
  "flocklab": {
    "word": "flocklab",
    "ipa": "/ˈflɒk.læb/",
    "pos": "Danh từ",
    "vi": "Testbed cảm biến FlockLab",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'testbed cảm biến flocklab'.",
    "general_def": "Testbed cảm biến FlockLab",
    "example": "Example in text: '... flocklab ...'"
  },
  "fluctuate": {
    "word": "fluctuate",
    "ipa": "/ˈflʌk.tʃu.eɪt/",
    "pos": "Động từ",
    "vi": "Dao động, biến thiên trễ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dao động, biến thiên trễ'.",
    "general_def": "Dao động, biến thiên trễ",
    "example": "Example in text: '... fluctuate ...'"
  },
  "fluctuations": {
    "word": "fluctuations",
    "ipa": "/ˌflʌk.tʃuˈeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các dao động trễ RTT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các dao động trễ rtt'.",
    "general_def": "Các dao động trễ RTT",
    "example": "Example in text: '... fluctuations ...'"
  },
  "following": {
    "word": "following",
    "ipa": "/ˈfɒl.əʊ.ɪŋ/",
    "pos": "Tính từ",
    "vi": "Sau đây, kế tiếp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sau đây, kế tiếp'.",
    "general_def": "Sau đây, kế tiếp",
    "example": "Example in text: '... following ...'"
  },
  "follows": {
    "word": "follows",
    "ipa": "/ˈfɒl.əʊz/",
    "pos": "Động từ",
    "vi": "Như sau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'như sau'.",
    "general_def": "Như sau",
    "example": "Example in text: '... follows ...'"
  },
  "footprint": {
    "word": "footprint",
    "ipa": "/ˈfʊt.prɪnt/",
    "pos": "Danh từ",
    "vi": "Dấu chân bộ nhớ RAM (Memory footprint)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dấu chân bộ nhớ ram (memory footprint)'.",
    "general_def": "Dấu chân bộ nhớ RAM (Memory footprint)",
    "example": "Example in text: '... footprint ...'"
  },
  "for": {
    "word": "for",
    "ipa": "/fɔːr/",
    "pos": "Giới từ",
    "vi": "Cho, dành cho",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cho, dành cho'.",
    "general_def": "Cho, dành cho",
    "example": "Example in text: '... for ...'"
  },
  "forming": {
    "word": "forming",
    "ipa": "/ˈfɔː.mɪŋ/",
    "pos": "Động từ",
    "vi": "Hình thành nên mạng lưới",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hình thành nên mạng lưới'.",
    "general_def": "Hình thành nên mạng lưới",
    "example": "Example in text: '... forming ...'"
  },
  "formula": {
    "word": "formula",
    "ipa": "/ˈfɔː.mjʊ.lə/",
    "pos": "Danh từ",
    "vi": "Công thức toán học",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'công thức toán học'.",
    "general_def": "Công thức toán học",
    "example": "Example in text: '... formula ...'"
  },
  "formulae": {
    "word": "formulae",
    "ipa": "/ˈfɔː.mjʊ.liː/",
    "pos": "Danh từ",
    "vi": "Các công thức",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các công thức'.",
    "general_def": "Các công thức",
    "example": "Example in text: '... formulae ...'"
  },
  "forward": {
    "word": "forward",
    "ipa": "/ˈfɔː.wəd/",
    "pos": "Trạng từ/Động từ",
    "vi": "Chuyển tiếp gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chuyển tiếp gói tin'.",
    "general_def": "Chuyển tiếp gói tin",
    "example": "Example in text: '... forward ...'"
  },
  "four": {
    "word": "four",
    "ipa": "/fɔːr/",
    "pos": "Số từ",
    "vi": "Bốn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bốn'.",
    "general_def": "Bốn",
    "example": "Example in text: '... four ...'"
  },
  "fraction": {
    "word": "fraction",
    "ipa": "/ˈfræk.ʃən/",
    "pos": "Danh từ",
    "vi": "Phân số, tỷ lệ phần trăm nhỏ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phân số, tỷ lệ phần trăm nhỏ'.",
    "general_def": "Phân số, tỷ lệ phần trăm nhỏ",
    "example": "Example in text: '... fraction ...'"
  },
  "frame": {
    "word": "frame",
    "ipa": "/freɪm/",
    "pos": "Danh từ",
    "vi": "Khung dữ liệu tầng MAC",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khung dữ liệu tầng mac'.",
    "general_def": "Khung dữ liệu tầng MAC",
    "example": "Example in text: '... frame ...'"
  },
  "free": {
    "word": "free",
    "ipa": "/friː/",
    "pos": "Tính từ",
    "vi": "Tự do, rảnh rỗi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tự do, rảnh rỗi'.",
    "general_def": "Tự do, rảnh rỗi",
    "example": "Example in text: '... free ...'"
  },
  "freeze": {
    "word": "freeze",
    "ipa": "/friːz/",
    "pos": "Động từ",
    "vi": "Đóng băng cập nhật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đóng băng cập nhật'.",
    "general_def": "Đóng băng cập nhật",
    "example": "Example in text: '... freeze ...'"
  },
  "frequent": {
    "word": "frequent",
    "ipa": "/ˈfriː.kwənt/",
    "pos": "Tính từ",
    "vi": "Thường xuyên dày đặc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thường xuyên dày đặc'.",
    "general_def": "Thường xuyên dày đặc",
    "example": "Example in text: '... frequent ...'"
  },
  "frequently": {
    "word": "frequently",
    "ipa": "/ˈfriː.kwənt.li/",
    "pos": "Trạng từ",
    "vi": "Một cách thường xuyên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách thường xuyên'.",
    "general_def": "Một cách thường xuyên",
    "example": "Example in text: '... frequently ...'"
  },
  "from": {
    "word": "from",
    "ipa": "/frɒm/",
    "pos": "Giới từ",
    "vi": "Từ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'từ'.",
    "general_def": "Từ",
    "example": "Example in text: '... from ...'"
  },
  "full": {
    "word": "full",
    "ipa": "/fʊl/",
    "pos": "Tính từ",
    "vi": "Đầy đủ, toàn bộ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đầy đủ, toàn bộ'.",
    "general_def": "Đầy đủ, toàn bộ",
    "example": "Example in text: '... full ...'"
  },
  "function": {
    "word": "function",
    "ipa": "/ˈfʌŋk.ʃən/",
    "pos": "Danh từ",
    "vi": "Hàm toán học / chức năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hàm toán học / chức năng'.",
    "general_def": "Hàm toán học / chức năng",
    "example": "Example in text: '... function ...'"
  },
  "functions": {
    "word": "functions",
    "ipa": "/ˈfʌŋk.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các chức năng giải thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các chức năng giải thuật'.",
    "general_def": "Các chức năng giải thuật",
    "example": "Example in text: '... functions ...'"
  },
  "further": {
    "word": "further",
    "ipa": "/ˈfɜː.ðər/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Xa hơn, tiếp theo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xa hơn, tiếp theo'.",
    "general_def": "Xa hơn, tiếp theo",
    "example": "Example in text: '... further ...'"
  },
  "future": {
    "word": "future",
    "ipa": "/ˈfjuː.tʃər/",
    "pos": "Danh từ/Tính từ",
    "vi": "Tương lai",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương lai'.",
    "general_def": "Tương lai",
    "example": "Example in text: '... future ...'"
  },
  "gain": {
    "word": "gain",
    "ipa": "/ɡeɪn/",
    "pos": "Danh từ/Động từ",
    "vi": "Độ lợi, thu được lợi ích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'độ lợi, thu được lợi ích'.",
    "general_def": "Độ lợi, thu được lợi ích",
    "example": "Example in text: '... gain ...'"
  },
  "gained": {
    "word": "gained",
    "ipa": "/ɡeɪnd/",
    "pos": "Tính từ",
    "vi": "Đã thu hoạch được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã thu hoạch được'.",
    "general_def": "Đã thu hoạch được",
    "example": "Example in text: '... gained ...'"
  },
  "gains": {
    "word": "gains",
    "ipa": "/ɡeɪnz/",
    "pos": "Danh từ",
    "vi": "Các độ lợi thông lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các độ lợi thông lượng'.",
    "general_def": "Các độ lợi thông lượng",
    "example": "Example in text: '... gains ...'"
  },
  "gamma": {
    "word": "gamma",
    "ipa": "/ˈɡæm.ə/",
    "pos": "Danh từ",
    "vi": "Hệ số gamma trong CoCoA-E",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hệ số gamma trong cocoa-e'.",
    "general_def": "Hệ số gamma trong CoCoA-E",
    "example": "Example in text: '... gamma ...'"
  },
  "general": {
    "word": "general",
    "ipa": "/ˈdʒen.ər.əl/",
    "pos": "Tính từ",
    "vi": "Tổng quát, chung",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tổng quát, chung'.",
    "general_def": "Tổng quát, chung",
    "example": "Example in text: '... general ...'"
  },
  "generate": {
    "word": "generate",
    "ipa": "/ˈdʒen.ə.reɪt/",
    "pos": "Động từ",
    "vi": "Sinh ra gói tin / tạo ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sinh ra gói tin / tạo ra'.",
    "general_def": "Sinh ra gói tin / tạo ra",
    "example": "Example in text: '... generate ...'"
  },
  "generated": {
    "word": "generated",
    "ipa": "/ˈdʒen.ə.reɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Được sinh ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được sinh ra'.",
    "general_def": "Được sinh ra",
    "example": "Example in text: '... generated ...'"
  },
  "get": {
    "word": "get",
    "ipa": "/ɡet/",
    "pos": "Động từ",
    "vi": "Lấy được, nhận được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lấy được, nhận được'.",
    "general_def": "Lấy được, nhận được",
    "example": "Example in text: '... get ...'"
  },
  "getting": {
    "word": "getting",
    "ipa": "/ˈɡet.ɪŋ/",
    "pos": "Động từ",
    "vi": "Đang đạt được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang đạt được'.",
    "general_def": "Đang đạt được",
    "example": "Example in text: '... getting ...'"
  },
  "given": {
    "word": "given",
    "ipa": "/ˈɡɪv.ən/",
    "pos": "Giới từ/Tính từ",
    "vi": "Căn cứ vào, cho trước",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'căn cứ vào, cho trước'.",
    "general_def": "Căn cứ vào, cho trước",
    "example": "Example in text: '... given ...'"
  },
  "global": {
    "word": "global",
    "ipa": "/ˈɡləʊ.bəl/",
    "pos": "Tính từ",
    "vi": "Toàn cầu (IPv6 global address)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'toàn cầu (ipv6 global address)'.",
    "general_def": "Toàn cầu (IPv6 global address)",
    "example": "Example in text: '... global ...'"
  },
  "goal": {
    "word": "goal",
    "ipa": "/ɡəʊl/",
    "pos": "Danh từ",
    "vi": "Mục tiêu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mục tiêu'.",
    "general_def": "Mục tiêu",
    "example": "Example in text: '... goal ...'"
  },
  "good": {
    "word": "good",
    "ipa": "/ɡʊd/",
    "pos": "Tính từ",
    "vi": "Tốt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tốt'.",
    "general_def": "Tốt",
    "example": "Example in text: '... good ...'"
  },
  "gprs": {
    "word": "gprs",
    "ipa": "/ˌdʒiː.piː.ɑːrˈes/",
    "pos": "Danh từ",
    "vi": "Mạng dữ liệu di động GPRS",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mạng dữ liệu di động gprs'.",
    "general_def": "Mạng dữ liệu di động GPRS",
    "example": "Example in text: '... gprs ...'"
  },
  "greater": {
    "word": "greater",
    "ipa": "/ˈɡreɪ.tər/",
    "pos": "Tính từ",
    "vi": "Lớn hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lớn hơn'.",
    "general_def": "Lớn hơn",
    "example": "Example in text: '... greater ...'"
  },
  "greedy": {
    "word": "greedy",
    "ipa": "/ˈɡriː.di/",
    "pos": "Tính từ",
    "vi": "Tham lam (greedy traffic: lưu lượng phát hết tốc độ không điều khiển)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tham lam (greedy traffic: lưu lượng phát hết tốc độ không điều khiển)'.",
    "general_def": "Tham lam (greedy traffic: lưu lượng phát hết tốc độ không điều khiển)",
    "example": "Example in text: '... greedy ...'"
  },
  "grid": {
    "word": "grid",
    "ipa": "/ɡrɪd/",
    "pos": "Danh từ",
    "vi": "Ma trận lưới (6x6 grid topology)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ma trận lưới (6x6 grid topology)'.",
    "general_def": "Ma trận lưới (6x6 grid topology)",
    "example": "Example in text: '... grid ...'"
  },
  "group": {
    "word": "group",
    "ipa": "/ɡruːp/",
    "pos": "Danh từ",
    "vi": "Nhóm (Working Group của IETF)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhóm (working group của ietf)'.",
    "general_def": "Nhóm (Working Group của IETF)",
    "example": "Example in text: '... group ...'"
  },
  "grow": {
    "word": "grow",
    "ipa": "/ɡrəʊ/",
    "pos": "Động từ",
    "vi": "Tăng trưởng, phình to",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tăng trưởng, phình to'.",
    "general_def": "Tăng trưởng, phình to",
    "example": "Example in text: '... grow ...'"
  },
  "growing": {
    "word": "growing",
    "ipa": "/ˈɡrəʊ.ɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang gia tăng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang gia tăng'.",
    "general_def": "Đang gia tăng",
    "example": "Example in text: '... growing ...'"
  },
  "growth": {
    "word": "growth",
    "ipa": "/ɡrəʊθ/",
    "pos": "Danh từ",
    "vi": "Sự phình to giá trị RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự phình to giá trị rto'.",
    "general_def": "Sự phình to giá trị RTO",
    "example": "Example in text: '... growth ...'"
  },
  "guarantee": {
    "word": "guarantee",
    "ipa": "/ˌɡær.ənˈtiː/",
    "pos": "Động từ/Danh từ",
    "vi": "Bảo đảm cam kết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bảo đảm cam kết'.",
    "general_def": "Bảo đảm cam kết",
    "example": "Example in text: '... guarantee ...'"
  },
  "guaranteeing": {
    "word": "guaranteeing",
    "ipa": "/ˌɡær.ənˈtiː.ɪŋ/",
    "pos": "Động từ",
    "vi": "Đang bảo đảm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang bảo đảm'.",
    "general_def": "Đang bảo đảm",
    "example": "Example in text: '... guaranteeing ...'"
  },
  "handle": {
    "word": "handle",
    "ipa": "/ˈhæn.dəl/",
    "pos": "Động từ",
    "vi": "Xử lý tình huống nghẽn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xử lý tình huống nghẽn'.",
    "general_def": "Xử lý tình huống nghẽn",
    "example": "Example in text: '... handle ...'"
  },
  "hardware": {
    "word": "hardware",
    "ipa": "/ˈhɑːd.weər/",
    "pos": "Danh từ",
    "vi": "Phần cứng vi điều khiển",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phần cứng vi điều khiển'.",
    "general_def": "Phần cứng vi điều khiển",
    "example": "Example in text: '... hardware ...'"
  },
  "has": {
    "word": "has",
    "ipa": "/hæz/",
    "pos": "Động từ",
    "vi": "Có",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có'.",
    "general_def": "Có",
    "example": "Example in text: '... has ...'"
  },
  "have": {
    "word": "have",
    "ipa": "/hæv/",
    "pos": "Động từ",
    "vi": "Có",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có'.",
    "general_def": "Có",
    "example": "Example in text: '... have ...'"
  },
  "heavy": {
    "word": "heavy",
    "ipa": "/ˈhev.i/",
    "pos": "Tính từ",
    "vi": "Nặng nề, tải nặng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nặng nề, tải nặng'.",
    "general_def": "Nặng nề, tải nặng",
    "example": "Example in text: '... heavy ...'"
  },
  "help": {
    "word": "help",
    "ipa": "/help/",
    "pos": "Động từ/Danh từ",
    "vi": "Giúp đỡ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giúp đỡ'.",
    "general_def": "Giúp đỡ",
    "example": "Example in text: '... help ...'"
  },
  "helped": {
    "word": "helped",
    "ipa": "/helpt/",
    "pos": "Động từ",
    "vi": "Đã giúp ích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã giúp ích'.",
    "general_def": "Đã giúp ích",
    "example": "Example in text: '... helped ...'"
  },
  "here": {
    "word": "here",
    "ipa": "/hɪər/",
    "pos": "Trạng từ",
    "vi": "Tại đây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tại đây'.",
    "general_def": "Tại đây",
    "example": "Example in text: '... here ...'"
  },
  "high": {
    "word": "high",
    "ipa": "/haɪ/",
    "pos": "Tính từ",
    "vi": "Cao (tỷ lệ lỗi cao)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cao (tỷ lệ lỗi cao)'.",
    "general_def": "Cao (tỷ lệ lỗi cao)",
    "example": "Example in text: '... high ...'"
  },
  "higher": {
    "word": "higher",
    "ipa": "/ˈhaɪ.ər/",
    "pos": "Tính từ",
    "vi": "Cao hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cao hơn'.",
    "general_def": "Cao hơn",
    "example": "Example in text: '... higher ...'"
  },
  "highest": {
    "word": "highest",
    "ipa": "/ˈhaɪ.ɪst/",
    "pos": "Tính từ",
    "vi": "Cao nhất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cao nhất'.",
    "general_def": "Cao nhất",
    "example": "Example in text: '... highest ...'"
  },
  "highlight": {
    "word": "highlight",
    "ipa": "/ˈhaɪ.laɪt/",
    "pos": "Động từ",
    "vi": "Làm sáng tỏ, vạch rõ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'làm sáng tỏ, vạch rõ'.",
    "general_def": "Làm sáng tỏ, vạch rõ",
    "example": "Example in text: '... highlight ...'"
  },
  "highlighted": {
    "word": "highlighted",
    "ipa": "/ˈhaɪ.laɪ.tɪd/",
    "pos": "Động từ",
    "vi": "Đã được chỉ rõ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được chỉ rõ'.",
    "general_def": "Đã được chỉ rõ",
    "example": "Example in text: '... highlighted ...'"
  },
  "history": {
    "word": "history",
    "ipa": "/ˈhɪs.tər.i/",
    "pos": "Danh từ",
    "vi": "Chuỗi lịch sử đo đạc RTT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chuỗi lịch sử đo đạc rtt'.",
    "general_def": "Chuỗi lịch sử đo đạc RTT",
    "example": "Example in text: '... history ...'"
  },
  "hop": {
    "word": "hop",
    "ipa": "/hɒp/",
    "pos": "Danh từ",
    "vi": "Chặng nhảy mạng (hop count)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chặng nhảy mạng (hop count)'.",
    "general_def": "Chặng nhảy mạng (hop count)",
    "example": "Example in text: '... hop ...'"
  },
  "however": {
    "word": "however",
    "ipa": "/haʊˈev.ər/",
    "pos": "Liên từ",
    "vi": "Tuy nhiên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tuy nhiên'.",
    "general_def": "Tuy nhiên",
    "example": "Example in text: '... however ...'"
  },
  "huge": {
    "word": "huge",
    "ipa": "/hjuːdʒ/",
    "pos": "Tính từ",
    "vi": "Khổng lồ, rất lớn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khổng lồ, rất lớn'.",
    "general_def": "Khổng lồ, rất lớn",
    "example": "Example in text: '... huge ...'"
  },
  "id": {
    "word": "id",
    "ipa": "/ˌaɪˈdiː/",
    "pos": "Danh từ",
    "vi": "Mã định danh (Node ID, Message ID)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mã định danh (node id, message id)'.",
    "general_def": "Mã định danh (Node ID, Message ID)",
    "example": "Example in text: '... id ...'"
  },
  "ieee": {
    "word": "ieee",
    "ipa": "/ˌaɪ.triː.pəlˈiː/",
    "pos": "Danh từ",
    "vi": "Viện kỹ sư điện và điện tử quốc tế IEEE",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'viện kỹ sư điện và điện tử quốc tế ieee'.",
    "general_def": "Viện kỹ sư điện và điện tử quốc tế IEEE",
    "example": "Example in text: '... ieee ...'"
  },
  "ietf": {
    "word": "ietf",
    "ipa": "/ˌaɪ.iː.tiːˈef/",
    "pos": "Danh từ",
    "vi": "Tổ chức chuẩn hóa kỹ thuật Internet IETF",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tổ chức chuẩn hóa kỹ thuật internet ietf'.",
    "general_def": "Tổ chức chuẩn hóa kỹ thuật Internet IETF",
    "example": "Example in text: '... ietf ...'"
  },
  "if": {
    "word": "if",
    "ipa": "/ɪf/",
    "pos": "Liên từ",
    "vi": "Nếu, trong trường hợp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nếu, trong trường hợp'.",
    "general_def": "Nếu, trong trường hợp",
    "example": "Example in text: '... if ...'"
  },
  "ignore": {
    "word": "ignore",
    "ipa": "/ɪɡˈnɔːr/",
    "pos": "Động từ",
    "vi": "Bỏ qua",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bỏ qua'.",
    "general_def": "Bỏ qua",
    "example": "Example in text: '... ignore ...'"
  },
  "ignored": {
    "word": "ignored",
    "ipa": "/ɪɡˈnɔːd/",
    "pos": "Tính từ",
    "vi": "Bị lờ đi, bỏ qua",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bị lờ đi, bỏ qua'.",
    "general_def": "Bị lờ đi, bỏ qua",
    "example": "Example in text: '... ignored ...'"
  },
  "impact": {
    "word": "impact",
    "ipa": "/ˈɪm.pækt/",
    "pos": "Danh từ/Động từ",
    "vi": "Tác động ảnh hưởng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tác động ảnh hưởng'.",
    "general_def": "Tác động ảnh hưởng",
    "example": "Example in text: '... impact ...'"
  },
  "implement": {
    "word": "implement",
    "ipa": "/ˈɪm.plɪ.ment/",
    "pos": "Động từ",
    "vi": "Cài đặt thuật toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cài đặt thuật toán'.",
    "general_def": "Cài đặt thuật toán",
    "example": "Example in text: '... implement ...'"
  },
  "implementation": {
    "word": "implementation",
    "ipa": "/ˌɪm.plɪ.menˈteɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Bản cài đặt thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản cài đặt thực nghiệm'.",
    "general_def": "Bản cài đặt thực nghiệm",
    "example": "Example in text: '... implementation ...'"
  },
  "implementations": {
    "word": "implementations",
    "ipa": "/ˌɪm.plɪ.menˈteɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các bản cài đặt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bản cài đặt'.",
    "general_def": "Các bản cài đặt",
    "example": "Example in text: '... implementations ...'"
  },
  "implements": {
    "word": "implements",
    "ipa": "/ˈɪm.plɪ.ments/",
    "pos": "Động từ",
    "vi": "Cài đặt triển khai",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cài đặt triển khai'.",
    "general_def": "Cài đặt triển khai",
    "example": "Example in text: '... implements ...'"
  },
  "improve": {
    "word": "improve",
    "ipa": "/ɪmˈpruːv/",
    "pos": "Động từ",
    "vi": "Cải thiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cải thiện'.",
    "general_def": "Cải thiện",
    "example": "Example in text: '... improve ...'"
  },
  "improved": {
    "word": "improved",
    "ipa": "/ɪmˈpruːvd/",
    "pos": "Tính từ",
    "vi": "Được cải thiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được cải thiện'.",
    "general_def": "Được cải thiện",
    "example": "Example in text: '... improved ...'"
  },
  "improvement": {
    "word": "improvement",
    "ipa": "/ɪmˈpruːv.mənt/",
    "pos": "Danh từ",
    "vi": "Sự cải thiện hiệu năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự cải thiện hiệu năng'.",
    "general_def": "Sự cải thiện hiệu năng",
    "example": "Example in text: '... improvement ...'"
  },
  "improving": {
    "word": "improving",
    "ipa": "/ɪmˈpruː.vɪŋ/",
    "pos": "Động từ",
    "vi": "Đang cải thiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang cải thiện'.",
    "general_def": "Đang cải thiện",
    "example": "Example in text: '... improving ...'"
  },
  "improper": {
    "word": "improper",
    "ipa": "/ɪmˈprɒp.ər/",
    "pos": "Tính từ",
    "vi": "Không thích hợp, sai lệch",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không thích hợp, sai lệch'.",
    "general_def": "Không thích hợp, sai lệch",
    "example": "Example in text: '... improper ...'"
  },
  "in": {
    "word": "in",
    "ipa": "/ɪn/",
    "pos": "Giới từ",
    "vi": "Trong",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trong'.",
    "general_def": "Trong",
    "example": "Example in text: '... in ...'"
  },
  "include": {
    "word": "include",
    "ipa": "/ɪnˈkluːd/",
    "pos": "Động từ",
    "vi": "Bao gồm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bao gồm'.",
    "general_def": "Bao gồm",
    "example": "Example in text: '... include ...'"
  },
  "included": {
    "word": "included",
    "ipa": "/ɪnˈkluː.dɪd/",
    "pos": "Tính từ",
    "vi": "Được bao gồm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được bao gồm'.",
    "general_def": "Được bao gồm",
    "example": "Example in text: '... included ...'"
  },
  "includes": {
    "word": "includes",
    "ipa": "/ɪnˈkluːdz/",
    "pos": "Động từ",
    "vi": "Bao gồm các phần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bao gồm các phần'.",
    "general_def": "Bao gồm các phần",
    "example": "Example in text: '... includes ...'"
  },
  "including": {
    "word": "including",
    "ipa": "/ɪnˈkluː.dɪŋ/",
    "pos": "Giới từ",
    "vi": "Kể cả, bao gồm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kể cả, bao gồm'.",
    "general_def": "Kể cả, bao gồm",
    "example": "Example in text: '... including ...'"
  },
  "increase": {
    "word": "increase",
    "ipa": "/ɪnˈkriːs/",
    "pos": "Động từ/Danh từ",
    "vi": "Tăng lên, sự gia tăng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tăng lên, sự gia tăng'.",
    "general_def": "Tăng lên, sự gia tăng",
    "example": "Example in text: '... increase ...'"
  },
  "increased": {
    "word": "increased",
    "ipa": "/ɪnˈkriːst/",
    "pos": "Động từ",
    "vi": "Đã tăng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã tăng'.",
    "general_def": "Đã tăng",
    "example": "Example in text: '... increased ...'"
  },
  "increases": {
    "word": "increases",
    "ipa": "/ɪnˈkriː.sɪz/",
    "pos": "Động từ",
    "vi": "Tăng dần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tăng dần'.",
    "general_def": "Tăng dần",
    "example": "Example in text: '... increases ...'"
  },
  "increasing": {
    "word": "increasing",
    "ipa": "/ɪnˈkriː.sɪŋ/",
    "pos": "Tính từ/Động từ",
    "vi": "Gia tăng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gia tăng'.",
    "general_def": "Gia tăng",
    "example": "Example in text: '... increasing ...'"
  },
  "increment": {
    "word": "increment",
    "ipa": "/ˈɪŋ.krə.mənt/",
    "pos": "Danh từ/Động từ",
    "vi": "Gia số, tăng thêm 1 đơn vị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gia số, tăng thêm 1 đơn vị'.",
    "general_def": "Gia số, tăng thêm 1 đơn vị",
    "example": "Example in text: '... increment ...'"
  },
  "incremented": {
    "word": "incremented",
    "ipa": "/ˈɪŋ.krə.men.tɪd/",
    "pos": "Động từ",
    "vi": "Được tăng thêm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được tăng thêm'.",
    "general_def": "Được tăng thêm",
    "example": "Example in text: '... incremented ...'"
  },
  "independent": {
    "word": "independent",
    "ipa": "/ˌɪn.dɪˈpen.dənt/",
    "pos": "Tính từ",
    "vi": "Độc lập",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'độc lập'.",
    "general_def": "Độc lập",
    "example": "Example in text: '... independent ...'"
  },
  "index": {
    "word": "index",
    "ipa": "/ˈɪn.deks/",
    "pos": "Danh từ",
    "vi": "Chỉ số (Fairness Index)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chỉ số (fairness index)'.",
    "general_def": "Chỉ số (Fairness Index)",
    "example": "Example in text: '... index ...'"
  },
  "indicate": {
    "word": "indicate",
    "ipa": "/ˈɪn.dɪ.keɪt/",
    "pos": "Động từ",
    "vi": "Chỉ ra rằng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chỉ ra rằng'.",
    "general_def": "Chỉ ra rằng",
    "example": "Example in text: '... indicate ...'"
  },
  "indicated": {
    "word": "indicated",
    "ipa": "/ˈɪn.dɪ.keɪ.tɪd/",
    "pos": "Động từ",
    "vi": "Đã chỉ ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã chỉ ra'.",
    "general_def": "Đã chỉ ra",
    "example": "Example in text: '... indicated ...'"
  },
  "indoor": {
    "word": "indoor",
    "ipa": "/ˈɪn.dɔːr/",
    "pos": "Tính từ",
    "vi": "Trong nhà",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trong nhà'.",
    "general_def": "Trong nhà",
    "example": "Example in text: '... indoor ...'"
  },
  "industry": {
    "word": "industry",
    "ipa": "/ˈɪn.də.stri/",
    "pos": "Danh từ",
    "vi": "Công nghiệp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'công nghiệp'.",
    "general_def": "Công nghiệp",
    "example": "Example in text: '... industry ...'"
  },
  "infer": {
    "word": "infer",
    "ipa": "/ɪnˈfɜːr/",
    "pos": "Động từ",
    "vi": "Suy ra, suy luận",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'suy ra, suy luận'.",
    "general_def": "Suy ra, suy luận",
    "example": "Example in text: '... infer ...'"
  },
  "information": {
    "word": "information",
    "ipa": "/ˌɪn.fəˈmeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Thông tin trạng thái mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thông tin trạng thái mạng'.",
    "general_def": "Thông tin trạng thái mạng",
    "example": "Example in text: '... information ...'"
  },
  "initial": {
    "word": "initial",
    "ipa": "/ɪˈnɪʃ.əl/",
    "pos": "Tính từ",
    "vi": "Ban đầu, khởi tạo (Initial RTO)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ban đầu, khởi tạo (initial rto)'.",
    "general_def": "Ban đầu, khởi tạo (Initial RTO)",
    "example": "Example in text: '... initial ...'"
  },
  "initialization": {
    "word": "initialization",
    "ipa": "/ɪˌnɪʃ.əl.aɪˈzeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự khởi tạo tham số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự khởi tạo tham số'.",
    "general_def": "Sự khởi tạo tham số",
    "example": "Example in text: '... initialization ...'"
  },
  "initialize": {
    "word": "initialize",
    "ipa": "/ɪˈnɪʃ.əl.aɪz/",
    "pos": "Động từ",
    "vi": "Khởi tạo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khởi tạo'.",
    "general_def": "Khởi tạo",
    "example": "Example in text: '... initialize ...'"
  },
  "initialized": {
    "word": "initialized",
    "ipa": "/ɪˈnɪʃ.əl.aɪzd/",
    "pos": "Tính từ",
    "vi": "Đã được khởi tạo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được khởi tạo'.",
    "general_def": "Đã được khởi tạo",
    "example": "Example in text: '... initialized ...'"
  },
  "initiate": {
    "word": "initiate",
    "ipa": "/ɪˈnɪʃ.i.eɪt/",
    "pos": "Động từ",
    "vi": "Khởi xướng giao dịch",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khởi xướng giao dịch'.",
    "general_def": "Khởi xướng giao dịch",
    "example": "Example in text: '... initiate ...'"
  },
  "inject": {
    "word": "inject",
    "ipa": "/ɪnˈdʒekt/",
    "pos": "Động từ",
    "vi": "Bơm dữ liệu vào mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bơm dữ liệu vào mạng'.",
    "general_def": "Bơm dữ liệu vào mạng",
    "example": "Example in text: '... inject ...'"
  },
  "insight": {
    "word": "insight",
    "ipa": "/ˈɪn.saɪt/",
    "pos": "Danh từ",
    "vi": "Cái nhìn sâu sắc, thấu hiểu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cái nhìn sâu sắc, thấu hiểu'.",
    "general_def": "Cái nhìn sâu sắc, thấu hiểu",
    "example": "Example in text: '... insight ...'"
  },
  "instance": {
    "word": "instance",
    "ipa": "/ˈɪn.stəns/",
    "pos": "Danh từ",
    "vi": "Ví dụ, trường hợp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ví dụ, trường hợp'.",
    "general_def": "Ví dụ, trường hợp",
    "example": "Example in text: '... instance ...'"
  },
  "instead": {
    "word": "instead",
    "ipa": "/ɪnˈsted/",
    "pos": "Trạng từ",
    "vi": "Thay vào đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thay vào đó'.",
    "general_def": "Thay vào đó",
    "example": "Example in text: '... instead ...'"
  },
  "insufficient": {
    "word": "insufficient",
    "ipa": "/ˌɪn.səˈfɪʃ.ənt/",
    "pos": "Tính từ",
    "vi": "Không đủ, thiếu thốn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không đủ, thiếu thốn'.",
    "general_def": "Không đủ, thiếu thốn",
    "example": "Example in text: '... insufficient ...'"
  },
  "interact": {
    "word": "interact",
    "ipa": "/ˌɪn.təˈrækt/",
    "pos": "Động từ",
    "vi": "Tương tác với môi trường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương tác với môi trường'.",
    "general_def": "Tương tác với môi trường",
    "example": "Example in text: '... interact ...'"
  },
  "interaction": {
    "word": "interaction",
    "ipa": "/ˌɪn.təˈræk.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự tương tác (giao dịch CON-ACK)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự tương tác (giao dịch con-ack)'.",
    "general_def": "Sự tương tác (giao dịch CON-ACK)",
    "example": "Example in text: '... interaction ...'"
  },
  "interactions": {
    "word": "interactions",
    "ipa": "/ˌɪn.təˈræk.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các tương tác mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tương tác mạng'.",
    "general_def": "Các tương tác mạng",
    "example": "Example in text: '... interactions ...'"
  },
  "interconnected": {
    "word": "interconnected",
    "ipa": "/ˌɪn.tə.kəˈnek.tɪd/",
    "pos": "Tính từ",
    "vi": "Liên kết với nhau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'liên kết với nhau'.",
    "general_def": "Liên kết với nhau",
    "example": "Example in text: '... interconnected ...'"
  },
  "interest": {
    "word": "interest",
    "ipa": "/ˈɪn.trəst/",
    "pos": "Danh từ",
    "vi": "Sự quan tâm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự quan tâm'.",
    "general_def": "Sự quan tâm",
    "example": "Example in text: '... interest ...'"
  },
  "interesting": {
    "word": "interesting",
    "ipa": "/ˈɪn.trəs.tɪŋ/",
    "pos": "Tính từ",
    "vi": "Thú vị, đáng chú ý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thú vị, đáng chú ý'.",
    "general_def": "Thú vị, đáng chú ý",
    "example": "Example in text: '... interesting ...'"
  },
  "interface": {
    "word": "interface",
    "ipa": "/ˈɪn.tə.feɪs/",
    "pos": "Danh từ",
    "vi": "Giao diện mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao diện mạng'.",
    "general_def": "Giao diện mạng",
    "example": "Example in text: '... interface ...'"
  },
  "interfere": {
    "word": "interfere",
    "ipa": "/ˌɪn.təˈfɪər/",
    "pos": "Động từ",
    "vi": "Gây nhiễu sóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gây nhiễu sóng'.",
    "general_def": "Gây nhiễu sóng",
    "example": "Example in text: '... interfere ...'"
  },
  "interfering": {
    "word": "interfering",
    "ipa": "/ˌɪn.təˈfɪə.rɪŋ/",
    "pos": "Tính từ",
    "vi": "Gây nhiễu, cản trở",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gây nhiễu, cản trở'.",
    "general_def": "Gây nhiễu, cản trở",
    "example": "Example in text: '... interfering ...'"
  },
  "intermediate": {
    "word": "intermediate",
    "ipa": "/ˌɪn.təˈmiː.di.ət/",
    "pos": "Tính từ",
    "vi": "Trung gian (nút trung gian)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trung gian (nút trung gian)'.",
    "general_def": "Trung gian (nút trung gian)",
    "example": "Example in text: '... intermediate ...'"
  },
  "intermittent": {
    "word": "intermittent",
    "ipa": "/ˌɪn.təˈmɪt.ənt/",
    "pos": "Tính từ",
    "vi": "Chập chờn, đứt quãng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chập chờn, đứt quãng'.",
    "general_def": "Chập chờn, đứt quãng",
    "example": "Example in text: '... intermittent ...'"
  },
  "internal": {
    "word": "internal",
    "ipa": "/ɪnˈtɜː.nəl/",
    "pos": "Tính từ",
    "vi": "Nội bộ bên trong",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nội bộ bên trong'.",
    "general_def": "Nội bộ bên trong",
    "example": "Example in text: '... internal ...'"
  },
  "internet": {
    "word": "internet",
    "ipa": "/ˈɪn.tə.net/",
    "pos": "Danh từ",
    "vi": "Mạng Internet",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mạng internet'.",
    "general_def": "Mạng Internet",
    "example": "Example in text: '... internet ...'"
  },
  "interval": {
    "word": "interval",
    "ipa": "/ˈɪn.tə.vəl/",
    "pos": "Danh từ",
    "vi": "Khoảng thời gian, khoảng giá trị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khoảng thời gian, khoảng giá trị'.",
    "general_def": "Khoảng thời gian, khoảng giá trị",
    "example": "Example in text: '... interval ...'"
  },
  "intervals": {
    "word": "intervals",
    "ipa": "/ˈɪn.tə.vəlz/",
    "pos": "Danh từ",
    "vi": "Các khoảng thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các khoảng thời gian'.",
    "general_def": "Các khoảng thời gian",
    "example": "Example in text: '... intervals ...'"
  },
  "introduce": {
    "word": "introduce",
    "ipa": "/ˌɪn.trəˈdjuːs/",
    "pos": "Động từ",
    "vi": "Đưa vào, giới thiệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đưa vào, giới thiệu'.",
    "general_def": "Đưa vào, giới thiệu",
    "example": "Example in text: '... introduce ...'"
  },
  "introduced": {
    "word": "introduced",
    "ipa": "/ˌɪn.trəˈdjuːst/",
    "pos": "Tính từ",
    "vi": "Đã được đưa vào",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được đưa vào'.",
    "general_def": "Đã được đưa vào",
    "example": "Example in text: '... introduced ...'"
  },
  "introduces": {
    "word": "introduces",
    "ipa": "/ˌɪn.trəˈdjuː.sɪz/",
    "pos": "Động từ",
    "vi": "Đưa vào áp dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đưa vào áp dụng'.",
    "general_def": "Đưa vào áp dụng",
    "example": "Example in text: '... introduces ...'"
  },
  "introduction": {
    "word": "introduction",
    "ipa": "/ˌɪn.trəˈdʌk.ʃən/",
    "pos": "Danh từ",
    "vi": "Lời giới thiệu, phần mở đầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lời giới thiệu, phần mở đầu'.",
    "general_def": "Lời giới thiệu, phần mở đầu",
    "example": "Example in text: '... introduction ...'"
  },
  "involves": {
    "word": "involves",
    "ipa": "/ɪnˈvɒlvz/",
    "pos": "Động từ",
    "vi": "Liên quan đến, bao gồm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'liên quan đến, bao gồm'.",
    "general_def": "Liên quan đến, bao gồm",
    "example": "Example in text: '... involves ...'"
  },
  "iot": {
    "word": "iot",
    "ipa": "/ˌaɪ.oʊˈtiː/",
    "pos": "Danh từ",
    "vi": "Mạng lưới Vạn vật kết nối Internet (IoT)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mạng lưới vạn vật kết nối internet (iot)'.",
    "general_def": "Mạng lưới Vạn vật kết nối Internet (IoT)",
    "example": "Example in text: '... iot ...'"
  },
  "ipv6": {
    "word": "ipv6",
    "ipa": "/ˌaɪ.piː.viːˈsɪks/",
    "pos": "Danh từ",
    "vi": "Giao thức Internet phiên bản 6 (128-bit)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao thức internet phiên bản 6 (128-bit)'.",
    "general_def": "Giao thức Internet phiên bản 6 (128-bit)",
    "example": "Example in text: '... ipv6 ...'"
  },
  "is": {
    "word": "is",
    "ipa": "/ɪz/",
    "pos": "Động từ to be",
    "vi": "Là, thì, ở",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'là, thì, ở'.",
    "general_def": "Là, thì, ở",
    "example": "Example in text: '... is ...'"
  },
  "issue": {
    "word": "issue",
    "ipa": "/ˈɪʃ.uː/",
    "pos": "Danh từ",
    "vi": "Vấn đề kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vấn đề kỹ thuật'.",
    "general_def": "Vấn đề kỹ thuật",
    "example": "Example in text: '... issue ...'"
  },
  "issues": {
    "word": "issues",
    "ipa": "/ˈɪʃ.uːz/",
    "pos": "Danh từ",
    "vi": "Các vấn đề tồn tại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các vấn đề tồn tại'.",
    "general_def": "Các vấn đề tồn tại",
    "example": "Example in text: '... issues ...'"
  },
  "it": {
    "word": "it",
    "ipa": "/ɪt/",
    "pos": "Đại từ",
    "vi": "Nó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nó'.",
    "general_def": "Nó",
    "example": "Example in text: '... it ...'"
  },
  "its": {
    "word": "its",
    "ipa": "/ɪts/",
    "pos": "Tính từ sở hữu",
    "vi": "Của nó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'của nó'.",
    "general_def": "Của nó",
    "example": "Example in text: '... its ...'"
  },
  "jain": {
    "word": "jain",
    "ipa": "/dʒeɪn/",
    "pos": "Danh từ",
    "vi": "Jain (tác giả của chỉ số công bằng Jain's Fairness Index)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'jain (tác giả của chỉ số công bằng jain's fairness index)'.",
    "general_def": "Jain (tác giả của chỉ số công bằng Jain's Fairness Index)",
    "example": "Example in text: '... jain ...'"
  },
  "java": {
    "word": "java",
    "ipa": "/ˈdʒɑː.və/",
    "pos": "Danh từ",
    "vi": "Ngôn ngữ lập trình Java",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngôn ngữ lập trình java'.",
    "general_def": "Ngôn ngữ lập trình Java",
    "example": "Example in text: '... java ...'"
  },
  "jitter": {
    "word": "jitter",
    "ipa": "/ˈdʒɪt.ər/",
    "pos": "Danh từ",
    "vi": "Độ biến động trễ Jitter",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'độ biến động trễ jitter'.",
    "general_def": "Độ biến động trễ Jitter",
    "example": "Example in text: '... jitter ...'"
  },
  "karn": {
    "word": "karn",
    "ipa": "/kɑːrn/",
    "pos": "Danh từ",
    "vi": "Karn (giải thuật Karn cho TCP RTO)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'karn (giải thuật karn cho tcp rto)'.",
    "general_def": "Karn (giải thuật Karn cho TCP RTO)",
    "example": "Example in text: '... karn ...'"
  },
  "keep": {
    "word": "keep",
    "ipa": "/kiːp/",
    "pos": "Động từ",
    "vi": "Giữ nguyên, duy trì",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giữ nguyên, duy trì'.",
    "general_def": "Giữ nguyên, duy trì",
    "example": "Example in text: '... keep ...'"
  },
  "keeps": {
    "word": "keeps",
    "ipa": "/kiːps/",
    "pos": "Động từ",
    "vi": "Duy trì liên tục",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'duy trì liên tục'.",
    "general_def": "Duy trì liên tục",
    "example": "Example in text: '... keeps ...'"
  },
  "key": {
    "word": "key",
    "ipa": "/kiː/",
    "pos": "Tính từ/Danh từ",
    "vi": "Then chốt, khóa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'then chốt, khóa'.",
    "general_def": "Then chốt, khóa",
    "example": "Example in text: '... key ...'"
  },
  "known": {
    "word": "known",
    "ipa": "/nəʊn/",
    "pos": "Tính từ",
    "vi": "Đã biết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã biết'.",
    "general_def": "Đã biết",
    "example": "Example in text: '... known ...'"
  },
  "lack": {
    "word": "lack",
    "ipa": "/læk/",
    "pos": "Danh từ/Động từ",
    "vi": "Sự thiếu thốn, thiếu vắng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự thiếu thốn, thiếu vắng'.",
    "general_def": "Sự thiếu thốn, thiếu vắng",
    "example": "Example in text: '... lack ...'"
  },
  "large": {
    "word": "large",
    "ipa": "/lɑːdʒ/",
    "pos": "Tính từ",
    "vi": "Lớn, quy mô rộng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lớn, quy mô rộng'.",
    "general_def": "Lớn, quy mô rộng",
    "example": "Example in text: '... large ...'"
  },
  "larger": {
    "word": "larger",
    "ipa": "/ˈlɑː.dʒər/",
    "pos": "Tính từ",
    "vi": "Lớn hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lớn hơn'.",
    "general_def": "Lớn hơn",
    "example": "Example in text: '... larger ...'"
  },
  "last": {
    "word": "last",
    "ipa": "/lɑːst/",
    "pos": "Tính từ",
    "vi": "Gần nhất, cuối cùng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gần nhất, cuối cùng'.",
    "general_def": "Gần nhất, cuối cùng",
    "example": "Example in text: '... last ...'"
  },
  "late": {
    "word": "late",
    "ipa": "/leɪt/",
    "pos": "Tính từ",
    "vi": "Muộn, trễ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'muộn, trễ'.",
    "general_def": "Muộn, trễ",
    "example": "Example in text: '... late ...'"
  },
  "latency": {
    "word": "latency",
    "ipa": "/ˈleɪ.tən.si/",
    "pos": "Danh từ",
    "vi": "Độ trễ đường truyền",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'độ trễ đường truyền'.",
    "general_def": "Độ trễ đường truyền",
    "example": "Example in text: '... latency ...'"
  },
  "latter": {
    "word": "latter",
    "ipa": "/ˈlæt.ər/",
    "pos": "Tính từ/Danh từ",
    "vi": "Cái thứ hai, vế sau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cái thứ hai, vế sau'.",
    "general_def": "Cái thứ hai, vế sau",
    "example": "Example in text: '... latter ...'"
  },
  "layer": {
    "word": "layer",
    "ipa": "/ˈleɪ.ər/",
    "pos": "Danh từ",
    "vi": "Tầng giao thức trong mô hình mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tầng giao thức trong mô hình mạng'.",
    "general_def": "Tầng giao thức trong mô hình mạng",
    "example": "Example in text: '... layer ...'"
  },
  "lead": {
    "word": "lead",
    "ipa": "/liːd/",
    "pos": "Động từ",
    "vi": "Dẫn tới",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dẫn tới'.",
    "general_def": "Dẫn tới",
    "example": "Example in text: '... lead ...'"
  },
  "leads": {
    "word": "leads",
    "ipa": "/liːdz/",
    "pos": "Động từ",
    "vi": "Dẫn đến kết quả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dẫn đến kết quả'.",
    "general_def": "Dẫn đến kết quả",
    "example": "Example in text: '... leads ...'"
  },
  "least": {
    "word": "least",
    "ipa": "/liːst/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Ít nhất, tối thiểu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ít nhất, tối thiểu'.",
    "general_def": "Ít nhất, tối thiểu",
    "example": "Example in text: '... least ...'"
  },
  "less": {
    "word": "less",
    "ipa": "/les/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Ít hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ít hơn'.",
    "general_def": "Ít hơn",
    "example": "Example in text: '... less ...'"
  },
  "level": {
    "word": "level",
    "ipa": "/ˈlev.əl/",
    "pos": "Danh từ",
    "vi": "Mức độ, cấp độ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mức độ, cấp độ'.",
    "general_def": "Mức độ, cấp độ",
    "example": "Example in text: '... level ...'"
  },
  "leverage": {
    "word": "leverage",
    "ipa": "/ˈliː.vər.ɪdʒ/",
    "pos": "Động từ",
    "vi": "Tận dụng, đòn bẩy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tận dụng, đòn bẩy'.",
    "general_def": "Tận dụng, đòn bẩy",
    "example": "Example in text: '... leverage ...'"
  },
  "leveraging": {
    "word": "leveraging",
    "ipa": "/ˈliː.vər.ɪ.dʒɪŋ/",
    "pos": "Động từ",
    "vi": "Tận dụng khai thác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tận dụng khai thác'.",
    "general_def": "Tận dụng khai thác",
    "example": "Example in text: '... leveraging ...'"
  },
  "light": {
    "word": "light",
    "ipa": "/laɪt/",
    "pos": "Tính từ",
    "vi": "Nhẹ (tải nhẹ)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhẹ (tải nhẹ)'.",
    "general_def": "Nhẹ (tải nhẹ)",
    "example": "Example in text: '... light ...'"
  },
  "lightly": {
    "word": "lightly",
    "ipa": "/ˈlaɪt.li/",
    "pos": "Trạng từ",
    "vi": "Một cách nhẹ nhàng (tải mạng nhẹ)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách nhẹ nhàng (tải mạng nhẹ)'.",
    "general_def": "Một cách nhẹ nhàng (tải mạng nhẹ)",
    "example": "Example in text: '... lightly ...'"
  },
  "lightweight": {
    "word": "lightweight",
    "ipa": "/ˈlaɪt.weɪt/",
    "pos": "Tính từ",
    "vi": "Gọn nhẹ, tốn ít tài nguyên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gọn nhẹ, tốn ít tài nguyên'.",
    "general_def": "Gọn nhẹ, tốn ít tài nguyên",
    "example": "Example in text: '... lightweight ...'"
  },
  "like": {
    "word": "like",
    "ipa": "/laɪk/",
    "pos": "Giới từ/Động từ",
    "vi": "Giống như, như là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giống như, như là'.",
    "general_def": "Giống như, như là",
    "example": "Example in text: '... like ...'"
  },
  "limit": {
    "word": "limit",
    "ipa": "/ˈlɪm.ɪt/",
    "pos": "Động từ/Danh từ",
    "vi": "Giới hạn, hạn chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giới hạn, hạn chế'.",
    "general_def": "Giới hạn, hạn chế",
    "example": "Example in text: '... limit ...'"
  },
  "limitation": {
    "word": "limitation",
    "ipa": "/ˌlɪm.ɪˈteɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự hạn chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự hạn chế'.",
    "general_def": "Sự hạn chế",
    "example": "Example in text: '... limitation ...'"
  },
  "limitations": {
    "word": "limitations",
    "ipa": "/ˌlɪm.ɪˈteɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các hạn chế kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hạn chế kỹ thuật'.",
    "general_def": "Các hạn chế kỹ thuật",
    "example": "Example in text: '... limitations ...'"
  },
  "limited": {
    "word": "limited",
    "ipa": "/ˈlɪm.ɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Bị giới hạn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bị giới hạn'.",
    "general_def": "Bị giới hạn",
    "example": "Example in text: '... limited ...'"
  },
  "limiting": {
    "word": "limiting",
    "ipa": "/ˈlɪm.ɪ.tɪŋ/",
    "pos": "Động từ",
    "vi": "Đang giới hạn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang giới hạn'.",
    "general_def": "Đang giới hạn",
    "example": "Example in text: '... limiting ...'"
  },
  "limits": {
    "word": "limits",
    "ipa": "/ˈlɪm.ɪts/",
    "pos": "Động từ/Danh từ",
    "vi": "Các giới hạn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các giới hạn'.",
    "general_def": "Các giới hạn",
    "example": "Example in text: '... limits ...'"
  },
  "linear": {
    "word": "linear",
    "ipa": "/ˈlɪn.i.ər/",
    "pos": "Tính từ",
    "vi": "Tuyến tính",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tuyến tính'.",
    "general_def": "Tuyến tính",
    "example": "Example in text: '... linear ...'"
  },
  "linearly": {
    "word": "linearly",
    "ipa": "/ˈlɪn.i.ə.li/",
    "pos": "Trạng từ",
    "vi": "Một cách tuyến tính",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách tuyến tính'.",
    "general_def": "Một cách tuyến tính",
    "example": "Example in text: '... linearly ...'"
  },
  "link": {
    "word": "link",
    "ipa": "/lɪŋk/",
    "pos": "Danh từ/Động từ",
    "vi": "Liên kết truyền thông vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'liên kết truyền thông vô tuyến'.",
    "general_def": "Liên kết truyền thông vô tuyến",
    "example": "Example in text: '... link ...'"
  },
  "links": {
    "word": "links",
    "ipa": "/lɪŋks/",
    "pos": "Danh từ",
    "vi": "Các liên kết truyền dẫn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các liên kết truyền dẫn'.",
    "general_def": "Các liên kết truyền dẫn",
    "example": "Example in text: '... links ...'"
  },
  "linux": {
    "word": "linux",
    "ipa": "/ˈlɪn.əks/",
    "pos": "Danh từ",
    "vi": "Hệ điều hành Linux (Linux TCP RTO)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hệ điều hành linux (linux tcp rto)'.",
    "general_def": "Hệ điều hành Linux (Linux TCP RTO)",
    "example": "Example in text: '... linux ...'"
  },
  "literature": {
    "word": "literature",
    "ipa": "/ˈlɪt.rə.tʃər/",
    "pos": "Danh từ",
    "vi": "Tài liệu khoa học đã công bố",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tài liệu khoa học đã công bố'.",
    "general_def": "Tài liệu khoa học đã công bố",
    "example": "Example in text: '... literature ...'"
  },
  "lln": {
    "word": "lln",
    "ipa": "/el.elˈen/",
    "pos": "Danh từ",
    "vi": "Mạng năng lượng thấp tổn thất cao (LLN)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mạng năng lượng thấp tổn thất cao (lln)'.",
    "general_def": "Mạng năng lượng thấp tổn thất cao (LLN)",
    "example": "Example in text: '... lln ...'"
  },
  "load": {
    "word": "load",
    "ipa": "/ləʊd/",
    "pos": "Danh từ",
    "vi": "Tải lưu lượng mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tải lưu lượng mạng'.",
    "general_def": "Tải lưu lượng mạng",
    "example": "Example in text: '... load ...'"
  },
  "loads": {
    "word": "loads",
    "ipa": "/ləʊdz/",
    "pos": "Danh từ",
    "vi": "Các mức tải mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các mức tải mạng'.",
    "general_def": "Các mức tải mạng",
    "example": "Example in text: '... loads ...'"
  },
  "local": {
    "word": "local",
    "ipa": "/ˈləʊ.kəl/",
    "pos": "Tính từ",
    "vi": "Cục bộ, tại chỗ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cục bộ, tại chỗ'.",
    "general_def": "Cục bộ, tại chỗ",
    "example": "Example in text: '... local ...'"
  },
  "long": {
    "word": "long",
    "ipa": "/lɒŋ/",
    "pos": "Tính từ",
    "vi": "Dài (thời gian dài)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dài (thời gian dài)'.",
    "general_def": "Dài (thời gian dài)",
    "example": "Example in text: '... long ...'"
  },
  "longer": {
    "word": "longer",
    "ipa": "/ˈlɒŋ.ɡər/",
    "pos": "Tính từ",
    "vi": "Dài hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dài hơn'.",
    "general_def": "Dài hơn",
    "example": "Example in text: '... longer ...'"
  },
  "look": {
    "word": "look",
    "ipa": "/lʊk/",
    "pos": "Động từ",
    "vi": "Nhìn, xem xét",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhìn, xem xét'.",
    "general_def": "Nhìn, xem xét",
    "example": "Example in text: '... look ...'"
  },
  "loss": {
    "word": "loss",
    "ipa": "/lɒs/",
    "pos": "Danh từ",
    "vi": "Mất gói tin (packet loss)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mất gói tin (packet loss)'.",
    "general_def": "Mất gói tin (packet loss)",
    "example": "Example in text: '... loss ...'"
  },
  "losses": {
    "word": "losses",
    "ipa": "/ˈlɒs.ɪz/",
    "pos": "Danh từ",
    "vi": "Các lần mất mát dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các lần mất mát dữ liệu'.",
    "general_def": "Các lần mất mát dữ liệu",
    "example": "Example in text: '... losses ...'"
  },
  "low": {
    "word": "low",
    "ipa": "/ləʊ/",
    "pos": "Tính từ",
    "vi": "Thấp (băng thông thấp, công suất thấp)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thấp (băng thông thấp, công suất thấp)'.",
    "general_def": "Thấp (băng thông thấp, công suất thấp)",
    "example": "Example in text: '... low ...'"
  },
  "lower": {
    "word": "lower",
    "ipa": "/ˈləʊ.ər/",
    "pos": "Tính từ/Động từ",
    "vi": "Thấp hơn, hạ thấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thấp hơn, hạ thấp'.",
    "general_def": "Thấp hơn, hạ thấp",
    "example": "Example in text: '... lower ...'"
  },
  "mac": {
    "word": "mac",
    "ipa": "/mæk/",
    "pos": "Danh từ",
    "vi": "Tầng điều khiển truy nhập môi trường MAC",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tầng điều khiển truy nhập môi trường mac'.",
    "general_def": "Tầng điều khiển truy nhập môi trường MAC",
    "example": "Example in text: '... mac ...'"
  },
  "machine": {
    "word": "machine",
    "ipa": "/məˈʃiːn/",
    "pos": "Danh từ",
    "vi": "Máy móc (M2M: Machine-to-Machine)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'máy móc (m2m: machine-to-machine)'.",
    "general_def": "Máy móc (M2M: Machine-to-Machine)",
    "example": "Example in text: '... machine ...'"
  },
  "magazine": {
    "word": "magazine",
    "ipa": "/ˌmæɡ.əˈziːn/",
    "pos": "Danh từ",
    "vi": "Tạp chí khoa học (IEEE Comms Mag)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tạp chí khoa học (ieee comms mag)'.",
    "general_def": "Tạp chí khoa học (IEEE Comms Mag)",
    "example": "Example in text: '... magazine ...'"
  },
  "main": {
    "word": "main",
    "ipa": "/meɪn/",
    "pos": "Tính từ",
    "vi": "Chính, chủ yếu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chính, chủ yếu'.",
    "general_def": "Chính, chủ yếu",
    "example": "Example in text: '... main ...'"
  },
  "mainly": {
    "word": "mainly",
    "ipa": "/ˈmeɪn.li/",
    "pos": "Trạng từ",
    "vi": "Chủ yếu là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chủ yếu là'.",
    "general_def": "Chủ yếu là",
    "example": "Example in text: '... mainly ...'"
  },
  "maintain": {
    "word": "maintain",
    "ipa": "/meɪnˈteɪn/",
    "pos": "Động từ",
    "vi": "Duy trì trạng thái",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'duy trì trạng thái'.",
    "general_def": "Duy trì trạng thái",
    "example": "Example in text: '... maintain ...'"
  },
  "maintains": {
    "word": "maintains",
    "ipa": "/meɪnˈteɪnz/",
    "pos": "Động từ",
    "vi": "Duy trì liên tục",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'duy trì liên tục'.",
    "general_def": "Duy trì liên tục",
    "example": "Example in text: '... maintains ...'"
  },
  "major": {
    "word": "major",
    "ipa": "/ˈmeɪ.dʒər/",
    "pos": "Tính từ",
    "vi": "Lớn, trọng đại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lớn, trọng đại'.",
    "general_def": "Lớn, trọng đại",
    "example": "Example in text: '... major ...'"
  },
  "make": {
    "word": "make",
    "ipa": "/meɪk/",
    "pos": "Động từ",
    "vi": "Tạo ra, làm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tạo ra, làm'.",
    "general_def": "Tạo ra, làm",
    "example": "Example in text: '... make ...'"
  },
  "mandates": {
    "word": "mandates",
    "ipa": "/ˈmæn.deɪts/",
    "pos": "Động từ",
    "vi": "Bắt buộc quy định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bắt buộc quy định'.",
    "general_def": "Bắt buộc quy định",
    "example": "Example in text: '... mandates ...'"
  },
  "many": {
    "word": "many",
    "ipa": "/ˈmen.i/",
    "pos": "Lượng từ",
    "vi": "Nhiều",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiều'.",
    "general_def": "Nhiều",
    "example": "Example in text: '... many ...'"
  },
  "mapping": {
    "word": "mapping",
    "ipa": "/ˈmæp.ɪŋ/",
    "pos": "Danh từ",
    "vi": "Sự ánh xạ (khớp nối CON với ACK)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự ánh xạ (khớp nối con với ack)'.",
    "general_def": "Sự ánh xạ (khớp nối CON với ACK)",
    "example": "Example in text: '... mapping ...'"
  },
  "margin": {
    "word": "margin",
    "ipa": "/ˈmɑː.dʒɪn/",
    "pos": "Danh từ",
    "vi": "Biên độ an toàn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'biên độ an toàn'.",
    "general_def": "Biên độ an toàn",
    "example": "Example in text: '... margin ...'"
  },
  "marker": {
    "word": "marker",
    "ipa": "/ˈmɑː.kər/",
    "pos": "Danh từ",
    "vi": "Dấu mốc đồ thị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dấu mốc đồ thị'.",
    "general_def": "Dấu mốc đồ thị",
    "example": "Example in text: '... marker ...'"
  },
  "markers": {
    "word": "markers",
    "ipa": "/ˈmɑː.kərz/",
    "pos": "Danh từ",
    "vi": "Các điểm đánh dấu đồ thị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các điểm đánh dấu đồ thị'.",
    "general_def": "Các điểm đánh dấu đồ thị",
    "example": "Example in text: '... markers ...'"
  },
  "match": {
    "word": "match",
    "ipa": "/mætʃ/",
    "pos": "Động từ/Danh từ",
    "vi": "Khớp nối, trùng khớp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khớp nối, trùng khớp'.",
    "general_def": "Khớp nối, trùng khớp",
    "example": "Example in text: '... match ...'"
  },
  "matching": {
    "word": "matching",
    "ipa": "/ˈmætʃ.ɪŋ/",
    "pos": "Danh từ/Động từ",
    "vi": "Sự ghép khớp chính xác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự ghép khớp chính xác'.",
    "general_def": "Sự ghép khớp chính xác",
    "example": "Example in text: '... matching ...'"
  },
  "maximum": {
    "word": "maximum",
    "ipa": "/ˈmæk.sɪ.məm/",
    "pos": "Tính từ/Danh từ",
    "vi": "Tối đa, cực đại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tối đa, cực đại'.",
    "general_def": "Tối đa, cực đại",
    "example": "Example in text: '... maximum ...'"
  },
  "mean": {
    "word": "mean",
    "ipa": "/miːn/",
    "pos": "Tính từ/Danh từ",
    "vi": "Giá trị trung bình toán học",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giá trị trung bình toán học'.",
    "general_def": "Giá trị trung bình toán học",
    "example": "Example in text: '... mean ...'"
  },
  "means": {
    "word": "means",
    "ipa": "/miːnz/",
    "pos": "Danh từ",
    "vi": "Phương tiện, cách thức",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phương tiện, cách thức'.",
    "general_def": "Phương tiện, cách thức",
    "example": "Example in text: '... means ...'"
  },
  "measured": {
    "word": "measured",
    "ipa": "/ˈmeʒ.əd/",
    "pos": "Tính từ",
    "vi": "Đo đạc được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đo đạc được'.",
    "general_def": "Đo đạc được",
    "example": "Example in text: '... measured ...'"
  },
  "measurement": {
    "word": "measurement",
    "ipa": "/ˈmeʒ.ə.mənt/",
    "pos": "Danh từ",
    "vi": "Phép đo, giá trị đo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phép đo, giá trị đo'.",
    "general_def": "Phép đo, giá trị đo",
    "example": "Example in text: '... measurement ...'"
  },
  "measurements": {
    "word": "measurements",
    "ipa": "/ˈmeʒ.ə.mənts/",
    "pos": "Danh từ",
    "vi": "Các kết quả đo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các kết quả đo'.",
    "general_def": "Các kết quả đo",
    "example": "Example in text: '... measurements ...'"
  },
  "measures": {
    "word": "measures",
    "ipa": "/ˈmeʒ.ərz/",
    "pos": "Động từ/Danh từ",
    "vi": "Đo lường / các biện pháp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đo lường / các biện pháp'.",
    "general_def": "Đo lường / các biện pháp",
    "example": "Example in text: '... measures ...'"
  },
  "mechanism": {
    "word": "mechanism",
    "ipa": "/ˈmek.ə.nɪ.zəm/",
    "pos": "Danh từ",
    "vi": "Cơ chế kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cơ chế kỹ thuật'.",
    "general_def": "Cơ chế kỹ thuật",
    "example": "Example in text: '... mechanism ...'"
  },
  "mechanisms": {
    "word": "mechanisms",
    "ipa": "/ˈmek.ə.nɪ.zəmz/",
    "pos": "Danh từ",
    "vi": "Các cơ chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cơ chế'.",
    "general_def": "Các cơ chế",
    "example": "Example in text: '... mechanisms ...'"
  },
  "medium": {
    "word": "medium",
    "ipa": "/ˈmiː.di.əm/",
    "pos": "Danh từ",
    "vi": "Môi trường truyền dẫn vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'môi trường truyền dẫn vô tuyến'.",
    "general_def": "Môi trường truyền dẫn vô tuyến",
    "example": "Example in text: '... medium ...'"
  },
  "memory": {
    "word": "memory",
    "ipa": "/ˈmem.ər.i/",
    "pos": "Danh từ",
    "vi": "Bộ nhớ RAM/ROM",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ nhớ ram/rom'.",
    "general_def": "Bộ nhớ RAM/ROM",
    "example": "Example in text: '... memory ...'"
  },
  "message": {
    "word": "message",
    "ipa": "/ˈmes.ɪdʒ/",
    "pos": "Danh từ",
    "vi": "Bản tin truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản tin truyền thông'.",
    "general_def": "Bản tin truyền thông",
    "example": "Example in text: '... message ...'"
  },
  "messages": {
    "word": "messages",
    "ipa": "/ˈmes.ɪ.dʒɪz/",
    "pos": "Danh từ",
    "vi": "Các bản tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bản tin'.",
    "general_def": "Các bản tin",
    "example": "Example in text: '... messages ...'"
  },
  "method": {
    "word": "method",
    "ipa": "/ˈmeθ.əd/",
    "pos": "Danh từ",
    "vi": "Phương pháp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phương pháp'.",
    "general_def": "Phương pháp",
    "example": "Example in text: '... method ...'"
  },
  "methodology": {
    "word": "methodology",
    "ipa": "/ˌmeθ.əˈdɒl.ə.dʒi/",
    "pos": "Danh từ",
    "vi": "Phương pháp luận nghiên cứu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phương pháp luận nghiên cứu'.",
    "general_def": "Phương pháp luận nghiên cứu",
    "example": "Example in text: '... methodology ...'"
  },
  "methods": {
    "word": "methods",
    "ipa": "/ˈmeθ.ədz/",
    "pos": "Danh từ",
    "vi": "Các phương pháp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các phương pháp'.",
    "general_def": "Các phương pháp",
    "example": "Example in text: '... methods ...'"
  },
  "microcontroller": {
    "word": "microcontroller",
    "ipa": "/ˌmaɪ.krəʊ.kənˈtrəʊ.lər/",
    "pos": "Danh từ",
    "vi": "Vi điều khiển nhúng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vi điều khiển nhúng'.",
    "general_def": "Vi điều khiển nhúng",
    "example": "Example in text: '... microcontroller ...'"
  },
  "minimalist": {
    "word": "minimalist",
    "ipa": "/ˈmɪn.ɪ.məl.ɪst/",
    "pos": "Tính từ",
    "vi": "Tối giản",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tối giản'.",
    "general_def": "Tối giản",
    "example": "Example in text: '... minimalist ...'"
  },
  "minimum": {
    "word": "minimum",
    "ipa": "/ˈmɪn.ɪ.məm/",
    "pos": "Tính từ/Danh từ",
    "vi": "Tối thiểu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tối thiểu'.",
    "general_def": "Tối thiểu",
    "example": "Example in text: '... minimum ...'"
  },
  "minor": {
    "word": "minor",
    "ipa": "/ˈmaɪ.nər/",
    "pos": "Tính từ",
    "vi": "Nhỏ, thứ yếu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhỏ, thứ yếu'.",
    "general_def": "Nhỏ, thứ yếu",
    "example": "Example in text: '... minor ...'"
  },
  "mitigate": {
    "word": "mitigate",
    "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
    "pos": "Động từ",
    "vi": "Giảm thiểu sự cố",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giảm thiểu sự cố'.",
    "general_def": "Giảm thiểu sự cố",
    "example": "Example in text: '... mitigate ...'"
  },
  "mitigates": {
    "word": "mitigates",
    "ipa": "/ˈmɪt.ɪ.ɡeɪts/",
    "pos": "Động từ",
    "vi": "Khắc phục, giảm nhẹ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khắc phục, giảm nhẹ'.",
    "general_def": "Khắc phục, giảm nhẹ",
    "example": "Example in text: '... mitigates ...'"
  },
  "mixed": {
    "word": "mixed",
    "ipa": "/mɪkst/",
    "pos": "Tính từ",
    "vi": "Pha trộn, hỗn hợp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'pha trộn, hỗn hợp'.",
    "general_def": "Pha trộn, hỗn hợp",
    "example": "Example in text: '... mixed ...'"
  },
  "model": {
    "word": "model",
    "ipa": "/ˈmɒd.əl/",
    "pos": "Danh từ",
    "vi": "Mô hình toán/kênh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mô hình toán/kênh'.",
    "general_def": "Mô hình toán/kênh",
    "example": "Example in text: '... model ...'"
  },
  "modem": {
    "word": "modem",
    "ipa": "/ˈməʊ.dem/",
    "pos": "Danh từ",
    "vi": "Thiết bị modem truyền dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiết bị modem truyền dữ liệu'.",
    "general_def": "Thiết bị modem truyền dữ liệu",
    "example": "Example in text: '... modem ...'"
  },
  "modems": {
    "word": "modems",
    "ipa": "/ˈməʊ.demz/",
    "pos": "Danh từ",
    "vi": "Các modem",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các modem'.",
    "general_def": "Các modem",
    "example": "Example in text: '... modems ...'"
  },
  "modifications": {
    "word": "modifications",
    "ipa": "/ˌmɒd.ɪ.fɪˈkeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các cải tiến, chỉnh sửa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cải tiến, chỉnh sửa'.",
    "general_def": "Các cải tiến, chỉnh sửa",
    "example": "Example in text: '... modifications ...'"
  },
  "modified": {
    "word": "modified",
    "ipa": "/ˈmɒd.ɪ.faɪd/",
    "pos": "Tính từ",
    "vi": "Đã được sửa đổi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được sửa đổi'.",
    "general_def": "Đã được sửa đổi",
    "example": "Example in text: '... modified ...'"
  },
  "momentum": {
    "word": "momentum",
    "ipa": "/məˈmen.təm/",
    "pos": "Danh từ",
    "vi": "Đà phát triển mạnh mẽ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đà phát triển mạnh mẽ'.",
    "general_def": "Đà phát triển mạnh mẽ",
    "example": "Example in text: '... momentum ...'"
  },
  "more": {
    "word": "more",
    "ipa": "/mɔːr/",
    "pos": "Lượng từ/Trạng từ",
    "vi": "Nhiều hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiều hơn'.",
    "general_def": "Nhiều hơn",
    "example": "Example in text: '... more ...'"
  },
  "moreover": {
    "word": "moreover",
    "ipa": "/mɔːˈrəʊ.vər/",
    "pos": "Liên từ",
    "vi": "Hơn thế nữa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hơn thế nữa'.",
    "general_def": "Hơn thế nữa",
    "example": "Example in text: '... moreover ...'"
  },
  "most": {
    "word": "most",
    "ipa": "/məʊst/",
    "pos": "Lượng từ",
    "vi": "Nhiều nhất, phần lớn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiều nhất, phần lớn'.",
    "general_def": "Nhiều nhất, phần lớn",
    "example": "Example in text: '... most ...'"
  },
  "mote": {
    "word": "mote",
    "ipa": "/məʊt/",
    "pos": "Danh từ",
    "vi": "Nút cảm biến không dây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nút cảm biến không dây'.",
    "general_def": "Nút cảm biến không dây",
    "example": "Example in text: '... mote ...'"
  },
  "motes": {
    "word": "motes",
    "ipa": "/məʊts/",
    "pos": "Danh từ",
    "vi": "Các nút cảm biến không dây TelosB",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các nút cảm biến không dây telosb'.",
    "general_def": "Các nút cảm biến không dây TelosB",
    "example": "Example in text: '... motes ...'"
  },
  "moving": {
    "word": "moving",
    "ipa": "/ˈmuː.vɪŋ/",
    "pos": "Tính từ",
    "vi": "Chuyển động, trượt (Moving average)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chuyển động, trượt (moving average)'.",
    "general_def": "Chuyển động, trượt (Moving average)",
    "example": "Example in text: '... moving ...'"
  },
  "much": {
    "word": "much",
    "ipa": "/mʌtʃ/",
    "pos": "Lượng từ",
    "vi": "Nhiều",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiều'.",
    "general_def": "Nhiều",
    "example": "Example in text: '... much ...'"
  },
  "multiple": {
    "word": "multiple",
    "ipa": "/ˈmʌl.tɪ.pəl/",
    "pos": "Tính từ",
    "vi": "Nhiều, bội số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiều, bội số'.",
    "general_def": "Nhiều, bội số",
    "example": "Example in text: '... multiple ...'"
  },
  "multiplier": {
    "word": "multiplier",
    "ipa": "/ˈmʌl.tɪ.plaɪ.ər/",
    "pos": "Danh từ",
    "vi": "Hệ số nhân",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hệ số nhân'.",
    "general_def": "Hệ số nhân",
    "example": "Example in text: '... multiplier ...'"
  },
  "name": {
    "word": "name",
    "ipa": "/neɪm/",
    "pos": "Danh từ",
    "vi": "Tên gọi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tên gọi'.",
    "general_def": "Tên gọi",
    "example": "Example in text: '... name ...'"
  },
  "named": {
    "word": "named",
    "ipa": "/neɪmd/",
    "pos": "Động từ",
    "vi": "Được đặt tên là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được đặt tên là'.",
    "general_def": "Được đặt tên là",
    "example": "Example in text: '... named ...'"
  },
  "nature": {
    "word": "nature",
    "ipa": "/ˈneɪ.tʃər/",
    "pos": "Danh từ",
    "vi": "Bản chất tự nhiên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản chất tự nhiên'.",
    "general_def": "Bản chất tự nhiên",
    "example": "Example in text: '... nature ...'"
  },
  "near": {
    "word": "near",
    "ipa": "/nɪər/",
    "pos": "Giới từ/Tính từ",
    "vi": "Gần",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gần'.",
    "general_def": "Gần",
    "example": "Example in text: '... near ...'"
  },
  "nearly": {
    "word": "nearly",
    "ipa": "/ˈnɪə.li/",
    "pos": "Trạng từ",
    "vi": "Gần như",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gần như'.",
    "general_def": "Gần như",
    "example": "Example in text: '... nearly ...'"
  },
  "necessary": {
    "word": "necessary",
    "ipa": "/ˈnes.ə.ser.i/",
    "pos": "Tính từ",
    "vi": "Cần thiết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cần thiết'.",
    "general_def": "Cần thiết",
    "example": "Example in text: '... necessary ...'"
  },
  "need": {
    "word": "need",
    "ipa": "/niːd/",
    "pos": "Động từ/Danh từ",
    "vi": "Cần thiết, nhu cầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cần thiết, nhu cầu'.",
    "general_def": "Cần thiết, nhu cầu",
    "example": "Example in text: '... need ...'"
  },
  "negligible": {
    "word": "negligible",
    "ipa": "/ˈneɡ.lɪ.dʒə.bəl/",
    "pos": "Tính từ",
    "vi": "Không đáng kể",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không đáng kể'.",
    "general_def": "Không đáng kể",
    "example": "Example in text: '... negligible ...'"
  },
  "network": {
    "word": "network",
    "ipa": "/ˈnet.wɜːk/",
    "pos": "Danh từ",
    "vi": "Mạng truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mạng truyền thông'.",
    "general_def": "Mạng truyền thông",
    "example": "Example in text: '... network ...'"
  },
  "networks": {
    "word": "networks",
    "ipa": "/ˈnet.wɜːks/",
    "pos": "Danh từ",
    "vi": "Các hệ thống mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hệ thống mạng'.",
    "general_def": "Các hệ thống mạng",
    "example": "Example in text: '... networks ...'"
  },
  "neutrally": {
    "word": "neutrally",
    "ipa": "/ˈnjuː.trə.li/",
    "pos": "Trạng từ",
    "vi": "Trung lập",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trung lập'.",
    "general_def": "Trung lập",
    "example": "Example in text: '... neutrally ...'"
  },
  "new": {
    "word": "new",
    "ipa": "/njuː/",
    "pos": "Tính từ",
    "vi": "Mới",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mới'.",
    "general_def": "Mới",
    "example": "Example in text: '... new ...'"
  },
  "next": {
    "word": "next",
    "ipa": "/nekst/",
    "pos": "Tính từ",
    "vi": "Kế tiếp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kế tiếp'.",
    "general_def": "Kế tiếp",
    "example": "Example in text: '... next ...'"
  },
  "no": {
    "word": "no",
    "ipa": "/nəʊ/",
    "pos": "Từ hạn định",
    "vi": "Không có",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không có'.",
    "general_def": "Không có",
    "example": "Example in text: '... no ...'"
  },
  "node": {
    "word": "node",
    "ipa": "/nəʊd/",
    "pos": "Danh từ",
    "vi": "Nút mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nút mạng'.",
    "general_def": "Nút mạng",
    "example": "Example in text: '... node ...'"
  },
  "nodes": {
    "word": "nodes",
    "ipa": "/nəʊdz/",
    "pos": "Danh từ",
    "vi": "Các nút mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các nút mạng'.",
    "general_def": "Các nút mạng",
    "example": "Example in text: '... nodes ...'"
  },
  "nominal": {
    "word": "nominal",
    "ipa": "/ˈnɒm.ɪ.nəl/",
    "pos": "Tính từ",
    "vi": "Danh định (nominal offered load: tải danh nghĩa)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'danh định (nominal offered load: tải danh nghĩa)'.",
    "general_def": "Danh định (nominal offered load: tải danh nghĩa)",
    "example": "Example in text: '... nominal ...'"
  },
  "non": {
    "word": "non",
    "ipa": "/nɒn/",
    "pos": "Tiền tố",
    "vi": "Không (bản tin NON: không cần xác nhận)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không (bản tin non: không cần xác nhận)'.",
    "general_def": "Không (bản tin NON: không cần xác nhận)",
    "example": "Example in text: '... non ...'"
  },
  "none": {
    "word": "none",
    "ipa": "/nʌn/",
    "pos": "Đại từ",
    "vi": "Không có cái nào",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không có cái nào'.",
    "general_def": "Không có cái nào",
    "example": "Example in text: '... none ...'"
  },
  "not": {
    "word": "not",
    "ipa": "/nɒt/",
    "pos": "Trạng từ",
    "vi": "Không",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không'.",
    "general_def": "Không",
    "example": "Example in text: '... not ...'"
  },
  "note": {
    "word": "note",
    "ipa": "/nəʊt/",
    "pos": "Động từ/Danh từ",
    "vi": "Ghi chú, lưu ý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ghi chú, lưu ý'.",
    "general_def": "Ghi chú, lưu ý",
    "example": "Example in text: '... note ...'"
  },
  "notice": {
    "word": "notice",
    "ipa": "/ˈnəʊ.tɪs/",
    "pos": "Động từ",
    "vi": "Nhận thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhận thấy'.",
    "general_def": "Nhận thấy",
    "example": "Example in text: '... notice ...'"
  },
  "noticeably": {
    "word": "noticeably",
    "ipa": "/ˈnəʊ.tɪ.sə.bli/",
    "pos": "Trạng từ",
    "vi": "Đáng chú ý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đáng chú ý'.",
    "general_def": "Đáng chú ý",
    "example": "Example in text: '... noticeably ...'"
  },
  "notifications": {
    "word": "notifications",
    "ipa": "/ˌnəʊ.tɪ.fɪˈkeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các thông báo sự kiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thông báo sự kiện'.",
    "general_def": "Các thông báo sự kiện",
    "example": "Example in text: '... notifications ...'"
  },
  "notify": {
    "word": "notify",
    "ipa": "/ˈnəʊ.tɪ.faɪ/",
    "pos": "Động từ",
    "vi": "Báo tin cho biết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'báo tin cho biết'.",
    "general_def": "Báo tin cho biết",
    "example": "Example in text: '... notify ...'"
  },
  "novel": {
    "word": "novel",
    "ipa": "/ˈnɒv.əl/",
    "pos": "Tính từ",
    "vi": "Mới lạ, đột phá",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mới lạ, đột phá'.",
    "general_def": "Mới lạ, đột phá",
    "example": "Example in text: '... novel ...'"
  },
  "number": {
    "word": "number",
    "ipa": "/ˈnʌm.bər/",
    "pos": "Danh từ",
    "vi": "Số lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'số lượng'.",
    "general_def": "Số lượng",
    "example": "Example in text: '... number ...'"
  },
  "observe": {
    "word": "observe",
    "ipa": "/əbˈzɜːv/",
    "pos": "Động từ",
    "vi": "Quan sát thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quan sát thấy'.",
    "general_def": "Quan sát thấy",
    "example": "Example in text: '... observe ...'"
  },
  "observed": {
    "word": "observed",
    "ipa": "/əbˈzɜːvd/",
    "pos": "Tính từ",
    "vi": "Được quan sát thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được quan sát thấy'.",
    "general_def": "Được quan sát thấy",
    "example": "Example in text: '... observed ...'"
  },
  "obsolete": {
    "word": "obsolete",
    "ipa": "/ˌɒb.səlˈiːt/",
    "pos": "Tính từ",
    "vi": "Lỗi thời, mất giá trị cập nhật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lỗi thời, mất giá trị cập nhật'.",
    "general_def": "Lỗi thời, mất giá trị cập nhật",
    "example": "Example in text: '... obsolete ...'"
  },
  "obtain": {
    "word": "obtain",
    "ipa": "/əbˈteɪn/",
    "pos": "Động từ",
    "vi": "Thu được, đạt được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thu được, đạt được'.",
    "general_def": "Thu được, đạt được",
    "example": "Example in text: '... obtain ...'"
  },
  "obtained": {
    "word": "obtained",
    "ipa": "/əbˈteɪnd/",
    "pos": "Tính từ",
    "vi": "Đã thu được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã thu được'.",
    "general_def": "Đã thu được",
    "example": "Example in text: '... obtained ...'"
  },
  "obtaining": {
    "word": "obtaining",
    "ipa": "/əbˈteɪ.nɪŋ/",
    "pos": "Động từ",
    "vi": "Việc thu nhận",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'việc thu nhận'.",
    "general_def": "Việc thu nhận",
    "example": "Example in text: '... obtaining ...'"
  },
  "occur": {
    "word": "occur",
    "ipa": "/əˈkɜːr/",
    "pos": "Động từ",
    "vi": "Xảy ra, phát sinh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xảy ra, phát sinh'.",
    "general_def": "Xảy ra, phát sinh",
    "example": "Example in text: '... occur ...'"
  },
  "occurred": {
    "word": "occurred",
    "ipa": "/əˈkɜːd/",
    "pos": "Động từ",
    "vi": "Đã xảy ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã xảy ra'.",
    "general_def": "Đã xảy ra",
    "example": "Example in text: '... occurred ...'"
  },
  "occurrence": {
    "word": "occurrence",
    "ipa": "/əˈkʌr.əns/",
    "pos": "Danh từ",
    "vi": "Sự cố phát sinh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự cố phát sinh'.",
    "general_def": "Sự cố phát sinh",
    "example": "Example in text: '... occurrence ...'"
  },
  "occurs": {
    "word": "occurs",
    "ipa": "/əˈkɜːz/",
    "pos": "Động từ",
    "vi": "Xảy ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xảy ra'.",
    "general_def": "Xảy ra",
    "example": "Example in text: '... occurs ...'"
  },
  "off": {
    "word": "off",
    "ipa": "/ɒf/",
    "pos": "Tính từ/Trạng từ",
    "vi": "Tắt, trạng thái nghỉ (OFF period)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tắt, trạng thái nghỉ (off period)'.",
    "general_def": "Tắt, trạng thái nghỉ (OFF period)",
    "example": "Example in text: '... off ...'"
  },
  "offered": {
    "word": "offered",
    "ipa": "/ˈɒf.əd/",
    "pos": "Tính từ",
    "vi": "Cung cấp (offered load: tải nạp vào mạng)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cung cấp (offered load: tải nạp vào mạng)'.",
    "general_def": "Cung cấp (offered load: tải nạp vào mạng)",
    "example": "Example in text: '... offered ...'"
  },
  "often": {
    "word": "often",
    "ipa": "/ˈɒf.ən/",
    "pos": "Trạng từ",
    "vi": "Thường xuyên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thường xuyên'.",
    "general_def": "Thường xuyên",
    "example": "Example in text: '... often ...'"
  },
  "old": {
    "word": "old",
    "ipa": "/əʊld/",
    "pos": "Tính từ",
    "vi": "Cũ, trước đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cũ, trước đó'.",
    "general_def": "Cũ, trước đó",
    "example": "Example in text: '... old ...'"
  },
  "on": {
    "word": "on",
    "ipa": "/ɒn/",
    "pos": "Giới từ/Tính từ",
    "vi": "Bật, trên (ON period: giai đoạn phát bùng phát)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bật, trên (on period: giai đoạn phát bùng phát)'.",
    "general_def": "Bật, trên (ON period: giai đoạn phát bùng phát)",
    "example": "Example in text: '... on ...'"
  },
  "one": {
    "word": "one",
    "ipa": "/wʌn/",
    "pos": "Số từ",
    "vi": "Một",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một'.",
    "general_def": "Một",
    "example": "Example in text: '... one ...'"
  },
  "only": {
    "word": "only",
    "ipa": "/ˈəʊn.li/",
    "pos": "Trạng từ/Tính từ",
    "vi": "Chỉ, duy nhất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chỉ, duy nhất'.",
    "general_def": "Chỉ, duy nhất",
    "example": "Example in text: '... only ...'"
  },
  "operates": {
    "word": "operates",
    "ipa": "/ˈɒp.ər.eɪts/",
    "pos": "Động từ",
    "vi": "Vận hành, hoạt động",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vận hành, hoạt động'.",
    "general_def": "Vận hành, hoạt động",
    "example": "Example in text: '... operates ...'"
  },
  "operating": {
    "word": "operating",
    "ipa": "/ˈɒp.ər.eɪ.tɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang hoạt động",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang hoạt động'.",
    "general_def": "Đang hoạt động",
    "example": "Example in text: '... operating ...'"
  },
  "operation": {
    "word": "operation",
    "ipa": "/ˌɒp.ərˈeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Hoạt động vận hành",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hoạt động vận hành'.",
    "general_def": "Hoạt động vận hành",
    "example": "Example in text: '... operation ...'"
  },
  "opportunity": {
    "word": "opportunity",
    "ipa": "/ˌɒp.əˈtʃuː.nə.ti/",
    "pos": "Danh từ",
    "vi": "Cơ hội",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cơ hội'.",
    "general_def": "Cơ hội",
    "example": "Example in text: '... opportunity ...'"
  },
  "opt": {
    "word": "opt",
    "ipa": "/ɒpt/",
    "pos": "Động từ",
    "vi": "Lựa chọn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lựa chọn'.",
    "general_def": "Lựa chọn",
    "example": "Example in text: '... opt ...'"
  },
  "optimal": {
    "word": "optimal",
    "ipa": "/ˈɒp.tɪ.məl/",
    "pos": "Tính từ",
    "vi": "Tối ưu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tối ưu'.",
    "general_def": "Tối ưu",
    "example": "Example in text: '... optimal ...'"
  },
  "optimize": {
    "word": "optimize",
    "ipa": "/ˈɒp.tɪ.maɪz/",
    "pos": "Động từ",
    "vi": "Tối ưu hóa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tối ưu hóa'.",
    "general_def": "Tối ưu hóa",
    "example": "Example in text: '... optimize ...'"
  },
  "option": {
    "word": "option",
    "ipa": "/ˈɒp.ʃən/",
    "pos": "Danh từ",
    "vi": "Tùy chọn trong tiêu đề CoAP (CoAP option)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tùy chọn trong tiêu đề coap (coap option)'.",
    "general_def": "Tùy chọn trong tiêu đề CoAP (CoAP option)",
    "example": "Example in text: '... option ...'"
  },
  "options": {
    "word": "options",
    "ipa": "/ˈɒp.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các tùy chọn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tùy chọn'.",
    "general_def": "Các tùy chọn",
    "example": "Example in text: '... options ...'"
  },
  "order": {
    "word": "order",
    "ipa": "/ˈɔː.dər/",
    "pos": "Danh từ",
    "vi": "Thứ tự / để (in order to: để mà)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thứ tự / để (in order to: để mà)'.",
    "general_def": "Thứ tự / để (in order to: để mà)",
    "example": "Example in text: '... order ...'"
  },
  "original": {
    "word": "original",
    "ipa": "/əˈrɪdʒ.ən.əl/",
    "pos": "Tính từ",
    "vi": "Nguyên bản, gốc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nguyên bản, gốc'.",
    "general_def": "Nguyên bản, gốc",
    "example": "Example in text: '... original ...'"
  },
  "originally": {
    "word": "originally",
    "ipa": "/əˈrɪdʒ.ən.əl.i/",
    "pos": "Trạng từ",
    "vi": "Ban đầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ban đầu'.",
    "general_def": "Ban đầu",
    "example": "Example in text: '... originally ...'"
  },
  "other": {
    "word": "other",
    "ipa": "/ˈʌð.ər/",
    "pos": "Tính từ/Đại từ",
    "vi": "Khác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khác'.",
    "general_def": "Khác",
    "example": "Example in text: '... other ...'"
  },
  "others": {
    "word": "others",
    "ipa": "/ˈʌð.ərz/",
    "pos": "Đại từ",
    "vi": "Những cái khác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'những cái khác'.",
    "general_def": "Những cái khác",
    "example": "Example in text: '... others ...'"
  },
  "otherwise": {
    "word": "otherwise",
    "ipa": "/ˈʌð.ə.waɪz/",
    "pos": "Liên từ/Trạng từ",
    "vi": "Nếu không thì",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nếu không thì'.",
    "general_def": "Nếu không thì",
    "example": "Example in text: '... otherwise ...'"
  },
  "our": {
    "word": "our",
    "ipa": "/aʊər/",
    "pos": "Tính từ sở hữu",
    "vi": "Của chúng tôi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'của chúng tôi'.",
    "general_def": "Của chúng tôi",
    "example": "Example in text: '... our ...'"
  },
  "outdoor": {
    "word": "outdoor",
    "ipa": "/ˈaʊtˌdɔːr/",
    "pos": "Tính từ",
    "vi": "Ngoài trời",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngoài trời'.",
    "general_def": "Ngoài trời",
    "example": "Example in text: '... outdoor ...'"
  },
  "outperform": {
    "word": "outperform",
    "ipa": "/ˌaʊt.pəˈfɔːm/",
    "pos": "Động từ",
    "vi": "Vượt trội hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vượt trội hơn'.",
    "general_def": "Vượt trội hơn",
    "example": "Example in text: '... outperform ...'"
  },
  "outperforms": {
    "word": "outperforms",
    "ipa": "/ˌaʊt.pəˈfɔːmz/",
    "pos": "Động từ",
    "vi": "Vượt trội hơn hẳn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vượt trội hơn hẳn'.",
    "general_def": "Vượt trội hơn hẳn",
    "example": "Example in text: '... outperforms ...'"
  },
  "outstanding": {
    "word": "outstanding",
    "ipa": "/ˌaʊtˈstæn.dɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang chờ xử lý (outstanding request: yêu cầu chưa có ACK)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang chờ xử lý (outstanding request: yêu cầu chưa có ack)'.",
    "general_def": "Đang chờ xử lý (outstanding request: yêu cầu chưa có ACK)",
    "example": "Example in text: '... outstanding ...'"
  },
  "overall": {
    "word": "overall",
    "ipa": "/ˌəʊ.vəˈrɔːl/",
    "pos": "Tính từ",
    "vi": "Tổng thể, tổng hợp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tổng thể, tổng hợp'.",
    "general_def": "Tổng thể, tổng hợp",
    "example": "Example in text: '... overall ...'"
  },
  "overflowing": {
    "word": "overflowing",
    "ipa": "/ˌoʊ.vərˈfloʊ.ɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang bị tràn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang bị tràn'.",
    "general_def": "Đang bị tràn",
    "example": "Example in text: '... overflowing ...'"
  },
  "overflows": {
    "word": "overflows",
    "ipa": "/ˌoʊ.vərˈfloʊz/",
    "pos": "Danh từ",
    "vi": "Các đợt tràn bộ đệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đợt tràn bộ đệm'.",
    "general_def": "Các đợt tràn bộ đệm",
    "example": "Example in text: '... overflows ...'"
  },
  "overhead": {
    "word": "overhead",
    "ipa": "/ˈəʊ.və.hed/",
    "pos": "Danh từ",
    "vi": "Chi phí tiêu tốn tài nguyên phụ trội",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chi phí tiêu tốn tài nguyên phụ trội'.",
    "general_def": "Chi phí tiêu tốn tài nguyên phụ trội",
    "example": "Example in text: '... overhead ...'"
  },
  "overlook": {
    "word": "overlook",
    "ipa": "/ˌəʊ.vəˈlʊk/",
    "pos": "Động từ",
    "vi": "Bỏ sót",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bỏ sót'.",
    "general_def": "Bỏ sót",
    "example": "Example in text: '... overlook ...'"
  },
  "overcome": {
    "word": "overcome",
    "ipa": "/ˌəʊ.vəˈkʌm/",
    "pos": "Động từ",
    "vi": "Khắc phục, vượt qua hạn chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khắc phục, vượt qua hạn chế'.",
    "general_def": "Khắc phục, vượt qua hạn chế",
    "example": "Example in text: '... overcome ...'"
  },
  "overestimate": {
    "word": "overestimate",
    "ipa": "/ˌəʊ.vərˈes.tɪ.meɪt/",
    "pos": "Động từ",
    "vi": "Ước lượng quá cao",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ước lượng quá cao'.",
    "general_def": "Ước lượng quá cao",
    "example": "Example in text: '... overestimate ...'"
  },
  "overestimates": {
    "word": "overestimates",
    "ipa": "/ˌəʊ.vərˈes.tɪ.meɪts/",
    "pos": "Động từ",
    "vi": "Ước lượng quá lớn RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ước lượng quá lớn rto'.",
    "general_def": "Ước lượng quá lớn RTO",
    "example": "Example in text: '... overestimates ...'"
  },
  "own": {
    "word": "own",
    "ipa": "/əʊn/",
    "pos": "Tính từ",
    "vi": "Riêng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'riêng'.",
    "general_def": "Riêng",
    "example": "Example in text: '... own ...'"
  },
  "packet": {
    "word": "packet",
    "ipa": "/ˈpæk.ɪt/",
    "pos": "Danh từ",
    "vi": "Gói tin truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gói tin truyền thông'.",
    "general_def": "Gói tin truyền thông",
    "example": "Example in text: '... packet ...'"
  },
  "packets": {
    "word": "packets",
    "ipa": "/ˈpæk.ɪts/",
    "pos": "Danh từ",
    "vi": "Các gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các gói tin'.",
    "general_def": "Các gói tin",
    "example": "Example in text: '... packets ...'"
  },
  "paradoxically": {
    "word": "paradoxically",
    "ipa": "/ˌpær.əˈdɒk.sɪ.kəl.i/",
    "pos": "Trạng từ",
    "vi": "Một cách nghịch lý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách nghịch lý'.",
    "general_def": "Một cách nghịch lý",
    "example": "Example in text: '... paradoxically ...'"
  },
  "parallel": {
    "word": "parallel",
    "ipa": "/ˈpær.ə.lel/",
    "pos": "Tính từ",
    "vi": "Song song",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'song song'.",
    "general_def": "Song song",
    "example": "Example in text: '... parallel ...'"
  },
  "parameter": {
    "word": "parameter",
    "ipa": "/pəˈræm.ɪ.tər/",
    "pos": "Danh từ",
    "vi": "Tham số kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tham số kỹ thuật'.",
    "general_def": "Tham số kỹ thuật",
    "example": "Example in text: '... parameter ...'"
  },
  "parameters": {
    "word": "parameters",
    "ipa": "/pəˈræm.ɪ.tərz/",
    "pos": "Danh từ",
    "vi": "Các tham số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tham số'.",
    "general_def": "Các tham số",
    "example": "Example in text: '... parameters ...'"
  },
  "pass": {
    "word": "pass",
    "ipa": "/pɑːs/",
    "pos": "Động từ",
    "vi": "Vượt qua, trôi qua",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vượt qua, trôi qua'.",
    "general_def": "Vượt qua, trôi qua",
    "example": "Example in text: '... pass ...'"
  },
  "passed": {
    "word": "passed",
    "ipa": "/pɑːst/",
    "pos": "Động từ",
    "vi": "Đã trôi qua (thời gian)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã trôi qua (thời gian)'.",
    "general_def": "Đã trôi qua (thời gian)",
    "example": "Example in text: '... passed ...'"
  },
  "path": {
    "word": "path",
    "ipa": "/pɑːθ/",
    "pos": "Danh từ",
    "vi": "Đường đi, tuyến đường truyền",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đường đi, tuyến đường truyền'.",
    "general_def": "Đường đi, tuyến đường truyền",
    "example": "Example in text: '... path ...'"
  },
  "paths": {
    "word": "paths",
    "ipa": "/pɑːðz/",
    "pos": "Danh từ",
    "vi": "Các tuyến đường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tuyến đường'.",
    "general_def": "Các tuyến đường",
    "example": "Example in text: '... paths ...'"
  },
  "pattern": {
    "word": "pattern",
    "ipa": "/ˈpæt.ən/",
    "pos": "Danh từ",
    "vi": "Dạng, mô hình lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dạng, mô hình lưu lượng'.",
    "general_def": "Dạng, mô hình lưu lượng",
    "example": "Example in text: '... pattern ...'"
  },
  "patterns": {
    "word": "patterns",
    "ipa": "/ˈpæt.ənz/",
    "pos": "Danh từ",
    "vi": "Các mô hình lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các mô hình lưu lượng'.",
    "general_def": "Các mô hình lưu lượng",
    "example": "Example in text: '... patterns ...'"
  },
  "peak": {
    "word": "peak",
    "ipa": "/piːk/",
    "pos": "Danh từ/Động từ",
    "vi": "Đỉnh đột biến (RTT peak)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đỉnh đột biến (rtt peak)'.",
    "general_def": "Đỉnh đột biến (RTT peak)",
    "example": "Example in text: '... peak ...'"
  },
  "peaks": {
    "word": "peaks",
    "ipa": "/piːks/",
    "pos": "Danh từ",
    "vi": "Các đỉnh nhọn đột biến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đỉnh nhọn đột biến'.",
    "general_def": "Các đỉnh nhọn đột biến",
    "example": "Example in text: '... peaks ...'"
  },
  "per": {
    "word": "per",
    "ipa": "/pɜːr/",
    "pos": "Giới từ",
    "vi": "Mỗi một (mỗi nút, mỗi giây)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mỗi một (mỗi nút, mỗi giây)'.",
    "general_def": "Mỗi một (mỗi nút, mỗi giây)",
    "example": "Example in text: '... per ...'"
  },
  "percentage": {
    "word": "percentage",
    "ipa": "/pəˈsen.tɪdʒ/",
    "pos": "Danh từ",
    "vi": "Tỷ lệ phần trăm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tỷ lệ phần trăm'.",
    "general_def": "Tỷ lệ phần trăm",
    "example": "Example in text: '... percentage ...'"
  },
  "perform": {
    "word": "perform",
    "ipa": "/pəˈfɔːm/",
    "pos": "Động từ",
    "vi": "Hoạt động, thể hiện hiệu năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hoạt động, thể hiện hiệu năng'.",
    "general_def": "Hoạt động, thể hiện hiệu năng",
    "example": "Example in text: '... perform ...'"
  },
  "performance": {
    "word": "performance",
    "ipa": "/pəˈfɔː.məns/",
    "pos": "Danh từ",
    "vi": "Hiệu năng hệ thống",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiệu năng hệ thống'.",
    "general_def": "Hiệu năng hệ thống",
    "example": "Example in text: '... performance ...'"
  },
  "performed": {
    "word": "performed",
    "ipa": "/pəˈfɔːmd/",
    "pos": "Tính từ",
    "vi": "Được thực hiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được thực hiện'.",
    "general_def": "Được thực hiện",
    "example": "Example in text: '... performed ...'"
  },
  "performs": {
    "word": "performs",
    "ipa": "/pəˈfɔːmz/",
    "pos": "Động từ",
    "vi": "Đạt hiệu năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đạt hiệu năng'.",
    "general_def": "Đạt hiệu năng",
    "example": "Example in text: '... performs ...'"
  },
  "period": {
    "word": "period",
    "ipa": "/ˈpɪə.ri.əd/",
    "pos": "Danh từ",
    "vi": "Khoảng thời gian, chu kỳ phát",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khoảng thời gian, chu kỳ phát'.",
    "general_def": "Khoảng thời gian, chu kỳ phát",
    "example": "Example in text: '... period ...'"
  },
  "periodic": {
    "word": "periodic",
    "ipa": "/ˌpɪə.riˈɒd.ɪk/",
    "pos": "Tính từ",
    "vi": "Định kỳ đều đặn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'định kỳ đều đặn'.",
    "general_def": "Định kỳ đều đặn",
    "example": "Example in text: '... periodic ...'"
  },
  "periodically": {
    "word": "periodically",
    "ipa": "/ˌpɪə.riˈɒd.ɪ.kəl.i/",
    "pos": "Trạng từ",
    "vi": "Một cách định kỳ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách định kỳ'.",
    "general_def": "Một cách định kỳ",
    "example": "Example in text: '... periodically ...'"
  },
  "periods": {
    "word": "periods",
    "ipa": "/ˈpɪə.ri.ədz/",
    "pos": "Danh từ",
    "vi": "Các khoảng thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các khoảng thời gian'.",
    "general_def": "Các khoảng thời gian",
    "example": "Example in text: '... periods ...'"
  },
  "phenomena": {
    "word": "phenomena",
    "ipa": "/fəˈnɒm.ɪ.nə/",
    "pos": "Danh từ",
    "vi": "Các hiện tượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hiện tượng'.",
    "general_def": "Các hiện tượng",
    "example": "Example in text: '... phenomena ...'"
  },
  "phenomenon": {
    "word": "phenomenon",
    "ipa": "/fəˈnɒm.ɪ.nən/",
    "pos": "Danh từ",
    "vi": "Hiện tượng mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiện tượng mạng'.",
    "general_def": "Hiện tượng mạng",
    "example": "Example in text: '... phenomenon ...'"
  },
  "physical": {
    "word": "physical",
    "ipa": "/ˈfɪz.ɪ.kəl/",
    "pos": "Tính từ",
    "vi": "Vật lý (môi trường vật lý / tầng vật lý)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vật lý (môi trường vật lý / tầng vật lý)'.",
    "general_def": "Vật lý (môi trường vật lý / tầng vật lý)",
    "example": "Example in text: '... physical ...'"
  },
  "piggyback": {
    "word": "piggyback",
    "ipa": "/ˈpɪɡ.i.bæk/",
    "pos": "Động từ",
    "vi": "Cõng kèm dữ liệu vào ACK",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cõng kèm dữ liệu vào ack'.",
    "general_def": "Cõng kèm dữ liệu vào ACK",
    "example": "Example in text: '... piggyback ...'"
  },
  "pillar": {
    "word": "pillar",
    "ipa": "/ˈpɪl.ər/",
    "pos": "Danh từ",
    "vi": "Trụ cột nền tảng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trụ cột nền tảng'.",
    "general_def": "Trụ cột nền tảng",
    "example": "Example in text: '... pillar ...'"
  },
  "pitfall": {
    "word": "pitfall",
    "ipa": "/ˈpɪt.fɔːl/",
    "pos": "Danh từ",
    "vi": "Cạm bẫy kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cạm bẫy kỹ thuật'.",
    "general_def": "Cạm bẫy kỹ thuật",
    "example": "Example in text: '... pitfall ...'"
  },
  "pitfalls": {
    "word": "pitfalls",
    "ipa": "/ˈpɪt.fɔːlz/",
    "pos": "Danh từ",
    "vi": "Các cạm bẫy tiềm ẩn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cạm bẫy tiềm ẩn'.",
    "general_def": "Các cạm bẫy tiềm ẩn",
    "example": "Example in text: '... pitfalls ...'"
  },
  "platform": {
    "word": "platform",
    "ipa": "/ˈplæt.fɔːm/",
    "pos": "Danh từ",
    "vi": "Nền tảng phần cứng/mô phỏng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nền tảng phần cứng/mô phỏng'.",
    "general_def": "Nền tảng phần cứng/mô phỏng",
    "example": "Example in text: '... platform ...'"
  },
  "point": {
    "word": "point",
    "ipa": "/pɔɪnt/",
    "pos": "Danh từ",
    "vi": "Điểm cốt lõi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điểm cốt lõi'.",
    "general_def": "Điểm cốt lõi",
    "example": "Example in text: '... point ...'"
  },
  "points": {
    "word": "points",
    "ipa": "/pɔɪnts/",
    "pos": "Danh từ",
    "vi": "Các điểm khác biệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các điểm khác biệt'.",
    "general_def": "Các điểm khác biệt",
    "example": "Example in text: '... points ...'"
  },
  "policy": {
    "word": "policy",
    "ipa": "/ˈpɒl.ə.si/",
    "pos": "Danh từ",
    "vi": "Chính sách thuật toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chính sách thuật toán'.",
    "general_def": "Chính sách thuật toán",
    "example": "Example in text: '... policy ...'"
  },
  "poor": {
    "word": "poor",
    "ipa": "/pɔːr/",
    "pos": "Tính từ",
    "vi": "Kém, hiệu năng yếu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kém, hiệu năng yếu'.",
    "general_def": "Kém, hiệu năng yếu",
    "example": "Example in text: '... poor ...'"
  },
  "possibly": {
    "word": "possibly",
    "ipa": "/ˈpɒs.ə.bli/",
    "pos": "Trạng từ",
    "vi": "Có thể",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có thể'.",
    "general_def": "Có thể",
    "example": "Example in text: '... possibly ...'"
  },
  "potential": {
    "word": "potential",
    "ipa": "/pəˈten.ʃəl/",
    "pos": "Tính từ",
    "vi": "Tiềm năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiềm năng'.",
    "general_def": "Tiềm năng",
    "example": "Example in text: '... potential ...'"
  },
  "potentially": {
    "word": "potentially",
    "ipa": "/pəˈten.ʃəl.i/",
    "pos": "Trạng từ",
    "vi": "Có khả năng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có khả năng'.",
    "general_def": "Có khả năng",
    "example": "Example in text: '... potentially ...'"
  },
  "power": {
    "word": "power",
    "ipa": "/paʊər/",
    "pos": "Danh từ",
    "vi": "Công suất năng lượng (Low Power)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'công suất năng lượng (low power)'.",
    "general_def": "Công suất năng lượng (Low Power)",
    "example": "Example in text: '... power ...'"
  },
  "precise": {
    "word": "precise",
    "ipa": "/prɪˈsaɪs/",
    "pos": "Tính từ",
    "vi": "Chính xác tuyệt đối",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chính xác tuyệt đối'.",
    "general_def": "Chính xác tuyệt đối",
    "example": "Example in text: '... precise ...'"
  },
  "precisely": {
    "word": "precisely",
    "ipa": "/prɪˈsaɪs.li/",
    "pos": "Trạng từ",
    "vi": "Một cách chính xác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách chính xác'.",
    "general_def": "Một cách chính xác",
    "example": "Example in text: '... precisely ...'"
  },
  "preliminary": {
    "word": "preliminary",
    "ipa": "/prɪˈlɪm.ɪ.nər.i/",
    "pos": "Tính từ",
    "vi": "Sơ bộ ban đầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sơ bộ ban đầu'.",
    "general_def": "Sơ bộ ban đầu",
    "example": "Example in text: '... preliminary ...'"
  },
  "premature": {
    "word": "premature",
    "ipa": "/ˈprem.ə.tʃʊər/",
    "pos": "Tính từ",
    "vi": "Hết hạn non, quá sớm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hết hạn non, quá sớm'.",
    "general_def": "Hết hạn non, quá sớm",
    "example": "Example in text: '... premature ...'"
  },
  "presence": {
    "word": "presence",
    "ipa": "/ˈprez.əns/",
    "pos": "Danh từ",
    "vi": "Sự hiện diện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự hiện diện'.",
    "general_def": "Sự hiện diện",
    "example": "Example in text: '... presence ...'"
  },
  "present": {
    "word": "present",
    "ipa": "/prɪˈzent/",
    "pos": "Động từ",
    "vi": "Trình bày, giới thiệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trình bày, giới thiệu'.",
    "general_def": "Trình bày, giới thiệu",
    "example": "Example in text: '... present ...'"
  },
  "presented": {
    "word": "presented",
    "ipa": "/prɪˈzen.tɪd/",
    "pos": "Tính từ",
    "vi": "Được trình bày",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được trình bày'.",
    "general_def": "Được trình bày",
    "example": "Example in text: '... presented ...'"
  },
  "presents": {
    "word": "presents",
    "ipa": "/prɪˈzents/",
    "pos": "Động từ",
    "vi": "Trình bày",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trình bày'.",
    "general_def": "Trình bày",
    "example": "Example in text: '... presents ...'"
  },
  "preserve": {
    "word": "preserve",
    "ipa": "/prɪˈzɜːv/",
    "pos": "Động từ",
    "vi": "Bảo toàn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bảo toàn'.",
    "general_def": "Bảo toàn",
    "example": "Example in text: '... preserve ...'"
  },
  "preserved": {
    "word": "preserved",
    "ipa": "/prɪˈzɜːvd/",
    "pos": "Tính từ",
    "vi": "Được bảo toàn nguyên vẹn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được bảo toàn nguyên vẹn'.",
    "general_def": "Được bảo toàn nguyên vẹn",
    "example": "Example in text: '... preserved ...'"
  },
  "prevent": {
    "word": "prevent",
    "ipa": "/prɪˈvent/",
    "pos": "Động từ",
    "vi": "Ngăn chặn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngăn chặn'.",
    "general_def": "Ngăn chặn",
    "example": "Example in text: '... prevent ...'"
  },
  "prevents": {
    "word": "prevents",
    "ipa": "/prɪˈvents/",
    "pos": "Động từ",
    "vi": "Ngăn ngừa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngăn ngừa'.",
    "general_def": "Ngăn ngừa",
    "example": "Example in text: '... prevents ...'"
  },
  "previous": {
    "word": "previous",
    "ipa": "/ˈpriː.vi.əs/",
    "pos": "Tính từ",
    "vi": "Trước đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trước đó'.",
    "general_def": "Trước đó",
    "example": "Example in text: '... previous ...'"
  },
  "previously": {
    "word": "previously",
    "ipa": "/ˈpriː.vi.əs.li/",
    "pos": "Trạng từ",
    "vi": "Trước đây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trước đây'.",
    "general_def": "Trước đây",
    "example": "Example in text: '... previously ...'"
  },
  "primary": {
    "word": "primary",
    "ipa": "/ˈpraɪ.mər.i/",
    "pos": "Tính từ",
    "vi": "Chính yếu, nguyên nhân cốt lõi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chính yếu, nguyên nhân cốt lõi'.",
    "general_def": "Chính yếu, nguyên nhân cốt lõi",
    "example": "Example in text: '... primary ...'"
  },
  "probability": {
    "word": "probability",
    "ipa": "/ˌprɒb.əˈbɪl.ə.ti/",
    "pos": "Danh từ",
    "vi": "Xác suất thống kê",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xác suất thống kê'.",
    "general_def": "Xác suất thống kê",
    "example": "Example in text: '... probability ...'"
  },
  "problem": {
    "word": "problem",
    "ipa": "/ˈprɒb.ləm/",
    "pos": "Danh từ",
    "vi": "Vấn đề kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vấn đề kỹ thuật'.",
    "general_def": "Vấn đề kỹ thuật",
    "example": "Example in text: '... problem ...'"
  },
  "problems": {
    "word": "problems",
    "ipa": "/ˈprɒb.ləmz/",
    "pos": "Danh từ",
    "vi": "Các bài toán nan giải",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bài toán nan giải'.",
    "general_def": "Các bài toán nan giải",
    "example": "Example in text: '... problems ...'"
  },
  "procedure": {
    "word": "procedure",
    "ipa": "/prəˈsiː.dʒər/",
    "pos": "Danh từ",
    "vi": "Quy trình thủ tục thuật toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quy trình thủ tục thuật toán'.",
    "general_def": "Quy trình thủ tục thuật toán",
    "example": "Example in text: '... procedure ...'"
  },
  "process": {
    "word": "process",
    "ipa": "/ˈprəʊ.ses/",
    "pos": "Động từ/Danh từ",
    "vi": "Tiến trình / xử lý",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiến trình / xử lý'.",
    "general_def": "Tiến trình / xử lý",
    "example": "Example in text: '... process ...'"
  },
  "processed": {
    "word": "processed",
    "ipa": "/ˈprəʊ.sest/",
    "pos": "Tính từ",
    "vi": "Được xử lý hoàn tất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được xử lý hoàn tất'.",
    "general_def": "Được xử lý hoàn tất",
    "example": "Example in text: '... processed ...'"
  },
  "processing": {
    "word": "processing",
    "ipa": "/ˈprəʊ.ses.ɪŋ/",
    "pos": "Danh từ",
    "vi": "Năng lực xử lý dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'năng lực xử lý dữ liệu'.",
    "general_def": "Năng lực xử lý dữ liệu",
    "example": "Example in text: '... processing ...'"
  },
  "produces": {
    "word": "produces",
    "ipa": "/prəˈdjuː.sɪz/",
    "pos": "Động từ",
    "vi": "Sinh ra, tạo ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sinh ra, tạo ra'.",
    "general_def": "Sinh ra, tạo ra",
    "example": "Example in text: '... produces ...'"
  },
  "proper": {
    "word": "proper",
    "ipa": "/ˈprɒp.ər/",
    "pos": "Tính từ",
    "vi": "Thích hợp, đúng đắn, chuẩn xác",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thích hợp, đúng đắn, chuẩn xác'.",
    "general_def": "Thích hợp, đúng đắn, chuẩn xác",
    "example": "Example in text: '... proper ...'"
  },
  "propose": {
    "word": "propose",
    "ipa": "/prəˈpəʊz/",
    "pos": "Động từ",
    "vi": "Đề xuất giải pháp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đề xuất giải pháp'.",
    "general_def": "Đề xuất giải pháp",
    "example": "Example in text: '... propose ...'"
  },
  "proposed": {
    "word": "proposed",
    "ipa": "/prəˈpəʊzd/",
    "pos": "Tính từ",
    "vi": "Được đề xuất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được đề xuất'.",
    "general_def": "Được đề xuất",
    "example": "Example in text: '... proposed ...'"
  },
  "proposes": {
    "word": "proposes",
    "ipa": "/prəˈpəʊ.zɪz/",
    "pos": "Động từ",
    "vi": "Đề xuất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đề xuất'.",
    "general_def": "Đề xuất",
    "example": "Example in text: '... proposes ...'"
  },
  "protocol": {
    "word": "protocol",
    "ipa": "/ˈprəʊ.tə.kɒl/",
    "pos": "Danh từ",
    "vi": "Giao thức truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao thức truyền thông'.",
    "general_def": "Giao thức truyền thông",
    "example": "Example in text: '... protocol ...'"
  },
  "protocols": {
    "word": "protocols",
    "ipa": "/ˈprəʊ.tə.kɒlz/",
    "pos": "Danh từ",
    "vi": "Các giao thức",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các giao thức'.",
    "general_def": "Các giao thức",
    "example": "Example in text: '... protocols ...'"
  },
  "provide": {
    "word": "provide",
    "ipa": "/prəˈvaɪd/",
    "pos": "Động từ",
    "vi": "Cung cấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cung cấp'.",
    "general_def": "Cung cấp",
    "example": "Example in text: '... provide ...'"
  },
  "provides": {
    "word": "provides",
    "ipa": "/prəˈvaɪdz/",
    "pos": "Động từ",
    "vi": "Cung cấp giải pháp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cung cấp giải pháp'.",
    "general_def": "Cung cấp giải pháp",
    "example": "Example in text: '... provides ...'"
  },
  "providing": {
    "word": "providing",
    "ipa": "/prəˈvaɪ.dɪŋ/",
    "pos": "Động từ",
    "vi": "Đang cung cấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang cung cấp'.",
    "general_def": "Đang cung cấp",
    "example": "Example in text: '... providing ...'"
  },
  "quantities": {
    "word": "quantities",
    "ipa": "/ˈkwɒn.tə.tiz/",
    "pos": "Danh từ",
    "vi": "Các đại lượng đo lường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đại lượng đo lường'.",
    "general_def": "Các đại lượng đo lường",
    "example": "Example in text: '... quantities ...'"
  },
  "quantity": {
    "word": "quantity",
    "ipa": "/ˈkwɒn.tə.ti/",
    "pos": "Danh từ",
    "vi": "Số lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'số lượng'.",
    "general_def": "Số lượng",
    "example": "Example in text: '... quantity ...'"
  },
  "queue": {
    "word": "queue",
    "ipa": "/kjuː/",
    "pos": "Danh từ",
    "vi": "Hàng đợi gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hàng đợi gói tin'.",
    "general_def": "Hàng đợi gói tin",
    "example": "Example in text: '... queue ...'"
  },
  "queuing": {
    "word": "queuing",
    "ipa": "/ˈkjuː.ɪŋ/",
    "pos": "Danh từ",
    "vi": "Sự xếp hàng đợi trễ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự xếp hàng đợi trễ'.",
    "general_def": "Sự xếp hàng đợi trễ",
    "example": "Example in text: '... queuing ...'"
  },
  "quick": {
    "word": "quick",
    "ipa": "/kwɪk/",
    "pos": "Tính từ",
    "vi": "Nhanh chóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhanh chóng'.",
    "general_def": "Nhanh chóng",
    "example": "Example in text: '... quick ...'"
  },
  "quickly": {
    "word": "quickly",
    "ipa": "/ˈkwɪk.li/",
    "pos": "Trạng từ",
    "vi": "Một cách nhanh chóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách nhanh chóng'.",
    "general_def": "Một cách nhanh chóng",
    "example": "Example in text: '... quickly ...'"
  },
  "radio": {
    "word": "radio",
    "ipa": "/ˈreɪ.di.əʊ/",
    "pos": "Danh từ",
    "vi": "Sóng vô tuyến, bộ thu phát vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sóng vô tuyến, bộ thu phát vô tuyến'.",
    "general_def": "Sóng vô tuyến, bộ thu phát vô tuyến",
    "example": "Example in text: '... radio ...'"
  },
  "random": {
    "word": "random",
    "ipa": "/ˈræn.dəm/",
    "pos": "Tính từ",
    "vi": "Ngẫu nhiên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngẫu nhiên'.",
    "general_def": "Ngẫu nhiên",
    "example": "Example in text: '... random ...'"
  },
  "randomly": {
    "word": "randomly",
    "ipa": "/ˈræn.dəm.li/",
    "pos": "Trạng từ",
    "vi": "Một cách ngẫu nhiên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách ngẫu nhiên'.",
    "general_def": "Một cách ngẫu nhiên",
    "example": "Example in text: '... randomly ...'"
  },
  "range": {
    "word": "range",
    "ipa": "/reɪndʒ/",
    "pos": "Danh từ",
    "vi": "Khoảng, cự ly truyền sóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khoảng, cự ly truyền sóng'.",
    "general_def": "Khoảng, cự ly truyền sóng",
    "example": "Example in text: '... range ...'"
  },
  "ranges": {
    "word": "ranges",
    "ipa": "/ˈreɪn.dʒɪz/",
    "pos": "Danh từ",
    "vi": "Các dải giá trị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các dải giá trị'.",
    "general_def": "Các dải giá trị",
    "example": "Example in text: '... ranges ...'"
  },
  "rapid": {
    "word": "rapid",
    "ipa": "/ˈræp.ɪd/",
    "pos": "Tính từ",
    "vi": "Nhanh, đột ngột",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhanh, đột ngột'.",
    "general_def": "Nhanh, đột ngột",
    "example": "Example in text: '... rapid ...'"
  },
  "rapidly": {
    "word": "rapidly",
    "ipa": "/ˈræp.ɪd.li/",
    "pos": "Trạng từ",
    "vi": "Một cách nhanh chóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách nhanh chóng'.",
    "general_def": "Một cách nhanh chóng",
    "example": "Example in text: '... rapidly ...'"
  },
  "rate": {
    "word": "rate",
    "ipa": "/reɪt/",
    "pos": "Danh từ",
    "vi": "Tốc độ truyền dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tốc độ truyền dữ liệu'.",
    "general_def": "Tốc độ truyền dữ liệu",
    "example": "Example in text: '... rate ...'"
  },
  "rates": {
    "word": "rates",
    "ipa": "/reɪts/",
    "pos": "Danh từ",
    "vi": "Các tốc độ truyền",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tốc độ truyền'.",
    "general_def": "Các tốc độ truyền",
    "example": "Example in text: '... rates ...'"
  },
  "ratio": {
    "word": "ratio",
    "ipa": "/ˈreɪ.ʃi.əʊ/",
    "pos": "Danh từ",
    "vi": "Tỷ số, tỷ lệ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tỷ số, tỷ lệ'.",
    "general_def": "Tỷ số, tỷ lệ",
    "example": "Example in text: '... ratio ...'"
  },
  "re": {
    "word": "re",
    "ipa": "/riː/",
    "pos": "Tiền tố",
    "vi": "Lại, tái",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lại, tái'.",
    "general_def": "Lại, tái",
    "example": "Example in text: '... re ...'"
  },
  "reach": {
    "word": "reach",
    "ipa": "/riːtʃ/",
    "pos": "Động từ",
    "vi": "Đạt đến đích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đạt đến đích'.",
    "general_def": "Đạt đến đích",
    "example": "Example in text: '... reach ...'"
  },
  "reached": {
    "word": "reached",
    "ipa": "/riːtʃt/",
    "pos": "Động từ",
    "vi": "Đã chạm tới ngưỡng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã chạm tới ngưỡng'.",
    "general_def": "Đã chạm tới ngưỡng",
    "example": "Example in text: '... reached ...'"
  },
  "reaction": {
    "word": "reaction",
    "ipa": "/riˈæk.ʃən/",
    "pos": "Danh từ",
    "vi": "Phản ứng kích hoạt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phản ứng kích hoạt'.",
    "general_def": "Phản ứng kích hoạt",
    "example": "Example in text: '... reaction ...'"
  },
  "reacts": {
    "word": "reacts",
    "ipa": "/riˈækts/",
    "pos": "Động từ",
    "vi": "Phản ứng lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phản ứng lại'.",
    "general_def": "Phản ứng lại",
    "example": "Example in text: '... reacts ...'"
  },
  "receive": {
    "word": "receive",
    "ipa": "/rɪˈsiːv/",
    "pos": "Động từ",
    "vi": "Thu nhận bản tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thu nhận bản tin'.",
    "general_def": "Thu nhận bản tin",
    "example": "Example in text: '... receive ...'"
  },
  "received": {
    "word": "received",
    "ipa": "/rɪˈsiːvd/",
    "pos": "Tính từ",
    "vi": "Đã nhận được",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã nhận được'.",
    "general_def": "Đã nhận được",
    "example": "Example in text: '... received ...'"
  },
  "receiver": {
    "word": "receiver",
    "ipa": "/rɪˈsiː.vər/",
    "pos": "Danh từ",
    "vi": "Phía nhận bản tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phía nhận bản tin'.",
    "general_def": "Phía nhận bản tin",
    "example": "Example in text: '... receiver ...'"
  },
  "receivers": {
    "word": "receivers",
    "ipa": "/rɪˈsiː.vərz/",
    "pos": "Danh từ",
    "vi": "Các máy thu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các máy thu'.",
    "general_def": "Các máy thu",
    "example": "Example in text: '... receivers ...'"
  },
  "reception": {
    "word": "reception",
    "ipa": "/rɪˈsep.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự thu nhận thành công",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự thu nhận thành công'.",
    "general_def": "Sự thu nhận thành công",
    "example": "Example in text: '... reception ...'"
  },
  "recently": {
    "word": "recently",
    "ipa": "/ˈriː.sənt.li/",
    "pos": "Trạng từ",
    "vi": "Gần đây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gần đây'.",
    "general_def": "Gần đây",
    "example": "Example in text: '... recently ...'"
  },
  "recommended": {
    "word": "recommended",
    "ipa": "/ˌrek.əˈmen.dɪd/",
    "pos": "Tính từ",
    "vi": "Được khuyến nghị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được khuyến nghị'.",
    "general_def": "Được khuyến nghị",
    "example": "Example in text: '... recommended ...'"
  },
  "recover": {
    "word": "recover",
    "ipa": "/rɪˈkʌv.ər/",
    "pos": "Động từ",
    "vi": "Hồi phục khỏi tắc nghẽn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hồi phục khỏi tắc nghẽn'.",
    "general_def": "Hồi phục khỏi tắc nghẽn",
    "example": "Example in text: '... recover ...'"
  },
  "recovery": {
    "word": "recovery",
    "ipa": "/rɪˈkʌv.ər.i/",
    "pos": "Danh từ",
    "vi": "Sự khôi phục truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự khôi phục truyền thông'.",
    "general_def": "Sự khôi phục truyền thông",
    "example": "Example in text: '... recovery ...'"
  },
  "reduce": {
    "word": "reduce",
    "ipa": "/rɪˈdjuːs/",
    "pos": "Động từ",
    "vi": "Cắt giảm, hạ thấp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cắt giảm, hạ thấp'.",
    "general_def": "Cắt giảm, hạ thấp",
    "example": "Example in text: '... reduce ...'"
  },
  "reduced": {
    "word": "reduced",
    "ipa": "/rɪˈdjuːst/",
    "pos": "Tính từ",
    "vi": "Được cắt giảm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được cắt giảm'.",
    "general_def": "Được cắt giảm",
    "example": "Example in text: '... reduced ...'"
  },
  "reduces": {
    "word": "reduces",
    "ipa": "/rɪˈdjuː.sɪz/",
    "pos": "Động từ",
    "vi": "Giảm bớt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giảm bớt'.",
    "general_def": "Giảm bớt",
    "example": "Example in text: '... reduces ...'"
  },
  "reducing": {
    "word": "reducing",
    "ipa": "/rɪˈdjuː.sɪŋ/",
    "pos": "Động từ",
    "vi": "Việc cắt giảm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'việc cắt giảm'.",
    "general_def": "Việc cắt giảm",
    "example": "Example in text: '... reducing ...'"
  },
  "reduction": {
    "word": "reduction",
    "ipa": "/rɪˈdʌk.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự sụt giảm số lần phát lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự sụt giảm số lần phát lại'.",
    "general_def": "Sự sụt giảm số lần phát lại",
    "example": "Example in text: '... reduction ...'"
  },
  "refer": {
    "word": "refer",
    "ipa": "/rɪˈfɜːr/",
    "pos": "Động từ",
    "vi": "Tham khảo tài liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tham khảo tài liệu'.",
    "general_def": "Tham khảo tài liệu",
    "example": "Example in text: '... refer ...'"
  },
  "regulate": {
    "word": "regulate",
    "ipa": "/ˈreɡ.jʊ.leɪt/",
    "pos": "Động từ",
    "vi": "Điều tiết tốc độ bơm dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điều tiết tốc độ bơm dữ liệu'.",
    "general_def": "Điều tiết tốc độ bơm dữ liệu",
    "example": "Example in text: '... regulate ...'"
  },
  "regulates": {
    "word": "regulates",
    "ipa": "/ˈreɡ.jʊ.leɪts/",
    "pos": "Động từ",
    "vi": "Điều tiết lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điều tiết lưu lượng'.",
    "general_def": "Điều tiết lưu lượng",
    "example": "Example in text: '... regulates ...'"
  },
  "reinforce": {
    "word": "reinforce",
    "ipa": "/ˌriː.ɪnˈfɔːs/",
    "pos": "Động từ",
    "vi": "Củng cố thêm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'củng cố thêm'.",
    "general_def": "Củng cố thêm",
    "example": "Example in text: '... reinforce ...'"
  },
  "related": {
    "word": "related",
    "ipa": "/rɪˈleɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Liên quan (các công trình liên quan)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'liên quan (các công trình liên quan)'.",
    "general_def": "Liên quan (các công trình liên quan)",
    "example": "Example in text: '... related ...'"
  },
  "relative": {
    "word": "relative",
    "ipa": "/ˈrel.ə.tɪv/",
    "pos": "Tính từ",
    "vi": "Tương đối",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương đối'.",
    "general_def": "Tương đối",
    "example": "Example in text: '... relative ...'"
  },
  "relatively": {
    "word": "relatively",
    "ipa": "/ˈrel.ə.tɪv.li/",
    "pos": "Trạng từ",
    "vi": "Tương đối là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương đối là'.",
    "general_def": "Tương đối là",
    "example": "Example in text: '... relatively ...'"
  },
  "relay": {
    "word": "relay",
    "ipa": "/ˈriː.leɪ/",
    "pos": "Danh từ/Động từ",
    "vi": "Nút chuyển tiếp trung gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nút chuyển tiếp trung gian'.",
    "general_def": "Nút chuyển tiếp trung gian",
    "example": "Example in text: '... relay ...'"
  },
  "reliable": {
    "word": "reliable",
    "ipa": "/rɪˈlaɪ.ə.bəl/",
    "pos": "Tính từ",
    "vi": "Tin cậy (truyền tin cậy có ACK)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tin cậy (truyền tin cậy có ack)'.",
    "general_def": "Tin cậy (truyền tin cậy có ACK)",
    "example": "Example in text: '... reliable ...'"
  },
  "rely": {
    "word": "rely",
    "ipa": "/rɪˈlaɪ/",
    "pos": "Động từ",
    "vi": "Dựa vào, phụ thuộc vào",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dựa vào, phụ thuộc vào'.",
    "general_def": "Dựa vào, phụ thuộc vào",
    "example": "Example in text: '... rely ...'"
  },
  "relying": {
    "word": "relying",
    "ipa": "/rɪˈlaɪ.ɪŋ/",
    "pos": "Động từ",
    "vi": "Việc dựa vào",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'việc dựa vào'.",
    "general_def": "Việc dựa vào",
    "example": "Example in text: '... relying ...'"
  },
  "remain": {
    "word": "remain",
    "ipa": "/rɪˈmeɪn/",
    "pos": "Động từ",
    "vi": "Duy trì giữ nguyên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'duy trì giữ nguyên'.",
    "general_def": "Duy trì giữ nguyên",
    "example": "Example in text: '... remain ...'"
  },
  "remaining": {
    "word": "remaining",
    "ipa": "/rɪˈmeɪ.nɪŋ/",
    "pos": "Tính từ",
    "vi": "Còn lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'còn lại'.",
    "general_def": "Còn lại",
    "example": "Example in text: '... remaining ...'"
  },
  "remote": {
    "word": "remote",
    "ipa": "/rɪˈməʊt/",
    "pos": "Tính từ",
    "vi": "Từ xa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'từ xa'.",
    "general_def": "Từ xa",
    "example": "Example in text: '... remote ...'"
  },
  "repeated": {
    "word": "repeated",
    "ipa": "/rɪˈpiː.tɪd/",
    "pos": "Tính từ",
    "vi": "Lặp đi lặp lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lặp đi lặp lại'.",
    "general_def": "Lặp đi lặp lại",
    "example": "Example in text: '... repeated ...'"
  },
  "replica": {
    "word": "replica",
    "ipa": "/ˈrep.lɪ.kə/",
    "pos": "Danh từ",
    "vi": "Lần chạy mô phỏng độc lập",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lần chạy mô phỏng độc lập'.",
    "general_def": "Lần chạy mô phỏng độc lập",
    "example": "Example in text: '... replica ...'"
  },
  "replicas": {
    "word": "replicas",
    "ipa": "/ˈrep.lɪ.kəz/",
    "pos": "Danh từ",
    "vi": "12 lần chạy lặp lại độc lập",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt '12 lần chạy lặp lại độc lập'.",
    "general_def": "12 lần chạy lặp lại độc lập",
    "example": "Example in text: '... replicas ...'"
  },
  "reply": {
    "word": "reply",
    "ipa": "/rɪˈplaɪ/",
    "pos": "Động từ/Danh từ",
    "vi": "Hồi đáp, trả lời",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hồi đáp, trả lời'.",
    "general_def": "Hồi đáp, trả lời",
    "example": "Example in text: '... reply ...'"
  },
  "report": {
    "word": "report",
    "ipa": "/rɪˈpɔːt/",
    "pos": "Động từ/Danh từ",
    "vi": "Báo cáo số liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'báo cáo số liệu'.",
    "general_def": "Báo cáo số liệu",
    "example": "Example in text: '... report ...'"
  },
  "reported": {
    "word": "reported",
    "ipa": "/rɪˈpɔː.tɪd/",
    "pos": "Tính từ",
    "vi": "Được báo cáo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được báo cáo'.",
    "general_def": "Được báo cáo",
    "example": "Example in text: '... reported ...'"
  },
  "request": {
    "word": "request",
    "ipa": "/rɪˈkwest/",
    "pos": "Danh từ/Động từ",
    "vi": "Bản tin yêu cầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản tin yêu cầu'.",
    "general_def": "Bản tin yêu cầu",
    "example": "Example in text: '... request ...'"
  },
  "requests": {
    "word": "requests",
    "ipa": "/rɪˈkwests/",
    "pos": "Danh từ",
    "vi": "Các yêu cầu truyền tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các yêu cầu truyền tin'.",
    "general_def": "Các yêu cầu truyền tin",
    "example": "Example in text: '... requests ...'"
  },
  "require": {
    "word": "require",
    "ipa": "/rɪˈkwaɪər/",
    "pos": "Động từ",
    "vi": "Đòi hỏi, yêu cầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đòi hỏi, yêu cầu'.",
    "general_def": "Đòi hỏi, yêu cầu",
    "example": "Example in text: '... require ...'"
  },
  "required": {
    "word": "required",
    "ipa": "/rɪˈkwaɪəd/",
    "pos": "Tính từ",
    "vi": "Bắt buộc phải có",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bắt buộc phải có'.",
    "general_def": "Bắt buộc phải có",
    "example": "Example in text: '... required ...'"
  },
  "requires": {
    "word": "requires",
    "ipa": "/rɪˈkwaɪərz/",
    "pos": "Động từ",
    "vi": "Đòi hỏi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đòi hỏi'.",
    "general_def": "Đòi hỏi",
    "example": "Example in text: '... requires ...'"
  },
  "reset": {
    "word": "reset",
    "ipa": "/ˌriːˈset/",
    "pos": "Động từ/Danh từ",
    "vi": "Thiết lập lại từ đầu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiết lập lại từ đầu'.",
    "general_def": "Thiết lập lại từ đầu",
    "example": "Example in text: '... reset ...'"
  },
  "resets": {
    "word": "resets",
    "ipa": "/ˌriːˈsets/",
    "pos": "Động từ/Danh từ",
    "vi": "Các lần đặt lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các lần đặt lại'.",
    "general_def": "Các lần đặt lại",
    "example": "Example in text: '... resets ...'"
  },
  "residual": {
    "word": "residual",
    "ipa": "/rɪˈzɪdʒ.u.əl/",
    "pos": "Tính từ",
    "vi": "Còn dư, dư thừa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'còn dư, dư thừa'.",
    "general_def": "Còn dư, dư thừa",
    "example": "Example in text: '... residual ...'"
  },
  "resolve": {
    "word": "resolve",
    "ipa": "/rɪˈzɒlv/",
    "pos": "Động từ",
    "vi": "Giải quyết dứt điểm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giải quyết dứt điểm'.",
    "general_def": "Giải quyết dứt điểm",
    "example": "Example in text: '... resolve ...'"
  },
  "resource": {
    "word": "resource",
    "ipa": "/rɪˈzɔːs/",
    "pos": "Danh từ",
    "vi": "Tài nguyên phần cứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tài nguyên phần cứng'.",
    "general_def": "Tài nguyên phần cứng",
    "example": "Example in text: '... resource ...'"
  },
  "resources": {
    "word": "resources",
    "ipa": "/rɪˈzɔː.sɪz/",
    "pos": "Danh từ",
    "vi": "Các tài nguyên mạng (RAM, pin, băng thông)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tài nguyên mạng (ram, pin, băng thông)'.",
    "general_def": "Các tài nguyên mạng (RAM, pin, băng thông)",
    "example": "Example in text: '... resources ...'"
  },
  "respect": {
    "word": "respect",
    "ipa": "/rɪˈspekt/",
    "pos": "Danh từ",
    "vi": "Phương diện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phương diện'.",
    "general_def": "Phương diện",
    "example": "Example in text: '... respect ...'"
  },
  "respond": {
    "word": "respond",
    "ipa": "/rɪˈspɒnd/",
    "pos": "Động từ",
    "vi": "Phản hồi, đáp ứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phản hồi, đáp ứng'.",
    "general_def": "Phản hồi, đáp ứng",
    "example": "Example in text: '... respond ...'"
  },
  "response": {
    "word": "response",
    "ipa": "/rɪˈspɒns/",
    "pos": "Danh từ",
    "vi": "Bản tin phản hồi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản tin phản hồi'.",
    "general_def": "Bản tin phản hồi",
    "example": "Example in text: '... response ...'"
  },
  "responses": {
    "word": "responses",
    "ipa": "/rɪˈspɒn.sɪz/",
    "pos": "Danh từ",
    "vi": "Các bản tin trả lời",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bản tin trả lời'.",
    "general_def": "Các bản tin trả lời",
    "example": "Example in text: '... responses ...'"
  },
  "responsive": {
    "word": "responsive",
    "ipa": "/rɪˈspɒn.sɪv/",
    "pos": "Tính từ",
    "vi": "Phản ứng nhanh nhạy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phản ứng nhanh nhạy'.",
    "general_def": "Phản ứng nhanh nhạy",
    "example": "Example in text: '... responsive ...'"
  },
  "responsively": {
    "word": "responsively",
    "ipa": "/rɪˈspɒn.sɪv.li/",
    "pos": "Trạng từ",
    "vi": "Một cách nhanh nhạy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách nhanh nhạy'.",
    "general_def": "Một cách nhanh nhạy",
    "example": "Example in text: '... responsively ...'"
  },
  "rest": {
    "word": "rest",
    "ipa": "/rest/",
    "pos": "Danh từ",
    "vi": "Phần còn lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phần còn lại'.",
    "general_def": "Phần còn lại",
    "example": "Example in text: '... rest ...'"
  },
  "restriction": {
    "word": "restriction",
    "ipa": "/rɪˈstrɪk.ʃən/",
    "pos": "Danh từ",
    "vi": "Sự hạn chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự hạn chế'.",
    "general_def": "Sự hạn chế",
    "example": "Example in text: '... restriction ...'"
  },
  "restrictions": {
    "word": "restrictions",
    "ipa": "/rɪˈstrɪk.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các ràng buộc NSTART",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các ràng buộc nstart'.",
    "general_def": "Các ràng buộc NSTART",
    "example": "Example in text: '... restrictions ...'"
  },
  "result": {
    "word": "result",
    "ipa": "/rɪˈzʌlt/",
    "pos": "Danh từ/Động từ",
    "vi": "Kết quả thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kết quả thực nghiệm'.",
    "general_def": "Kết quả thực nghiệm",
    "example": "Example in text: '... result ...'"
  },
  "resulting": {
    "word": "resulting",
    "ipa": "/rɪˈzʌl.tɪŋ/",
    "pos": "Tính từ",
    "vi": "Kết quả mang lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kết quả mang lại'.",
    "general_def": "Kết quả mang lại",
    "example": "Example in text: '... resulting ...'"
  },
  "results": {
    "word": "results",
    "ipa": "/rɪˈzʌlts/",
    "pos": "Danh từ",
    "vi": "Các kết quả nghiên cứu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các kết quả nghiên cứu'.",
    "general_def": "Các kết quả nghiên cứu",
    "example": "Example in text: '... results ...'"
  },
  "retransmit": {
    "word": "retransmit",
    "ipa": "/ˌriː.trænzˈmɪt/",
    "pos": "Động từ",
    "vi": "Truyền lại gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'truyền lại gói tin'.",
    "general_def": "Truyền lại gói tin",
    "example": "Example in text: '... retransmit ...'"
  },
  "retransmitted": {
    "word": "retransmitted",
    "ipa": "/ˌriː.trænzˈmɪt.ɪd/",
    "pos": "Tính từ",
    "vi": "Đã được phát lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được phát lại'.",
    "general_def": "Đã được phát lại",
    "example": "Example in text: '... retransmitted ...'"
  },
  "retransmitting": {
    "word": "retransmitting",
    "ipa": "/ˌriː.trænzˈmɪt.ɪŋ/",
    "pos": "Động từ",
    "vi": "Đang truyền lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang truyền lại'.",
    "general_def": "Đang truyền lại",
    "example": "Example in text: '... retransmitting ...'"
  },
  "retransmissions": {
    "word": "retransmissions",
    "ipa": "/ˌriː.trænzˈmɪʃ.ənz/",
    "pos": "Danh từ",
    "vi": "Các lần phát lại gói tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các lần phát lại gói tin'.",
    "general_def": "Các lần phát lại gói tin",
    "example": "Example in text: '... retransmissions ...'"
  },
  "retry": {
    "word": "retry",
    "ipa": "/ˌriːˈtraɪ/",
    "pos": "Danh từ/Động từ",
    "vi": "Lần thử lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lần thử lại'.",
    "general_def": "Lần thử lại",
    "example": "Example in text: '... retry ...'"
  },
  "reveal": {
    "word": "reveal",
    "ipa": "/rɪˈviːl/",
    "pos": "Động từ",
    "vi": "Tiết lộ, làm lộ rõ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiết lộ, làm lộ rõ'.",
    "general_def": "Tiết lộ, làm lộ rõ",
    "example": "Example in text: '... reveal ...'"
  },
  "reveals": {
    "word": "reveals",
    "ipa": "/rɪˈviːlz/",
    "pos": "Động từ",
    "vi": "Chỉ ra rằng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chỉ ra rằng'.",
    "general_def": "Chỉ ra rằng",
    "example": "Example in text: '... reveals ...'"
  },
  "revision": {
    "word": "revision",
    "ipa": "/rɪˈvɪʒ.ən/",
    "pos": "Danh từ",
    "vi": "Phiên bản sửa đổi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phiên bản sửa đổi'.",
    "general_def": "Phiên bản sửa đổi",
    "example": "Example in text: '... revision ...'"
  },
  "robust": {
    "word": "robust",
    "ipa": "/rəʊˈbʌst/",
    "pos": "Tính từ",
    "vi": "Bền bỉ, vững chắc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bền bỉ, vững chắc'.",
    "general_def": "Bền bỉ, vững chắc",
    "example": "Example in text: '... robust ...'"
  },
  "role": {
    "word": "role",
    "ipa": "/rəʊl/",
    "pos": "Danh từ",
    "vi": "Vai trò then chốt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vai trò then chốt'.",
    "general_def": "Vai trò then chốt",
    "example": "Example in text: '... role ...'"
  },
  "round": {
    "word": "round",
    "ipa": "/raʊnd/",
    "pos": "Tính từ",
    "vi": "Vòng tròn (Round-Trip Time: trễ vòng khứ hồi)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vòng tròn (round-trip time: trễ vòng khứ hồi)'.",
    "general_def": "Vòng tròn (Round-Trip Time: trễ vòng khứ hồi)",
    "example": "Example in text: '... round ...'"
  },
  "route": {
    "word": "route",
    "ipa": "/ruːt/",
    "pos": "Danh từ/Động từ",
    "vi": "Tuyến đường truyền định tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tuyến đường truyền định tuyến'.",
    "general_def": "Tuyến đường truyền định tuyến",
    "example": "Example in text: '... route ...'"
  },
  "router": {
    "word": "router",
    "ipa": "/ˈruː.tər/",
    "pos": "Danh từ",
    "vi": "Bộ định tuyến mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ định tuyến mạng'.",
    "general_def": "Bộ định tuyến mạng",
    "example": "Example in text: '... router ...'"
  },
  "routes": {
    "word": "routes",
    "ipa": "/ruːts/",
    "pos": "Danh từ",
    "vi": "Các tuyến đường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các tuyến đường'.",
    "general_def": "Các tuyến đường",
    "example": "Example in text: '... routes ...'"
  },
  "routing": {
    "word": "routing",
    "ipa": "/ˈruː.tɪŋ/",
    "pos": "Danh từ",
    "vi": "Giao thức định tuyến RPL",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao thức định tuyến rpl'.",
    "general_def": "Giao thức định tuyến RPL",
    "example": "Example in text: '... routing ...'"
  },
  "rpl": {
    "word": "rpl",
    "ipa": "/ˈrɪp.əl/",
    "pos": "Danh từ",
    "vi": "Giao thức định tuyến RPL cho LLN",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao thức định tuyến rpl cho lln'.",
    "general_def": "Giao thức định tuyến RPL cho LLN",
    "example": "Example in text: '... rpl ...'"
  },
  "rule": {
    "word": "rule",
    "ipa": "/ruːl/",
    "pos": "Danh từ",
    "vi": "Quy tắc thuật toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quy tắc thuật toán'.",
    "general_def": "Quy tắc thuật toán",
    "example": "Example in text: '... rule ...'"
  },
  "run": {
    "word": "run",
    "ipa": "/rʌn/",
    "pos": "Động từ/Danh từ",
    "vi": "Lần chạy thử nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lần chạy thử nghiệm'.",
    "general_def": "Lần chạy thử nghiệm",
    "example": "Example in text: '... run ...'"
  },
  "running": {
    "word": "running",
    "ipa": "/ˈrʌn.ɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang chạy, vận hành",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang chạy, vận hành'.",
    "general_def": "Đang chạy, vận hành",
    "example": "Example in text: '... running ...'"
  },
  "runs": {
    "word": "runs",
    "ipa": "/rʌnz/",
    "pos": "Danh từ",
    "vi": "Các lượt chạy mô phỏng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các lượt chạy mô phỏng'.",
    "general_def": "Các lượt chạy mô phỏng",
    "example": "Example in text: '... runs ...'"
  },
  "safe": {
    "word": "safe",
    "ipa": "/seɪf/",
    "pos": "Tính từ",
    "vi": "An toàn cho mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'an toàn cho mạng'.",
    "general_def": "An toàn cho mạng",
    "example": "Example in text: '... safe ...'"
  },
  "sample": {
    "word": "sample",
    "ipa": "/ˈsɑːm.pəl/",
    "pos": "Danh từ/Động từ",
    "vi": "Mẫu đo RTT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mẫu đo rtt'.",
    "general_def": "Mẫu đo RTT",
    "example": "Example in text: '... sample ...'"
  },
  "sampled": {
    "word": "sampled",
    "ipa": "/ˈsɑːm.pəld/",
    "pos": "Tính từ",
    "vi": "Mẫu được ghi nhận",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mẫu được ghi nhận'.",
    "general_def": "Mẫu được ghi nhận",
    "example": "Example in text: '... sampled ...'"
  },
  "samples": {
    "word": "samples",
    "ipa": "/ˈsɑːm.pəlz/",
    "pos": "Danh từ",
    "vi": "Các mẫu đo đạc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các mẫu đo đạc'.",
    "general_def": "Các mẫu đo đạc",
    "example": "Example in text: '... samples ...'"
  },
  "saturation": {
    "word": "saturation",
    "ipa": "/ˌsætʃ.ərˈeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Điểm bão hòa kênh truyền",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điểm bão hòa kênh truyền'.",
    "general_def": "Điểm bão hòa kênh truyền",
    "example": "Example in text: '... saturation ...'"
  },
  "save": {
    "word": "save",
    "ipa": "/seɪv/",
    "pos": "Động từ",
    "vi": "Tiết kiệm năng lượng / lưu trữ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiết kiệm năng lượng / lưu trữ'.",
    "general_def": "Tiết kiệm năng lượng / lưu trữ",
    "example": "Example in text: '... save ...'"
  },
  "saw": {
    "word": "saw",
    "ipa": "/sɔː/",
    "pos": "Danh từ",
    "vi": "Hình răng cưa (saw-like)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hình răng cưa (saw-like)'.",
    "general_def": "Hình răng cưa (saw-like)",
    "example": "Example in text: '... saw ...'"
  },
  "scale": {
    "word": "scale",
    "ipa": "/skeɪl/",
    "pos": "Danh từ/Động từ",
    "vi": "Quy mô, tỷ lệ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quy mô, tỷ lệ'.",
    "general_def": "Quy mô, tỷ lệ",
    "example": "Example in text: '... scale ...'"
  },
  "scaling": {
    "word": "scaling",
    "ipa": "/ˈskeɪ.lɪŋ/",
    "pos": "Danh từ",
    "vi": "Sự mở rộng tỷ lệ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự mở rộng tỷ lệ'.",
    "general_def": "Sự mở rộng tỷ lệ",
    "example": "Example in text: '... scaling ...'"
  },
  "scenario": {
    "word": "scenario",
    "ipa": "/sɪˈnɑː.ri.əʊ/",
    "pos": "Danh từ",
    "vi": "Kịch bản thử nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kịch bản thử nghiệm'.",
    "general_def": "Kịch bản thử nghiệm",
    "example": "Example in text: '... scenario ...'"
  },
  "scenarios": {
    "word": "scenarios",
    "ipa": "/sɪˈnɑː.ri.əʊz/",
    "pos": "Danh từ",
    "vi": "Các kịch bản thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các kịch bản thực nghiệm'.",
    "general_def": "Các kịch bản thực nghiệm",
    "example": "Example in text: '... scenarios ...'"
  },
  "scheme": {
    "word": "scheme",
    "ipa": "/skiːm/",
    "pos": "Danh từ",
    "vi": "Sơ đồ, phương thức giải thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sơ đồ, phương thức giải thuật'.",
    "general_def": "Sơ đồ, phương thức giải thuật",
    "example": "Example in text: '... scheme ...'"
  },
  "second": {
    "word": "second",
    "ipa": "/ˈsek.ənd/",
    "pos": "Số từ/Danh từ",
    "vi": "Thứ hai / giây (thời gian)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thứ hai / giây (thời gian)'.",
    "general_def": "Thứ hai / giây (thời gian)",
    "example": "Example in text: '... second ...'"
  },
  "seconds": {
    "word": "seconds",
    "ipa": "/ˈsek.əndz/",
    "pos": "Danh từ",
    "vi": "Các giây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các giây'.",
    "general_def": "Các giây",
    "example": "Example in text: '... seconds ...'"
  },
  "section": {
    "word": "section",
    "ipa": "/ˈsek.ʃən/",
    "pos": "Danh từ",
    "vi": "Phần, mục trong bài báo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phần, mục trong bài báo'.",
    "general_def": "Phần, mục trong bài báo",
    "example": "Example in text: '... section ...'"
  },
  "sections": {
    "word": "sections",
    "ipa": "/ˈsek.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các mục",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các mục'.",
    "general_def": "Các mục",
    "example": "Example in text: '... sections ...'"
  },
  "see": {
    "word": "see",
    "ipa": "/siː/",
    "pos": "Động từ",
    "vi": "Xem thấy (xem Hình)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'xem thấy (xem hình)'.",
    "general_def": "Xem thấy (xem Hình)",
    "example": "Example in text: '... see ...'"
  },
  "seen": {
    "word": "seen",
    "ipa": "/siːn/",
    "pos": "Tính từ",
    "vi": "Được thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được thấy'.",
    "general_def": "Được thấy",
    "example": "Example in text: '... seen ...'"
  },
  "seismic": {
    "word": "seismic",
    "ipa": "/ˈsaɪz.mɪk/",
    "pos": "Tính từ",
    "vi": "Địa chấn (cảm biến gia tốc phát hiện động đất)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'địa chấn (cảm biến gia tốc phát hiện động đất)'.",
    "general_def": "Địa chấn (cảm biến gia tốc phát hiện động đất)",
    "example": "Example in text: '... seismic ...'"
  },
  "select": {
    "word": "select",
    "ipa": "/sɪˈlekt/",
    "pos": "Động từ",
    "vi": "Lựa chọn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lựa chọn'.",
    "general_def": "Lựa chọn",
    "example": "Example in text: '... select ...'"
  },
  "selected": {
    "word": "selected",
    "ipa": "/sɪˈlek.tɪd/",
    "pos": "Tính từ",
    "vi": "Được lựa chọn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được lựa chọn'.",
    "general_def": "Được lựa chọn",
    "example": "Example in text: '... selected ...'"
  },
  "send": {
    "word": "send",
    "ipa": "/send/",
    "pos": "Động từ",
    "vi": "Gửi đi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gửi đi'.",
    "general_def": "Gửi đi",
    "example": "Example in text: '... send ...'"
  },
  "sender": {
    "word": "sender",
    "ipa": "/ˈsen.dər/",
    "pos": "Danh từ",
    "vi": "Phía gửi bản tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phía gửi bản tin'.",
    "general_def": "Phía gửi bản tin",
    "example": "Example in text: '... sender ...'"
  },
  "sending": {
    "word": "sending",
    "ipa": "/ˈsen.dɪŋ/",
    "pos": "Động từ",
    "vi": "Việc gửi bản tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'việc gửi bản tin'.",
    "general_def": "Việc gửi bản tin",
    "example": "Example in text: '... sending ...'"
  },
  "sends": {
    "word": "sends",
    "ipa": "/sendz/",
    "pos": "Động từ",
    "vi": "Gửi đi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'gửi đi'.",
    "general_def": "Gửi đi",
    "example": "Example in text: '... sends ...'"
  },
  "sense": {
    "word": "sense",
    "ipa": "/sens/",
    "pos": "Danh từ/Động từ",
    "vi": "Cảm nhận kênh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cảm nhận kênh'.",
    "general_def": "Cảm nhận kênh",
    "example": "Example in text: '... sense ...'"
  },
  "sensor": {
    "word": "sensor",
    "ipa": "/ˈsen.sər/",
    "pos": "Danh từ",
    "vi": "Cảm biến thu thập dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cảm biến thu thập dữ liệu'.",
    "general_def": "Cảm biến thu thập dữ liệu",
    "example": "Example in text: '... sensor ...'"
  },
  "sensors": {
    "word": "sensors",
    "ipa": "/ˈsen.sərz/",
    "pos": "Danh từ",
    "vi": "Các cảm biến đo đạc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cảm biến đo đạc'.",
    "general_def": "Các cảm biến đo đạc",
    "example": "Example in text: '... sensors ...'"
  },
  "sent": {
    "word": "sent",
    "ipa": "/sent/",
    "pos": "Động từ",
    "vi": "Đã gửi đi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã gửi đi'.",
    "general_def": "Đã gửi đi",
    "example": "Example in text: '... sent ...'"
  },
  "sequence": {
    "word": "sequence",
    "ipa": "/ˈsiː.kwəns/",
    "pos": "Danh từ",
    "vi": "Chuỗi tuần tự các sự kiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chuỗi tuần tự các sự kiện'.",
    "general_def": "Chuỗi tuần tự các sự kiện",
    "example": "Example in text: '... sequence ...'"
  },
  "series": {
    "word": "series",
    "ipa": "/ˈsɪə.riːz/",
    "pos": "Danh từ",
    "vi": "Một chuỗi liên tiếp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một chuỗi liên tiếp'.",
    "general_def": "Một chuỗi liên tiếp",
    "example": "Example in text: '... series ...'"
  },
  "served": {
    "word": "served",
    "ipa": "/sɜːvd/",
    "pos": "Tính từ",
    "vi": "Được phục vụ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được phục vụ'.",
    "general_def": "Được phục vụ",
    "example": "Example in text: '... served ...'"
  },
  "server": {
    "word": "server",
    "ipa": "/ˈsɜː.vər/",
    "pos": "Danh từ",
    "vi": "Phía máy chủ CoAP",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phía máy chủ coap'.",
    "general_def": "Phía máy chủ CoAP",
    "example": "Example in text: '... server ...'"
  },
  "servers": {
    "word": "servers",
    "ipa": "/ˈsɜː.vərz/",
    "pos": "Danh từ",
    "vi": "Các máy chủ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các máy chủ'.",
    "general_def": "Các máy chủ",
    "example": "Example in text: '... servers ...'"
  },
  "service": {
    "word": "service",
    "ipa": "/ˈsɜː.vɪs/",
    "pos": "Danh từ",
    "vi": "Dịch vụ mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dịch vụ mạng'.",
    "general_def": "Dịch vụ mạng",
    "example": "Example in text: '... service ...'"
  },
  "services": {
    "word": "services",
    "ipa": "/ˈsɜː.vɪ.sɪz/",
    "pos": "Danh từ",
    "vi": "Các dịch vụ đám mây",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các dịch vụ đám mây'.",
    "general_def": "Các dịch vụ đám mây",
    "example": "Example in text: '... services ...'"
  },
  "set": {
    "word": "set",
    "ipa": "/set/",
    "pos": "Động từ/Danh từ",
    "vi": "Thiết lập, tập hợp",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiết lập, tập hợp'.",
    "general_def": "Thiết lập, tập hợp",
    "example": "Example in text: '... set ...'"
  },
  "sets": {
    "word": "sets",
    "ipa": "/sets/",
    "pos": "Động từ/Danh từ",
    "vi": "Thiết lập các tham số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiết lập các tham số'.",
    "general_def": "Thiết lập các tham số",
    "example": "Example in text: '... sets ...'"
  },
  "setting": {
    "word": "setting",
    "ipa": "/ˈset.ɪŋ/",
    "pos": "Danh từ",
    "vi": "Cài đặt tham số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cài đặt tham số'.",
    "general_def": "Cài đặt tham số",
    "example": "Example in text: '... setting ...'"
  },
  "settings": {
    "word": "settings",
    "ipa": "/ˈset.ɪŋz/",
    "pos": "Danh từ",
    "vi": "Các cấu hình",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cấu hình'.",
    "general_def": "Các cấu hình",
    "example": "Example in text: '... settings ...'"
  },
  "settle": {
    "word": "settle",
    "ipa": "/ˈset.əl/",
    "pos": "Động từ",
    "vi": "Lắng dịu, ổn định lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lắng dịu, ổn định lại'.",
    "general_def": "Lắng dịu, ổn định lại",
    "example": "Example in text: '... settle ...'"
  },
  "setup": {
    "word": "setup",
    "ipa": "/ˈset.ʌp/",
    "pos": "Danh từ",
    "vi": "Mô hình thiết lập thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mô hình thiết lập thực nghiệm'.",
    "general_def": "Mô hình thiết lập thực nghiệm",
    "example": "Example in text: '... setup ...'"
  },
  "setups": {
    "word": "setups",
    "ipa": "/ˈset.ʌps/",
    "pos": "Danh từ",
    "vi": "Các cấu hình thử nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cấu hình thử nghiệm'.",
    "general_def": "Các cấu hình thử nghiệm",
    "example": "Example in text: '... setups ...'"
  },
  "severe": {
    "word": "severe",
    "ipa": "/sɪˈvɪər/",
    "pos": "Tính từ",
    "vi": "Nghiêm trọng khốc liệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nghiêm trọng khốc liệt'.",
    "general_def": "Nghiêm trọng khốc liệt",
    "example": "Example in text: '... severe ...'"
  },
  "severely": {
    "word": "severely",
    "ipa": "/sɪˈvɪə.li/",
    "pos": "Trạng từ",
    "vi": "Một cách trầm trọng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách trầm trọng'.",
    "general_def": "Một cách trầm trọng",
    "example": "Example in text: '... severely ...'"
  },
  "shared": {
    "word": "shared",
    "ipa": "/ʃeəd/",
    "pos": "Tính từ",
    "vi": "Dùng chung (môi trường vô tuyến dùng chung)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dùng chung (môi trường vô tuyến dùng chung)'.",
    "general_def": "Dùng chung (môi trường vô tuyến dùng chung)",
    "example": "Example in text: '... shared ...'"
  },
  "short": {
    "word": "short",
    "ipa": "/ʃɔːt/",
    "pos": "Tính từ",
    "vi": "Ngắn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngắn'.",
    "general_def": "Ngắn",
    "example": "Example in text: '... short ...'"
  },
  "shorter": {
    "word": "shorter",
    "ipa": "/ˈʃɔː.tər/",
    "pos": "Tính từ",
    "vi": "Ngắn hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngắn hơn'.",
    "general_def": "Ngắn hơn",
    "example": "Example in text: '... shorter ...'"
  },
  "shortcoming": {
    "word": "shortcoming",
    "ipa": "/ˈʃɔːtˌkʌm.ɪŋ/",
    "pos": "Danh từ",
    "vi": "Thiếu sót kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thiếu sót kỹ thuật'.",
    "general_def": "Thiếu sót kỹ thuật",
    "example": "Example in text: '... shortcoming ...'"
  },
  "shortcomings": {
    "word": "shortcomings",
    "ipa": "/ˈʃɔːtˌkʌm.ɪŋz/",
    "pos": "Danh từ",
    "vi": "Các khiếm khuyết của CoCoA+",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các khiếm khuyết của cocoa+'.",
    "general_def": "Các khiếm khuyết của CoCoA+",
    "example": "Example in text: '... shortcomings ...'"
  },
  "show": {
    "word": "show",
    "ipa": "/ʃəʊ/",
    "pos": "Động từ",
    "vi": "Chỉ ra, cho thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chỉ ra, cho thấy'.",
    "general_def": "Chỉ ra, cho thấy",
    "example": "Example in text: '... show ...'"
  },
  "showed": {
    "word": "showed",
    "ipa": "/ʃəʊd/",
    "pos": "Động từ",
    "vi": "Đã cho thấy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã cho thấy'.",
    "general_def": "Đã cho thấy",
    "example": "Example in text: '... showed ...'"
  },
  "showing": {
    "word": "showing",
    "ipa": "/ˈʃəʊ.ɪŋ/",
    "pos": "Động từ",
    "vi": "Đang chứng minh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang chứng minh'.",
    "general_def": "Đang chứng minh",
    "example": "Example in text: '... showing ...'"
  },
  "shown": {
    "word": "shown",
    "ipa": "/ʃəʊn/",
    "pos": "Tính từ",
    "vi": "Được hiển thị trong đồ thị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được hiển thị trong đồ thị'.",
    "general_def": "Được hiển thị trong đồ thị",
    "example": "Example in text: '... shown ...'"
  },
  "shows": {
    "word": "shows",
    "ipa": "/ʃəʊz/",
    "pos": "Động từ",
    "vi": "Thể hiện",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thể hiện'.",
    "general_def": "Thể hiện",
    "example": "Example in text: '... shows ...'"
  },
  "significant": {
    "word": "significant",
    "ipa": "/sɪɡˈnɪf.ɪ.kənt/",
    "pos": "Tính từ",
    "vi": "Đáng kể, có ý nghĩa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đáng kể, có ý nghĩa'.",
    "general_def": "Đáng kể, có ý nghĩa",
    "example": "Example in text: '... significant ...'"
  },
  "significantly": {
    "word": "significantly",
    "ipa": "/sɪɡˈnɪf.ɪ.kənt.li/",
    "pos": "Trạng từ",
    "vi": "Một cách rõ rệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách rõ rệt'.",
    "general_def": "Một cách rõ rệt",
    "example": "Example in text: '... significantly ...'"
  },
  "similar": {
    "word": "similar",
    "ipa": "/ˈsɪm.ɪ.lər/",
    "pos": "Tính từ",
    "vi": "Tương tự nhau",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương tự nhau'.",
    "general_def": "Tương tự nhau",
    "example": "Example in text: '... similar ...'"
  },
  "similarly": {
    "word": "similarly",
    "ipa": "/ˈsɪm.ɪ.lər.li/",
    "pos": "Trạng từ",
    "vi": "Tương tự như vậy",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tương tự như vậy'.",
    "general_def": "Tương tự như vậy",
    "example": "Example in text: '... similarly ...'"
  },
  "simple": {
    "word": "simple",
    "ipa": "/ˈsɪm.pəl/",
    "pos": "Tính từ",
    "vi": "Đơn giản",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đơn giản'.",
    "general_def": "Đơn giản",
    "example": "Example in text: '... simple ...'"
  },
  "simplicity": {
    "word": "simplicity",
    "ipa": "/sɪmˈplɪs.ə.ti/",
    "pos": "Danh từ",
    "vi": "Sự đơn giản thô sơ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đơn giản thô sơ'.",
    "general_def": "Sự đơn giản thô sơ",
    "example": "Example in text: '... simplicity ...'"
  },
  "simulate": {
    "word": "simulate",
    "ipa": "/ˈsɪm.jʊ.leɪt/",
    "pos": "Động từ",
    "vi": "Mô phỏng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mô phỏng'.",
    "general_def": "Mô phỏng",
    "example": "Example in text: '... simulate ...'"
  },
  "simulation": {
    "word": "simulation",
    "ipa": "/ˌsɪm.jʊˈleɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Quá trình mô phỏng Cooja",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quá trình mô phỏng cooja'.",
    "general_def": "Quá trình mô phỏng Cooja",
    "example": "Example in text: '... simulation ...'"
  },
  "simulations": {
    "word": "simulations",
    "ipa": "/ˌsɪm.jʊˈleɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các thử nghiệm mô phỏng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thử nghiệm mô phỏng'.",
    "general_def": "Các thử nghiệm mô phỏng",
    "example": "Example in text: '... simulations ...'"
  },
  "simultaneously": {
    "word": "simultaneously",
    "ipa": "/ˌsɪm.əlˈteɪ.ni.əs.li/",
    "pos": "Trạng từ",
    "vi": "Đồng thời tại một thời điểm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đồng thời tại một thời điểm'.",
    "general_def": "Đồng thời tại một thời điểm",
    "example": "Example in text: '... simultaneously ...'"
  },
  "since": {
    "word": "since",
    "ipa": "/sɪns/",
    "pos": "Liên từ",
    "vi": "Bởi vì / từ khi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bởi vì / từ khi'.",
    "general_def": "Bởi vì / từ khi",
    "example": "Example in text: '... since ...'"
  },
  "single": {
    "word": "single",
    "ipa": "/ˈsɪŋ.ɡəl/",
    "pos": "Tính từ",
    "vi": "Đơn lẻ, duy nhất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đơn lẻ, duy nhất'.",
    "general_def": "Đơn lẻ, duy nhất",
    "example": "Example in text: '... single ...'"
  },
  "size": {
    "word": "size",
    "ipa": "/saɪz/",
    "pos": "Danh từ",
    "vi": "Kích thước gói tin / dung lượng đệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kích thước gói tin / dung lượng đệm'.",
    "general_def": "Kích thước gói tin / dung lượng đệm",
    "example": "Example in text: '... size ...'"
  },
  "sluggish": {
    "word": "sluggish",
    "ipa": "/ˈslʌɡ.ɪʃ/",
    "pos": "Tính từ",
    "vi": "Chậm chạp phản ứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chậm chạp phản ứng'.",
    "general_def": "Chậm chạp phản ứng",
    "example": "Example in text: '... sluggish ...'"
  },
  "small": {
    "word": "small",
    "ipa": "/smɔːl/",
    "pos": "Tính từ",
    "vi": "Nhỏ bé",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhỏ bé'.",
    "general_def": "Nhỏ bé",
    "example": "Example in text: '... small ...'"
  },
  "smaller": {
    "word": "smaller",
    "ipa": "/ˈsmɔː.lər/",
    "pos": "Tính từ",
    "vi": "Nhỏ hơn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhỏ hơn'.",
    "general_def": "Nhỏ hơn",
    "example": "Example in text: '... smaller ...'"
  },
  "smart": {
    "word": "smart",
    "ipa": "/smɑːt/",
    "pos": "Tính từ",
    "vi": "Thông minh (thiết bị thông minh)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thông minh (thiết bị thông minh)'.",
    "general_def": "Thông minh (thiết bị thông minh)",
    "example": "Example in text: '... smart ...'"
  },
  "smooth": {
    "word": "smooth",
    "ipa": "/smuːð/",
    "pos": "Tính từ/Động từ",
    "vi": "Làm mịn dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'làm mịn dữ liệu'.",
    "general_def": "Làm mịn dữ liệu",
    "example": "Example in text: '... smooth ...'"
  },
  "smoothed": {
    "word": "smoothed",
    "ipa": "/smuːðd/",
    "pos": "Tính từ",
    "vi": "Đã được làm mịn (SRTT)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được làm mịn (srtt)'.",
    "general_def": "Đã được làm mịn (SRTT)",
    "example": "Example in text: '... smoothed ...'"
  },
  "smoothing": {
    "word": "smoothing",
    "ipa": "/ˈsmuː.ðɪŋ/",
    "pos": "Danh từ",
    "vi": "Cơ chế lọc trung bình làm mượt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cơ chế lọc trung bình làm mượt'.",
    "general_def": "Cơ chế lọc trung bình làm mượt",
    "example": "Example in text: '... smoothing ...'"
  },
  "software": {
    "word": "software",
    "ipa": "/ˈsɒft.weər/",
    "pos": "Danh từ",
    "vi": "Phần mềm hệ thống",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phần mềm hệ thống'.",
    "general_def": "Phần mềm hệ thống",
    "example": "Example in text: '... software ...'"
  },
  "solution": {
    "word": "solution",
    "ipa": "/səˈluː.ʃən/",
    "pos": "Danh từ",
    "vi": "Giải pháp kỹ thuật pCoCoA",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giải pháp kỹ thuật pcocoa'.",
    "general_def": "Giải pháp kỹ thuật pCoCoA",
    "example": "Example in text: '... solution ...'"
  },
  "solutions": {
    "word": "solutions",
    "ipa": "/səˈluː.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các phương án giải quyết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các phương án giải quyết'.",
    "general_def": "Các phương án giải quyết",
    "example": "Example in text: '... solutions ...'"
  },
  "solve": {
    "word": "solve",
    "ipa": "/sɒlv/",
    "pos": "Động từ",
    "vi": "Giải quyết bài toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giải quyết bài toán'.",
    "general_def": "Giải quyết bài toán",
    "example": "Example in text: '... solve ...'"
  },
  "some": {
    "word": "some",
    "ipa": "/sʌm/",
    "pos": "Lượng từ",
    "vi": "Một vài",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một vài'.",
    "general_def": "Một vài",
    "example": "Example in text: '... some ...'"
  },
  "source": {
    "word": "source",
    "ipa": "/sɔːs/",
    "pos": "Danh từ",
    "vi": "Nguồn phát lưu lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nguồn phát lưu lượng'.",
    "general_def": "Nguồn phát lưu lượng",
    "example": "Example in text: '... source ...'"
  },
  "sources": {
    "word": "sources",
    "ipa": "/sɔː.sɪz/",
    "pos": "Danh từ",
    "vi": "Các nguồn phát dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các nguồn phát dữ liệu'.",
    "general_def": "Các nguồn phát dữ liệu",
    "example": "Example in text: '... sources ...'"
  },
  "space": {
    "word": "space",
    "ipa": "/speɪs/",
    "pos": "Danh từ",
    "vi": "Không gian bộ nhớ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không gian bộ nhớ'.",
    "general_def": "Không gian bộ nhớ",
    "example": "Example in text: '... space ...'"
  },
  "specific": {
    "word": "specific",
    "ipa": "/spəˈsɪf.ɪk/",
    "pos": "Tính từ",
    "vi": "Cụ thể chuyên biệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cụ thể chuyên biệt'.",
    "general_def": "Cụ thể chuyên biệt",
    "example": "Example in text: '... specific ...'"
  },
  "specifically": {
    "word": "specifically",
    "ipa": "/spəˈsɪf.ɪ.kəl.i/",
    "pos": "Trạng từ",
    "vi": "Cụ thể là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cụ thể là'.",
    "general_def": "Cụ thể là",
    "example": "Example in text: '... specifically ...'"
  },
  "specification": {
    "word": "specification",
    "ipa": "/ˌspes.ɪ.fɪˈkeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Bản đặc tả tiêu chuẩn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bản đặc tả tiêu chuẩn'.",
    "general_def": "Bản đặc tả tiêu chuẩn",
    "example": "Example in text: '... specification ...'"
  },
  "specifications": {
    "word": "specifications",
    "ipa": "/ˌspes.ɪ.fɪˈkeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các thông số kỹ thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thông số kỹ thuật'.",
    "general_def": "Các thông số kỹ thuật",
    "example": "Example in text: '... specifications ...'"
  },
  "specified": {
    "word": "specified",
    "ipa": "/ˈspes.ɪ.faɪd/",
    "pos": "Tính từ",
    "vi": "Được đặc tả quy định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được đặc tả quy định'.",
    "general_def": "Được đặc tả quy định",
    "example": "Example in text: '... specified ...'"
  },
  "spike": {
    "word": "spike",
    "ipa": "/spaɪk/",
    "pos": "Danh từ",
    "vi": "Đỉnh nhọn đột biến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đỉnh nhọn đột biến'.",
    "general_def": "Đỉnh nhọn đột biến",
    "example": "Example in text: '... spike ...'"
  },
  "spikes": {
    "word": "spikes",
    "ipa": "/spaɪks/",
    "pos": "Danh từ",
    "vi": "Các đỉnh nhọn đột biến giả tạo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đỉnh nhọn đột biến giả tạo'.",
    "general_def": "Các đỉnh nhọn đột biến giả tạo",
    "example": "Example in text: '... spikes ...'"
  },
  "sporadic": {
    "word": "sporadic",
    "ipa": "/spəˈræd.ɪk/",
    "pos": "Tính từ",
    "vi": "Rải rác, thi thoảng xảy ra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'rải rác, thi thoảng xảy ra'.",
    "general_def": "Rải rác, thi thoảng xảy ra",
    "example": "Example in text: '... sporadic ...'"
  },
  "stability": {
    "word": "stability",
    "ipa": "/stəˈbɪl.ə.ti/",
    "pos": "Danh từ",
    "vi": "Tính ổn định của mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tính ổn định của mạng'.",
    "general_def": "Tính ổn định của mạng",
    "example": "Example in text: '... stability ...'"
  },
  "stabilize": {
    "word": "stabilize",
    "ipa": "/ˈsteɪ.bəl.aɪz/",
    "pos": "Động từ",
    "vi": "Ổn định mạng RPL",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ổn định mạng rpl'.",
    "general_def": "Ổn định mạng RPL",
    "example": "Example in text: '... stabilize ...'"
  },
  "stable": {
    "word": "stable",
    "ipa": "/ˈsteɪ.bəl/",
    "pos": "Tính từ",
    "vi": "Bền vững, ổn định",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bền vững, ổn định'.",
    "general_def": "Bền vững, ổn định",
    "example": "Example in text: '... stable ...'"
  },
  "stack": {
    "word": "stack",
    "ipa": "/stæk/",
    "pos": "Danh từ",
    "vi": "Ngăn xếp giao thức truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ngăn xếp giao thức truyền thông'.",
    "general_def": "Ngăn xếp giao thức truyền thông",
    "example": "Example in text: '... stack ...'"
  },
  "standard": {
    "word": "standard",
    "ipa": "/ˈstæn.dəd/",
    "pos": "Danh từ/Tính từ",
    "vi": "Tiêu chuẩn kỹ thuật IETF",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiêu chuẩn kỹ thuật ietf'.",
    "general_def": "Tiêu chuẩn kỹ thuật IETF",
    "example": "Example in text: '... standard ...'"
  },
  "standardization": {
    "word": "standardization",
    "ipa": "/ˌstæn.də.daɪˈzeɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Quá trình chuẩn hóa quốc tế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quá trình chuẩn hóa quốc tế'.",
    "general_def": "Quá trình chuẩn hóa quốc tế",
    "example": "Example in text: '... standardization ...'"
  },
  "starvation": {
    "word": "starvation",
    "ipa": "/stɑːˈveɪ.ʃən/",
    "pos": "Danh từ",
    "vi": "Hiện tượng bị bỏ đói băng thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiện tượng bị bỏ đói băng thông'.",
    "general_def": "Hiện tượng bị bỏ đói băng thông",
    "example": "Example in text: '... starvation ...'"
  },
  "state": {
    "word": "state",
    "ipa": "/steɪt/",
    "pos": "Danh từ",
    "vi": "Trạng thái mạng / biến trạng thái",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trạng thái mạng / biến trạng thái'.",
    "general_def": "Trạng thái mạng / biến trạng thái",
    "example": "Example in text: '... state ...'"
  },
  "states": {
    "word": "states",
    "ipa": "/steɪts/",
    "pos": "Danh từ",
    "vi": "Các trạng thái (4-state-strong)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các trạng thái (4-state-strong)'.",
    "general_def": "Các trạng thái (4-state-strong)",
    "example": "Example in text: '... states ...'"
  },
  "steady": {
    "word": "steady",
    "ipa": "/ˈsted.i/",
    "pos": "Tính từ",
    "vi": "Ổn định đều đặn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ổn định đều đặn'.",
    "general_def": "Ổn định đều đặn",
    "example": "Example in text: '... steady ...'"
  },
  "steep": {
    "word": "steep",
    "ipa": "/stiːp/",
    "pos": "Tính từ",
    "vi": "Dốc đứng, tăng dựng đứng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dốc đứng, tăng dựng đứng'.",
    "general_def": "Dốc đứng, tăng dựng đứng",
    "example": "Example in text: '... steep ...'"
  },
  "step": {
    "word": "step",
    "ipa": "/step/",
    "pos": "Danh từ",
    "vi": "Bước thực hiện thuật toán",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bước thực hiện thuật toán'.",
    "general_def": "Bước thực hiện thuật toán",
    "example": "Example in text: '... step ...'"
  },
  "steps": {
    "word": "steps",
    "ipa": "/steps/",
    "pos": "Danh từ",
    "vi": "Các bước giải thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bước giải thuật'.",
    "general_def": "Các bước giải thuật",
    "example": "Example in text: '... steps ...'"
  },
  "still": {
    "word": "still",
    "ipa": "/stɪl/",
    "pos": "Trạng từ",
    "vi": "Vẫn còn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vẫn còn'.",
    "general_def": "Vẫn còn",
    "example": "Example in text: '... still ...'"
  },
  "stop": {
    "word": "stop",
    "ipa": "/stɒp/",
    "pos": "Động từ/Danh từ",
    "vi": "Dừng lại (stop-and-wait)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dừng lại (stop-and-wait)'.",
    "general_def": "Dừng lại (stop-and-wait)",
    "example": "Example in text: '... stop ...'"
  },
  "stops": {
    "word": "stops",
    "ipa": "/stɒps/",
    "pos": "Động từ",
    "vi": "Dừng lại không tăng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dừng lại không tăng'.",
    "general_def": "Dừng lại không tăng",
    "example": "Example in text: '... stops ...'"
  },
  "store": {
    "word": "store",
    "ipa": "/stɔːr/",
    "pos": "Động từ",
    "vi": "Lưu giữ thông tin",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lưu giữ thông tin'.",
    "general_def": "Lưu giữ thông tin",
    "example": "Example in text: '... store ...'"
  },
  "stores": {
    "word": "stores",
    "ipa": "/stɔːrz/",
    "pos": "Động từ",
    "vi": "Lưu lại nhãn thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lưu lại nhãn thời gian'.",
    "general_def": "Lưu lại nhãn thời gian",
    "example": "Example in text: '... stores ...'"
  },
  "strategy": {
    "word": "strategy",
    "ipa": "/ˈstræt.ə.dʒi/",
    "pos": "Danh từ",
    "vi": "Chiến lược điều khiển",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chiến lược điều khiển'.",
    "general_def": "Chiến lược điều khiển",
    "example": "Example in text: '... strategy ...'"
  },
  "strong": {
    "word": "strong",
    "ipa": "/strɒŋ/",
    "pos": "Tính từ",
    "vi": "Mạnh (Strong RTO: tính từ gói không phát lại)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mạnh (strong rto: tính từ gói không phát lại)'.",
    "general_def": "Mạnh (Strong RTO: tính từ gói không phát lại)",
    "example": "Example in text: '... strong ...'"
  },
  "structure": {
    "word": "structure",
    "ipa": "/ˈstrʌk.tʃər/",
    "pos": "Danh từ",
    "vi": "Cấu trúc bài viết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cấu trúc bài viết'.",
    "general_def": "Cấu trúc bài viết",
    "example": "Example in text: '... structure ...'"
  },
  "structured": {
    "word": "structured",
    "ipa": "/ˈstrʌk.tʃəd/",
    "pos": "Tính từ",
    "vi": "Được cấu trúc hóa",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được cấu trúc hóa'.",
    "general_def": "Được cấu trúc hóa",
    "example": "Example in text: '... structured ...'"
  },
  "study": {
    "word": "study",
    "ipa": "/ˈstʌd.i/",
    "pos": "Danh từ/Động từ",
    "vi": "Nghiên cứu khoa học",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nghiên cứu khoa học'.",
    "general_def": "Nghiên cứu khoa học",
    "example": "Example in text: '... study ...'"
  },
  "subsequent": {
    "word": "subsequent",
    "ipa": "/ˈsʌb.sɪ.kwənt/",
    "pos": "Tính từ",
    "vi": "Kế tiếp sau đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kế tiếp sau đó'.",
    "general_def": "Kế tiếp sau đó",
    "example": "Example in text: '... subsequent ...'"
  },
  "subsequently": {
    "word": "subsequently",
    "ipa": "/ˈsʌb.sɪ.kwənt.li/",
    "pos": "Trạng từ",
    "vi": "Sau đó liền kề",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sau đó liền kề'.",
    "general_def": "Sau đó liền kề",
    "example": "Example in text: '... subsequently ...'"
  },
  "substantial": {
    "word": "substantial",
    "ipa": "/səbˈstæn.ʃəl/",
    "pos": "Tính từ",
    "vi": "Đáng kể, căn bản",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đáng kể, căn bản'.",
    "general_def": "Đáng kể, căn bản",
    "example": "Example in text: '... substantial ...'"
  },
  "succeeds": {
    "word": "succeeds",
    "ipa": "/səkˈsiːdz/",
    "pos": "Động từ",
    "vi": "Thành công đạt mục tiêu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thành công đạt mục tiêu'.",
    "general_def": "Thành công đạt mục tiêu",
    "example": "Example in text: '... succeeds ...'"
  },
  "such": {
    "word": "such",
    "ipa": "/sʌtʃ/",
    "pos": "Từ hạn định",
    "vi": "Như vậy, như thế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'như vậy, như thế'.",
    "general_def": "Như vậy, như thế",
    "example": "Example in text: '... such ...'"
  },
  "sudden": {
    "word": "sudden",
    "ipa": "/ˈsʌd.ən/",
    "pos": "Tính từ",
    "vi": "Đột ngột bất ngờ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đột ngột bất ngờ'.",
    "general_def": "Đột ngột bất ngờ",
    "example": "Example in text: '... sudden ...'"
  },
  "suffers": {
    "word": "suffers",
    "ipa": "/ˈsʌf.ərz/",
    "pos": "Động từ",
    "vi": "Chịu ảnh hưởng xấu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chịu ảnh hưởng xấu'.",
    "general_def": "Chịu ảnh hưởng xấu",
    "example": "Example in text: '... suffers ...'"
  },
  "sufficient": {
    "word": "sufficient",
    "ipa": "/səˈfɪʃ.ənt/",
    "pos": "Tính từ",
    "vi": "Đầy đủ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đầy đủ'.",
    "general_def": "Đầy đủ",
    "example": "Example in text: '... sufficient ...'"
  },
  "suitable": {
    "word": "suitable",
    "ipa": "/ˈsuː.tə.bəl/",
    "pos": "Tính từ",
    "vi": "Phù hợp cho IoT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phù hợp cho iot'.",
    "general_def": "Phù hợp cho IoT",
    "example": "Example in text: '... suitable ...'"
  },
  "summarize": {
    "word": "summarize",
    "ipa": "/ˈsʌm.ər.aɪz/",
    "pos": "Động từ",
    "vi": "Tóm tắt tổng kết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tóm tắt tổng kết'.",
    "general_def": "Tóm tắt tổng kết",
    "example": "Example in text: '... summarize ...'"
  },
  "summarized": {
    "word": "summarized",
    "ipa": "/ˈsʌm.ər.aɪzd/",
    "pos": "Tính từ",
    "vi": "Được tổng kết lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được tổng kết lại'.",
    "general_def": "Được tổng kết lại",
    "example": "Example in text: '... summarized ...'"
  },
  "summarizes": {
    "word": "summarizes",
    "ipa": "/ˈsʌm.ər.aɪ.zɪz/",
    "pos": "Động từ",
    "vi": "Tóm lược",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tóm lược'.",
    "general_def": "Tóm lược",
    "example": "Example in text: '... summarizes ...'"
  },
  "surge": {
    "word": "surge",
    "ipa": "/sɜːdʒ/",
    "pos": "Danh từ/Động từ",
    "vi": "Bùng phát tăng vọt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bùng phát tăng vọt'.",
    "general_def": "Bùng phát tăng vọt",
    "example": "Example in text: '... surge ...'"
  },
  "system": {
    "word": "system",
    "ipa": "/ˈsɪs.təm/",
    "pos": "Danh từ",
    "vi": "Hệ thống truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hệ thống truyền thông'.",
    "general_def": "Hệ thống truyền thông",
    "example": "Example in text: '... system ...'"
  },
  "systems": {
    "word": "systems",
    "ipa": "/ˈsɪs.təmz/",
    "pos": "Danh từ",
    "vi": "Các hệ thống IoT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hệ thống iot'.",
    "general_def": "Các hệ thống IoT",
    "example": "Example in text: '... systems ...'"
  },
  "table": {
    "word": "table",
    "ipa": "/ˈteɪ.bəl/",
    "pos": "Danh từ",
    "vi": "Bảng số liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bảng số liệu'.",
    "general_def": "Bảng số liệu",
    "example": "Example in text: '... table ...'"
  },
  "tailored": {
    "word": "tailored",
    "ipa": "/ˈteɪ.ləd/",
    "pos": "Tính từ",
    "vi": "Được may đo chuyên biệt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được may đo chuyên biệt'.",
    "general_def": "Được may đo chuyên biệt",
    "example": "Example in text: '... tailored ...'"
  },
  "take": {
    "word": "take",
    "ipa": "/teɪk/",
    "pos": "Động từ",
    "vi": "Lấy, áp dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lấy, áp dụng'.",
    "general_def": "Lấy, áp dụng",
    "example": "Example in text: '... take ...'"
  },
  "takes": {
    "word": "takes",
    "ipa": "/teɪks/",
    "pos": "Động từ",
    "vi": "Tiêu tốn thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tiêu tốn thời gian'.",
    "general_def": "Tiêu tốn thời gian",
    "example": "Example in text: '... takes ...'"
  },
  "task": {
    "word": "task",
    "ipa": "/tɑːsk/",
    "pos": "Danh từ",
    "vi": "Nhiệm vụ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiệm vụ'.",
    "general_def": "Nhiệm vụ",
    "example": "Example in text: '... task ...'"
  },
  "tcp": {
    "word": "tcp",
    "ipa": "/ˌtiː.siːˈpiː/",
    "pos": "Danh từ",
    "vi": "Giao thức điều khiển truyền vận TCP",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao thức điều khiển truyền vận tcp'.",
    "general_def": "Giao thức điều khiển truyền vận TCP",
    "example": "Example in text: '... tcp ...'"
  },
  "technique": {
    "word": "technique",
    "ipa": "/tekˈniːk/",
    "pos": "Danh từ",
    "vi": "Kỹ thuật chuyên môn",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kỹ thuật chuyên môn'.",
    "general_def": "Kỹ thuật chuyên môn",
    "example": "Example in text: '... technique ...'"
  },
  "techniques": {
    "word": "techniques",
    "ipa": "/tekˈniːks/",
    "pos": "Danh từ",
    "vi": "Các kỹ thuật giải thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các kỹ thuật giải thuật'.",
    "general_def": "Các kỹ thuật giải thuật",
    "example": "Example in text: '... techniques ...'"
  },
  "temperature": {
    "word": "temperature",
    "ipa": "/ˈtem.prə.tʃər/",
    "pos": "Danh từ",
    "vi": "Nhiệt độ môi trường đo đạc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhiệt độ môi trường đo đạc'.",
    "general_def": "Nhiệt độ môi trường đo đạc",
    "example": "Example in text: '... temperature ...'"
  },
  "term": {
    "word": "term",
    "ipa": "/tɜːm/",
    "pos": "Danh từ",
    "vi": "Thuật ngữ chuyên ngành",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thuật ngữ chuyên ngành'.",
    "general_def": "Thuật ngữ chuyên ngành",
    "example": "Example in text: '... term ...'"
  },
  "terms": {
    "word": "terms",
    "ipa": "/tɜːmz/",
    "pos": "Danh từ",
    "vi": "Các thuật ngữ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các thuật ngữ'.",
    "general_def": "Các thuật ngữ",
    "example": "Example in text: '... terms ...'"
  },
  "test": {
    "word": "test",
    "ipa": "/test/",
    "pos": "Danh từ/Động từ",
    "vi": "Kiểm thử thực nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kiểm thử thực nghiệm'.",
    "general_def": "Kiểm thử thực nghiệm",
    "example": "Example in text: '... test ...'"
  },
  "testbed": {
    "word": "testbed",
    "ipa": "/ˈtest.bed/",
    "pos": "Danh từ",
    "vi": "Testbed phần cứng thật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'testbed phần cứng thật'.",
    "general_def": "Testbed phần cứng thật",
    "example": "Example in text: '... testbed ...'"
  },
  "testbeds": {
    "word": "testbeds",
    "ipa": "/ˈtest.bedz/",
    "pos": "Danh từ",
    "vi": "Các hệ thống thử nghiệm thực tế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các hệ thống thử nghiệm thực tế'.",
    "general_def": "Các hệ thống thử nghiệm thực tế",
    "example": "Example in text: '... testbeds ...'"
  },
  "tested": {
    "word": "tested",
    "ipa": "/ˈtes.tɪd/",
    "pos": "Tính từ",
    "vi": "Đã được kiểm nghiệm",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được kiểm nghiệm'.",
    "general_def": "Đã được kiểm nghiệm",
    "example": "Example in text: '... tested ...'"
  },
  "tests": {
    "word": "tests",
    "ipa": "/tests/",
    "pos": "Danh từ",
    "vi": "Các bài kiểm tra",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bài kiểm tra'.",
    "general_def": "Các bài kiểm tra",
    "example": "Example in text: '... tests ...'"
  },
  "than": {
    "word": "than",
    "ipa": "/ðæn/",
    "pos": "Giới từ",
    "vi": "Hơn là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hơn là'.",
    "general_def": "Hơn là",
    "example": "Example in text: '... than ...'"
  },
  "that": {
    "word": "that",
    "ipa": "/ðæt/",
    "pos": "Đại từ/Liên từ",
    "vi": "Rằng, cái đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'rằng, cái đó'.",
    "general_def": "Rằng, cái đó",
    "example": "Example in text: '... that ...'"
  },
  "the": {
    "word": "the",
    "ipa": "/ðiː/",
    "pos": "Mạo từ",
    "vi": "Cái, những",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cái, những'.",
    "general_def": "Cái, những",
    "example": "Example in text: '... the ...'"
  },
  "their": {
    "word": "their",
    "ipa": "/ðeər/",
    "pos": "Tính từ sở hữu",
    "vi": "Của chúng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'của chúng'.",
    "general_def": "Của chúng",
    "example": "Example in text: '... their ...'"
  },
  "them": {
    "word": "them",
    "ipa": "/ðem/",
    "pos": "Đại từ",
    "vi": "Chúng nó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chúng nó'.",
    "general_def": "Chúng nó",
    "example": "Example in text: '... them ...'"
  },
  "then": {
    "word": "then",
    "ipa": "/ðen/",
    "pos": "Trạng từ",
    "vi": "Sau đó, khi đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sau đó, khi đó'.",
    "general_def": "Sau đó, khi đó",
    "example": "Example in text: '... then ...'"
  },
  "theory": {
    "word": "theory",
    "ipa": "/ˈθɪə.ri/",
    "pos": "Danh từ",
    "vi": "Lý thuyết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lý thuyết'.",
    "general_def": "Lý thuyết",
    "example": "Example in text: '... theory ...'"
  },
  "therefore": {
    "word": "therefore",
    "ipa": "/ˈðeə.fɔːr/",
    "pos": "Trạng từ",
    "vi": "Do đó, chính vì thế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'do đó, chính vì thế'.",
    "general_def": "Do đó, chính vì thế",
    "example": "Example in text: '... therefore ...'"
  },
  "these": {
    "word": "these",
    "ipa": "/ðiːz/",
    "pos": "Đại từ",
    "vi": "Những cái này",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'những cái này'.",
    "general_def": "Những cái này",
    "example": "Example in text: '... these ...'"
  },
  "they": {
    "word": "they",
    "ipa": "/ðeɪ/",
    "pos": "Đại từ",
    "vi": "Chúng nó, các tác giả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chúng nó, các tác giả'.",
    "general_def": "Chúng nó, các tác giả",
    "example": "Example in text: '... they ...'"
  },
  "thing": {
    "word": "thing",
    "ipa": "/θɪŋ/",
    "pos": "Danh từ",
    "vi": "Vật thể",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vật thể'.",
    "general_def": "Vật thể",
    "example": "Example in text: '... thing ...'"
  },
  "things": {
    "word": "things",
    "ipa": "/θɪŋz/",
    "pos": "Danh từ",
    "vi": "Vạn vật (Internet of Things)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'vạn vật (internet of things)'.",
    "general_def": "Vạn vật (Internet of Things)",
    "example": "Example in text: '... things ...'"
  },
  "this": {
    "word": "this",
    "ipa": "/ðɪs/",
    "pos": "Đại từ",
    "vi": "Cái này",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cái này'.",
    "general_def": "Cái này",
    "example": "Example in text: '... this ...'"
  },
  "those": {
    "word": "those",
    "ipa": "/ðəʊz/",
    "pos": "Đại từ",
    "vi": "Những cái đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'những cái đó'.",
    "general_def": "Những cái đó",
    "example": "Example in text: '... those ...'"
  },
  "though": {
    "word": "though",
    "ipa": "/ðəʊ/",
    "pos": "Liên từ",
    "vi": "Mặc dù",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mặc dù'.",
    "general_def": "Mặc dù",
    "example": "Example in text: '... though ...'"
  },
  "throughputs": {
    "word": "throughputs",
    "ipa": "/ˈθruː.pʊts/",
    "pos": "Danh từ",
    "vi": "Các mức thông lượng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các mức thông lượng'.",
    "general_def": "Các mức thông lượng",
    "example": "Example in text: '... throughputs ...'"
  },
  "thus": {
    "word": "thus",
    "ipa": "/ðʌs/",
    "pos": "Trạng từ",
    "vi": "Như vậy, do đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'như vậy, do đó'.",
    "general_def": "Như vậy, do đó",
    "example": "Example in text: '... thus ...'"
  },
  "time": {
    "word": "time",
    "ipa": "/taɪm/",
    "pos": "Danh từ",
    "vi": "Thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thời gian'.",
    "general_def": "Thời gian",
    "example": "Example in text: '... time ...'"
  },
  "timed": {
    "word": "timed",
    "ipa": "/taɪmd/",
    "pos": "Tính từ",
    "vi": "Đúng hạn, chuẩn thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đúng hạn, chuẩn thời gian'.",
    "general_def": "Đúng hạn, chuẩn thời gian",
    "example": "Example in text: '... timed ...'"
  },
  "timeout": {
    "word": "timeout",
    "ipa": "/ˈtaɪm.aʊt/",
    "pos": "Danh từ",
    "vi": "Hết hạn thời gian chờ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hết hạn thời gian chờ'.",
    "general_def": "Hết hạn thời gian chờ",
    "example": "Example in text: '... timeout ...'"
  },
  "timeouts": {
    "word": "timeouts",
    "ipa": "/ˈtaɪm.aʊts/",
    "pos": "Danh từ",
    "vi": "Các đợt hết giờ RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các đợt hết giờ rto'.",
    "general_def": "Các đợt hết giờ RTO",
    "example": "Example in text: '... timeouts ...'"
  },
  "timer": {
    "word": "timer",
    "ipa": "/ˈtaɪ.mər/",
    "pos": "Danh từ",
    "vi": "Bộ đếm thời gian RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ đếm thời gian rto'.",
    "general_def": "Bộ đếm thời gian RTO",
    "example": "Example in text: '... timer ...'"
  },
  "timers": {
    "word": "timers",
    "ipa": "/ˈtaɪ.mərz/",
    "pos": "Danh từ",
    "vi": "Các bộ đếm thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bộ đếm thời gian'.",
    "general_def": "Các bộ đếm thời gian",
    "example": "Example in text: '... timers ...'"
  },
  "times": {
    "word": "times",
    "ipa": "/taɪmz/",
    "pos": "Danh từ",
    "vi": "Số lần / các khoảng thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'số lần / các khoảng thời gian'.",
    "general_def": "Số lần / các khoảng thời gian",
    "example": "Example in text: '... times ...'"
  },
  "timestamp": {
    "word": "timestamp",
    "ipa": "/ˈtaɪm.stæmp/",
    "pos": "Danh từ",
    "vi": "Nhãn thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nhãn thời gian'.",
    "general_def": "Nhãn thời gian",
    "example": "Example in text: '... timestamp ...'"
  },
  "to": {
    "word": "to",
    "ipa": "/tuː/",
    "pos": "Giới từ",
    "vi": "Đến, để",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đến, để'.",
    "general_def": "Đến, để",
    "example": "Example in text: '... to ...'"
  },
  "too": {
    "word": "too",
    "ipa": "/tuː/",
    "pos": "Trạng từ",
    "vi": "Quá mức (RTO too close to RTT)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'quá mức (rto too close to rtt)'.",
    "general_def": "Quá mức (RTO too close to RTT)",
    "example": "Example in text: '... too ...'"
  },
  "topology": {
    "word": "topology",
    "ipa": "/təˈpɒl.ə.dʒi/",
    "pos": "Danh từ",
    "vi": "Cấu trúc topo mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cấu trúc topo mạng'.",
    "general_def": "Cấu trúc topo mạng",
    "example": "Example in text: '... topology ...'"
  },
  "towards": {
    "word": "towards",
    "ipa": "/təˈwɔːdz/",
    "pos": "Giới từ",
    "vi": "Hướng về phía đích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hướng về phía đích'.",
    "general_def": "Hướng về phía đích",
    "example": "Example in text: '... towards ...'"
  },
  "trade": {
    "word": "trade",
    "ipa": "/treɪd/",
    "pos": "Danh từ",
    "vi": "Sự đánh đổi (trade-off)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đánh đổi (trade-off)'.",
    "general_def": "Sự đánh đổi (trade-off)",
    "example": "Example in text: '... trade ...'"
  },
  "traditional": {
    "word": "traditional",
    "ipa": "/trəˈdɪʃ.ən.əl/",
    "pos": "Tính từ",
    "vi": "Truyền thống",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'truyền thống'.",
    "general_def": "Truyền thống",
    "example": "Example in text: '... traditional ...'"
  },
  "traffic": {
    "word": "traffic",
    "ipa": "/ˈtræf.ɪk/",
    "pos": "Danh từ",
    "vi": "Lưu lượng truyền thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lưu lượng truyền thông'.",
    "general_def": "Lưu lượng truyền thông",
    "example": "Example in text: '... traffic ...'"
  },
  "transaction": {
    "word": "transaction",
    "ipa": "/trænˈzæk.ʃən/",
    "pos": "Danh từ",
    "vi": "Giao dịch trọn vẹn (Request-ACK)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao dịch trọn vẹn (request-ack)'.",
    "general_def": "Giao dịch trọn vẹn (Request-ACK)",
    "example": "Example in text: '... transaction ...'"
  },
  "transactions": {
    "word": "transactions",
    "ipa": "/trænˈzæk.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các giao dịch trao đổi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các giao dịch trao đổi'.",
    "general_def": "Các giao dịch trao đổi",
    "example": "Example in text: '... transactions ...'"
  },
  "transceiver": {
    "word": "transceiver",
    "ipa": "/trænˈsiː.vər/",
    "pos": "Danh từ",
    "vi": "Bộ thu phát sóng vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bộ thu phát sóng vô tuyến'.",
    "general_def": "Bộ thu phát sóng vô tuyến",
    "example": "Example in text: '... transceiver ...'"
  },
  "transceivers": {
    "word": "transceivers",
    "ipa": "/trænˈsiː.vərz/",
    "pos": "Danh từ",
    "vi": "Các bộ thu phát vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các bộ thu phát vô tuyến'.",
    "general_def": "Các bộ thu phát vô tuyến",
    "example": "Example in text: '... transceivers ...'"
  },
  "transmission": {
    "word": "transmission",
    "ipa": "/trænzˈmɪʃ.ən/",
    "pos": "Danh từ",
    "vi": "Lượt truyền phát tín hiệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lượt truyền phát tín hiệu'.",
    "general_def": "Lượt truyền phát tín hiệu",
    "example": "Example in text: '... transmission ...'"
  },
  "transmissions": {
    "word": "transmissions",
    "ipa": "/trænzˈmɪʃ.ənz/",
    "pos": "Danh từ",
    "vi": "Các lần phát sóng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các lần phát sóng'.",
    "general_def": "Các lần phát sóng",
    "example": "Example in text: '... transmissions ...'"
  },
  "transmit": {
    "word": "transmit",
    "ipa": "/trænzˈmɪt/",
    "pos": "Động từ",
    "vi": "Phát sóng dữ liệu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phát sóng dữ liệu'.",
    "general_def": "Phát sóng dữ liệu",
    "example": "Example in text: '... transmit ...'"
  },
  "transmitted": {
    "word": "transmitted",
    "ipa": "/trænzˈmɪt.ɪd/",
    "pos": "Tính từ",
    "vi": "Đã được phát đi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được phát đi'.",
    "general_def": "Đã được phát đi",
    "example": "Example in text: '... transmitted ...'"
  },
  "transmitting": {
    "word": "transmitting",
    "ipa": "/trænzˈmɪt.ɪŋ/",
    "pos": "Động từ",
    "vi": "Đang truyền phát",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang truyền phát'.",
    "general_def": "Đang truyền phát",
    "example": "Example in text: '... transmitting ...'"
  },
  "transport": {
    "word": "transport",
    "ipa": "/ˈtræn.spɔːt/",
    "pos": "Động từ/Danh từ",
    "vi": "Truyền vận tầng Transport",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'truyền vận tầng transport'.",
    "general_def": "Truyền vận tầng Transport",
    "example": "Example in text: '... transport ...'"
  },
  "transported": {
    "word": "transported",
    "ipa": "/trænˈspɔː.tɪd/",
    "pos": "Tính từ",
    "vi": "Được truyền vận tải",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được truyền vận tải'.",
    "general_def": "Được truyền vận tải",
    "example": "Example in text: '... transported ...'"
  },
  "tree": {
    "word": "tree",
    "ipa": "/triː/",
    "pos": "Danh từ",
    "vi": "Cấu trúc cây định tuyến DODAG",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cấu trúc cây định tuyến dodag'.",
    "general_def": "Cấu trúc cây định tuyến DODAG",
    "example": "Example in text: '... tree ...'"
  },
  "trigger": {
    "word": "trigger",
    "ipa": "/ˈtrɪɡ.ər/",
    "pos": "Động từ/Danh từ",
    "vi": "Kích hoạt phát sinh",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kích hoạt phát sinh'.",
    "general_def": "Kích hoạt phát sinh",
    "example": "Example in text: '... trigger ...'"
  },
  "triggered": {
    "word": "triggered",
    "ipa": "/ˈtrɪɡ.əd/",
    "pos": "Tính từ",
    "vi": "Bị kích hoạt",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'bị kích hoạt'.",
    "general_def": "Bị kích hoạt",
    "example": "Example in text: '... triggered ...'"
  },
  "triggers": {
    "word": "triggers",
    "ipa": "/ˈtrɪɡ.ərz/",
    "pos": "Động từ",
    "vi": "Kích hoạt truyền lại",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kích hoạt truyền lại'.",
    "general_def": "Kích hoạt truyền lại",
    "example": "Example in text: '... triggers ...'"
  },
  "tuning": {
    "word": "tuning",
    "ipa": "/ˈtʃuː.nɪŋ/",
    "pos": "Danh từ",
    "vi": "Tinh chỉnh tham số giải thuật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tinh chỉnh tham số giải thuật'.",
    "general_def": "Tinh chỉnh tham số giải thuật",
    "example": "Example in text: '... tuning ...'"
  },
  "two": {
    "word": "two",
    "ipa": "/tuː/",
    "pos": "Số từ",
    "vi": "Hai kịch bản",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hai kịch bản'.",
    "general_def": "Hai kịch bản",
    "example": "Example in text: '... two ...'"
  },
  "type": {
    "word": "type",
    "ipa": "/taɪp/",
    "pos": "Danh từ",
    "vi": "Kiểu bản tin (CON, NON, ACK, RST)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'kiểu bản tin (con, non, ack, rst)'.",
    "general_def": "Kiểu bản tin (CON, NON, ACK, RST)",
    "example": "Example in text: '... type ...'"
  },
  "typical": {
    "word": "typical",
    "ipa": "/ˈtɪp.ɪ.kəl/",
    "pos": "Tính từ",
    "vi": "Điển hình",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'điển hình'.",
    "general_def": "Điển hình",
    "example": "Example in text: '... typical ...'"
  },
  "typically": {
    "word": "typically",
    "ipa": "/ˈtɪp.ɪ.kəl.i/",
    "pos": "Trạng từ",
    "vi": "Thông thường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thông thường'.",
    "general_def": "Thông thường",
    "example": "Example in text: '... typically ...'"
  },
  "udp": {
    "word": "udp",
    "ipa": "/ˌjuː.diːˈpiː/",
    "pos": "Danh từ",
    "vi": "Giao thức Datagram Người dùng UDP",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giao thức datagram người dùng udp'.",
    "general_def": "Giao thức Datagram Người dùng UDP",
    "example": "Example in text: '... udp ...'"
  },
  "unambiguous": {
    "word": "unambiguous",
    "ipa": "/ˌʌn.æmˈbɪɡ.ju.əs/",
    "pos": "Tính từ",
    "vi": "Rõ ràng, không bị nhập nhằng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'rõ ràng, không bị nhập nhằng'.",
    "general_def": "Rõ ràng, không bị nhập nhằng",
    "example": "Example in text: '... unambiguous ...'"
  },
  "under": {
    "word": "under",
    "ipa": "/ˈʌn.dər/",
    "pos": "Giới từ",
    "vi": "Dưới điều kiện mạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'dưới điều kiện mạng'.",
    "general_def": "Dưới điều kiện mạng",
    "example": "Example in text: '... under ...'"
  },
  "underestimate": {
    "word": "underestimate",
    "ipa": "/ˌʌn.dərˈes.tɪ.meɪt/",
    "pos": "Động từ",
    "vi": "Ước lượng non RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ước lượng non rto'.",
    "general_def": "Ước lượng non RTO",
    "example": "Example in text: '... underestimate ...'"
  },
  "underestimates": {
    "word": "underestimates",
    "ipa": "/ˌʌn.dərˈes.tɪ.meɪts/",
    "pos": "Động từ",
    "vi": "Ước lượng thấp hơn RTT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'ước lượng thấp hơn rtt'.",
    "general_def": "Ước lượng thấp hơn RTT",
    "example": "Example in text: '... underestimates ...'"
  },
  "underperform": {
    "word": "underperform",
    "ipa": "/ˌʌn.də.pəˈfɔːm/",
    "pos": "Động từ",
    "vi": "Hiệu năng kém hơn mong đợi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiệu năng kém hơn mong đợi'.",
    "general_def": "Hiệu năng kém hơn mong đợi",
    "example": "Example in text: '... underperform ...'"
  },
  "understand": {
    "word": "understand",
    "ipa": "/ˌʌn.dəˈstænd/",
    "pos": "Động từ",
    "vi": "Hiểu rõ cơ chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hiểu rõ cơ chế'.",
    "general_def": "Hiểu rõ cơ chế",
    "example": "Example in text: '... understand ...'"
  },
  "unfit": {
    "word": "unfit",
    "ipa": "/ʌnˈfɪt/",
    "pos": "Tính từ",
    "vi": "Không phù hợp cho CoAP",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không phù hợp cho coap'.",
    "general_def": "Không phù hợp cho CoAP",
    "example": "Example in text: '... unfit ...'"
  },
  "unit": {
    "word": "unit",
    "ipa": "/ˈjuː.nɪt/",
    "pos": "Danh từ",
    "vi": "Đơn vị đo",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đơn vị đo'.",
    "general_def": "Đơn vị đo",
    "example": "Example in text: '... unit ...'"
  },
  "unnecessarily": {
    "word": "unnecessarily",
    "ipa": "/ʌnˈnes.ə.ser.əl.i/",
    "pos": "Trạng từ",
    "vi": "Một cách không cần thiết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách không cần thiết'.",
    "general_def": "Một cách không cần thiết",
    "example": "Example in text: '... unnecessarily ...'"
  },
  "unnecessary": {
    "word": "unnecessary",
    "ipa": "/ʌnˈnes.ə.ser.i/",
    "pos": "Tính từ",
    "vi": "Thừa thãi, không cần thiết",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thừa thãi, không cần thiết'.",
    "general_def": "Thừa thãi, không cần thiết",
    "example": "Example in text: '... unnecessary ...'"
  },
  "until": {
    "word": "until",
    "ipa": "/ənˈtɪl/",
    "pos": "Giới từ",
    "vi": "Cho đến khi nhận ACK",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cho đến khi nhận ack'.",
    "general_def": "Cho đến khi nhận ACK",
    "example": "Example in text: '... until ...'"
  },
  "up": {
    "word": "up",
    "ipa": "/ʌp/",
    "pos": "Giới từ/Trạng từ",
    "vi": "Lên tới",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lên tới'.",
    "general_def": "Lên tới",
    "example": "Example in text: '... up ...'"
  },
  "update": {
    "word": "update",
    "ipa": "/ʌpˈdeɪt/",
    "pos": "Động từ/Danh từ",
    "vi": "Cập nhật RTO",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cập nhật rto'.",
    "general_def": "Cập nhật RTO",
    "example": "Example in text: '... update ...'"
  },
  "updated": {
    "word": "updated",
    "ipa": "/ʌpˈdeɪ.tɪd/",
    "pos": "Tính từ",
    "vi": "Đã được cập nhật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã được cập nhật'.",
    "general_def": "Đã được cập nhật",
    "example": "Example in text: '... updated ...'"
  },
  "updates": {
    "word": "updates",
    "ipa": "/ʌpˈdeɪts/",
    "pos": "Danh từ/Động từ",
    "vi": "Các cập nhật mẫu RTT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các cập nhật mẫu rtt'.",
    "general_def": "Các cập nhật mẫu RTT",
    "example": "Example in text: '... updates ...'"
  },
  "updating": {
    "word": "updating",
    "ipa": "/ʌpˈdeɪ.tɪŋ/",
    "pos": "Động từ",
    "vi": "Việc cập nhật",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'việc cập nhật'.",
    "general_def": "Việc cập nhật",
    "example": "Example in text: '... updating ...'"
  },
  "uplink": {
    "word": "uplink",
    "ipa": "/ˈʌp.lɪŋk/",
    "pos": "Danh từ",
    "vi": "Đường lên (từ thiết bị về server)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đường lên (từ thiết bị về server)'.",
    "general_def": "Đường lên (từ thiết bị về server)",
    "example": "Example in text: '... uplink ...'"
  },
  "usage": {
    "word": "usage",
    "ipa": "/ˈjuː.sɪdʒ/",
    "pos": "Danh từ",
    "vi": "Mức tiêu thụ bộ nhớ",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'mức tiêu thụ bộ nhớ'.",
    "general_def": "Mức tiêu thụ bộ nhớ",
    "example": "Example in text: '... usage ...'"
  },
  "use": {
    "word": "use",
    "ipa": "/juːz/",
    "pos": "Động từ/Danh từ",
    "vi": "Sử dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sử dụng'.",
    "general_def": "Sử dụng",
    "example": "Example in text: '... use ...'"
  },
  "used": {
    "word": "used",
    "ipa": "/juːzd/",
    "pos": "Tính từ",
    "vi": "Được sử dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'được sử dụng'.",
    "general_def": "Được sử dụng",
    "example": "Example in text: '... used ...'"
  },
  "useful": {
    "word": "useful",
    "ipa": "/ˈjuːs.fəl/",
    "pos": "Tính từ",
    "vi": "Hữu ích",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'hữu ích'.",
    "general_def": "Hữu ích",
    "example": "Example in text: '... useful ...'"
  },
  "using": {
    "word": "using",
    "ipa": "/ˈjuː.zɪŋ/",
    "pos": "Động từ",
    "vi": "Sử dụng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sử dụng'.",
    "general_def": "Sử dụng",
    "example": "Example in text: '... using ...'"
  },
  "usual": {
    "word": "usual",
    "ipa": "/ˈjuː.ʒu.əl/",
    "pos": "Tính từ",
    "vi": "Thông thường",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thông thường'.",
    "general_def": "Thông thường",
    "example": "Example in text: '... usual ...'"
  },
  "valuable": {
    "word": "valuable",
    "ipa": "/ˈvæl.jʊ.bəl/",
    "pos": "Tính từ",
    "vi": "Có giá trị",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'có giá trị'.",
    "general_def": "Có giá trị",
    "example": "Example in text: '... valuable ...'"
  },
  "value": {
    "word": "value",
    "ipa": "/ˈvæl.juː/",
    "pos": "Danh từ",
    "vi": "Giá trị tham số",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'giá trị tham số'.",
    "general_def": "Giá trị tham số",
    "example": "Example in text: '... value ...'"
  },
  "values": {
    "word": "values",
    "ipa": "/ˈvæl.juːz/",
    "pos": "Danh từ",
    "vi": "Các giá trị đo đạc",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các giá trị đo đạc'.",
    "general_def": "Các giá trị đo đạc",
    "example": "Example in text: '... values ...'"
  },
  "vanish": {
    "word": "vanish",
    "ipa": "/ˈvæn.ɪʃ/",
    "pos": "Động từ",
    "vi": "Triệt tiêu về 0",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'triệt tiêu về 0'.",
    "general_def": "Triệt tiêu về 0",
    "example": "Example in text: '... vanish ...'"
  },
  "vanishes": {
    "word": "vanishes",
    "ipa": "/ˈvæn.ɪʃ.ɪz/",
    "pos": "Động từ",
    "vi": "Biến mất, triệt tiêu (RTTVAR)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'biến mất, triệt tiêu (rttvar)'.",
    "general_def": "Biến mất, triệt tiêu (RTTVAR)",
    "example": "Example in text: '... vanishes ...'"
  },
  "variable": {
    "word": "variable",
    "ipa": "/ˈveə.ri.ə.bəl/",
    "pos": "Danh từ/Tính từ",
    "vi": "Biến số / khả biến (VBF)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'biến số / khả biến (vbf)'.",
    "general_def": "Biến số / khả biến (VBF)",
    "example": "Example in text: '... variable ...'"
  },
  "variance": {
    "word": "variance",
    "ipa": "/ˈveə.ri.əns/",
    "pos": "Danh từ",
    "vi": "Phương sai biến thiên RTTVAR",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phương sai biến thiên rttvar'.",
    "general_def": "Phương sai biến thiên RTTVAR",
    "example": "Example in text: '... variance ...'"
  },
  "variations": {
    "word": "variations",
    "ipa": "/ˌveə.riˈeɪ.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các biến động của RTT",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các biến động của rtt'.",
    "general_def": "Các biến động của RTT",
    "example": "Example in text: '... variations ...'"
  },
  "variety": {
    "word": "variety",
    "ipa": "/vəˈraɪ.ə.ti/",
    "pos": "Danh từ",
    "vi": "Sự đa dạng",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'sự đa dạng'.",
    "general_def": "Sự đa dạng",
    "example": "Example in text: '... variety ...'"
  },
  "varies": {
    "word": "varies",
    "ipa": "/ˈveə.riz/",
    "pos": "Động từ",
    "vi": "Biến thiên theo thời gian",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'biến thiên theo thời gian'.",
    "general_def": "Biến thiên theo thời gian",
    "example": "Example in text: '... varies ...'"
  },
  "vary": {
    "word": "vary",
    "ipa": "/ˈveə.ri/",
    "pos": "Động từ",
    "vi": "Thay đổi biến thiên",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thay đổi biến thiên'.",
    "general_def": "Thay đổi biến thiên",
    "example": "Example in text: '... vary ...'"
  },
  "varying": {
    "word": "varying",
    "ipa": "/ˈveə.ri.ɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang biến đổi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang biến đổi'.",
    "general_def": "Đang biến đổi",
    "example": "Example in text: '... varying ...'"
  },
  "version": {
    "word": "version",
    "ipa": "/ˈvɜː.ʃən/",
    "pos": "Danh từ",
    "vi": "Phiên bản CoCoA+",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'phiên bản cocoa+'.",
    "general_def": "Phiên bản CoCoA+",
    "example": "Example in text: '... version ...'"
  },
  "versions": {
    "word": "versions",
    "ipa": "/ˈvɜː.ʃənz/",
    "pos": "Danh từ",
    "vi": "Các phiên bản",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các phiên bản'.",
    "general_def": "Các phiên bản",
    "example": "Example in text: '... versions ...'"
  },
  "very": {
    "word": "very",
    "ipa": "/ˈver.i/",
    "pos": "Trạng từ",
    "vi": "Rất",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'rất'.",
    "general_def": "Rất",
    "example": "Example in text: '... very ...'"
  },
  "via": {
    "word": "via",
    "ipa": "/ˈvaɪə/",
    "pos": "Giới từ",
    "vi": "Thông qua cơ chế",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'thông qua cơ chế'.",
    "general_def": "Thông qua cơ chế",
    "example": "Example in text: '... via ...'"
  },
  "waiting": {
    "word": "waiting",
    "ipa": "/ˈweɪ.tɪŋ/",
    "pos": "Tính từ",
    "vi": "Chờ đợi (thời gian chờ)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chờ đợi (thời gian chờ)'.",
    "general_def": "Chờ đợi (thời gian chờ)",
    "example": "Example in text: '... waiting ...'"
  },
  "was": {
    "word": "was",
    "ipa": "/wɒz/",
    "pos": "Động từ to be",
    "vi": "Đã là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã là'.",
    "general_def": "Đã là",
    "example": "Example in text: '... was ...'"
  },
  "waste": {
    "word": "waste",
    "ipa": "/weɪst/",
    "pos": "Động từ/Danh từ",
    "vi": "Lãng phí băng thông",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'lãng phí băng thông'.",
    "general_def": "Lãng phí băng thông",
    "example": "Example in text: '... waste ...'"
  },
  "weak": {
    "word": "weak",
    "ipa": "/wiːk/",
    "pos": "Tính từ",
    "vi": "Yếu (Weak RTO: tính từ gói có truyền lại)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'yếu (weak rto: tính từ gói có truyền lại)'.",
    "general_def": "Yếu (Weak RTO: tính từ gói có truyền lại)",
    "example": "Example in text: '... weak ...'"
  },
  "weight": {
    "word": "weight",
    "ipa": "/weɪt/",
    "pos": "Danh từ",
    "vi": "Trọng số trong công thức RTOoverall",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trọng số trong công thức rtooverall'.",
    "general_def": "Trọng số trong công thức RTOoverall",
    "example": "Example in text: '... weight ...'"
  },
  "weights": {
    "word": "weights",
    "ipa": "/weɪts/",
    "pos": "Danh từ",
    "vi": "Các trọng số alpha",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các trọng số alpha'.",
    "general_def": "Các trọng số alpha",
    "example": "Example in text: '... weights ...'"
  },
  "well": {
    "word": "well",
    "ipa": "/wel/",
    "pos": "Trạng từ/Tính từ",
    "vi": "Tốt, hiệu quả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'tốt, hiệu quả'.",
    "general_def": "Tốt, hiệu quả",
    "example": "Example in text: '... well ...'"
  },
  "were": {
    "word": "were",
    "ipa": "/wɜːr/",
    "pos": "Động từ to be",
    "vi": "Đã là",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đã là'.",
    "general_def": "Đã là",
    "example": "Example in text: '... were ...'"
  },
  "what": {
    "word": "what",
    "ipa": "/wɒt/",
    "pos": "Đại từ",
    "vi": "Cái gì",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cái gì'.",
    "general_def": "Cái gì",
    "example": "Example in text: '... what ...'"
  },
  "when": {
    "word": "when",
    "ipa": "/wen/",
    "pos": "Liên từ",
    "vi": "Khi nào, khi mà",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'khi nào, khi mà'.",
    "general_def": "Khi nào, khi mà",
    "example": "Example in text: '... when ...'"
  },
  "where": {
    "word": "where",
    "ipa": "/weər/",
    "pos": "Trạng từ",
    "vi": "Nơi mà, trong đó",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'nơi mà, trong đó'.",
    "general_def": "Nơi mà, trong đó",
    "example": "Example in text: '... where ...'"
  },
  "whereas": {
    "word": "whereas",
    "ipa": "/weərˈæz/",
    "pos": "Liên từ",
    "vi": "Trong khi đó (trái lại)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trong khi đó (trái lại)'.",
    "general_def": "Trong khi đó (trái lại)",
    "example": "Example in text: '... whereas ...'"
  },
  "which": {
    "word": "which",
    "ipa": "/wɪtʃ/",
    "pos": "Đại từ",
    "vi": "Cái mà, điều mà",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'cái mà, điều mà'.",
    "general_def": "Cái mà, điều mà",
    "example": "Example in text: '... which ...'"
  },
  "while": {
    "word": "while",
    "ipa": "/waɪl/",
    "pos": "Liên từ",
    "vi": "Trong khi",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'trong khi'.",
    "general_def": "Trong khi",
    "example": "Example in text: '... while ...'"
  },
  "wireless": {
    "word": "wireless",
    "ipa": "/ˈwaɪə.ləs/",
    "pos": "Tính từ",
    "vi": "Không dây, vô tuyến",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không dây, vô tuyến'.",
    "general_def": "Không dây, vô tuyến",
    "example": "Example in text: '... wireless ...'"
  },
  "with": {
    "word": "with",
    "ipa": "/wɪð/",
    "pos": "Giới từ",
    "vi": "Với",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'với'.",
    "general_def": "Với",
    "example": "Example in text: '... with ...'"
  },
  "without": {
    "word": "without",
    "ipa": "/wɪˈðaʊt/",
    "pos": "Giới từ",
    "vi": "Không có (không kiểm soát tốc độ)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'không có (không kiểm soát tốc độ)'.",
    "general_def": "Không có (không kiểm soát tốc độ)",
    "example": "Example in text: '... without ...'"
  },
  "work": {
    "word": "work",
    "ipa": "/wɜːk/",
    "pos": "Danh từ/Động từ",
    "vi": "Công trình nghiên cứu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'công trình nghiên cứu'.",
    "general_def": "Công trình nghiên cứu",
    "example": "Example in text: '... work ...'"
  },
  "working": {
    "word": "working",
    "ipa": "/ˈwɜː.kɪŋ/",
    "pos": "Tính từ",
    "vi": "Đang hoạt động (Working Group)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đang hoạt động (working group)'.",
    "general_def": "Đang hoạt động (Working Group)",
    "example": "Example in text: '... working ...'"
  },
  "works": {
    "word": "works",
    "ipa": "/wɜːks/",
    "pos": "Danh từ",
    "vi": "Các công trình nghiên cứu",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'các công trình nghiên cứu'.",
    "general_def": "Các công trình nghiên cứu",
    "example": "Example in text: '... works ...'"
  },
  "wrongly": {
    "word": "wrongly",
    "ipa": "/ˈrɒŋ.li/",
    "pos": "Trạng từ",
    "vi": "Một cách sai lệch",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'một cách sai lệch'.",
    "general_def": "Một cách sai lệch",
    "example": "Example in text: '... wrongly ...'"
  },
  "yields": {
    "word": "yields",
    "ipa": "/jiːldz/",
    "pos": "Động từ",
    "vi": "Đem lại kết quả",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'đem lại kết quả'.",
    "general_def": "Đem lại kết quả",
    "example": "Example in text: '... yields ...'"
  },
  "zigbee": {
    "word": "zigbee",
    "ipa": "/ˈzɪɡ.biː/",
    "pos": "Danh từ",
    "vi": "Chuẩn mạng cảm biến ZigBee (802.15.4)",
    "telecom_def": "Trong văn cảnh bài báo Kỹ Thuật Truyền Thông: Được dùng để diễn đạt 'chuẩn mạng cảm biến zigbee (802.15.4)'.",
    "general_def": "Chuẩn mạng cảm biến ZigBee (802.15.4)",
    "example": "Example in text: '... zigbee ...'"
  }
};
