import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Daily Freshness"
      title="Handcrafted Goodness, Baked Fresh Daily"
      description="Discover our artisan breads, pastries, and custom cakes made with premium ingredients. Order online or visit us for same-day pickup."
      primaryButton={{
        text: "Order Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Menu",
        href: "#products",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/various-sweet-pastries-wooden-piece_114579-72167.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-box-with-azerbaijan-national-pastry-marble-background_114579-45718.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-delicious-pie-cinnamon-sticks_23-2148325687.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bread-boon-wooden-table_23-2148288024.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-breakfast-with-pastries-cinnamon-rolls-croissants_23-2151975065.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-bread-table_23-2149234900.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-bread-cloth_23-2149234820.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sweet-yummy-pie-served-with-cup-coffee-hot-chocolate_114579-61866.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/freshly-baked-croissant-serbian-bakery_181624-57373.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-bread-wooden-spoon-old-wooden-background_169016-1933.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-bread-wooden-spoon-old-wooden-background_169016-3149.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tasty-croissants_1232-1242.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Our Passion for Perfection"
      primaryButton={{
        text: "Learn More",
        href: "#",
      }}
      secondaryButton={{
        text: "Our Story",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="Our Menu"
      title="Explore Our Signature Bakes"
      description="A curated selection of our finest daily preparations."
      items={[
        {
          title: "Sourdough",
          description: "Naturally leavened and fermented.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/detail-baked-bread-slices_23-2148074084.jpg",
        },
        {
          title: "Croissants",
          description: "Buttery, flaky, and golden.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/classic-shtrudel-dessert-with-ice-cream-white-plate_93675-135177.jpg",
        },
        {
          title: "Custom Cakes",
          description: "Tailor-made for your events.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-cake-with-flowers_23-2148120678.jpg",
        },
        {
          title: "Cookies",
          description: "Gourmet chocolate chip goodness.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-cookies-glass-milk-wooden-background-flat-lay_169016-28393.jpg",
        },
        {
          title: "Savory Quiche",
          description: "Fresh seasonal ingredients daily.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/food-photography-restaurant-concept-vegetable-pie-black-table_176420-15971.jpg",
        },
        {
          title: "Baguettes",
          description: "Classic crusty french bread.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-slices-bread_23-2148361899.jpg",
        },
        {
          title: "Cinnamon Rolls",
          description: "Soft dough with rich icing.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/cinnamon-rolls-buns-wooden-table-kanelbulle-swedish-dessert_123827-22533.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesComparison
      tag="Our Standard"
      title="The Bakery Difference"
      description="Why our local approach beats industrial processes."
      negativeItems={[
        "High-fructose syrups",
        "Synthetic preservatives",
        "Long-term shipping",
      ]}
      positiveItems={[
        "Organic heirloom flour",
        "Natural fermentation",
        "Baked local daily",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Reviews"
      title="Customer Favorites"
      description="Hear what our local neighbors have to say."
      testimonials={[
        {
          name: "Jane Doe",
          role: "Food Blogger",
          quote: "The best sourdough in the entire city!",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-female-gardener-uniform-wearing-gardening-hat-holding-pumpkin_141793-89166.jpg",
        },
        {
          name: "Mark Smith",
          role: "Local Resident",
          quote: "My morning ritual involves their croissants.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-holding-tray-muffins-counter_107420-12317.jpg",
        },
        {
          name: "Sarah Miller",
          role: "Event Planner",
          quote: "Their custom cakes are professional and delicious.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-daughter-senior-woman-eating-baked-croissant-holding-glass-juice_23-2148041587.jpg",
        },
        {
          name: "John & Rita",
          role: "Regular Patrons",
          quote: "Always fresh, always friendly service.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-loving-couple-kitchen-near-pastries_171337-8314.jpg",
        },
        {
          name: "David Chen",
          role: "Business Owner",
          quote: "Perfect for our office catering needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-fresh-tasty-croissant-professional-baker-is-holding-out-copyspace-profession-occupation-food-sales-retail-offer-discount-shop-store-bakery-concept_7502-5546.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Help"
      title="Frequently Asked Questions"
      description="Common inquiries about our bakery and ordering."
      items={[
        {
          question: "Do you offer wholesale?",
          answer: "Yes, please contact us for volume catering quotes.",
        },
        {
          question: "How do I place a custom order?",
          answer: "Submit the inquiry form on our contact page.",
        },
        {
          question: "Are your ingredients organic?",
          answer: "We prioritize organic, locally sourced ingredients.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Order Now"
      text="Ready to experience the best local bake? Visit our store or place an online pickup order today."
      primaryButton={{
        text: "Order Now",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
