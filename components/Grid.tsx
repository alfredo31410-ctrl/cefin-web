/*
  GRID RESPONSIVE GLOBAL
  Para mostrar cards (blog, cursos, eventos)
*/

type Props = {
  children: React.ReactNode
}

export default function Grid({ children }: Props) {

  return (

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6
      md:gap-8
    ">

      {children}

    </div>

  )

}