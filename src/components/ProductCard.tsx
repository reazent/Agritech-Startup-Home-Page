import React from 'react';
import { ArrowRight, Droplet, Package, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  name: string;
  description: string;
  crop: string;
  type: string;
  form: string;
  application: string;
  availability: string;
  image: string;
  stage: 'commercial' | 'field-testing' | 'development' | 'research';
  slug: string;
}
export function ProductCard({
  name,
  description,
  crop,
  type,
  form,
  application,
  availability,
  image,
  stage,
  slug
}: ProductCardProps) {
  const stageConfig = {
    commercial: {
      label: 'Available',
      color: 'bg-green-500',
      textColor: 'text-green-500',
      bgLight: 'bg-green-50'
    },
    'field-testing': {
      label: 'Field Testing',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      bgLight: 'bg-yellow-50'
    },
    development: {
      label: 'In Development',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgLight: 'bg-blue-50'
    },
    research: {
      label: 'Research Phase',
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgLight: 'bg-purple-50'
    }
  };
  const currentStage = stageConfig[stage];
  return <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {availability}
        </div>
        <div className={`absolute top-4 left-4 ${currentStage.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
          {currentStage.label}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-purple-950 mb-2">{name}</h3>
        <p className="text-purple-900 mb-4 text-sm">{description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Sprout className="w-4 h-4 text-orange-500" />
            <span className="text-purple-900">
              <span className="font-semibold">Crop:</span> {crop}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Package className="w-4 h-4 text-orange-500" />
            <span className="text-purple-900">
              <span className="font-semibold">Type:</span> {type}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Droplet className="w-4 h-4 text-orange-500" />
            <span className="text-purple-900">
              <span className="font-semibold">Form:</span> {form} •{' '}
              {application}
            </span>
          </div>
        </div>

        <Link to={`/products/${slug}`}>
          <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>;
}