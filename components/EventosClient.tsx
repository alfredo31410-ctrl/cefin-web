"use client"

import { motion } from "framer-motion"
import EventoCard from "@/components/EventoCard"
import Grid from "@/components/Grid"

export default function EventosClient({ eventos }: { eventos: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Grid>
        {eventos.map((evento) => (
          <EventoCard key={evento.slug} evento={evento} />
        ))}
      </Grid>
    </motion.div>
  )
}