type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
};
const ApplicationCard = ({
  title,
  description,
  imageUrl,
  linkUrl,
}: CardProps) => {
  return (
    <article className="card">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener no referrer"
        aria-aria-label={`Link to ${title}`}
      >
        <img src={imageUrl} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </article>
  );
};

export default ApplicationCard;
