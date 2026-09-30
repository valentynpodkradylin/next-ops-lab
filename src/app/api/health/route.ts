export const runtime = 'nodejs'

export async function GET() {
  return Response.json(
    {
      status: 'ok',
      release: process.env.APP_RELEASE ?? 'local',
      pid: process.pid, // pid — идентификатор процесса, обработавшего запрос
      uptimeSeconds: Math.floor(process.uptime()), // uptimeSeconds — сколько секунд работает этот процесс
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  )
}