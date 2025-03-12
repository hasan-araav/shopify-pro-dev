import React from 'react';
import { Users, Star, Award, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Users size={30} />, value: "100+", label: "Happy Clients" },
    { icon: <Star size={30} />, value: "500+", label: "Projects Completed" },
    { icon: <Award size={30} />, value: "5+", label: "Years Experience" },
    { icon: <TrendingUp size={30} />, value: "150%", label: "Avg. Sales Increase" }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <div className="stats-card card h-100 text-center p-4">
                <div className="text-primary mb-3">{stat.icon}</div>
                <h3 className="fw-bold mb-2">{stat.value}</h3>
                <p className="text-white mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;