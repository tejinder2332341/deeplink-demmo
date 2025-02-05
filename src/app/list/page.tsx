import { useEffect } from "react";

const ListPage = () => {
  useEffect(() => {
    const appScheme = "your-app-scheme://list";  // Replace with your actual app scheme
    const appStoreURL = "https://apps.apple.com/in/app/silver-talkies/id1576719437";

    // Create an invisible iframe to attempt opening the app
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appScheme;
    document.body.appendChild(iframe);

    // Fallback: If the user doesn't have the app, redirect to the App Store
    setTimeout(() => {
      window.location.href = appStoreURL;
    }, 1500);

    // Cleanup: remove iframe after the effect
    return () => {
      document.body.removeChild(iframe);
    };
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
