import { useEffect } from "react";

const ListPage = () => {
  useEffect(() => {
    // Replace with your actual URL scheme.
    const appScheme = "silver-talkies://list";
    // App Store fallback URL for Silver Talkies.
    const appStoreURL = "https://apps.apple.com/in/app/silver-talkies/id1576719437";

    // 1. Create an invisible iframe to open the app scheme
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appScheme;
    document.body.appendChild(iframe);

    // 2. Fallback to App Store after 1.5 seconds if the app is not installed
    const timer = setTimeout(() => {
      window.location.href = appStoreURL;
    }, 1500);

    // Cleanup: remove iframe & timer
    return () => {
      document.body.removeChild(iframe);
      clearTimeout(timer);
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
