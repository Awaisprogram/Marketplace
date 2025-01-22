"use client";
import React, { useState } from "react";
import axios from "axios";
import { Address, Rate, trackingObjType } from "@/app/type";
import { cartProductsWhichCanBeShipped } from "@/app/data";
import Link from "next/link";


const ShippingRatesPage = () => {
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "",
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no",
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <> 
   
    <div className="min-h-screen bg-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-center text-Color mb-4">
            Shipping Rates Calculator
          </h1>
          <p className="text-gray-700">
            Calculate shipping rates and create labels effortlessly.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Address Form Section */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-Color mb-6">
              Ship To Address
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(shipeToAddress).map(([key, value]) => (
                  <input
                    key={key}
                    type="text"
                    placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                    value={value}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        [key]: e.target.value,
                      })
                    }
                    className="p-3 bg-white  border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                    required={key !== "addressLine2"}
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-Color text-white font-semibold rounded-lg hover:bg-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Calculating..." : "Get Shipping Rates"}
              </button>
            </form>
          </div>

          {/* Rates and Actions Section */}
          <div className="space-y-8">
            {rates.length > 0 && (
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold text-Color text-center mb-6">
                  Available Shipping Rates
                </h2>
                <div className="space-y-4">
                  {rates.map((rate) => (
                    <div
                      key={rate.rateId}
                      className={`p-6 bg-white rounded-lg cursor-pointer transition-all ${
                        rateId === rate.rateId
                          ? "ring-2 ring-blue-Color"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setrateId(rate.rateId)}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="shippingRate"
                          checked={rateId === rate.rateId}
                          onChange={() => setrateId(rate.rateId)}
                          className="form-radio h-5 w-5 text-Color"
                        />
                        <div>
                          <p className="text-lg font-medium text-black">
                            {rate.carrierFriendlyName}
                           </p>
                          <p className="text-gray-300">{rate.serviceType}</p>
                          <p className="text-black font-bold">
                            {rate.shippingAmount.amount}{" "}
                            {rate.shippingAmount.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {rateId && (
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <button
                  onClick={handleCreateLabel}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-Color text-white font-semibold rounded-lg hover:bg-green-700 transition-all disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating Label..." : "Create Label"}
                </button>
              </div>
            )}

            {labelPdf && (
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg text-center">
                <Link href={labelPdf} target="_blank">
                  <button className="px-6 py-3 bg-Color text-white font-semibold rounded-lg hover:bg-purple-700 transition-all">
                    Download Label
                  </button>
                </Link>
              </div>
            )}

            {trackingObj && (
              <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-Color mb-6 space-y-8">
                  Tracking Information
                </h2>
                <div className="space-y-4 text-gray-900">
                  <p>
                    <span className="font-semibold">Tracking Number:</span>{" "}
                    {trackingObj.trackingNumber}
                  </p>
                  <p>
                    <span className="font-semibold">Label ID:</span>{" "}
                    {trackingObj.labelId}
                  </p>
                  <p>
                    <span className="font-semibold">Carrier Code:</span>{" "}
                    {trackingObj.carrierCode}
                  </p>
                  <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
                    <button className="mt-10 w-full px-6 py-3 bg-Color text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                      Track Order
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {errors.length > 0 && (
              <div className="bg-red-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-red-300 mb-6">
                  Errors
                </h2>
                <div className="space-y-2">
                  {errors.map((error, index) => (
                    <p key={index} className="text-red-300">
                      {error}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShippingRatesPage; 