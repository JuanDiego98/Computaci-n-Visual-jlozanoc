using UnityEngine;

public class CubeTransform : MonoBehaviour
{
    public float moveInterval = 2f;      // Time between random moves
    public float moveDistance = 1f;      // How far to move randomly
    public float rotationSpeed = 90f;    // Degrees per second
    public float scaleAmplitude = 0.5f;  // How much it scales
    public float scaleFrequency = 1f;    // How fast it scales

    private float timeSinceLastMove = 0f;

    void Update()
    {
        // --- Constant Rotation ---
        transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);

        // --- Oscillating Scale ---
        float scale = 1f + Mathf.Sin(Time.time * scaleFrequency) * scaleAmplitude;
        transform.localScale = new Vector3(scale, scale, scale);

        // --- Random Translation ---
        timeSinceLastMove += Time.deltaTime;
        if (timeSinceLastMove >= moveInterval)
        {
            Vector3 direction = Random.Range(0, 2) == 0 ? Vector3.right : Vector3.up;
            float move = Random.Range(-moveDistance, moveDistance);
            transform.position += direction * move;

            timeSinceLastMove = 0f;
        }
    }
}
