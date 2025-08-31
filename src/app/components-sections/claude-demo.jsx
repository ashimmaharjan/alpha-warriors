"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Users,
  Trophy,
  Calendar,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const AlphaWarriorsLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
                About Alpha Warriors
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We are Nepal's premier indoor cricket team, bringing passion,
                skill, and warrior spirit to every match. Founded with the
                vision of excellence, we've dominated the indoor cricket scene
                across Nepal.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our team represents the finest talents in Nepalese cricket,
                combining traditional cricket values with modern indoor gameplay
                techniques.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-cyan-400">
                  <Trophy className="w-5 h-5 mr-2" />
                  <span>Championship Winners</span>
                </div>
                <div className="flex items-center text-red-400">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Elite Squad</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-cyan-400/20 p-8 rounded-3xl backdrop-blur-sm border border-gray-700">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Team Excellence</h3>
                  <p className="text-gray-300">
                    Committed to bringing glory to Nepal through cricket
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section id="team" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
              Our Warriors
            </h2>
            <p className="text-xl text-gray-300">
              Meet the champions who make the magic happen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Captain</h3>
              <p className="text-gray-300 text-center">
                Leading from the front with strategic brilliance
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                All-Rounder
              </h3>
              <p className="text-gray-300 text-center">
                Master of both bat and ball
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Bowler</h3>
              <p className="text-gray-300 text-center">
                Precision and pace in every delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixtures Section */}
      <section id="fixtures" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
              Upcoming Matches
            </h2>
            <p className="text-xl text-gray-300">Catch us in action</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-xl border border-gray-600">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-xl font-bold">vs Thunder Bolts</h3>
                    <p className="text-gray-300">Championship Semi-Final</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-400">
                    Sept 15, 2025
                  </p>
                  <p className="text-gray-300">7:00 PM</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Kathmandu Indoor Arena</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-xl border border-gray-600">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-xl font-bold">vs Royal Eagles</h3>
                    <p className="text-gray-300">League Match</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-400">
                    Sept 22, 2025
                  </p>
                  <p className="text-gray-300">6:30 PM</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Pokhara Sports Complex</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
              Why Alpha Warriors?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-red-500/50">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Championship DNA</h3>
              <p className="text-gray-300">
                Born winners with an uncompromising attitude towards excellence
                and victory in every match we play.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-cyan-400/50">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Team Unity</h3>
              <p className="text-gray-300">
                Stronger together, we fight as one unit with brotherhood that
                extends beyond the cricket field.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-yellow-500/50">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consistency</h3>
              <p className="text-gray-300">
                Delivering peak performance match after match, season after
                season, with unwavering dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Warriors?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of Nepal's most elite indoor cricket team. Train with
            champions, compete at the highest level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Follow Our Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
                Alpha Warriors
              </div>
              <p className="text-gray-300 mb-4">
                Nepal's premier indoor cricket team, dedicated to excellence and
                sporting glory.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/alphawarriors__/"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#fixtures"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    Fixtures
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@alphawarriors.np</p>
                <p>📱 +977-XXXX-XXXX</p>
                <p>📍 Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Alpha Warriors Cricket Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlphaWarriorsLanding;
