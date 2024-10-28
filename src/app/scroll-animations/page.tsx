"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f00", "#0f0"],
  );

  return (
    <div>
      <motion.div
        style={{ scaleX, backgroundColor }}
        className="fixed top-0 h-6 w-full origin-left bg-red-600"
      />
      <div className="p-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="pt-2 indent-2 first:pt-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eveniet
            consectetur nam deleniti inventore libero quia expedita quidem
            voluptate enim, magni aspernatur tempora doloremque tenetur.
            Temporibus eum eligendi nihil doloribus. Totam, ut assumenda labore
            cum rerum dolores numquam inventore eaque similique sapiente omnis
            nulla. Iure tempore non temporibus provident reiciendis repellendus
            maiores, velit earum, at minima, aperiam fugit impedit. Nihil. Animi
            saepe fuga totam dignissimos blanditiis iure. Architecto iste
            tempore dolorum omnis pariatur impedit quasi eius, adipisci sequi
            consequuntur quas? Excepturi ad eos corrupti veniam ducimus,
            eligendi dolorum recusandae facilis. Exercitationem officiis maiores
            modi totam nam distinctio deleniti velit molestiae ab, magnam labore
            dolores veniam omnis mollitia tempore vel reprehenderit facere
            maxime. Itaque inventore nulla enim suscipit est commodi nam.
            Cupiditate, dolorem ipsum ducimus labore dolores odit similique
            natus provident voluptatibus voluptas quibusdam iure totam saepe ex
            itaque fuga. Alias saepe velit similique blanditiis incidunt neque
            repellendus recusandae, facilis quisquam. Ad quam aliquid doloremque
            voluptates, laboriosam qui ex soluta dolore optio obcaecati neque,
            esse fugit ipsam ipsum repudiandae, ullam quos! Totam minima ullam
            eius quos sit labore eos voluptas rerum.
          </p>
        ))}
      </div>
    </div>
  );
}
