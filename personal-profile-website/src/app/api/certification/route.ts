import {certification} from "@/app/data/data"

export async function GET() {
    return Response.json(certification);
}