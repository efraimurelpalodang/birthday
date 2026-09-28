import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from "react-router-dom";

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const timerRef = useRef(null);

  const totalPages = 4;

  // Membuka sampul
  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    }
  };

  // Halaman berikutnya
  const nextPage = (e) => {
    e.stopPropagation();

    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Halaman sebelumnya
  const prevPage = (e) => {
    e.stopPropagation();

    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px] h-screen flex flex-col items-center justify-center">

        {/* =========================
            BUKU
        ========================= */}
        <motion.div
          initial={{
            opacity: 0,
            visibility: "hidden",
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <div
            id="card"
            className={`${cardClass} ${
              currentPage > 0 ? "page-two" : ""
            }`}
            onClick={cardClass === "" ? toggleCard : undefined}
          >

            {/* =========================
                BAGIAN DALAM BUKU
            ========================= */}
            <div id="card-inside">
              <div className="book-page">

                <AnimatePresence mode="wait">

                  {/* =========================
                      HALAMAN 1
                  ========================= */}
                  {currentPage === 0 && (
                    <motion.div
                      key="page-1"
                      className="book-content"
                      initial={{
                        opacity: 0,
                        rotateY: -10,
                      }}
                      animate={{
                        opacity: 1,
                        rotateY: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotateY: 10,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                    >
                      <div style={{ padding: '2rem' }}>
                        <p>
                          Selamat Ulang Tahun, John Doe!
                        </p>

                        <p>
                          haiii aloOooo selamattt ulanggg tahunnn
                          sayangggkuuuu cintakuuuuu duniakuuuuu
                          adekk kecilkuuuuu priiincesss kecilkuuuu.
                        </p>

                        <p>
                          ciee udaa delapann belass tahunnn niiee
                          yeee ?!?! wishhh u all the best yawww,
                          semogaaa citaa-citaaa yangg adeee
                          inginnnkannn bisaaa terwujuddd yaaa,
                          panjangggg umurrr sehatttt selaluuuu
                          anndd berbaktii kepadaaa oranggg tuaa,
                          aminnn.
                        </p>
                      </div>

                      <button
                        className="page-next"
                        onClick={nextPage}
                        style={{ marginLeft: '10rem' }}
                      >
                        Halaman berikutnya →
                      </button>
                    </motion.div>
                  )}

                  {/* =========================
                      HALAMAN 2
                  ========================= */}
                  {currentPage === 1 && (
                    <motion.div
                      key="page-2"
                      className="book-content"
                      initial={{
                        opacity: 0,
                        rotateY: 10,
                      }}
                      animate={{
                        opacity: 1,
                        rotateY: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotateY: -10,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                    >
                      <div style={{ padding: '2rem' }}>
                        <p>
                          semangatttt terusss yaaa,
                          jangannnnn pernaaaa putussss asaaa
                          untukkk mengejarrrr impiann addeee,
                          abanggg selaluuu dukunggg andd supporttt
                          adekk.
                        </p>

                        <p>
                          semogaa dii umurrr inii sayangg
                          keberkahannn penuuu buatt adeeekkk,
                          jangannn lupaaa bersyukurrrr yaaa.
                        </p>

                        <p>
                          abanggg selaluuu dukunggg andd supporttt
                          adekk dalam apapun yang adek jalani.
                          Tetap semangatttt dan jangan pernah
                          menyerah untuk mengejar semua impian
                          adek.
                        </p>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <button
                          className="page-prev"
                          onClick={prevPage}
                        >
                          ← Sebelumnya
                        </button>

                        <button
                          className="page-next"
                          onClick={nextPage}
                        >
                          Berikutnya →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================
                      HALAMAN 3
                  ========================= */}
                  {currentPage === 2 && (
                    <motion.div
                      key="page-3"
                      className="book-content"
                      initial={{
                        opacity: 0,
                        rotateY: 10,
                      }}
                      animate={{
                        opacity: 1,
                        rotateY: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotateY: -10,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                    >
                      <div style={{ padding: '2rem' }}> 
                        <p>
                          terimakasiii udaaaa mauuu sabarrrr
                          samaaa abanggg, makasiii jugaa udaaa
                          sayanggg kee abangg hwhehee.
                        </p>

                        <p>
                          semogaa tahunn inii akann lebii baikk
                          dariii adeekkk yangg sebelumnya.
                          Intinyaaa dariii abanggg, adekk bisaaa
                          menjadi orangg yangg sukses, orangg
                          yangg bisaa membanggakannn orangg tuaa.
                        </p>

                        <p>
                          pokonyaa abanggg selaluuu doa'innn
                          yangg terbaikk buatt dedeee.
                          Sayangggg happyyy birthdayyy yaaa,
                          im so proud of u.
                        </p>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '-1.5rem' }}>
                        <button
                          className="page-prev"
                          onClick={prevPage}
                        >
                          ← Sebelumnya
                        </button>

                        <button
                          className="page-next"
                          onClick={nextPage}
                        >
                          Berikutnya →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================
                      HALAMAN 4
                  ========================= */}
                  {currentPage === 3 && (
                    <motion.div
                      key="page-4"
                      className="book-content"
                      initial={{
                        opacity: 0,
                        rotateY: 10,
                      }}
                      animate={{
                        opacity: 1,
                        rotateY: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotateY: -10,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                    >
                      <div style={{ padding: '2rem', paddingBottom: '0' }}>
                        <p>
                          hadiaaanyaaaa nantii kaloo ketemuu
                          abangg yaa, sekaliii lagii happyyy
                          birthdayyy.
                        </p>

                        <p>
                          semangatttt trusss buatt ngejalaninnnn
                          harii hariinyaaa, i always support u.
                        </p>

                        <p>
                          semogaaaa jugaaa abanggg bisaaa
                          nemeninnn adeekk terusss diii thee
                          nextt birthdayyy, okeeiiiii cantiikk? 😘
                        </p>

                        <p>
                          love u more princessss abangggg.
                        </p>
                      </div>

                      <p className="signed">
                        Abang Farel
                      </p>

                      <div>
                        <button
                          onClick={prevPage}
                          style={{ paddingRight: '1px', marginTop: '-1.7rem', display: 'block', paddingLeft: '1.8rem' }}
                        >
                          ← Sebelumnya
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            </div>

            {/* =========================
                SAMPUL DEPAN
            ========================= */}
            <div id="card-front">
              <div className="wrap">
                <h1>Selamat Ulang Tahun!</h1>
              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================
            TOMBOL LANJUT
        ========================= */}
        {cardClass === "open-fully" && currentPage === 3 && (
          <motion.div
            className="mt-8"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Link to="/cake">
              <span className="next-link"
              style={{ paddingRight: '1px', marginTop: '-5rem', display: 'block', paddingLeft: '1.8rem' }}>
                Lanjut <span>→</span>
              </span>
            </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default Card;
