import type { ContactInfo } from "./Footer";

const ContactSection: React.FC<{ contactInfo: ContactInfo }> = ({
  contactInfo,
}) => (
  <div className="text-center sm:text-left">
    <div className="contact-badge-style">Contact us:</div>
    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
      <p>
        Email:{" "}
        <a
          href={`mailto:${contactInfo.email}`}
          className="hover:text-[#B6F09C] transition-colors"
        >
          {contactInfo.email}
        </a>
      </p>
      <p>
        Phone:{" "}
        <a
          href={`tel:${contactInfo.phone}`}
          className="hover:text-[#B6F09C] transition-colors"
        >
          {contactInfo.phone}
        </a>
      </p>
      <p>
        Address: {contactInfo.address.street}
        <br />
        {contactInfo.address.city}, {contactInfo.address.state}{" "}
        {contactInfo.address.zipCode}
      </p>
    </div>
  </div>
);

export default ContactSection;