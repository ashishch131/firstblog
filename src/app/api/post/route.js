import { connect } from "@/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server"

export const GET = async ()=>{
 
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status:200});
    } catch (error) {
        return new NextResponse("database error", {status:500});
    }
};