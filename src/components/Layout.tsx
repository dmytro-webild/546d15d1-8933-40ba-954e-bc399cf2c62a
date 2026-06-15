import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Process",
    "href": "#process"
  },
  {
    "name": "Faq",
    "href": "#faq"
  },
  { name: "Blog", href: "/blog" },

];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Artisan Bakery"
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Artisan Bakery"
      columns={[
        {
          title: "Visit",
          items: [
            {
              label: "123 Bake St, City",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Artisan Bakery. All rights reserved."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Twitter",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/detail-baked-bread-slices_23-2148074084.jpg?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
