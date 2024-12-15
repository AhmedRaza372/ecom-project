
import Image from "next/image";

export default function BlueHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#252B42",
        height: "58px",
        padding: "0 24px",
      }}
    >
      {/* Left section: Contact Info */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          <Image
            src="/images/icn-settings icn-xs.png"
            alt="Phone Icon"
            width={16}
            height={16}
          />
          <span>(225) 555-0118</span>
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            borderRadius: "5px",
          }}
        >
          <Image
            src="/images/icn-settings icn-xs-1.png"
            alt="Mail Icon"
            width={16}
            height={16}
          />
          <span>michelle.rivera@example.com</span>
        </button>
      </div>

      {/* Center section: Follow Us */}
      <h6
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "600",
          fontSize: "14px",
          color: "#fff",
        }}
      >
        Follow Us and get a chance to win 80% off
      </h6>

      {/* Right section: Social Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h6
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            color: "#fff",
          }}
        >
          Follow Us:
        </h6>
        <div style={{ display: "flex", gap: "10px" }}>
          <Image
            src="/images/icn-settings icn-xs-2.png"
            alt="Instagram"
            width={16}
            height={16}
          />
          <Image
            src="/images/icn-settings icn-xs-3.png"
            alt="YouTube"
            width={16}
            height={16}
          />
          <Image
            src="/images/icn-settings icn-xs-4.png"
            alt="Facebook"
            width={16}
            height={16}
          />
          <Image
            src="/images/icn-settings icn-xs-5.png"
            alt="Twitter"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}
