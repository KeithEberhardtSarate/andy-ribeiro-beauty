/* <BlogPreview /> — prévia de posts com capas (ImageSlot placeholder). */
import ImageSlot from "@/components/ui/ImageSlot";
import Button from "@/components/ui/Button";
import { POSTS } from "@/lib/content";

export default function BlogPreview() {
  return (
    <section className="blogpv" id="blog">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="label">Do blog</div>
            <h2>
              Conteúdo que
              <br />
              ensina<span style={{ color: "var(--pink)" }}>.</span>
            </h2>
          </div>
          <Button href="#" variant="ghost">
            Ver todos os posts
          </Button>
        </div>

        <div className="post-grid">
          {POSTS.map((post) => (
            <a className="post" key={post.id} href={post.href}>
              <div className={post.cover ? "thumb slot-frame has-img" : "thumb slot-frame"}>
                <ImageSlot src={post.cover} alt={post.title} placeholder="Capa do post" />
              </div>
              <div className="cat">
                <span>{post.cat}</span>
                <span className="date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
