// import * as anchor from "@coral-xyz/anchor";
// import { PublicKey } from "@solana/web3.js";
// const assert = require("assert");

// const anchorProvider = require("@project-serum/anchor");

// const idl = require("../target/idl/winu.json");

// const keypairPath = require("../id.json");
// const WINU_PROGRAM_ID = "BrTsF5GJNb4jk7jTuYFV3B8YG2cAqWUXrdsFUar5BC6z";

// describe("add member to a clan", () => {
//   it("will accept Clan name and member's pubkey and adds to the clan", async () => {
//     anchor.setProvider(anchor.AnchorProvider.env());
//     // Initialize the program client with the program ID and IDL
//     const program = new anchorProvider.Program(
//       idl,
//       new PublicKey(WINU_PROGRAM_ID),
//       anchor.AnchorProvider.env()
//     );

//     const authority = anchor.web3.Keypair.fromSecretKey(
//       Uint8Array.from(keypairPath)
//     );

//     const clanName = "subhash";
//     const member = "Ajy6tGiQZSpUZ5hJMCTYPeS2ox1a9Cy7ZN7zHzp9DhWQ";

//     const [clanPda, _bump] = await anchor.web3.PublicKey.findProgramAddress(
//       [Buffer.from("clan"), Buffer.from(clanName)],
//       program.programId
//     );

//     // Execute the RPC.
//     const tx = await program.methods
//       .addClanMember(new PublicKey(member), clanName)
//       .accounts({
//         clan: clanPda,
//         authority: authority.publicKey,
//         systemProgram: anchor.web3.SystemProgram.programId,
//       })
//       .signers([authority])
//       .rpc();

//     const clanRes = await program.account.clan.fetch(clanPda);
//     console.log("added member " + JSON.stringify(clanRes));

//     assert.ok(clanRes.name == clanName);
//   });
// });
