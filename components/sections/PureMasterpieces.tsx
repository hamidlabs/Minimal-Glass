import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PureMasterpieces() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pure Masterpieces</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Placerat nisi nibh velit dolor consequat netus rutrum interdum ipsum. Integer urna arcu sed gravida porttitor mauris. Sedienique interdum egestas laoreet lorem tellus in. Suspendisse nisi vivamus in.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
            View all our masterpieces
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-700 my-12"></div>
      </div>

      {/* Our Design Section */}
      <section className="container mx-auto px-4 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our design</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design Card 1 */}
          <Card className="bg-gray-800 border-gray-700 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Minimal Elegance</h3>
              <p className="text-gray-300">
                Clean lines and sophisticated design for modern spaces.
              </p>
            </CardContent>
          </Card>

          {/* Design Card 2 */}
          <Card className="bg-gray-800 border-gray-700 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-amber-400 to-red-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Timeless Craft</h3>
              <p className="text-gray-300">
                Handcrafted pieces with attention to every detail.
              </p>
            </CardContent>
          </Card>

          {/* Design Card 3 */}
          <Card className="bg-gray-800 border-gray-700 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-emerald-400 to-teal-600"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Modern Innovation</h3>
              <p className="text-gray-300">
                Contemporary designs that push the boundaries of form.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}