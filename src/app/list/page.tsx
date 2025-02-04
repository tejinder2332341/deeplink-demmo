import { useEffect } from "react";

const ListPage = () => {
  useEffect(() => {
    // Try opening the app
    window.location.href = "your-app-scheme://list";

    // If the app is not installed, redirect to the App Store after 2 seconds
    setTimeout(() => {
      window.location.href = "https://apps.apple.com/in/app/silver-talkies/id1576719437";
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Redirecting...</h2>
      <p>
        If nothing happens,{" "}
        <a href="https://apps.apple.com/in/app/silver-talkies/id1576719437">
          click here
        </a>{" "}
        to download the app.
      </p>
    </div>
  );
};

export default ListPage;
