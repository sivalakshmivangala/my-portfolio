import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";



export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 bg-indigo-500/10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.9, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Hello, It's Me<br />
            <span className="font-bold">vangala sivalakshmi</span>
          </h1>

          <p className="mt-2 text-gray-400 tracking-wide">
  Full Stack Developer • Based India 🇮🇳
</p>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            I build clean, scalable, and thoughtfully designed web applications.
            I enjoy working across the stack and refining details that improve
            user experience.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            {/* Projects */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            {/* resume */}
            <a
              href="/resume.pdf"
              download
              className="
                group relative overflow-hidden
                px-6 py-3 rounded-xl
                border border-white/20
                text-gray-200 font-medium
                flex items-center gap-3
                transition
                hover:border-white
              "
            >
              {/* background slide */}
              <span
                className="
                  absolute inset-0
                  bg-white
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300
                "
              />

              {/* content */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition">
                <FaFileDownload />
                view resume
              </span>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 text-2xl text-gray-400">
            <a
              href="https://github.com/sivalakshmivangala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sivalakshmi-vangala/"
              target="_blank"
              rel="noopener noreferrer"
              title="View my Linkedin Profile"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — PHOTO WITH PARALLAX + ALWAYS-ON GLOW */}
        <motion.div
          initial={{ opacity: 1, scale: 0.92 }}
          animate={{ opacity: 2, scale: 1 }}
          transition={{ duration: 2.1, ease: "easeOut" }}
          className="flex justify-center relative -translate-y-6 md:-translate-y-10"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.currentTarget.style.setProperty("--x", `${x / 20}px`);
            e.currentTarget.style.setProperty("--y", `${y / 20}px`);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.setProperty("--x", `0px`);
            e.currentTarget.style.setProperty("--y", `0px`);
          }}
          style={{
            transform: "translate(var(--x), var(--y))",
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* MATCHED AMBIENT GLOW */}
          <div
            className="
              absolute -z-20
              rounded-3xl
              bg-gradient-to-tr
              from-indigo-500/35
              via-pink-500/30
              to-yellow-400/25
              blur-[160px]
              opacity-90
              relative z-50
              p-2 rounded-full bg-cyan-500
              
            "
          />

          {/* PROFILE IMAGE */}
          <img
  src="/pic.jpg"
  alt="My Photo"
  className="w-85 h-85 rounded-full object-cover border-8 border-gray shadow-xl border-gray-400"
/>
        </motion.div>

      </div>
    </section>
  );
}
