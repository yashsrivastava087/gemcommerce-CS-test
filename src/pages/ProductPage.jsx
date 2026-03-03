import React from 'react'
import mastercard from "../icons/mastercard.png";
import visa from "../icons/visa.png";
import paypal from "../icons/paypal.png";
import applepay from "../icons/applepay.png";
import googlepay from "../icons/gpay.png";
import vet from "../icons/vet 1.png";
import food from "../icons/food 1.png";
import petbowl from "../icons/pet-bowl 1.png";
import petfood from "../icons/pet-food 1.png"
import doggy from "../icons/doggy.png";
import fooody from "../icons/fooody.png";
import dogeating from "../icons/dogeating.gif";
import heartIcon from "../icons/shield-check.svg";
import cntr from "../icons/centerimg.png";


const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What makes us different<br />makes them stronger
          </h1>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <span > <img src={food} alt="Real Food" /></span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Real Food</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Wholesome recipes for dogs with real meat and veggies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                    <span className="text-xl"><img src={petbowl} alt="petbowl" /></span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Premium Ingredient</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Elevating pet care with unmatched safety and quality.
                  </p>
                </div>
              </div>

            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <img
                  src={cntr}
                  alt="Pet Food Bowl - Meat & Kibble"
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <span className="text-xl"><img src={petfood} alt="petfood" /></span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Made Fresh</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We prioritize maintaining the integrity of whole foods and nutrition.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-100">
                    <img src={vet} alt="Vet Developed" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Vet Developed</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We raise the bar for dog nutrition, surpassing industry expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          <button className="w-full max-w-2xl bg-[#FF6B4A] text-white text-2xl sm:text-3xl font-bold py-6 px-8 rounded-xl hover:bg-[#ff5a38] transition shadow-lg">
            Get your dog's healthy meal today!
          </button>

          {/* Section 1*/}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <img
                src={heartIcon}
                alt="Money Back Guarantee"
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm sm:text-base text-gray-700 font-medium">
                30-day money back guarantee
              </span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              <img
                src={paypal}
                alt="PayPal"
                className="h-6 w-auto"
              />
              <img
                src={visa}
                alt="Visa"
                className="h-6 w-auto"
              />
              <img
                src={mastercard}
                alt="Mastercard"
                className="h-6 w-auto"
              />
              <img
                src={applepay}
                alt="Apple Pay"
                className="h-6 w-auto"
              />
              <img
                src={googlepay}
                alt="Google Pay"
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2*/}
      <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8 font-inter tracking-tight">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h2>

              <p className="text-gray-600 mb-8">
                Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-6">Key Points:</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-[#FF6B4A] flex-shrink-0">97%</div>
                    <p className="text-sm text-gray-600">
                      Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-[#FF6B4A] flex-shrink-0">84%</div>
                    <p className="text-sm text-gray-600">
                      Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-[#FF6B4A] flex-shrink-0">92%</div>
                    <p className="text-sm text-gray-600">
                      Our dog food's high protein and fat digestibility contribute to ideal stool quality.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#FF6B4A] text-white font-bold py-3 px-6 rounded hover:bg-[#ff5a38] transition">
                Give your furry friend the gift of wholesome nutrition
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src={doggy}
                alt="Happy Dog with Product"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={dogeating}
                alt="Dogs eating from bowls"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Improve overall gastrointestinal health for better nutrient absorption
              </h2>

              <p className="text-gray-600">
                Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Prebiotics nourish the beneficial gut bacteria, supporting digestive health
              </h2>
              <div>
                <p className="text-sm text-gray-700">
                  Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={fooody}
                alt="Dog eating kibble"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage

