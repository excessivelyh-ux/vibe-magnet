import { MessageCircle, Instagram, Music2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/1234567890";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            SocialBoost
          </h3>
          <p className="text-muted-foreground text-sm mt-1">#1 SMM Growth Service</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-whatsapp/10 text-whatsapp flex items-center justify-center hover:bg-whatsapp/20 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-instagram/10 text-instagram flex items-center justify-center hover:bg-instagram/20 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-tiktok/10 text-tiktok flex items-center justify-center hover:bg-tiktok/20 transition-colors">
            <Music2 className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} SocialBoost. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
