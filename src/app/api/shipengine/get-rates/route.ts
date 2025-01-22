import { shipengine } from "../../../helper/shipEngine";
import { Address, Package } from "../../../type"; 
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      shipeToAddress,
      packages,
    }: { shipeToAddress: Address; packages: Package[] } = await req.json();

    // Validate required fields
    if (!shipeToAddress || !packages) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: shipeToAddress and packages",
        }),
        { status: 400 }
      );
    }

    const shipFromAddress: Address = {
      name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "",
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no",
    };

    // Fetch shipping rates from ShipEngine
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipeToAddress,
        shipFrom: shipFromAddress,
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENGINE_FOURTH_COURIER || "",
        ].filter(Boolean), // Remove empty strings
      },
    });

    // Log details for debugging
    console.log("Ship To Address:", shipeToAddress);
    console.log("Packages:", packages);
    console.log("Shipment Details:", shipmentDetails);

    // Return the response with shipment details
    return new Response(
      JSON.stringify({ shipeToAddress, packages, shipmentDetails }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching shipping rates:", error)
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}