export default function DetailCard({ title, description }) {
    return (
      <div className="bg-slate-600"> 
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }