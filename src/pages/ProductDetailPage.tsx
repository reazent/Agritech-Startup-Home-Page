import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, CheckCircle, Sprout, Package, Droplet, Calendar } from 'lucide-react';
export function ProductDetailPage() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  // Product data - this would typically come from a database or API
  const productsData: Record<string, any> = {
    prodigy: {
      name: 'Prodigy',
      tagline: 'Seed Treatment Yield Enhancer for Soybean',
      description: 'A proprietary formulation of microbes (apr1), a natural compound, and plant biomass designed to maximize soybean yields through enhanced seed treatment.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop',
      crop: 'Soybean',
      type: 'Biostimulant',
      form: 'Powder',
      application: 'Seed treatment',
      availability: '2024',
      stage: 'commercial',
      benefits: ['10% average yield increase in field trials', 'Enhanced root development and plant vigor', 'Improved nutrient uptake efficiency', 'Compatible with existing seed treatment equipment', 'OMRI Listed for organic production', '5X return on investment based on 2024 trials'],
      applicationDetails: 'Apply at 1 oz per 50 lbs of seed. Pre-measured packaging available for convenience. Compatible with standard seed treatment equipment and fungicides/insecticides.',
      technicalSpecs: ['Active Ingredients: Proprietary microbe blend (apr1), natural compounds, plant biomass', 'Formulation: Wettable powder', 'Package Sizes: 50-unit seed treatment packages', 'Shelf Life: Up to 2 years when stored properly', 'Storage: Cool, dry place away from direct sunlight']
    },
    ignite: {
      name: 'Ignite',
      tagline: 'Natural Compound for Enhanced Crop Performance',
      description: 'A natural compound formulation designed to enhance crop performance across multiple crop types through improved soil health and nutrient availability.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
      crop: 'Any',
      type: 'Biostimulant',
      form: 'Powder',
      application: 'Soil amendment',
      availability: '2026',
      stage: 'field-testing',
      benefits: ['Broad-spectrum crop compatibility', 'Enhances soil microbial activity', 'Improves nutrient cycling', 'Supports sustainable farming practices', 'Easy application as soil amendment'],
      applicationDetails: 'Apply as a soil amendment at recommended rates based on soil type and crop. Can be incorporated during tillage or applied pre-plant.',
      technicalSpecs: ['Active Ingredients: Natural compound blend', 'Formulation: Powder', 'Application Rate: Varies by crop and soil type', 'Currently in field testing phase', 'Expected commercial availability: 2026']
    },
    'migrow-x': {
      name: 'Migrow X',
      tagline: 'Liquid Biostimulant for Vegetable Crops',
      description: 'A proprietary formulation of microbes (apr4) and natural compounds specifically designed for vegetable production systems.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&h=600&fit=crop',
      crop: 'Vegetables',
      type: 'Biostimulant',
      form: 'Liquid',
      application: 'Nutrient',
      availability: '2026',
      stage: 'field-testing',
      benefits: ['Optimized for vegetable production', 'Liquid formulation for easy application', 'Enhances plant nutrition', 'Supports healthy plant development', 'Compatible with fertigation systems'],
      applicationDetails: 'Apply through fertigation systems or as foliar spray. Recommended application rates vary by crop and growth stage.',
      technicalSpecs: ['Active Ingredients: Proprietary microbe blend (apr4), natural compounds', 'Formulation: Liquid concentrate', 'Application Method: Fertigation or foliar', 'Currently in field testing phase', 'Expected commercial availability: 2026']
    },
    neo: {
      name: 'Neo',
      tagline: 'Foliar Biocontrol for Wheat',
      description: 'A proprietary formulation of microbes (apr1) and natural compounds designed for crop protection in wheat production.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop',
      crop: 'Wheat',
      type: 'Crop protection',
      form: 'Liquid',
      application: 'Foliar biocontrol',
      availability: '2026',
      stage: 'field-testing',
      benefits: ['Biological crop protection', 'Reduces reliance on synthetic pesticides', 'Foliar application for targeted protection', 'Compatible with integrated pest management', 'Supports sustainable wheat production'],
      applicationDetails: 'Apply as foliar spray at recommended growth stages. Can be tank-mixed with compatible products.',
      technicalSpecs: ['Active Ingredients: Proprietary microbe blend (apr1), natural compounds', 'Formulation: Liquid', 'Application Method: Foliar spray', 'Currently in field testing phase', 'Expected commercial availability: 2026']
    },
    spark: {
      name: 'Spark',
      tagline: 'Plant Biomass Soil Amendment',
      description: 'A proprietary formulation of plant biomass designed to improve soil health and structure across all crop types.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
      crop: 'Any',
      type: 'Biostimulant',
      form: 'Powder',
      application: 'Soil amendment',
      availability: '2026',
      stage: 'field-testing',
      benefits: ['Improves soil organic matter', 'Enhances soil structure', 'Supports beneficial soil microbes', 'Universal crop compatibility', 'Easy incorporation into soil'],
      applicationDetails: 'Apply as soil amendment and incorporate into soil. Recommended for pre-plant or between crop rotations.',
      technicalSpecs: ['Active Ingredients: Plant biomass blend', 'Formulation: Powder', 'Application Rate: Based on soil organic matter levels', 'Currently in field testing phase', 'Expected commercial availability: 2026']
    },
    rise: {
      name: 'Rise',
      tagline: 'Nitrogen Fixation for Soybean',
      description: 'Rhizobia, bradyrhizobium japonicum formulation designed to enhance nitrogen fixation in soybean production.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop',
      crop: 'Soybean',
      type: 'Biostimulant',
      form: 'Liquid',
      application: 'Seed treatment',
      availability: '2026',
      stage: 'field-testing',
      benefits: ['Enhanced nitrogen fixation', 'Reduces synthetic nitrogen requirements', 'Improves nodulation', 'Supports sustainable soybean production', 'Compatible with seed treatment systems'],
      applicationDetails: 'Apply as seed treatment at planting. Can be used alone or in combination with Prodigy.',
      technicalSpecs: ['Active Ingredients: Bradyrhizobium japonicum', 'Formulation: Liquid', 'Application Method: Seed treatment', 'Currently in field testing phase', 'Expected commercial availability: 2026']
    },
    'prodigy-plus': {
      name: 'Prodigy Plus',
      tagline: 'Combined Formulation for Maximum Results',
      description: 'Prodigy with Rise - a combined formulation that delivers both yield enhancement and nitrogen fixation benefits in one application.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop',
      crop: 'Soybean',
      type: 'Biostimulant',
      form: 'Combination',
      application: 'Seed treatment',
      availability: '2026',
      stage: 'field-testing',
      benefits: ['Combines benefits of Prodigy and Rise', 'Single application convenience', 'Enhanced yield and nitrogen fixation', 'Optimized for soybean production', 'Simplified seed treatment process'],
      applicationDetails: 'Apply as seed treatment at planting. Pre-mixed formulation eliminates need for separate applications.',
      technicalSpecs: ['Active Ingredients: Prodigy + Rise formulations', 'Formulation: Combination package', 'Application Method: Seed treatment', 'Currently in field testing phase', 'Expected commercial availability: 2026']
    },
    thrive: {
      name: 'Thrive',
      tagline: 'Carbon Capture & Sequestration',
      description: 'A proprietary formulation of microbes, natural compounds, plant biomass, and inorganic minerals designed for carbon capture and soil health improvement.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
      crop: 'Any',
      type: 'Carbon capture & sequestration',
      form: 'Powder',
      application: 'Soil amendment',
      availability: '2026',
      stage: 'development',
      benefits: ['Enhances carbon sequestration in soil', 'Improves long-term soil health', 'Supports climate-smart agriculture', 'Universal crop compatibility', 'Contributes to sustainability goals'],
      applicationDetails: 'Apply as soil amendment. Designed for long-term soil improvement and carbon sequestration programs.',
      technicalSpecs: ['Active Ingredients: Microbes, natural compounds, plant biomass, minerals', 'Formulation: Powder', 'Application Method: Soil amendment', 'Currently in development phase', 'Expected commercial availability: 2026']
    },
    zenith: {
      name: 'Zenith',
      tagline: 'Complete Soil Health Solution',
      description: 'A comprehensive formulation of microbes (apr1), natural compounds, plant biomass, and inorganic minerals for complete soil health improvement.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
      crop: 'Any',
      type: 'Biostimulant',
      form: 'Powder',
      application: 'Soil amendment',
      availability: '2026',
      stage: 'development',
      benefits: ['Comprehensive soil health improvement', 'Combines multiple beneficial components', 'Enhances soil biology and chemistry', 'Universal crop application', 'Long-term soil building'],
      applicationDetails: 'Apply as soil amendment for comprehensive soil health improvement. Suitable for all crop types.',
      technicalSpecs: ['Active Ingredients: Microbes (apr1), natural compounds, plant biomass, minerals', 'Formulation: Powder', 'Application Method: Soil amendment', 'Currently in development phase', 'Expected commercial availability: 2026']
    },
    apex: {
      name: 'Apex',
      tagline: 'Next-Generation Nitrogen Fixation',
      description: 'A proprietary formulation designed to enable nitrogen fixation in crops beyond traditional legumes, starting with corn.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
      crop: 'Any',
      type: 'Biofertilizer',
      form: 'Liquid',
      application: 'Soil amendment',
      availability: '2027',
      stage: 'research',
      benefits: ['Revolutionary nitrogen fixation technology', 'Potential for non-legume crops', 'Reduces synthetic nitrogen requirements', 'Supports sustainable intensification', 'Next-generation agricultural innovation'],
      applicationDetails: 'Application methods under development. Designed for broad-spectrum nitrogen fixation.',
      technicalSpecs: ['Active Ingredients: Proprietary formulation (under development)', 'Formulation: Liquid', 'Application Method: To be determined', 'Currently in research phase', 'Expected commercial availability: 2027']
    }
  };
  const product = productsData[slug || ''];
  if (!product) {
    return <div className="w-full min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-purple-950 mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="text-purple-600 hover:text-purple-800">
            Return to Products
          </Link>
        </div>
        <Footer />
      </div>;
  }
  const stageConfig: Record<string, any> = {
    commercial: {
      label: 'Available Now',
      color: 'bg-green-500'
    },
    'field-testing': {
      label: 'Field Testing',
      color: 'bg-yellow-500'
    },
    development: {
      label: 'In Development',
      color: 'bg-blue-500'
    },
    research: {
      label: 'Research Phase',
      color: 'bg-purple-500'
    }
  };
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section with Product Image */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-purple-950/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/products" className="inline-flex items-center gap-2 text-white mb-6 hover:text-orange-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Products
            </Link>
            <div className={`inline-block ${stageConfig[product.stage].color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
              {stageConfig[product.stage].label}
            </div>
            <h1 className="text-5xl font-bold text-white mb-3">
              {product.name}
            </h1>
            <p className="text-2xl text-white opacity-90">{product.tagline}</p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-950 mb-4">
                  Overview
                </h2>
                <p className="text-xl text-purple-900 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-950 mb-6">
                  Key Benefits
                </h2>
                <div className="space-y-3">
                  {product.benefits.map((benefit: string, index: number) => <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-purple-900">{benefit}</span>
                    </div>)}
                </div>
              </div>

              {/* Application Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-950 mb-4">
                  Application Details
                </h2>
                <p className="text-lg text-purple-900 leading-relaxed">
                  {product.applicationDetails}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-950 mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-3">
                  {product.technicalSpecs.map((spec: string, index: number) => <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-base text-purple-900">{spec}</span>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-950 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sprout className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-purple-950">
                        Crop
                      </div>
                      <div className="text-purple-900">{product.crop}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-purple-950">
                        Type
                      </div>
                      <div className="text-purple-900">{product.type}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Droplet className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-purple-950">
                        Form
                      </div>
                      <div className="text-purple-900">{product.form}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-purple-950">
                        Availability
                      </div>
                      <div className="text-purple-900">
                        {product.availability}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 shadow-lg text-white">
                <h3 className="text-xl font-bold mb-3">
                  Interested in {product.name}?
                </h3>
                <p className="mb-4 opacity-90">
                  Contact us to learn more about this product and how it can
                  benefit your operation.
                </p>
                <Link to="/contact">
                  <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}