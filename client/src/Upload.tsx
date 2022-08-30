import { gql, useMutation } from "@apollo/client";
import React from "react";

type Props = {};

// remember to add an `access_token` in localStorage  or you can add it statically on graphql.ts line number 9
const UPLOAD_FILE = gql`
  mutation paymentDisbursement(
    $slip: Upload!
    $reference: String
    $phone: String!
    $paymentReceiverId: Int!
    $amount: Int
    $media: PAYMENT_MEDIA!
  ) {
    paymentDisbursementRequest(
      slip: $slip
      reference: $reference
      phone: $phone
      paymentReceiverId: $paymentReceiverId
      amount: $amount
      media: $media
    )
  }
`;

export default function Upload({}: Props) {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
    onError: (err) => console.log(err),
  });
  const handleFileChange = (files: any) => {
    const file = files[0];
    uploadFile({
      variables: {
        slip: file,
        reference: "sdjs",
        phone: "01830791133",
        paymentReceiverId: 65,
        amount: 100,
        media: "BKASH",
      },
    });
  };
  return (
    <div>
      Upload
      <input type="file" onChange={(e) => handleFileChange(e.target.files)} />
    </div>
  );
}
