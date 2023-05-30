import React from "react"
import styles from "./home.module.css"
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import {useSelector} from "react-redux"

function Home() {
    const isLanguageVietnamese = useSelector((state) => state.language.isVietnamese)

    return (
        <main className={styles.page}>
            <section className={styles["page-section"]}>
                <section className={styles["first-section"]}>
                    <div className={styles.banner}>
                        <div className={styles["banner-body"]}>
                            <h2 className={styles["banner-title"]}>
                                {isLanguageVietnamese
                                    ? "Làm cho việc học trở nên tuyệt vời!"
                                    : "Make learning awesome!"}
                            </h2>
                            <p className={styles["banner-description"]}>
                                {isLanguageVietnamese
                                    ? "Kahoot! cung cấp quá trình học tập hấp dẫn cho hàng tỷ người."
                                    : "Quizzly delivers engaging learning to billions"}
                            </p>
                            <button className={styles["banner-button"]}>
                                <a href="/">
                                    {isLanguageVietnamese
                                        ? "Đăng kí miễn phí!"
                                        : "Sign up for free"}
                                </a>
                            </button>
                        </div>
                        <img src={img1} alt="" className={styles["banner-image"]}/>
                    </div>
                    <div className={styles.banner}>
                        <div className={styles["banner-body"]}>
                            <h2 className={styles["banner-title"]}>
                                {isLanguageVietnamese ? "Làm cho nhóm của bạn trở thành những người thuyết trình siêu sao" : "Make your team superstar presenters"}
                            </h2>
                            <p className={styles["banner-description"]}>
                                {isLanguageVietnamese
                                    ? "Thiết lập toàn bộ nhóm của bạn để cung cấp các bài thuyết trình tuyệt vời với Kahoot! 360 Spirit, gói tốt nhất của chúng tôi chỉ từ $ 16 mỗi tháng."
                                    : "Set your whole team up to deliver awesome presentations with Kahoot! 360 Spirit, our best plan from only $16 per month."}
                            </p>
                            <button className={styles["banner-button"]}>
                                <a href="/">
                                    {isLanguageVietnamese
                                        ? "Mua ngay"
                                        : "Buy now"}
                                </a>
                            </button>
                        </div>
                        <img src={img2} alt="" className={styles["banner-image"]}/>
                    </div>
                </section>
                <section className={styles["second-section"]}>
                    <div className={styles["section-background"]}></div>
                    <div className={styles.info}>
                        <div className={styles["info-body"]}>
                            <h2 className={styles["info-title"]}>
                                {isLanguageVietnamese ? "Kahoot! ở trường" : "Kahoot! at school"}
                            </h2>
                            <p className={styles["info-description"]}>
                                {isLanguageVietnamese
                                    ? "Tương tác nhóm và đào tạo từ xa cho giáo viên và học sinh."
                                    : "Engaging group and distance learning for teachers and students."}
                            </p>
                            <a href="/" className={styles["info-link"]}>
                                {isLanguageVietnamese ? "Tìm hiểu thêm" : "Learn more"} &gt;
                            </a>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles["info-body"]}>
                            <h2 className={styles["info-title"]}>
                                {isLanguageVietnamese ? "Kahoot! tại nơi làm việc" : "Kahoot! at work"}
                            </h2>
                            <p className={styles["info-description"]}>
                                {isLanguageVietnamese
                                    ? "Cung cấp đào tạo, thuyết trình, cuộc họp và sự kiện trực tiếp hoặc trên bất kỳ nền tảng hội nghị truyền hình nào."
                                    : "Deliver training, presentations, meetings and events in-person or on any video conferencing platform."}
                            </p>
                            <a href="/" className={styles["info-link"]}>
                                {isLanguageVietnamese ? "Tìm hiểu thêm" : "Learn more"} &gt;
                            </a>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles["info-body"]}>
                            <h2 className={styles["info-title"]}>
                                {isLanguageVietnamese ? "Kahoot! ở nhà" : "Kahoot! at home"}
                            </h2>
                            <p className={styles["info-description"]}>
                                {isLanguageVietnamese
                                    ? "Ứng dụng và trò chơi học tập cho gia đình hoặc học tập tại nhà."
                                    : "Learning Apps and games for family fun or home study."}
                            </p>
                            <a href="/" className={styles["info-link"]}>
                                {isLanguageVietnamese ? "Tìm hiểu thêm" : "Learn more"} &gt;
                            </a>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles["info-body"]}>
                            <h2 className={styles["info-title"]}>
                                {isLanguageVietnamese ? "Kahoot! Học viện" : "Kahoot! Academy"}
                            </h2>
                            <p className={styles["info-description"]}>
                                {isLanguageVietnamese
                                    ? "Khám phá nội dung và tham gia một trong những cộng đồng nhà giáo dục lớn nhất thế giới."
                                    : "Explore content and join one of the world’s largest educator communities."}
                            </p>
                            <a href="/" className={styles["info-link"]}>
                                {isLanguageVietnamese ? "Tìm hiểu thêm" : "Learn more"} &gt;
                            </a>
                        </div>
                    </div>
                </section>
                <section className={styles["third-section"]}>
                    <h1>
                        {isLanguageVietnamese
                            ? "Kahoot! làm việc như thế nào?"
                            : "How does Kahoot! work?"}
                    </h1>
                    <div className={styles["card-container"]}>
                        <div className={styles.card}>
                            <img src={img3} alt=""/>
                            <div className={styles["card-body"]}>
                                <h1>{isLanguageVietnamese ? "Tạo trò chơi mới" : "Create new game"}</h1>
                                <p>
                                    {isLanguageVietnamese
                                        ? "Chỉ mất vài phút để tạo một trò chơi học tập hoặc câu đố đố vui về bất kỳ chủ đề nào, bằng bất kỳ ngôn ngữ nào."
                                        : "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."}
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={img4} alt=""/>
                            <div className={styles["card-body"]}>
                                <h1>
                                    {isLanguageVietnamese
                                        ? "Lưu trữ hoặc chia sẻ"
                                        : "Host or share"}
                                </h1>
                                <p>
                                    {isLanguageVietnamese
                                        ? "Tổ chức trò chơi trực tiếp với các câu hỏi trên màn hình lớn hoặc chia sẻ trò chơi với những người chơi từ xa."
                                        : "Host a live game with questions on a big screen or share a game with remote players."}
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={img5} alt=""/>
                            <div className={styles["card-body"]}>
                                <h1>{isLanguageVietnamese ? "Tham gia" : "Play"}</h1>
                                <p>
                                    {isLanguageVietnamese
                                        ? "Trò chơi tiếp tục! Tham gia kahoot bằng mã PIN do máy chủ cung cấp và trả lời các câu hỏi trên thiết bị của bạn."
                                        : "Game on! Join a kahoot with a PIN provided by the host and answer questions on your device."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["card-button"]}>
                        {isLanguageVietnamese
                            ? "Chơi Kahoot! để xem nó hoạt động như thế nào!"
                            : "Play Kahoot! to see how it works! Explore our featured games!"}{" "}
                        &nbsp;
                        <a href="/">
                            {isLanguageVietnamese
                                ? "Khám phá các câu hỏi công khai của chúng tôi"
                                : "Explore our public quizzes"}
                        </a>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Home
