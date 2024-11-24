"use server";
export async function addClanToTournament({
  clanId,
  tournamentId,
}: {
  clanId: string;
  tournamentId: string;
}) {
  try {
    const domain = process.env.DOMAIN;
    const res = await fetch(
      `${domain}/api/tournament/${tournamentId}/add-clan`,
      {
        method: "POST",
        body: JSON.stringify({ clan: clanId }),
      }
    ).then(async (res) => await res.json());
    return res;
  } catch (e) {
    return { message: e };
  }
}