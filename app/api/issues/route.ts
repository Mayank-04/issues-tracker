import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
    title : z.string().min(1).max(255),
    description : z.string().min(1)
})

export async function POST(request : NextRequest) {
    const body = await request.json();
    // Validation is done by checking the body against the schema.
    const validation = createIssueSchema.safeParse(body);
    // If validation fails, return an error with code 400 i.e. Bad Request.
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status : 400});

    const newIssue = await prisma.issue.create({
        data : {
            title : body.title,
            description : body.description
        }
    })
    return NextResponse.json(newIssue, {status : 201});
}