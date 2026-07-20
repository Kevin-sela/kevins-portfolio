import { ArrowUpRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const posts = [
  "How I Cut AWS Costs by 30% with EC2, S3, and Lambda Optimization",
  "Building Real-Time Analytics APIs with Python Microservices",
  "Why .NET and React Worked for a High-Throughput ERP System",
] as const;

export function ArticlesPreview() {
  return (
    <section id="articles" className="section">
      <div className="container">
        <SectionHeading eyebrow="Technical Writing" title="How I Explain the Systems I Build" />
        <div className="articles-grid">
          {posts.map((post) => (
            <article
              key={post}
              className="article-preview-card"
            >
              <BookOpen className="h-5 w-5 text-sky-300" />
              <h3>{post}</h3>
              <p>I use these topics to show how I think through cost, architecture, tradeoffs, and delivery.</p>
              <a href="#contact">
                Ask me about this <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
