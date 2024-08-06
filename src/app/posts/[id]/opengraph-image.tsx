import prisma from "@/utils/db";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (post === null) {
    return null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          color: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: "4px 8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Ketan
          </p>
          <img
            src={"http://localhost:3000/logo.png"}
            alt="logo"
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bolder",
              marginBottom: "8px",
              color: "black",
            }}
          >
            {post.title}
          </p>
          <img
            src={post.imageUrl}
            alt="Image"
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <p
            style={{
              fontSize: "18px",
              color: "black",
            }}
          >
            {post.content}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );

  // return new ImageResponse(
  //   (
  //     <div
  //       style={{
  //         background: "white",
  //         color: "black",
  //         width: "100%",
  //         height: "100%",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         gap: "8px",
  //         overflow: "hidden",
  //         padding: "8px",
  //       }}
  //     >
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <h2
  //           style={{
  //             fontWeight: "bold",
  //             color: "black",
  //           }}
  //         >
  //           Ketan
  //         </h2>
  //         <img
  //           src={"http://localhost:3000/logo.png"}
  //           alt="logo"
  //           style={{
  //             width: "32px",
  //             height: "32px",
  //           }}
  //         />
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <h2
  //           style={{
  //             fontSize: "24px",
  //             fontWeight: "bold",
  //             marginBottom: "8px",
  //             color: "black",
  //           }}
  //         >
  //           {post.title}
  //         </h2>
  //         <img
  //           src={post.imageUrl}
  //           alt="Image"
  //           className="h-44 w-full rounded object-cover"
  //           style={{
  //             width: "100%",
  //             height: "176px",
  //             objectFit: "cover",
  //             borderRadius: "4px",
  //           }}
  //         />
  //         <p>{post.content}</p>
  //       </div>
  //     </div>
  //   ),
  //   {
  //     ...size,
  //   },
  // );
}
