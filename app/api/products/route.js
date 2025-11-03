import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, category, images } = body;

    if (!name || !price) {
      return Response.json({ success: false, message: "Missing required fields" });
    }

    await connectDB();
    const product = await Product.create({
      name,
      description,
      price,
      category,
      images: images || [],
    });

    return Response.json({ success: true, product });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return Response.json({ success: true, products });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
