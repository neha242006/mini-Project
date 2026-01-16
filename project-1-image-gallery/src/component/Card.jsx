

function Card({ channelName , isVerified ,subscribers,videos}) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "10px" }}>
      
      <h2>
        {channelName}
        {isVerified && <span style={{ color: "blue" }}> ✔️</span>}
      </h2>

      <p>Subscribers: {subscribers}</p>
      <p>Videos: {videos}</p>

    </div>
  );
}

export default Card;



