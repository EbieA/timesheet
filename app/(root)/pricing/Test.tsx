import { CheckIcon } from "lucide-react";
import { useState, useEffect } from "react";

// Separate data fetching
const PlansData = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch("/api/plans");
      setPlans(await response.json());
    };

    fetchPlans();
  }, []);

  return plans;
};

// Plan display component
const Plan = ({ plan }) => (
  <div className="border p-4 rounded">
    <h3 className="font-bold">{plan.name}</h3>
    <p className="text-gray-600">{plan.description}</p>

    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">${plan.price}</span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Started
      </button>
    </div>

    <div>
      {plan.features.map((feature) => (
        <div key={feature} className="flex gap-2">
          <CheckIcon className="w-6 h-6 text-green-500" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

// Main component
const Plans = () => {
  const plans = PlansData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Plan key={plan.id} plan={plan} />
      ))}
    </div>
  );
};
