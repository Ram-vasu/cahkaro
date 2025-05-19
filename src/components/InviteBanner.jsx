import React from "react";

const InviteBanner = () => {
  return (
    <section className="invite_section">
      <div className="flex justify-center items-center w-full py-8 px-2">
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-lg bg-white">
          <img
            src="https://asset22.ckassets.com/resources/image/staticpage_images/refer-earn-d-1741686637.png"
            alt="Invite friends to CashKaro & Get 10% of their Cashback every time they Shop"
            className="w-full h-[320px] object-cover object-center rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default InviteBanner;
